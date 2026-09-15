use std::collections::HashMap;

const TAX_RATE: f64 = 0.18;

trait Priced {
    fn price(&self) -> f64;
}

#[derive(Debug, Clone, PartialEq)]
struct Product<'a> {
    id: u64,
    name: &'a str,
    amount: f64,
}

impl Priced for Product<'_> {
    fn price(&self) -> f64 {
        self.amount * (1.0 + TAX_RATE)
    }
}

enum LookupError {
    Missing(u64),
    Invalid(String),
}

fn find_product<'a>(products: &'a HashMap<u64, Product<'a>>, id: u64) -> Result<&'a Product<'a>, LookupError> {
    products.get(&id).ok_or(LookupError::Missing(id))
}

fn main() {
    let mut products = HashMap::new();
    products.insert(101, Product { id: 101, name: "Mechanical Keyboard", amount: 89.99 });

    match find_product(&products, 101) {
        Ok(product) if product.price() > 50.0 => println!("{}: {:.2}", product.name, product.price()),
        Ok(product) => println!("Affordable: {}", product.name),
        Err(LookupError::Missing(id)) => eprintln!("Missing product {id}"),
        Err(LookupError::Invalid(message)) => eprintln!("Invalid: {message}"),
    }
}
