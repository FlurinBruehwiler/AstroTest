namespace Backend.Model;

public class Game
{
    public Game(string connectionIdOfCreator)
    {
        var rand = new Random();
        Id = rand.Next(0, 1000);
        Players = new List<Player>();
        GameState = GameState.NotStarted;
    }
    
    public List<Player> Players { get; set; }
    public int Id { get; set; }
    public GameState GameState { get; set; }
    public int CompletedRounds { get; set; }
    public int CurrentCheeseId { get; set; }
    public DateTime RoundStartTime { get; set; }
}

public enum GameState
{
    NotStarted,
    Waiting,
    Guessing,
    Ended,
}