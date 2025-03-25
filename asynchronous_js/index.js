function calculate(num1,num2){
    function operation(num1,num2,callback){
        return callback(num1,num2)
    }
    function add(num1,num2){
        return num1+num2
    }
    function multiply(num1,num2){
        return num1*num2
    }
    console.log(operation(num1, num2, add))
    console.log(operation(num1,num2,multiply))
}
calculate(2,5)
calculate(3,6)
calculate(4,7)