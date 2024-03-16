// CREATE AN CONSTRUCTOR FUNCTION AND USE DEFINEPROPETY TO TEST
function product(name, price, stock) {
    this.name = name;
    this.price = price
    this.price = stock

    Object.defineProperties(this, {
        name: {
            value: name,
            enumerable: true,
            writable: false,
            configurable: true
        }
        price: {
            value: price,
            enumerable: true,
            writable: false,
            configurable: true
        }
        stock: {
            value: stock,
            enumerable: true,
            writable: false,
            configurable: true
        }
    }
    }

const produtc1 = new product('Dress', 200, 3);
const produtc2 = new product('Hat', 50, 5);
const produtc3 = new product('Shirt', 75, 20);

produtc1.stock = 10;

console.log(produtc1);
console.log(produtc2);
console.log(produtc3);