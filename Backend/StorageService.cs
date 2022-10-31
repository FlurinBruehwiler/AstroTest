using Backend.Model;

namespace Backend;

public class StorageService
{
    public List<Game> Games { get; set; } = new();

    public (Game game, Player player)? GetGameAndPlayerFromConnectionId(string connectionId)
    {
        var game = Games.FirstOrDefault(x =>
            x.Players.FirstOrDefault(y => y.ConnectionId == connectionId) is not null);

        var player = game?.Players.FirstOrDefault(x => x.ConnectionId == connectionId);

        if (player is null || game is null)
            return null;

        return (game, player);
    }
}