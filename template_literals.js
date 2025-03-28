// A. Template Literals
console.log("1. Basic String Interpolation")
function greet(name, age){
    return `Hello, my name is ${name}, and I am ${age} years old.`
}
console.log(greet("Pradip", 25))
console.log(greet("Deepak", 26))
console.log("")


console.log("2. Multi-line Strings")
function generateParagraph(){
    return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eos, voluptates explicabo odio earum blanditiis in reprehenderit totam mollitia cupiditate corrupti. Deleniti sunt repellat accusantium voluptas eum, odio sint libero.
    Ipsam omnis suscipit veniam excepturi sint laudantium aperiam beatae minima repudiandae quod consequuntur tempore, repellendus dolore error voluptates, laboriosam aspernatur ipsum, laborum accusamus perspiciatis eos itaque libero? Magni, molestias beatae?`
}
console.log(generateParagraph())
console.log("")


console.log("3. Expression Inside Template Literals")
function calculateSum(a, b){
    return `The sum of ${a} and ${b} is ${a+b}.`
}
console.log(calculateSum(3,5))
console.log(calculateSum(5,5))
console.log("")


console.log("4. Embedding a Function in Template Literals")
function formatCurrency(value){
    return `$${value.toFixed(2)}`
}
console.log(formatCurrency(500))
console.log("")


console.log("5. Nested Template Literals")
function formatMessage(name, status){
    return `Welcome back, ${name}! Your status is: ${status? "Active": "Inactive."}`
}
console.log(formatMessage("Pradip", true))
console.log(formatMessage("Deepak", false))
console.log("")


// B. Arrow Functions
console.log("1. Basic Arrow Function")
const add=(a,b)=>{
    return a+b
}
console.log(add(10,10))
console.log(add(5,5))
console.log("")


console.log("2. Single-Line Arrow Function")
const double=(n)=>2*n;
console.log(double(10))
console.log(double(5))
console.log("")


console.log("3. Arrow Function with Implicit Return")
const greeting=name=>`Hello, ${name}`
console.log(greeting("Pradip"))
console.log("")


console.log("4. Arrow Function in Callback")
function filterEvenNumbers(arr){
    const evenNum=arr.filter((num)=>num%2==0);
    return evenNum
}
console.log(filterEvenNumbers([1,2,3,4,5,6,7,8]))
console.log("")


console.log("5. Arrow Function and this Context")
function person(name){
    this.name=name
    this.prinName=()=>{
        console.log(this.name)
    }
}
const person2=new person("Pradip")
person2.prinName()
console.log("")


// C. Object Shorthand
console.log("1. Basic Object Shorthand")
function createPerson(name, age){
    return {
        name,
        age
    }
}
console.log(createPerson("Pradip", 26))
console.log("")


console.log("2. Method Shorthand")
function createPerson(name, age){
    return {
        name,
        age,
        introduce(){
            return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
        }
    }
}
const createPers=createPerson("Pradip", 26)
console.log(createPers.introduce())
console.log("")


console.log("3. Computed Property Names")
function createObject(key, value){
    return {[key]:value}
}
console.log(createObject("Name", "Pradip"))
console.log("")


console.log("4. Object Shorthand with Destructuring")
function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2}
}
console.log(mergeObjects({"name":"Pradip", "age":26}, {"nickName":"Deepak", "city":"Kushinagar"}))
console.log("")


console.log("5. Advanced Shorthand Usage")
function updatePerson(oldPerson, newName){
    return {...oldPerson, "name":newName}
}
console.log(updatePerson({"name":"Deepak", "age":26}, "Pradip"))
console.log("")


// D. Default Parameters in Function
console.log("1. Basic Default Parameters")
function greet(name="Pradip"){
    return `Hello, ${name}!`
}
console.log(greet())
console.log("")


console.log("2. Multiple Default Parameters")
function calculateTotal(price, tax = 0.05){
    return price+tax
}
console.log(calculateTotal(100, 0.05))
console.log(calculateTotal(1000))
console.log("")


console.log("3. Default Parameters with Undefined Values")
function describePerson(name, age = 25){
    return {
        "name":name,
        "age":age
    }
}
console.log(describePerson("Pradip", undefined))
console.log("")


console.log("4. Default Parameters in Complex Expression")
function calculateDiscount(price, discount = price * 0.1){
    return price+discount
}
console.log(calculateDiscount(100))
console.log(calculateDiscount(500, 1000*0.01))
console.log("")


console.log("5. Overriding Default Parameters")
function createUser(username, role = "user"){
    return {
        username,
        role
    }
}
console.log(createUser("Pradip"))
console.log(createUser("Deepak", "admin"))
console.log("")


// E. var vs let vs const
console.log("1. Scope Comparison")
function testVar(){
    let name="Pradip"
    if (name){
        var cnt=0
    }
    cnt+=1
    return cnt
}
console.log(testVar())  // var is only function scope that's why it is working.

function testLet(){
    let name="Pradip"
    let cnt;
    if (name){
        let cnt=1
    }
    console.log(cnt)
}
testLet()  // let is function and block scope that's why it is not working.
console.log("")


console.log("2. Constant Variables")
function createConstantArray(){
    const arr=[1,2,3,4,5]
    arr.push(6)
    console.log(arr)
    // if const variable is non premitive it is mutable but can not be reassigned and if it is primitive it cannot be mutate and reassigned.
}
createConstantArray()
console.log("")


console.log("3. Temporal Dead Zone")
function demonstrateTDZ(){
    console.log(age)
    var age=26

    // console.log(name)
    let name="Pradip"
}
demonstrateTDZ()


console.log("4. Re-declaration of Variables")
function testRedeclaration(){
    var name="Deepak"
    var name="Pradip"
    console.log(name)

    // let age=25
    // let age=26
    // const city="Padrauna"
    // const city="Kushinagar"
}
testRedeclaration()
console.log("")


console.log("5. Block Scope and Loop")
function loopWithVarAndLet(){
    for (var i=0; i<10; i++){
        i++
    }
    console.log(i) // var can be access out side the loop because it is only function scope 

    for (let j=0; j<10; j++){
        j++
    }
    // console.log(j)  j cannot be access out side the loop because it is block scope
}
loopWithVarAndLet()
console.log("")


// F. Rest and Spread
console.log("1. Rest Parameter")
function sum(...numbers){
    let sm=0
    numbers.forEach((num)=>{
        sm+=num
    })
    return sm
}
console.log(sum(10,15,47,16,2))
console.log("")


console.log("2. Spread with Arrays")
function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2]
}
console.log(mergeArrays([1,2,3,4], [5,6,7,8]))
console.log("")


console.log("3. Spread with Objects")
function updatePerson(person, updates){
    return {...person, name:updates}
}
console.log(updatePerson({name:"Pradip", age:26}, "Deepak"))
console.log("")


console.log("4. Rest with Destructuring")
function extractFirstAndRest(arr){
    let [first, ...rest]=arr
    return {first,rest}
}
console.log(extractFirstAndRest([1,2,3,4,5]))
console.log("")


console.log("5. Spread in Function Calls")
function calculateTotal(...args){
    return summ([...args])
}
function summ(numbers){
    let sm=0
    numbers.forEach((num)=>{
        sm+=num
    })
    return sm
}
console.log(calculateTotal(1,2,3,4,5))
console.log("")


// G. Destructuring Arrays and Objects
console.log("1. Array Destructuring")
function swap(a, b){
    [a,b]=[b,a]
    return {a,b}
}
console.log(swap(5, 7))
console.log("")


console.log("2. Object Destructuring")
function displayPerson(person){
    let {name,age}=person
    return {name,age}
}
console.log(displayPerson({name:"Pradip", age:26, city:"Kushinagar", occupation:"Developer"}))
console.log("")


console.log("3. Nested Destructuring")
function extractNestedData(obj){
    let {name:{first,last}, age}=obj
    return {first,last,age}
}
console.log(extractNestedData({ name: { first: "John", last: "Doe" }, age: 30 }))
console.log("")


console.log("4. Default Values in Destructuring")
function getCoordinates({ x = 0, y = 0 } = {}){
    return {x,y}
}
console.log(getCoordinates({x:10,y:10}))
console.log(getCoordinates({x:10}))
console.log(getCoordinates({y:10}))
console.log(getCoordinates())
console.log("")


console.log("5. Rest in Destructuring")
function getUserInfo(user){
    let {name,...rest}=user
    return {name,rest}
}
console.log(getUserInfo({name:"John", surname:"Doe", age:30}))
console.log("")


// H. Optional Chaining
console.log("1. Basic Optional Chaining")
function getUserCity(user){
    return user?.address?.city
}
console.log(getUserCity({address:"Bhopal"}))
console.log(getUserCity({address:{city:"bhopal"}}))
console.log("")


console.log("2. Optional Chaining with Arrays")
function getFirstFriend(user){
    return user?.friends?.[0]
}
console.log(getFirstFriend({name:"Pradip", friends:["Deepak", "kumar"]}))
console.log(getFirstFriend({name:"Pradip"}))
console.log("")


console.log("3. Optional Chaining with Function Calls")
function callOptionalMethod(obj){
    return obj?.fun?.greet()
}
console.log(callOptionalMethod({name:"Pradip", fun:{greet(){return "deepak"}}}))
console.log(callOptionalMethod({name:"Pradip"}))
console.log("")


console.log("4. Optional Chaining with Nested Objects")
function getNestedProperty(subject){
    return subject?.tech?.python?.level
}
console.log(getNestedProperty({tech:{python:{level:"Easy"}}}))
console.log(getNestedProperty({tech:"Python"}))
console.log("")


console.log("5. Optional Chaining with Default Values")
function getNestedPropertyD(subject){
    return subject?.tech?.python?.level || 'Not available'
}
console.log(getNestedPropertyD({tech:{python:{level:"Easy"}}}))
console.log(getNestedPropertyD({tech:"Python"}))