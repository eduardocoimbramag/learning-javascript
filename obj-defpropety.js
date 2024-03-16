// CREATE AN CONSTRUCTOR FUNCTION AND USE DEFINEPROPETY TO TEST
function product(name, price, stock) {
    this.name = name;
    this.price = price
    this.price = stock

    Object.defineProperty(this, 'stock', {
        value: stock, // VALUE
        enumerable: true, // SHOW KEY
        writable: false, // CAN BE CHANGED
        configurable: true // CANNOT BE OVERLAPPED FOR OTHER SETTING
    })
}

const produtc1 = new product('Dress', 200, 3);
const produtc2 = new product('Hat', 50, 5);
const produtc3 = new product('Shirt', 75, 20);

produtc1.stock = 10;

console.log(produtc1);
console.log(produtc2);
console.log(produtc3);