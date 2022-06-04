var reg_log_nav = document.querySelector(".nav-links");
var userDom = document.querySelector("#userDom");
var user_info = document.querySelector("#user_info");

let getUserName = localStorage.getItem("userName");

if(getUserName) {
    reg_log_nav.remove()
    user_info.style.display = "flex"
    userDom.innerHTML = getUserName
}


// data 

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

function ShowProducts () {
    let ProducUi = products.map( (item) => {

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
    })

    DomProducts.innerHTML = ProducUi;
}
ShowProducts()



function addToCart (id) {
    let choosenItem = products.find((item) => item.id === id)
    console.log(choosenItem);
} 


// function checkLogedUser () {
//     if(localStorage.getItem("userName")){
//         console.log("add to cart");
//     }else {
//         window.location = "login.html"
//     }
// }

