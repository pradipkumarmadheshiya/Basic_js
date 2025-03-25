let nums=[1,3,2,5,7,5,44,64,63]

function filterArr(arr, callback){
    let filteredArr=[]
    for (let i=0; i<arr.length; i++){
        if (callback(arr[i])){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
function checkOddEven(num){
    if (num%2===0){
        return true
    }
}
console.log(filterArr(nums, checkOddEven))