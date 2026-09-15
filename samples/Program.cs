using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Avenor.Preview;

[AttributeUsage(AttributeTargets.Class)]
public sealed class AuditedAttribute : Attribute { }

public interface IEntity<TKey>
{
    TKey Id { get; }
}

public enum OrderStatus { Pending, Paid, Cancelled }

public sealed record Order(Guid Id, decimal Total, OrderStatus Status) : IEntity<Guid>;

[Audited]
public sealed class OrderService
{
    private const decimal TaxRate = 0.18m;

    public async Task<IReadOnlyList<Order>> GetPaidOrdersAsync(IEnumerable<Order> orders)
    {
        await Task.Delay(10).ConfigureAwait(false);
        return orders
            .Where(order => order.Status is OrderStatus.Paid && order.Total > 0m)
            .OrderByDescending(order => order.Total * (1 + TaxRate))
            .ToArray();
    }
}
