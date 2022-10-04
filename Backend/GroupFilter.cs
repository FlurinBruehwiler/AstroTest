using Microsoft.AspNetCore.SignalR;

namespace Backend;

public class GroupFilter : IHubFilter
{

    public async ValueTask<object?> InvokeMethodAsync(
        HubInvocationContext invocationContext, Func<HubInvocationContext, ValueTask<object?>> next)
    {
        return await next(invocationContext);
    }
    
    public Task OnConnectedAsync(HubLifetimeContext context, Func<HubLifetimeContext, Task> next)
    {
        var username = context.Context.GetHttpContext()?.Request.Query["username"].ToString();

        //ToDo
        
        return next(context);
    }

    public Task OnDisconnectedAsync(
        HubLifetimeContext context, Exception? exception, Func<HubLifetimeContext, Exception, Task> next)
    {
        return next(context, exception!);
    }
}