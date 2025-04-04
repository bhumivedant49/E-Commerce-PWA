document.addEventListener("DOMContentLoaded", () => {
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            let productList = document.getElementById("product-list");
            products.forEach(product => {
                let item = document.createElement("div");
                item.classList.add("product");
                item.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(item);
            });
        });
});

let cartCount = 0;
function addToCart(id) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Product " + id + " added to cart!");
}
