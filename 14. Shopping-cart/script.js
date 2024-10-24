const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

let cart = [];
let totalPrice = 0;

// Add product to cart
document.querySelectorAll(".add").forEach(button => {
    button.addEventListener("click", function () {
        const productElement = this.parentNode;
        const productName = productElement.querySelector("h2").innerText;
        const productPrice = parseInt(productElement.getAttribute("data-price"));

        addToCart(productName, productPrice);
        updateCart();
    });
});

function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    totalPrice += price;
}

function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.name} x ${item.quantity} - $${item.price * item.quantity} <button class="remove">Remove</button>`;
        cartItems.appendChild(cartItem);

        cartItem.querySelector(".remove").addEventListener("click", function () {
            removeFromCart(item.name);
            updateCart();
        });
    });
    totalPriceElement.innerText = totalPrice;
}

function removeFromCart(name) {
    const product = cart.find(item => item.name === name);
    if (product) {
        totalPrice -= product.price * product.quantity;
        cart = cart.filter(item => item.name !== name);
    }
}
