using Backend.Model;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Options;

namespace Backend;

public class RoundEndChecker : BackgroundService
{
    private readonly StorageService _storageService;
    private readonly IHubContext<GameHub> _hubcontext;
    private readonly GameConfiguration _gameConfig;
    private readonly PeriodicTimer _timer = new(TimeSpan.FromMilliseconds(1));

    public RoundEndChecker(StorageService storageService, IOptions<GameConfiguration> gameConfig, IHubContext<GameHub> hubcontext)
    {
        _storageService = storageService;
        _hubcontext = hubcontext;
        _gameConfig = gameConfig.Value;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (await _timer.WaitForNextTickAsync(stoppingToken) && !stoppingToken.IsCancellationRequested)
        {
            foreach (var game in _storageService.Games.Where(x => x.RoundStartTime.AddSeconds(_gameConfig.RoundTime) > DateTime.Now && x.GameState == GameState.Guessing))
            {
                game.GameState = GameState.Waiting;
                await _hubcontext.Clients.Group(game.Id.ToString()).SendAsync("Round Ended", cancellationToken: stoppingToken);
            }
        }
    }
}