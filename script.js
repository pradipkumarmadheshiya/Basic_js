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