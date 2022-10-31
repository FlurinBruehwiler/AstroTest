using Microsoft.Extensions.Options;

namespace Backend;

public class GameEndChecker : BackgroundService
{
    private readonly StorageService _storageService;
    private readonly GameConfiguration _gameConfig;
    private readonly PeriodicTimer _timer = new(TimeSpan.FromMilliseconds(1));

    public GameEndChecker(StorageService storageService, IOptions<GameConfiguration> gameConfig)
    {
        _storageService = storageService;
        _gameConfig = gameConfig.Value;
    }
    
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (await _timer.WaitForNextTickAsync(stoppingToken) && !stoppingToken.IsCancellationRequested)
        {
            foreach (var game in _storageService.Games.Where(x => x.RoundStartTime.AddSeconds(_gameConfig.RoundTime) > DateTime.Now))
            {
                
            }
        }
    }
}