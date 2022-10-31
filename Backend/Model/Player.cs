public class Player
{
    public Player(string name, string connectionId)
    {
        ConnectionId = connectionId;
        Name = name;
    }
    
    public string Name { get; set; }
    public string ConnectionId { get; set; }
    public int Score { get; set; } = 0;
    public bool IsLeader { get; set; }
}