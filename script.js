const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$99.99",
        rating: 4.5,
        image: "https://via.placeholder.com/200x150?text=Smartphone"
    },
    {
        id: 2,
        name: "Smartphone",
        price: "$499.99",
        rating: 4.7,
        image: "https://via.placeholder.com/200x150?text=Smartphone"
    },
    {
        id: 3,
        name: "Laptop",
        price: "$899.99",
        rating: 4.3,
        image: "https://via.placeholder.com/200x150?text=Laptop"
    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        price: "$49.99",
        rating: 4.2,
        image: "https://via.placeholder.com/200x150?text=Speaker"
    }
];

let cartCount = 0;
let wishlistCount = 0;


function loadProducts() {
    const productGrid = document.getElementById("productGrid");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p class="rating">${''.repeat(Math.round(product.rating))}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
        `;
        productGrid.appendChild(productCard);
    });
}

function updateCartWishlistCount() {
    document.getElementById("cartCount").textContent = cartCount;
    document.getElementById("wishlistCount").textContent = wishlistCount;
}

function addToCart(productId) {
    cartCount++;
    updateCartWishlistCount();
    console.log(`Product ${productId} added to cart.`);
}

function addToWishlist(productId) {
    wishlistCount++;
    updateCartWishlistCount();
    console.log(`Product ${productId} added to wishlist.`);
}

document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
    updateCartWishlistCount();
});
