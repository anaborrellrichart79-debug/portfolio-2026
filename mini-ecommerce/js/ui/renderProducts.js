import { totalCarrito } from "../servicios/servicio-carrito.js";
import {showToast} from "./notificaciones.js";
import {formatPrice} from "../utiles/ayudantes.js";

const container = document.getElementById("detalles-producto");

export function renderProducts(products) {

    if (!container) {
        console.error("No se encontro el producto");
    return;
    }

    container.innerHTML = "";

    if (!products.length) {
        container.innerHTML = "<p>No hay productos disponibles</p>";
        return;
    }

    products.forEach(products => {

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
        <img src="${products.image}" alt="${products.description}">
        <h3>${products.title}</h3>
        <p>${formatPrice(products.price)}</p>

        <div class="product-actions">
            <a href="product.html?id=${products.id}">
            Ver detalle
            </a>

            <buttom data-id="${products.id}">
            Añadir al carrito
            </buttom>
        </div>
        `;
        const  buttom = card.querySelector("buttom");

        buttom.addEventListener("clic", () => {
            totalCarrito(products);
            showToast("Producto añadido al carrito");
        });

        container.appendChild(card);
    });

return card;

}

container.querySelector("btn-add").addEventListener("click", () => {
    import ("../servicios/servicio-carrito.js").then(module => {
        module.addToCart(product);
        alert("producto añadido al carrito");
    });
});

function formatPrice(price) {
    return `${price.toFixed(2)} €`;
}
