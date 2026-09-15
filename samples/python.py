from __future__ import annotations

import asyncio
import re
from dataclasses import dataclass
from decimal import Decimal
from functools import wraps
from typing import Awaitable, Callable, TypeVar

T = TypeVar("T")
ORDER_PATTERN = re.compile(r"^ORD-(?P<year>\d{4})-(?P<id>\d+)$")


def traced(function: Callable[..., Awaitable[T]]) -> Callable[..., Awaitable[T]]:
    @wraps(function)
    async def wrapper(*args: object, **kwargs: object) -> T:
        print(f"Calling {function.__name__!r}")
        return await function(*args, **kwargs)

    return wrapper


@dataclass(frozen=True, slots=True)
class Order:
    order_id: str
    customer: str
    subtotal: Decimal
    paid: bool = False

    @property
    def total(self) -> Decimal:
        return (self.subtotal * Decimal("1.18")).quantize(Decimal("0.01"))


@traced
async def load_orders(order_ids: list[str]) -> list[Order]:
    await asyncio.sleep(0)
    valid_ids = [value for value in order_ids if ORDER_PATTERN.match(value)]
    if not valid_ids:
        raise ValueError("No valid order identifiers")
    return [Order(value, "NovaMart", Decimal("49.95")) for value in valid_ids]
