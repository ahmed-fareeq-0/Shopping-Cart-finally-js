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
                <button class="btnAddToCart" onClick="removefromcart(${item.id})">remove</button>
                <button class="btnLike">like</button>
                </div>
            </div>
            `
    });
    DomCartProducts.innerHTML = CartProducUi ;
}
