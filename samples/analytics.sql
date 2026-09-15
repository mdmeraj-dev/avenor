DECLARE @StartDate DATE = '2026-01-01';
DECLARE @MinimumRevenue DECIMAL(12, 2) = 500.00;

WITH CustomerRevenue AS (
    SELECT
        c.customer_id,
        c.first_name + ' ' + c.last_name AS customer_name,
        COUNT(DISTINCT o.order_id) AS order_count,
        SUM(oi.quantity * oi.unit_price) AS revenue,
        MAX(o.order_date) AS latest_order_date
    FROM dbo.customers AS c
    INNER JOIN dbo.orders AS o
        ON o.customer_id = c.customer_id
    INNER JOIN dbo.order_items AS oi
        ON oi.order_id = o.order_id
    WHERE o.order_date >= @StartDate
      AND o.status <> 'Cancelled'
    GROUP BY c.customer_id, c.first_name, c.last_name
),
RankedCustomers AS (
    SELECT
        *,
        DENSE_RANK() OVER (ORDER BY revenue DESC) AS revenue_rank,
        AVG(revenue) OVER () AS average_customer_revenue
    FROM CustomerRevenue
    WHERE revenue >= @MinimumRevenue
)
SELECT
    customer_id,
    customer_name,
    order_count,
    revenue,
    CASE
        WHEN revenue >= average_customer_revenue * 1.5 THEN 'High Value'
        WHEN revenue >= average_customer_revenue THEN 'Above Average'
        ELSE 'Developing'
    END AS customer_segment,
    revenue_rank
FROM RankedCustomers
WHERE latest_order_date IS NOT NULL
ORDER BY revenue_rank, customer_name;
