import React, { useMemo } from "react";

type Identifier = string | number;

interface Product<TMetadata extends object = Record<string, unknown>> {
  readonly id: Identifier;
  name: string;
  price: number;
  status: "active" | "archived";
  metadata: TMetadata;
}

enum SortDirection {
  Ascending = "asc",
  Descending = "desc",
}

function sortProducts<T extends Product>(
  products: readonly T[],
  direction: SortDirection = SortDirection.Ascending,
): T[] {
  const multiplier = direction === SortDirection.Ascending ? 1 : -1;
  return [...products].sort((a, b) => (a.price - b.price) * multiplier);
}

export const ProductList = ({ products }: { products: Product[] }) => {
  const visible = useMemo(
    () => sortProducts(products).filter((product) => product.status === "active"),
    [products],
  );

  return (
    <section aria-label="Available products">
      <h2>Products</h2>
      {visible.map(({ id, name, price }) => (
        <article className="product-card" data-product-id={id} key={id}>
          <strong>{name}</strong>
          <span>${price.toFixed(2)}</span>
        </article>
      ))}
    </section>
  );
};
