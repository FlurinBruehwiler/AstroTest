using Backend.Model;
using Microsoft.AspNetCore.SignalR;

namespace Backend;

public class GameHub : Hub
{
    private readonly StorageService _storageService;

    public GameHub(StorageService storageService)
    {
        _storageService = storageService;
    }

    public void CreateGame(string playerName)
    {
        _storageService.Games.Add(new Game(new Player(playerName)));
    }
    
    public void JoinGame(int gameId, string playerName)
    {
        var game = _storageService.Games.FirstOrDefault(x => x.Id == gameId);

        if (game is null)
            return;
        
        game.Players.Add(new Player(playerName));
    }

    public async Task StartGame()
    {
        
    }

    public async Task SubmitGuess()
    {
        
    }
}