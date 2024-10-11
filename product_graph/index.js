const productName=document.getElementById("productName")
const productPrice=document.getElementById("productPrice")
const productRating=document.getElementById("productRating")
const addBtn=document.getElementById("addBtn")
const productTableBody=document.getElementById("productTableBody")
const selectVal=document.getElementById("selectVal")
const product_box=document.getElementById("product_box")

let productStorage=JSON.parse(localStorage.getItem("productStorage")) || []
if (productStorage.length===0){
    product_box.innerHTML=""
}

// Display all products, and delete is its inside
const displayProductFun=(products)=>{
    products.forEach(item=>{
        const tRow=document.createElement("tr")
        const pName=document.createElement("td")
        pName.textContent=item.name
        const pPrice=document.createElement("td")
        pPrice.textContent=item.price
        const pRating=document.createElement("td")
        pRating.textContent=item.rating
        const deleteBtn=document.createElement("button")
        const deleteCol=document.createElement("td")
        deleteBtn.textContent="Delete"
        deleteCol.append(deleteBtn)

        deleteBtn.addEventListener("click", ()=>{
            productStorage=products.filter(val=>val.name!==item.name)
            localStorage.setItem("productStorage", JSON.stringify(productStorage))
            location.reload()
        })

        tRow.append(pName, pPrice, pRating, deleteCol)
        productTableBody.appendChild(tRow)
    })
}
displayProductFun(productStorage)

// Create product here
function createProductFun(){
    const productNameValue=productName.value
    const productPriceValue=productPrice.value
    const productRatingValue=productRating.value
    if (!productNameValue || productPriceValue || productRatingValue){
        alert("Inputs cannot be empty!")
        return
    }
    
    productStorage.push({"name":productNameValue, "price":productPriceValue, "rating":productRatingValue})
    localStorage.setItem("productStorage", JSON.stringify(productStorage))
}
addBtn.addEventListener("click", createProductFun)

// Sorting by rating and price
const sortValues=()=>{
    productTableBody.innerHTML=""

    const selectedValue=selectVal.value
    productStorage.sort((a,b)=>{
        if (selectedValue==="price"){
            return a.price-b.price
        }
        else if (selectedValue==="rating"){
            return a.rating-b.rating
        }
    })
    return displayProductFun(productStorage)
}
selectVal.addEventListener("click", sortValues)