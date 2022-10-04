namespace Backend.Model;

public class Game
{
    public Game(Player player)
    {
        var rand = new Random();
        Id = rand.Next(0, 1000);
        Players = new List<Player>
        {
            player
        };
    }
    
    public List<Player> Players { get; set; }
    public int Id { get; set; }
}