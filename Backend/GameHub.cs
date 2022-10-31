using Backend.Model;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Options;

namespace Backend;

public class GameHub : Hub
{
    private readonly StorageService _storageService;
    private readonly GameConfiguration _gameConfig;

    public GameHub(StorageService storageService, IOptions<GameConfiguration> gameConfig)
    {
        _storageService = storageService;
        _gameConfig = gameConfig.Value;
    }

    public int CreateGame()
    {
        var game = new Game(Context.ConnectionId);
        _storageService.Games.Add(game);
        return game.Id;
    }
    
    public async Task JoinGame(int gameId, string playerName)
    {
        var game = _storageService.Games.FirstOrDefault(x => x.Id == gameId);

        await Groups.AddToGroupAsync(Context.ConnectionId, gameId.ToString());
        
        game?.Players.Add(new Player(playerName, Context.ConnectionId));
    }

    public void StartGame()
    {
        var (game, _) = _storageService.GetGameAndPlayerFromConnectionId(Context.ConnectionId) ?? default;

        if (game?.Players.FirstOrDefault(x => x.IsLeader)?.ConnectionId == Context.ConnectionId)
        {
            game.GameState = GameState.Guessing;
        }
    }

    public void SubmitGuess(int cheeseIdGuess)
    {
        var (game, player) = _storageService.GetGameAndPlayerFromConnectionId(Context.ConnectionId) ?? default;

        if (game is null || player is null)
            return;

        if (game.CurrentCheeseId != cheeseIdGuess)
            return;

        var roundEndTime = game.RoundStartTime.AddSeconds(_gameConfig.RoundTime);
        
        if (DateTime.Now > roundEndTime)
            return;

        var currentTime = Convert.ToInt32((DateTime.Now - game.RoundStartTime).TotalMilliseconds);
         var maxTime = _gameConfig.RoundTime * 1000;
        
        player.Score += Convert.ToInt32(currentTime / maxTime * _gameConfig.MaxPoints);
    }
}