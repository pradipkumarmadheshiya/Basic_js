function getUserData(userId, callback){
    setTimeout(()=>{
        let obj={
            id:userId,
            name:"Pradip",
            email:"pradip@gmail.com"
        }
        callback(obj)
    },2000)
    
}
function displayUser(obj){
    console.log(obj)
    console.log(obj.name)
    console.log(obj.email)
}

console.log("Fetching user data...")
getUserData(1,displayUser)