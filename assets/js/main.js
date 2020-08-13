document.addEventListener("DOMContentLoaded", init);

function init() {
    repositories.getProducts().then(displayProducts).catch(console.log);
}

function displayProducts(list) {
    let el = document.getElementById("products");

    list.forEach(function(product) {
        el.innerHTML += generateProductHTML(product);
    });

    let addToCartButtons = document.getElementById("products").getElementsByClassName("add-cart");

    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", addToCart);
    }
}

function addToCart(e) {
    let data = e.currentTarget.dataset
    let id = data["id"];

    console.log(id);
}

function generateProductHTML(product) {
    return `<li class="col-12 col-md-3 col-lg-3">
    <div class="card">
        <img class="card-img-top" src="${product.images[0].thumbnail}" alt="Card image cap">
        <div class="card-body">
            <h4 class="card-title">${product.name}</h4>
            <p class="card-text">${product.short_description}</p>
            <div class="row">
                <div class="col">
                    <p class="product-price">${formatPrice(product.prices)}</p>
                </div>
                <div class="col">
                    <p class="btn btn-primary add-cart" data-id="${product.id}">Add to cart</p>
                </div>
            </div>
        </div>
    </div>
</li>`
}

function formatPrice(data) {
    let price = parseInt(data.price) / 100;
    let prefix = data.currency_prefix;
    return `${prefix} ${price}`
}