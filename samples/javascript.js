import { readFile } from "node:fs/promises";

const TAX_RATE = 0.18;
const orderPattern = /ORD-(?<year>\d{4})-(?<id>\d+)/gi;

export class OrderService {
  #cache = new Map();

  constructor(apiUrl, { timeout = 3_000 } = {}) {
    this.apiUrl = apiUrl;
    this.timeout = timeout;
  }

  async summarize(orderId) {
    const normalizedId = orderId.trim().toUpperCase();
    if (!orderPattern.test(normalizedId)) {
      throw new TypeError(`Invalid order: ${normalizedId}`);
    }

    const raw = await readFile("./orders.json", "utf8");
    const orders = JSON.parse(raw);
    const order = orders.find(({ id }) => id === normalizedId) ?? null;

    return order
      ? { ...order, total: order.subtotal * (1 + TAX_RATE) }
      : { id: normalizedId, status: "missing", total: 0 };
  }
}

export const formatCurrency = (value, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(value);
