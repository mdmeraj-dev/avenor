package dev.avenor.preview;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@FunctionalInterface
interface PriceRule<T> {
    BigDecimal apply(T item);
}

enum Status {
    ACTIVE,
    ARCHIVED
}

public final class App {
    private static final BigDecimal TAX_RATE = new BigDecimal("0.18");

    record Product(long id, String name, BigDecimal price, Status status) {}

    public static void main(String[] args) {
        List<Product> products = List.of(
            new Product(101L, "Mechanical Keyboard", new BigDecimal("89.99"), Status.ACTIVE),
            new Product(102L, "USB-C Hub", new BigDecimal("39.50"), Status.ARCHIVED)
        );

        Optional<Product> mostExpensive = products.stream()
            .filter(product -> product.status() == Status.ACTIVE)
            .max(Comparator.comparing(Product::price));

        mostExpensive.ifPresent(product ->
            System.out.printf("%s: %.2f%n", product.name(), withTax(product.price()))
        );
    }

    private static BigDecimal withTax(BigDecimal price) {
        return price.multiply(BigDecimal.ONE.add(TAX_RATE));
    }
}
