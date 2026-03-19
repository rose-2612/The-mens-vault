function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
    window.location.href="cart.html";
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items");
    let total = 0;

    container.innerHTML = "";

    cart.forEach((item, index) => {
        container.innerHTML += `
            <div style="border:1px solid #ccc; padding:10px; margin:10px; overflow:hidden;">
                
                <img src="${item.image}" style="float:left; margin-right:10px;">
                
                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

                <h3>${item.name}</h3>
                <p>₹${item.price}</p>

            </div>
        `;
        total += item.price;
    });

    document.getElementById("totalPrice").innerText = total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}