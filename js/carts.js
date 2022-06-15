let DomCartProducts = document.querySelector("#DomCartProducts");



// if(getProduct){
//     let items = JSON.parse(getProduct)
//     DrawproductsUi(items)
// }else {
//     console.log("no");
// }

function DrawproductsUi(allProducts = []) {

    let products = JSON.parse(localStorage.getItem("products"))  || allProducts ;  
    let CartProducUi = products.map((item) => {
        return `
            <div class="card">
                <img src="${item.img}" style="width:100%">
                <div class="info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <div class="container">
                <button class="btnAddToCart" onClick="Removefromcart(${item.id})" >remove</button>
                <button class="btnLike">like</button>
                </div>
            </div>
            `
    });
    DomCartProducts.innerHTML = CartProducUi ;
}
DrawproductsUi()



let noProductInCart = document.getElementById("noProductInCart")
// If the cart page is empty
if(JSON.parse(localStorage.getItem("products")).length === 0){
    noProductInCart.innerHTML = "no products"
}



// remove product in cart
function Removefromcart (id) {
    let getProduct = localStorage.getItem("products")
    if (getProduct) {
        let items = JSON.parse(getProduct);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem("products", JSON.stringify(filteredItems));
        DrawproductsUi(filteredItems)
    }

    if(JSON.parse(localStorage.getItem("products")).length === 0){
        noProductInCart.innerHTML = "no products" 
    }
}









