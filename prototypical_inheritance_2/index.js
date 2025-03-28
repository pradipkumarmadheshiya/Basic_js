// Qn 1
function Employee(name, position){
    this.name=name
    this.position=position
}

Employee.prototype.getDetails=function(){
    console.log(`Employee name: ${this.name}, position: ${this.position}`)
}

function Manager(name, teamSize){
    Employee.call(this, name, "Manager")
    this.teamSize=teamSize
}

Manager.prototype=Object.create(Employee.prototype)
Manager.prototype.constructor=Manager

Manager.prototype.getDetails=function(){
    console.log(`Name: ${this.name} Team size: ${this.teamSize}`)
}

function Developer(name, language){
    Employee.call(this, name, "Developer")
    this.language=language
}

Developer.prototype=Object.create(Employee.prototype)
Developer.prototype.constructor=Developer

Developer.prototype.getDetails=function(){
    console.log(`Name: ${this.name} language: ${this.language}`)
}


const man=new Manager("Deepak", 4)
man.getDetails()

const dev=new Developer("Kumar", "Python")
dev.getDetails()
console.log("")


// Qn 2
function User(name, role){
    this.name=name
    this.role=role
}

User.prototype.getRole=function(){
    return (`Name: ${this.name}, Role: ${this.role}`)
}

function Admin(name, qualification){
    User.call(this, name, "Admin")
    this.qualification=qualification
}

Admin.prototype=Object.create(User.prototype)
Admin.prototype.constructor=Admin

Admin.prototype.manageUsers=function(){
    return(`Name: ${this.name} qualification: ${this.qualification}. Admin is managing users.`)
}


const adm=new Admin("Pradip", "Developer")
console.log(adm.manageUsers())
console.log(adm.getRole())
console.log("")


// Qn 3
function Library(book){
    this.book=book
}

Library.prototype.getBooks=function(){
    return `This is library's book: ${this.book}.`
}

function PublicLibrary(book){
    Library.call(this, book)
    this.book=book
}

PublicLibrary.prototype=Object.create(Library.prototype)
PublicLibrary.prototype.constructor=PublicLibrary

PublicLibrary.prototype.lendBooks=function(){
    return `This book ${this.book} is lend from Public Library.`
}

function UniversityLibrary(book){
    Library.call(this, book)
    this.book=book
}

UniversityLibrary.prototype=Object.create(Library.prototype)
UniversityLibrary.prototype.constructor=UniversityLibrary

UniversityLibrary.prototype.addResearchPapers=function(){
    return `Research paper ${this.book} added.`
}

const lib=new Library("Python")
const pub=new PublicLibrary("Sangeet")
const un=new UniversityLibrary("Math")

console.log(lib.getBooks())
console.log(pub.lendBooks())
console.log(un.addResearchPapers())
console.log("")


// Qn 4
class Person{
    constructor(name){
        this.name=name
    }
    introduce(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

class Athlete extends Person{
    constructor(name, sport){
        super(name)
        this.sport=sport
    }
    introduce(){
        console.log(`${this.name} is playing ${this.sport}`)
    }
    playSport(){
        console.log(`Playing ${this.sport}...`)
    }
}

const athl=new Athlete("Pradip", "Cricket")

athl.introduce()
athl.playSport()
console.log("")

// Qn 5
function Appliance(){}

Appliance.prototype.turnOn=function(){
    console.log("The appliance is now on")
}

function WashingMachine(){}

WashingMachine.prototype=Object.create(Appliance.prototype)
WashingMachine.prototype.constructor=WashingMachine

WashingMachine.prototype.startWashingMachine=function(){
    console.log("The washing machine is now washing clothes")
}

const washingMachine=new WashingMachine()
washingMachine.turnOn()
washingMachine.startWashingMachine()