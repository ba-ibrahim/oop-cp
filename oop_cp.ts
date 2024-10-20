class Product {
    constructor(public id: string, public name: string, public price: number) {}
}

class ShoppingCartItem {
    constructor(public product: Product, public quantity: number) {}
    getTotalPrice(): number {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    private items: Array<ShoppingCartItem> = [];
    getTotalItems(): number {
        return this.items.length;
    }
    addItem(product: Product, quantity: number): void {
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }
    removeItem(id: string): void {
        this.items = this.items.filter(item => item.product.id !== id);
    }
    displayCartItems(): void {
        
        for (let item of this.items) {
            console.log(`ID: ${item.product.id}, Name: ${item.product.name}, Price: $${item.product.price}, Quantity: ${item.quantity}, Total: $${item.getTotalPrice()}`);
        }
    }


}


// test

const cart = new ShoppingCart();

const product1 = new Product("p1", "Product 1", 10);
const product2 = new Product("p2", "Product 2", 20);

cart.addItem(product1, 2);
console.log(cart);


cart.addItem(product2, 1);
console.log(cart);

cart.displayCartItems();
console.log(cart);

cart.removeItem(product1.id);
console.log(cart);

console.log("Total items:", cart.getTotalItems());