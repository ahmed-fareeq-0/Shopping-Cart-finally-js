
// products data
const products = [
    {
        id: 1,
        name: "phone galaxe c",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
        img: "image/galaxe.jpg"
    },
    {
        id: 2,
        name: "phone galaxe 5",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
        img: "image/galaxe5.webp"
    },
    {
        id: 3,
        name: "phone galaxe 8",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
        img: "image/galaxe8.png"
    },
    {
        id: 4,
        name: "phone galaxe c",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
        img: "image/galaxe.jpg"
    },
]
localStorage.setItem("productsItem", JSON.stringify(products))


// show products
var DomProducts = document.querySelector("#DomProducts")

function ShowProducts() {
    let ProducUi = products.map((item) => {
        return `
            <div class="card">
                <img src="${item.img}" style="width:100%">
                <div class="info">
                <span onClick="saveItemData(${item.id})">${item.name}</span>
                    <p>${item.desc}</p>
                </div>
                <div class="container">
                <button class="btnAddToCart" onClick="addToCart(${item.id})">Add to cart</button>
                <button class="btnLike">like</button>
                </div>
            </div>
            `
    });
    DomProducts.innerHTML = ProducUi;
}
ShowProducts()


// add product name to cart hamburger 
let CartProduct = document.querySelector(".cartProduct");
var Badge = document.querySelector(".badge");


let addedItem = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];


if(addedItem){
    addedItem.map((item) => {
        CartProduct.innerHTML += `<p>${item.name}</p>` ;
    })

    Badge.innerHTML = addedItem.length;
}


function addToCart(id) {
        if(localStorage.getItem("userName")){

            let choosenItem = products.find((item) => item.id === id);
            CartProduct.innerHTML += `<p>${choosenItem.name}</p>`;
            let CartProductItems = document.querySelectorAll(".cartProduct p");
            Badge.innerHTML = CartProductItems.length;
            CartHamburger.style.display = "block";
        
           addedItem = [...addedItem, choosenItem];
           localStorage.setItem("products", JSON.stringify(addedItem))

     }else {
         window.location = "login.html"
     }
}

// show hamburger
var BtnCart = document.querySelector(".btnCart")
var CartHamburger = document.querySelector("#cartHamburger");

function ShowHamburger() {
    if(CartHamburger.style.display == "block"){
        CartHamburger.style.display = "none"
    }else{
        CartHamburger.style.display = "block"
    }  
}


// save id in local storge with name cartProductDetails
function saveItemData(id) {
    localStorage.setItem("ProductId", id);
    window.location = "cartProductDetails.html"
}


// search 
let searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keyup", (e) => {
    if(e.keyCode === 13){
        Search(e.target.value, JSON.parse(localStorage.getItem("productsItem")))
    }
})



function Search(title, myArray) {
    let arr = myArray.filter((item) => item.name === title)

     let ProducUi = arr.map((item) => {
         return `
             <div class="card">
                 <img src="${item.img}" style="width:100%">
                 <div class="info">
                 <span onClick="saveItemData(${item.id})">${item.name}</span>
                     <p>${item.desc}</p>
                 </div>
                 <div class="container">
                 <button class="btnAddToCart" onClick="addToCart(${item.id})">Add to cart</button>
                 <button class="btnLike">like</button>
                 </div>
             </div>
             `
     });
     DomProducts.innerHTML = ProducUi;
}


