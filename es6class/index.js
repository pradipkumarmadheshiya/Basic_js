// factory function
function animal(noOfLegs, vegetarian){
    let obj={}
    obj.noOfLegs=noOfLegs
    obj.vegetarian=vegetarian

    obj.eat=function(){
        return "eating"
    }
    obj.greet=function(){
        return `Hi I have ${noOfLegs} legs.`
    }

    return obj
}

let a=animal(4,true)
console.log(a.noOfLegs)
console.log(a.vegetarian)
console.log(a.eat())
console.log(a.greet())

//constructor function
function AnimalCF(noOfLegs, vegetarian){
    this.noOfLegs=noOfLegs
    this.vegetarian=vegetarian

    this.eat=function(){
        return "eating"
    }
    this.greet=function(){
        return `I have ${this.noOfLegs} legs.`
    }
}
let aCF=new AnimalCF(2,false)
console.log(aCF.noOfLegs)
console.log(aCF.vegetarian)
console.log(aCF.eat())
console.log(aCF.greet())

// es6 class
class AnimalES6{
    constructor(noOfLegs, vegetarian){
        this.noOfLegs=noOfLegs
        this.vegetarian=vegetarian
    }
    eat=function(){
        return "eating..."
    }
    greet=function(){
        return `I have ${this.noOfLegs} legsss.`
    }
}

let aes6=new AnimalCF(4, true)
console.log(aes6.noOfLegs)
console.log(aes6.vegetarian)
console.log(aes6.eat())
console.log(aes6.greet())