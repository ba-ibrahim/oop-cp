var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    ShoppingCartItem.prototype.getTotalPrice = function () {
        return this.product.price * this.quantity;
    };
    return ShoppingCartItem;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.getTotalItems = function () {
        return this.items.length;
    };
    ShoppingCart.prototype.addItem = function (product, quantity) {
        var item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    };
    ShoppingCart.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (item) { return item.product.id !== id; });
    };
    ShoppingCart.prototype.displayCartItems = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("ID: ".concat(item.product.id, ", Name: ").concat(item.product.name, ", Price: $").concat(item.product.price, ", Quantity: ").concat(item.quantity, ", Total: $").concat(item.getTotalPrice()));
        }
    };
    return ShoppingCart;
}());
// test
var cart = new ShoppingCart();
var product1 = new Product("p1", "Product 1", 10);
var product2 = new Product("p2", "Product 2", 20);
cart.addItem(product1, 2);
console.log(cart);
cart.addItem(product2, 1);
console.log(cart);
cart.displayCartItems();
console.log(cart);
cart.removeItem(product1.id);
console.log(cart);
console.log("Total items:", cart.getTotalItems());
