const user_box=document.getElementById("user_box")
const filter_users=document.getElementById("filter_users")
const sort_users=document.getElementById("sort_users")
const searchPostInp=document.getElementById("searchPostInp")
const searchBtn=document.getElementById("searchBtn")

const url="https://jsonplaceholder.typicode.com/posts/"

// Fetch Posts
let data=[]
async function fetchPosts(){
    const res=await fetch(url)
    data=await res.json()
    displayPosts(data)
}
fetchPosts()

// Display Posts
function displayPosts(data){

    data.forEach((item)=>{

        const card=document.createElement("div")
        card.className="card"

        const userId=document.createElement("p")
        userId.textContent=`User id: ${item.userId}`
        const ID=document.createElement("p")
        ID.textContent=`ID: ${item.id}`
        const title=document.createElement("p")
        title.textContent=`Title: ${item.title}`
        const body=document.createElement("p")
        body.textContent=`Body: ${item.body}`

        card.append(userId, ID, title, body)
        user_box.appendChild(card)
    })
}

// filter posts
function filterUsersFun(){
    user_box.innerHTML=""
    let filterPosts=[...data]
    const filter_users_value=filter_users.value

    if(filter_users_value===""){
        displayPosts(data)
    }
    else{
        const filteredUsers=filterPosts.filter((item)=>item.userId==filter_users_value)
        displayPosts(filteredUsers)
    }
}
filter_users.addEventListener("click", filterUsersFun)

// sort posts
function sortPostsFun(){
    let sortPost=[...data]
    const sort_users_value=sort_users.value
    user_box.innerHTML=""
    
    if (sort_users_value==="ascending"){
        sortPost.sort((a,b)=>a.title.localeCompare(b.title))
        displayPosts(sortPost)
    }
    else if(sort_users_value==="descending"){
        sortPost.sort((a,b)=>b.title.localeCompare(a.title))
        displayPosts(sortPost)
    }
    else{
        displayPosts(data)
    }
}
sort_users.addEventListener("click", sortPostsFun)

// search post
function searchPostFun(){
    user_box.innerHTML=""
    const searchPostInpValue=searchPostInp.value.trim().toLowerCase()
    
    const searchPost=data.filter((item)=>item.title.toLowerCase().includes(searchPostInpValue)  || item.body.toLowerCase().includes(searchPostInpValue))
    displayPosts(searchPost)
}
searchBtn.addEventListener("click", searchPostFun)