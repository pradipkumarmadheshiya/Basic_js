// Base Constructor Function - Product
function Product(name, price, quantity){
    this.name=name
    this.price=price
    this.quantity=quantity
}

Product.prototype.getDetails=function(){
    return (`Name: ${this.name}, Price: ${this.price}, and Quantity: ${this.quantity}`)
}

// Electronics Constructor Function
function Electronics(name, price, quantity, brand,  model){
    Product.call(this, name, price, quantity)
    this.brand=brand
    this.model=model
}

// Inherit from Product
Electronics.prototype=Object.create(Product.prototype)
Electronics.prototype.constructor=Electronics

// Electronics-specific methods
Electronics.prototype.powerOn=function(){
    console.log(`${this.brand}, ${this.model} is now powered ON.`)
}

Electronics.prototype.powerOff=function(){
    console.log(`${this.brand}, ${this.model} is now powered OFF.`)
}

// Clothing Constructor Function
function Clothing(name, price, quantity, size, material){
    Product.call(this, name, price, quantity)
    this.size=size
    this.material=material
}

// Inherit from Product
Clothing.prototype=Object.create(Product.prototype)
Clothing.prototype.constructor=Clothing

Clothing.prototype.getClothingInfo=function(){
    return (`${this.name}, ${this.price}, ${this.material}`)
}

// Book Constructor Function
function Book(name, price, quantity, author, genre){
    Product.call(this, name, price, quantity)
    this.author=author
    this.genre=genre
}

// Inherit from Product
Book.prototype=Object.create(Product.prototype)
Book.prototype.constructor=Book

Book.prototype.getBookInfo=function(){
    return(`${this.name}, ${this.author}, ${this.genre}`)
}

// ------------------- Testing the System -------------------

const laptop=new Electronics("Laptop", 50000, 10, "Dell", "inspiron 15")
console.log(laptop.getDetails())
laptop.powerOn()
laptop.powerOff()

const shirt=new Clothing("Shirt", 1000, 5, "M", "Cotton")
console.log(shirt.getDetails())
console.log(shirt.getClothingInfo())

const book=new Book("Maths", 100, 2, "Pradip", "Self help")
console.log(book.getDetails())
console.log(book.getBookInfo())