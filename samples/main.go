package main

import (
	"context"
	"fmt"
	"time"
)

const taxRate = 0.18

type Priced interface {
	Price() float64
}

type Product struct {
	ID     int
	Name   string
	Amount float64
}

func (product Product) Price() float64 {
	return product.Amount * (1 + taxRate)
}

func loadProduct(ctx context.Context, id int) (Product, error) {
	select {
	case <-time.After(10 * time.Millisecond):
		return Product{ID: id, Name: "Mechanical Keyboard", Amount: 89.99}, nil
	case <-ctx.Done():
		return Product{}, fmt.Errorf("load product %d: %w", id, ctx.Err())
	}
}

func main() {
	product, err := loadProduct(context.Background(), 101)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s: %.2f\n", product.Name, product.Price())
}
