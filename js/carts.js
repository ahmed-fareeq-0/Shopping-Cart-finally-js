let DomCartProducts = document.querySelector("#DomCartProducts");
let getProduct = localStorage.getItem("products")


if(getProduct){
    let items = JSON.parse(getProduct)
    DrawproductsUi(items)
}else {
    console.log("no");
}

function DrawproductsUi(products) {
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


// remove product in cart
function Removefromcart (id) {
    if (getProduct) {
        let items = JSON.parse(getProduct);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem("products", JSON.stringify(filteredItems));
        DrawproductsUi(filteredItems)
    }
}

