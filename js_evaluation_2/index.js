const user_box=document.getElementById("user_box")
const sort_users=document.getElementById("sort_users")

const url="https://jsonplaceholder.typicode.com/posts/"

// Fetch Posts
async function fetchPosts(){
    const res=await fetch(url)
    const data=await res.json()
    localStorage.setItem("locStorage", JSON.stringify(data))
    displayPosts(localStorage)
}
fetchPosts()

const locStorage=JSON.parse(localStorage.getItem("locStorage"))  || []

// Display Posts
function displayPosts(data){
    console.log(data.locStorage)

    data.locStorage.forEach((item)=>{

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

// sort posts
function sortFun(){
    user_box.innerHTML=""
    const posts=locStorage
    posts.sort((a,b)=>a.title-b.title)
}
sort_users.addEventListener("click", sortFun)