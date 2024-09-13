// Truth and Falsy Value:-
console.log("1. Truth and Falsy Values")
function isTruthy(value){
    if (value){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
isTruthy(0)
isTruthy(1)
isTruthy("")
isTruthy("hello")
isTruthy([])
isTruthy(null)
console.log("")


console.log("2. Falsy Values Count")
arr=[{},1,"","hello",[],null]
function countFalsyValues(arr,cnt){
    for (let i=0; i<arr.length; i++){
        if (!arr[i]){
            cnt+=1
        }
    }
    console.log(cnt)
}
countFalsyValues(arr,0)
console.log("")


console.log("3. Filter Truthy Values")
arr=[{},1,"","hello",[],null]
function filterFalsyValues(arr){
    const truthyValues=arr.filter(el=>{
        if (el){
            return el
        }
    })
    console.log(truthyValues)
}
filterFalsyValues(arr)
console.log("")

// B. Comparison Operators
console.log("1. Basic Comparison")
function compareNumbers(a, b){
    if (a>b){
        console.log(`${a} is greater than ${b}`)
    }
    else if (b>a){
        console.log(`${b} is greater than ${a}`)
    }
    else{
        console.log(`${a} is equal to ${b}`)
    }
}
compareNumbers(99,99)
compareNumbers(78,89)
compareNumbers(77,67)
console.log("")


console.log("2. Comparison Table")
let nums=[14,45,47,62,58,69]
function compareNums(nums, value){
    nums.forEach((el)=>{
        console.log(`${el}<${value}`, el<value);
        console.log(`${el}<=${value}`, el<=value);
        console.log(`${el}==${value}`, el==value);
        console.log(`${el}>${value}`, el>value);
        console.log(`${el}>=${value}`, el>=value);
        console.log("")
    })
}
compareNums(nums, 47)
console.log("")


console.log("3. Comparison Challenge")
function compareThreeNumbers(a, b, c){
    if (a>b && a>c && b==c){
        console.log(`${a} is largest and ${b} and ${c} are equal`)
    }
    else if (b>a && b>c && a==c){
        console.log(`${b} is largest and ${a} and ${c} are equal`)
    }
    else if (c>a && c>b && a==b){
        console.log(`${c} is largest and ${a} and ${b} are equal`)
    }
    else if (a>b && a>c && b>c){
        console.log(`${a} is largest and ${b} is greater than ${c}`)
    }
    else if (a>b && a>c && c>b){
        console.log(`${a} is largest and ${c} is greater than ${b}`)
    }
    else if (b>a && b>c && a==c){
        console.log(`${b} is largest and ${a} and ${c} are equal`)
    }
    else if (b>a && b>c && a>c){
        console.log(`${b} is largest and ${a} is greater than ${c}`)
    }
    else if (b>a && b>c && c>a){
        console.log(`${b} is largest and ${c} is greater than ${a}`)
    }
    else if (c>a && c>b && a==b){
        console.log(`${c} is largest and ${a} and ${b} are equal`)
    }
    else if (c>a && c>b && a>b){
        console.log(`${c} is largest and ${a} is greater than ${b}`)
    }
    else if (c>a && c>b && b>a){
        console.log(`${c} is largest and ${b} is greater than ${a}`)
    }
}
compareThreeNumbers(15,16,16)
compareThreeNumbers(3,4,3)
compareThreeNumbers(5,5,8)
compareThreeNumbers(9,8,7)
compareThreeNumbers(10,8,9)
compareThreeNumbers(25,45,47)
compareThreeNumbers(36,58,47)
compareThreeNumbers(98,74,65)
console.log("")

// C. Mathematical Operators
console.log("1. Basic Arithmetic")
function performArithmetic(a, b){
    return {
        addition:(a+b),
        substraction:(a-b),
        multiplication:(a*b),
        division:(a/b)
    }
}
console.log(performArithmetic(50, 5))
console.log("")


console.log("2. Calculate Average")
function calculateAverage(nums){
    let sm=0
    nums.forEach(num=>{
        sm+=num
    })
    console.log(sm/nums.length)
}
let numbs=[4,5,6,7,8,9]
calculateAverage(numbs)
console.log("")


console.log("3. Comparison Challenge")
function calculateExpression(a, b, c){
    console.log((a + b) * c / (b - a))
}
calculateExpression(5,3,8)
calculateExpression(4,8,12)
console.log("")


// D. Relational Operators
console.log("1. Basic Relational Check")
function checkRelational(a, b){
    if (a<b){
        console.log(`${a} is less than ${b}`)
    }
    else if (a>b){
        console.log(`${a} is greater than ${b}`)
    }
    else{
        console.log(`${a} is equal to ${b}`)
    }
}
checkRelational(54,48)
checkRelational(55,55)
checkRelational(25,52)
console.log("")


console.log("2. Range Check")
function isInRange(value, min, max){
    if (value>=min && value<=max){
        console.log(`${value} is between ${min} and ${max}`)
    }
    else{
        console.log(`${value} is not between ${min} and ${max}`)
    }
}
isInRange(15, 10, 20)
isInRange(11, 11,14)
isInRange(27,13,17)
console.log("")


console.log("3. Complex Relational Logic")
function evaluateCondition(a, b, c){
    if (a>b && a>c){
        console.log(`${a} is largest.`)
    }
    else if (b>a && b<c){
        console.log(`${b} is between ${a} and ${c}`)
    }
    else if (c<a && c<b){
        console.log(`${c} is less than ${a} and ${b}`)
    }
    else{
        console.log("No condition met.")
    }
}
evaluateCondition(55,45,43)
evaluateCondition(47,49,50)
evaluateCondition(65,70,35)
evaluateCondition(56,56,56)
console.log("")


// E. Logical Operators
console.log("1. Basic Logical Operations")
function logicalOperations(a, b){
    console.log(`${a} && ${b}`, a && b)
    console.log(`${a} || ${b}`, a || b)
    console.log(`!${a} && !${b}`, !a && !b)
    console.log(`!${a} || !${b}`, !a || !b)
}
logicalOperations(true,true)
logicalOperations(true,false)
logicalOperations(false)
console.log("")


console.log("2. Eligibility Check")
function isEligible(age, hasPermission){
    if (age>=18 && hasPermission){
        console.log("Eligible and having permission")
    }
    else if (age>=18 && !hasPermission){
        console.log("Eligible but not having permission")
    }
    else if (age<18 && !hasPermission){
        console.log("Not eligible and not having permission")
    }
    else{
        console.log("Not Eligible")
    }
}
isEligible(24,true)
isEligible(25,false)
isEligible(17,false)
isEligible(16, true)
console.log("")


console.log("3. Complex Logic")
function evaluateConditions(a, b, c){
    if (a>0 && b<0){
        console.log(`${a} is positive and ${b} is negative`)
    }
    else if (b===0 || c===NaN){
        console.log(`${b} is zero or ${c} is not a number`)
    }
    else if (a!==b || c>10){
        console.log(`${a} is not equal to ${b} or ${c} is greater than 10`)
    }
}
evaluateConditions(14,-10,23)
evaluateConditions(14,0,2)
evaluateConditions(14,14,11)
console.log("")


// F. Conditional Statements
console.log("1. Simple If Statement")
function checkEvenOdd(number){
    if (number%2==0){
        console.log(`${number} is even`)
    }
    else{
        console.log(`${number} is odd`)
    }
}
checkEvenOdd(15)
checkEvenOdd(12)
console.log("")


console.log("2. Grade Evaluation")
function evaluateGrade(score){
    if (score>=90){
        console.log(`Score ${score}: Grade A`)
    }
    else if (score>=80 && score<90){
        console.log(`Score ${score}: Grade B`)
    }
    else if (score>=70 && score<80){
        console.log(`Score ${score}: Grade C`)
    }
    else if (score>40 && score<70){
        console.log(`Score ${score}: Grade D`)
    }
    else{
        console.log("Fail")
    }
}
evaluateGrade(95)
evaluateGrade(85)
evaluateGrade(75)
evaluateGrade(65)
evaluateGrade(35)
console.log("")


console.log("3. Discount Calculation")
function calculateDiscount(price, isMember){
    if (isMember){
        price=price-price*(10/100)
        console.log("Discount available: Price after discount is",price)
    }
    else{
        console.log("No discount available")
    }
}
calculateDiscount(525, true)
calculateDiscount(100, true)
calculateDiscount(525, false)
console.log("")


// G. Prefix & Postfix Operators
console.log("1. Prefix vs. Postfix")
function prefixPostfixDemo(a){
    console.log("Prefix: ")
    console.log("Value", a)
    console.log("Value while using prefix", ++a)
    console.log("Value after prefix", a)

    console.log("Postfix: ")
    console.log("Value", a)
    console.log("Value while using postfix", a++)
    console.log("Value after using postfix", a)
}
prefixPostfixDemo(7)
console.log("")


console.log("2. Prefix & Postfix Calculation")
function calculatePrefixPostfix(a, b){
    let aPrefix=++a
    let bPostfix=b++

    return {
        "a while using prefix":aPrefix,
        "b while using postfix":bPostfix,
        "a after prefix":a,
        "b after postfix":b
    }
}
console.log(calculatePrefixPostfix(5, 10))
console.log("")


console.log("3. Complex Prefix/Postfix Operations")
function complexOperation(a, b){
    let a1=++a
    let b1=b++
    console.log("a1:",a1, "b1:",b1 )

    let a2=++a
    let b2=b++
    console.log("a2:",a2, "b2:",b2 )

    let a3=++a
    let b3=b++
    console.log("a3:",a3, "b3:",b3 )

    console.log("Final result: ", a1+a2+a3+b1+b2+b3)
}
complexOperation(2, 10)
console.log("")

                                            //   Day 2
// A. Type Conversion (Explicit)
console.log("1. Basic Type Conversion")
function convertToNumber(value){
    console.log(Number(value))
}
convertToNumber("10")
convertToNumber("20.5")
convertToNumber(true)
convertToNumber(false)
console.log("")


console.log("2. String Conversion")
function convertToString(value){
    newValue=String(value)
    console.log(newValue,typeof(newValue))
}
convertToString(10)
convertToString(20.5)
convertToString(true)
convertToString([10,"2.5"])
convertToString({"age":25})
console.log("")


console.log("3. Complex Type Conversion")
function convertAndCompare(a, b){
    a=Number(a)
    b=Number(b)
    console.log(a===b)
}
convertAndCompare(10,"10")
convertAndCompare(false,0)
convertAndCompare(20.5,"20.5")
convertAndCompare(true,"1")
convertAndCompare(10, "hello")
convertAndCompare(false,"false")
convertAndCompare("hello", "hello")
console.log("")


// B. Type Coercion (Implicit)
console.log("1. Basic Coercion Check")
function checkCoercion(a, b){
    console.log(`${a}==${b}`, a==b)
    console.log(`${a}===${b}`, a===b)
}
checkCoercion(10,"10")
checkCoercion(false,0)
checkCoercion(null, undefined)
console.log("")


console.log("2. Coercion in Arithmetic")
function coerceInArithmetic(a, b){
    console.log(`${a}+${b}: `, typeof(a), typeof(b), a+b)
    console.log(`${a}-${b}: `, typeof(a), typeof(b), a-b)
    console.log(`${a}*${b}: `, typeof(a), typeof(b), a*b)
    console.log(`${a}/${b}: `, typeof(a), typeof(b), a/b)
}
coerceInArithmetic(10, "10")
coerceInArithmetic("hello", 10)
coerceInArithmetic(true, 10)
coerceInArithmetic(true, "10")
coerceInArithmetic(10,10.5)
coerceInArithmetic(10.5,"hello")
console.log("")


console.log("3. Implicit Coercion in Conditionals")
function coerceInConditionals(value){
    if (value){
        console.log(value, typeof(value), "truthy")
    }
    else{
        console.log(value, typeof(value), "falsy")
    }
}
coerceInConditionals(true)
coerceInConditionals(false)
coerceInConditionals(0)
coerceInConditionals(1)
coerceInConditionals("0")
coerceInConditionals("")
coerceInConditionals(null)
coerceInConditionals(undefined)
coerceInConditionals([])
coerceInConditionals({})
coerceInConditionals([1,2])
console.log("")


// C. Type Identification in JavaScript
console.log("1. Identify Type Using")
function identifyType(value){
    console.log(value, typeof(value))
}
identifyType(10)
identifyType("10")
identifyType(true)
identifyType(NaN)
identifyType(undefined)
identifyType(null)
identifyType(10.5)
identifyType({"age":10})
identifyType([1,2])
identifyType(1000002434n)
console.log("")


console.log("2. Check Object vs Array")
function isArrayOrObject(value){
    if (Array.isArray(value)){
        console.log(value, "array")
    }
    console.log(value, typeof(value))
    if (!Array.isArray(value) && value!==null){
        console.log(`${value} is object`)
    }
}
isArrayOrObject([1,2,3])
isArrayOrObject({"age":20})
isArrayOrObject(null)
console.log("")


console.log("3. Complex Type Identification")
function identifyComplexType(values){
    values.forEach(value=>{
        if (Array.isArray(value)){
            console.log(value, "is a array")
        }
        else if (value instanceof Function){
            console.log(value, "is a function")
        }
        else if (value===null){
            console.log(value, "is a null")
        }
        else if (typeof(value)===String){
            console.log(value, "is a string")
        }
        else if (typeof(value)===Number){
            console.log(value, "is a number")
        }
        else if (typeof(value)===Boolean){
            console.log(value, "is a boolean")
        }
        else{
            console.log(value, typeof(value))
        }
    })
    
}
identifyComplexType([true, 10, "hello", [1,2,3], {"age":10},null, undefined, function(){}])
console.log("")


// D. Statements vs Expressions
// console.log("1. Identify Statement vs Expression")
// Statement:-
// It performs an action like loop or condition checking.
// e.g. if (10===10){
//  console.log("10 is equal to 10")
//}
// Expression:-
// it produces a value like arithmatical operations or function return value
// e.g. let sum=5+5
//     console.log(sum)   log=10


console.log("2. Expression in Function")
function expressionInFunction(a, b){
    return a+b
}

function checkSum(a,b){
    if (expressionInFunction(a, b)>10){
        console.log("expressionInFunction is greater than 10")
    }
    else{
        console.log("expressionInFunction is less than equal to 10")
    }
}

checkSum(5,5)
checkSum(5,7)
console.log("")


console.log("3. Complex Expression in Conditional")
function complexExpression(a, b, c){
    let sum=a+b
    let product=a*b

    if (sum<product){
        console.log(`sum ${sum} of ${a} and ${b} is less than product ${product}`)
    }
    else{
        console.log(`sum ${sum} of ${a} and ${b} is greater than or equalto product ${product}`)
    }
}
complexExpression(5,5,5)
complexExpression(6,6,1)
console.log("")


// E. For Loop
console.log("1. Basic For Loop")
for (let i=1; i<=10; i++){
    console.log(i)
}
console.log("")


console.log("2. For Loop with Array")
function printArrayElements(arr){
    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
printArrayElements(["Pradip", "Madheshiya", "Kumar", "Deepak"])
console.log("")


console.log("3. Nested For Loop")
function createMultiplicationTable(n){
    for (let i=1; i<=n; i++){
        for (let j=1; j<=10; j++){
            console.log(i)
        }
        console.log("")
    }
}
createMultiplicationTable(10)
console.log("")


// F. Switch Case
console.log("1. Basic Switch Case")
function getDayOfWeek(dayNumber){
    let dayName
    switch(dayNumber){
        case 1:
            dayName="Monday"
            break
        case 2:
            dayName="Tuesday"
            break
        case 3:
            dayName="Wednesday"
            break
        case 4:
            dayName="Thursday"
            break
        case 5:
            dayName="Friday"
            break
        case 6:
            dayName="Saturday"
            break
        case 7:
            dayName="Sunday"
            break
        default:
            dayName="Out of range"
    }
    return dayName
}
console.log(getDayOfWeek(1))
console.log(getDayOfWeek(2))
console.log(getDayOfWeek(3))
console.log(getDayOfWeek(4))
console.log(getDayOfWeek(5))
console.log(getDayOfWeek(6))
console.log(getDayOfWeek(7))
console.log(getDayOfWeek(8))
console.log("")


console.log("2. Switch with Fall-through")
function getDayOfWeekend(dayNumber){
    let dayName;
    switch(dayNumber){
        case 1:
            dayName="Monday"
            break
        case 2:
            dayName="Tuesday"
            break
        case 3:
            dayName="Wednesday"
            break
        case 4:
            dayName="Thursday"
            break
        case 5:
            dayName="Friday"
            break
        case 6:            
        case 7:
            dayName="Weekend"
            break
        default:
            dayName="Out of range"
    }
    return dayName
}
console.log(getDayOfWeekend(1))
console.log(getDayOfWeekend(2))
console.log(getDayOfWeekend(3))
console.log(getDayOfWeekend(4))
console.log(getDayOfWeekend(5))
console.log(getDayOfWeekend(6))
console.log(getDayOfWeekend(7))
console.log(getDayOfWeekend(8))
console.log("")


console.log("3. Switch Case with Multiple Conditions")
function classifyAnimal(animal){
    let animals;
    switch(animal){
        case "Lion":
        case "Tiger":
        case "Leopard":
        case "Elephant":
        case "Monkey":
            animals="mammal"
            break
        case "Parrot":
        case "peagon":
        case "crow":
        case "sparrow":
            animals="reptile"
            break
        default:
            animals="May be not animal or bird"
    }
    return animals
}
console.log(classifyAnimal("Lion"))
console.log(classifyAnimal("Elephant"))
console.log(classifyAnimal("Monkey"))
console.log(classifyAnimal("Parrot"))
console.log(classifyAnimal("sparrow"))
console.log(classifyAnimal("cat"))
console.log("")


// G. While Loop
console.log("1. Basic While Loop")
let i=1
while (i<=5){
    console.log(i)
    i++
}
console.log("")


console.log("2. While Loop with Condition")
function countDownFrom(n){
    while (n>=0){
        console.log(n)
        n--
    }
}
countDownFrom(10)
console.log("")


console.log("3. While Loop with Break Condition")
function findFirstEven(numbers){
    let i=0
    while (i<numbers.length){
        if (numbers[i]%2==0){
            console.log(numbers[i])
            break
        }
        i++
    }
}
findFirstEven([1, 35, 3, 5, 6])
console.log("")


// H. Do-While Loop
console.log("1. Basic Do-While Loop")
let k=1
do{
    console.log(k)
    k++
}while(k<=10)
// A big difference between while loop and do while is runs at least one time if condition is not matching
console.log("")


console.log("2. Input Validation Using Do-While")
function validatePassword(){
    let password="Cap02_013"
    do{
        if (password==="Cap02_013")
            console.log("Password matched")
        else{
            console.log("Password wrong, Enter your password again")
        }
    }while (password!="Cap02_013")
}
validatePassword()
console.log("")


console.log("3. Random Number Guessing Game")
function guessNumber(){
    let number=10;
    do{
        if (number===10){
            console.log("Correct guess")
        }
        else{
            console.log("Wrong guess")
        }
    }while (number!==10)
}
guessNumber()