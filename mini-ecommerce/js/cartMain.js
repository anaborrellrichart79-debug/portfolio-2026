
// js/cartMain.js

import { establecimiento } from "./situacion/establecimiento.js";
import { removeFromCart, getCartTotal, upDateCartCount } from "./servicios/servicio-carrito.js";
import { formatPrice } from "./utiles/ayudantes.js";

const contenedorCarrito = document.getElementById("cargador-carrito");
const totalCarrito = document.getElementById("total-carrito");
const checkoutBtn = document.getElementById("btn-caja");

// renderizar carrito completo
function renderCart() {
    
    if (!contenedorCarrito) return;
    contenedorCarrito.innerHTML = "";
    
    if (!establecimiento.cart.length) {
        contenedorCarrito.innerHTML = "<p>El carrito esta vacío.</p>";
        totalCarrito.textContent = "0€";
        return;
    }
    
    establecimiento.cart.forEach(item =>{

    const row = document.createElement("div");
    row.classList.add("cart-item");

    row.innerHTML = `
        <h4>${item.title}</h4>
        <p>Precio:${formatPrice(item.price)}</p>
        <p>Cantidad: ${item.quantity}</p>
        <button data-id="${item.id}" class="remove-btn">Eliminar</button>
        `;

// Eliminar producto

    const removeBtn = row.querySelector("remove-btn");
    removeBtn.addEventListener("click", () => {
        removeFromCart(item.id);
        renderCart();
    });

    contenedorCarrito.appendChild(row);
    });

// Actualizar total
totalCarrito.textContent = formatPrice(getCartTotal());

// Actualizar total en el header de cart.html
upDateCartCount();
}

// Inicializar
function initCartPage() {

    renderCart();

    if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        alert("proceso de pago pendiente de desarrollo");
    });
    }
}

document.addEventListener("DOMContentLoaded", initCartPage);
