let Item_detailsDom = document.querySelector(".item-details");
let getProducts = JSON.parse(localStorage.getItem("productsItem"));
let ProductsId = localStorage.getItem("ProductId");
let ProductDetails = getProducts.find((item) => item.id == ProductsId );


// show products details
Item_detailsDom.innerHTML = `
    <img src="${ProductDetails.img}">
    <div class="info-details">
        <span>${ProductDetails.name}</span>
        <p>${ProductDetails.desc}</p>
    </div>
`
