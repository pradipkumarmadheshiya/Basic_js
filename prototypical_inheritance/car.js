// Create a constructor function for Car that takes the following parameters:
function Car(make, model, year, isAvailable=true){
    this.make=make
    this.model=model
    this.year=year
    this.isAvailable=isAvailable
}

// Create a constructor function for Customer that takes the following parameters:
function Customer(name){
    this.name=name
    this.rentedCars=[]
}

// Add a method to the Customer prototype to allow customers to rent a car. This method should:
Customer.prototype.rentCar=function(car){
    if (car.isAvailable===true){
        car.isAvailable=false
        this.rentedCars.push(car)
    }
    else{
        console.log(`${car.make} ${car.model}this car is already rented.`)
    }
}

// Create a constructor function for PremiumCustomer that inherits from Customer and takes the same parameters. Additionally, PremiumCustomer should have:
function PremiumCustomer(name, disCountRate){
    Customer.call(this, name)
    this.disCountRate=disCountRate
}
PremiumCustomer.prototype=Object.create(Customer.prototype)
PremiumCustomer.prototype.constructor=PremiumCustomer

// Create a function to calculate rental prices that considers:
function calculateRentalPrice(customer, carType, days){
    const baseRent=50
    let rate=baseRent

    if (carType==="suv"){
        rate=80
    }
    else if(carType==="sedan"){
        rate=60
    }

    let rentalPrice=days*rate

    if (customer instanceof PremiumCustomer){
        rentalPrice=rentalPrice-(rentalPrice*customer.disCountRate)
    }

    return rentalPrice
}

// Handle car returns by adding a method to the Customer prototype to return a car. This method should
Customer.prototype.returnsCar=function(car){
    console.log(`${this.name} is returning car ${car.make} ${car.model}`)
    car.isAvailable=true
    this.rentedCars=this.rentedCars.filter((item)=>item!==car)

    // Simulate processing delay
    setTimeout(()=>{
        console.log(`${car.make} ${car.model} is now available.`)
    }, 2000)
}

// Extend the system to handle maintenance:
function Maintenance(car, delay){
    console.log(`Maintenance started for ${car.make} ${car.model}`)

    setTimeout(()=>{
        car.isAvailable=true
        console.log(`Maintenance completed for ${car.make} ${car.model}`)
    },delay)
}

// Demonstrate the functionality
const car1=new Car("Hundai", "Verna", 2021)
const car2=new Car("Honda", "Civic", 2020)
const car3=new Car("BMW", "X5", 2022);
const car4=new Car("Ford", "Escape", 2021);

const customer1=new Customer("Deepak")
const customer2=new Customer("Pradip")

const premiumCustomer1=new PremiumCustomer("John", 0.2)
const premiumCustomer2=new PremiumCustomer("Jane", 0.1)

customer1.rentCar(car1)
customer2.rentCar(car2)
premiumCustomer1.rentCar(car3)
premiumCustomer1.rentCar(car4)

customer1.returnsCar(car2)

console.log(calculateRentalPrice(customer1, 'suv', 3))

console.log(calculateRentalPrice(premiumCustomer1, 'suv', 3))

const maintenance=new Maintenance(car1, 4000)

function showCustomerDetail(extraMSG){
    console.log(`Customer ${this.name} has rented the cars ${this.rentedCars.length}.`, extraMSG)
}

showCustomerDetail.call(customer1, "Enjoy your car")
showCustomerDetail.apply(premiumCustomer1, ["Enjoy your premium benefits"])
const storeShowCustomerDetail=showCustomerDetail.bind(customer2, "Have a nice day")
storeShowCustomerDetail()