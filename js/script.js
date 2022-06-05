// import Variables
var reg_log_nav = document.querySelector(".nav-links");
var userDom = document.querySelector("#userDom");
var user_info = document.querySelector("#user_info");
let getUserName = localStorage.getItem("userName");

// Verify username and add name in Navbar
if (getUserName) {
    reg_log_nav.remove();
    user_info.style.display = "flex";
    userDom.innerHTML = getUserName;
}


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


// show products
var DomProducts = document.querySelector("#DomProducts")

function ShowProducts() {
    let ProducUi = products.map((item) => {
        return `
            <div class="card">
                <img src="${item.img}" style="width:100%">
                <div class="info">
                    <h4>${item.name}</h4>
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
let noProd = document.querySelector(".noProd");
var Badge = document.querySelector(".badge");


function addToCart(id) {
    let choosenItem = products.find((item) => item.id === id);
    noProd.remove();
    CartProduct.innerHTML += `<p>${choosenItem.name}</p>`;
    let CartProductItems = document.querySelectorAll(".cartProduct p");
    Badge.innerHTML = CartProductItems.length;
    CartHamburger.style.display = "block";
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



// function checkLogedUser () {
//     if(localStorage.getItem("userName")){
//         console.log("add to cart");
//     }else {
//         window.location = "login.html"
//     }
// }

