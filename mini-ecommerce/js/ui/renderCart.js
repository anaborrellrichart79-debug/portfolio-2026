import {establecimiento} from "../situacion/establecimiento.js";
import {totalCarrito, removeFromCart} from "../servicios/servicio-carrito.js";
import {formatPrice} from "../utiles/ayudantes.js";

const contenedorCarrito = document.getElementById("cargador-carrito");
const totalCarrito = document.getElementById("total-carrito");

export function renderCart() {

    if (!cartContainer) return;
    
    cartContainer.innerHTML = "";
    
    if (!establecimiento.card.length) {
        contenedorCarrito.innerHTML = "<p>El carrito está vacío</p>";
        totalCarrito.textContent = "0€";
        return;
    }
    
    establecimiento.card.forEach(item => {
    
        const row =document.createElement("div");
        row.classList.add("cart-item");

        row.innerHTML = `
        <h4>${item.title}</h4>
        <p>${formatPrice(item.price)}</p>
        <p>Cantidad: ${item.quantity}</p>
        <button data-id="${item.id}">Eliminar</button>
        `;
        const button = row.querySelector("button");

        button.addEventListener("click", () => {
            removeFromCart(item.id);
            renderCart();
        });

        contenedorCarrito.appendChild(row);
    });


    totalCarrito.textContent = formatPrice(getCartTotal());    
    }
    