using Backend;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
builder.Services.AddSingleton<StorageService>();

var app = builder.Build();

app.MapHub<GameHub>("/chatHub");

app.Run();
