// Qn 1
function Vehicle(make, model){
    this.make=make
    this.model=model
}

 Vehicle.prototype.getDetails=function(){
    return `${this.make} and ${this.model}`
 }

 function ElectricVehicle(make, model, capacity){
    Vehicle.call(this, make, model, capacity)
    this.capacity=capacity
 }

 ElectricVehicle.prototype=Object.create(Vehicle.prototype)
 ElectricVehicle.prototype.constructor=ElectricVehicle

 ElectricVehicle.prototype.getDetails=function(){
    return `${this.make}, ${this.model} and ${this.capacity}`
 }

 ElectricVehicle.compareBattery=function(ev1, ev2){
    if(ev1.capacity>ev2.capacity){
        return `${ev1.make} is better than ${ev2.make}`
    }
    else if(ev2.capacity>ev2.capacity){
        return `${ev2.make} is better than ${ev1.make}`
    }
    else{
        return `Both batteries are having same capacity.`
    }
 }

 const ev1=new ElectricVehicle("Tesla", "Tesla T", 90)
 const ev2=new ElectricVehicle("Toyota", "Toyo S", 50)

 console.log(ev1.getDetails())
 console.log(ev2.getDetails())

 console.log(ElectricVehicle.compareBattery(ev1, ev2))
 console.log("")

// Qn 2
function BankAccount(accountNumber, balance){
    this.accountNumber=accountNumber
    this.balance=balance
}

BankAccount.prototype.deposit=function(amount){
    this.balance=this.balance+amount
    return `You have deposited ${amount} and total balance is ${this.balance}`
}

function SavingAccount(accountNumber, balance){
    BankAccount.call(this, accountNumber, balance)
}

SavingAccount.prototype=Object.create(BankAccount.prototype)
SavingAccount.prototype.constructor=SavingAccount

SavingAccount.prototype.withdraw=function(amount){
    if(this.balance>=amount){
        this.balance=this.balance-amount
        return `You have successfully withdrawed ${amount}. Now you balance is ${this.balance}`
    }
    else{
        return `You have insufficient balance.`
    }
}

const savAcc=new SavingAccount(123456, 150)
console.log(savAcc.withdraw(100))
console.log(savAcc.deposit(25))
console.log(savAcc.withdraw(10))
console.log("")

// Qn 3
function Employee(name){
    this.name=name
}

Employee.prototype.calculateSalary=function(){
    return 0
}

function FullTimeEmployee(name, monthlySalary){
    Employee.call(this, name)
    this.monthlySalary=monthlySalary
    this.bonous=0
}

FullTimeEmployee.prototype=Object.create(Employee.prototype)
FullTimeEmployee.prototype.constructor=FullTimeEmployee

FullTimeEmployee.prototype.calculateSalary=function(){
    return this.monthlySalary+this.bonous
}

function PartTimeEmployee(name, hourlyRate, hourWorked){
    Employee.call(this, name)
    this.hourlyRate=hourlyRate
    this.hourWorked=hourWorked
}

PartTimeEmployee.prototype=Object.create(Employee.prototype)
PartTimeEmployee.prototype.constructor=PartTimeEmployee

PartTimeEmployee.prototype.calculateSalary=function(){
    return this.hourlyRate*this.hourWorked
}

const fte=new FullTimeEmployee("Pradip", 6000)
fte.bonous=500
console.log(fte.calculateSalary())

const pte=new PartTimeEmployee("kumar", 1000, 3)
console.log(pte.calculateSalary())
console.log("")

// Qn 4
function Shape(){
    
}

Shape.prototype.calculateArea=function(){
    return 0
}

Shape.compareArea=function(shape1, shape2){
    const ar1=shape1.calculateArea()
    const ar2=shape2.calculateArea()

    if (ar1>ar2){
        return `${shape1.constructor.name} has larger area than ${shape2.constructor.name}`
    }
    else if(ar1<ar2)
        return `${shape2.constructor.name} has larger area than ${shape1.constructor.name}`
    else{
        return `Both shapes are having same area`
    }
}

function Rectangle(height, width){
    Shape.call(this)
    this.height=height
    this.width=width
}

Rectangle.prototype=Object.create(Shape.prototype)
Rectangle.prototype.constructor=Rectangle

Rectangle.prototype.calculateArea=function(){
    return this.height*this.width
}

function Parallelgram(height, width){
    Rectangle.call(this, height, width)
}

Parallelgram.prototype=Object.create(Rectangle.prototype)
Parallelgram.prototype.constructor=Parallelgram

Parallelgram.prototype.calculateArea=function(){
    return this.height*this.width
}

const rec=new Rectangle(5, 2)
console.log(rec.calculateArea())

const parall=new Parallelgram(7, 3)
console.log(parall.calculateArea())

// const shape=new Shape()
console.log(Shape.compareArea(rec, parall))