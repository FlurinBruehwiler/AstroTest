public class Player
{
    public Player(string name)
    {
        var rand = new Random();
        Id = rand.Next();
        Name = name;
    }
    
    public string Name { get; set; }
    public int Id { get; set; }
    public int Score { get; set; } = 0;
}