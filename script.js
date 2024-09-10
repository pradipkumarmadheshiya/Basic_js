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


console.log("2. ")