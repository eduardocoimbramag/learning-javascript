function product(name, price) {
    this.name = name
    this.price = price
}

product.prototype.increasePrice = function (value) {
    this.price += value
}

product.prototype.decreasePrice = function (value) {
    this.price -= value
}

function shirt(name, price, color) {
    product.call(this, name, price)
    this.color = color
}

shirt.prototype = Object.create(product.prototype)
shirt.prototype.constructor = shirt

const shirt1 = new shirt('Polo Lacoste', 250, 'White')
const product1 = new product('Pencil', 5)
console.log(shirt1)
console.log(product1)
shirt1.increasePrice(50)
console.log(shirt1)