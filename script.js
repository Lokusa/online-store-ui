const products = [
  { id: 1, name: "Holly Halter Top", price: 250, image: "images/blacktop.png " },
  { id: 2, name: "Men's Cream Jacket", price: 700, image: "images/creamjacket.png" },
  { id: 3, name: "Relaxed Track Pants", price: 300, image: "images/sweats.png" },
  { id: 4, name: "Diesel 2019 D-Strukt Denim Jeans", price: 900, image: "images/jeans.png" },
  { id: 5, name: "Long Sleeve Cardigan", price: 550, image: "images/off shoulder top.png" },
  { id: 6, name: "Grey Sweater", price: 320, image: "images/sweater.png" },
  { id: 7, name: "Pink Hoodie", price: 360, image: "images/pink hoodie.png" },

];

let cart = [];

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  if (username && password) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("shop-page").style.display = "block";
    displayCatalogue();
  } else {
    alert("Please enter both username and password.");
  }
}

function logout() {
  location.reload();
}

function displayCatalogue() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>R${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-list");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R${item.price}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = sum;
  document.getElementById("pay-amount").textContent = sum;
}

function clearCart() {
  cart = [];
  updateCart();
}

function openPayment() {
  if (cart.length === 0) return alert("Cart is empty.");
  document.getElementById("payment-modal").style.display = "flex";
}

function closePayment() {
  document.getElementById("payment-modal").style.display = "none";
}

function pay() {
  const name = document.getElementById("card-name").value;
  const card = document.getElementById("card-number").value;
  const cvv = document.getElementById("cvv").value;

  if (!name || !card || !cvv) {
    alert("Please fill out all payment details.");
    return;
  }

  alert("Payment successful! Thank you for shopping with Drip Apparel.");
  clearCart();
  closePayment();
}
