// Create a constructor function Person with properties:
function Person(name, age){
    this.name=name
    this.age=age
}

// Add a method introduce to Person.prototype that logs:
Person.prototype.introduce=function (){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
}

// Create a constructor function Employee that inherits from Person and adds:
function Employee(name, age, jobTitle){
    Person.call(this, name, age)
    this.jobTitle=jobTitle
}

// Ensure that Employee.prototype inherits from Person.prototype
Employee.prototype=Object.create(Person.prototype)
Employee.prototype.constructor=Employee

// Add a method work to Employee.prototype that logs:
Employee.prototype.work=function(){
    console.log(`${this.name} is working as a ${this.jobTitle}.`)
}


const person1=new Person("Pradip", 25)
person1.introduce()

const employee1=new Employee("Deepak", 26, "Web developer")
employee1.introduce()
employee1.work()