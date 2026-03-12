import { getProductById } from "./api/products.api.js";
import { renderProductDetail } from "./components/renderProducts.js";
import { getQueryParam, formatPrice } from "./utiles/ayudantes.js";
import { addToCart, upDateCartCount } from "./servicios/servicio-carrito.js";
import { showToast } from "./ui/notificaciones.js";
import { establecimiento } from "./situacion/establecimiento.js";

const cargadorProducto = document.getElementById("cargador-productos");
const errorMensaje = document.getElementById("error-mensaje");
const containerPruductos = document.getElementById("detalles-producto")


async function init() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get(id));

    if (!id) {
        console.error("No se recibió un identificador valido para el producto");
        return;
    }

    const productos = await getProductsByCategory();
    const product = productos.find(p => p.id === id);

    if (!product) {
        console.error("Producto no encontrado");
        return;
    }
    renderProductDetail(product);
}
// mostrar cargando productos
function showLoader() {
    if (cargadorProducto) loader.classList.add("hidden");        
    }

//ocultar cargando productos
function hideLoader() {
    if (cargadorProducto)  loader.classList.add("hidden");
}

// Mostrar error visual
function showError() {
    if (errorMensaje) errorMensaje.classList.remove("hidden");
}

// Renderizado producto
function renderProduct(product) {
    
    if (!containerPruductos) return;
    
    containerPruductos.innerHTML = `
    <div class="product-detail-card">
    <img src="${product.image}" alt="${product.title}">
        <div class="info-producto">
            <h1>${product.title}</h1>
            <p class="price">${formatPrice(product.price)}</p>
            <p class="description">${product.description}</p>
            <button id="add-to-cart-btn">Añadir al carrito</button>
        </div>
    </div>
    `;

const button = document.getElementsById("add-to-cart-btn");

button.addEventListener("click", () => {

    addToCart(product);
    showToast("Producto añadido al carrito");

    });
}

// Actualizar el contador del carrito
function actualizarCartCount() {
    const cartCountEl = document.getElementsById("cart-count");
    if (!cartCountEl) return;
    const total = establecimiento.cart.reduce((acc, p) => acc + p.quantity, 0);
    cartCountEl.textContent = total;
}

 // Añadir al carrito desde botón en la página de producto
    const boton = document.querySelector(".btn-add");
    if (boton) {
        boton.addEventListener("click", () => {
        addToCart(product);
        actualizarCartCount();
        alert("Producto añadido al carrito");
        });
    }

actualizarCartCount();

// inicializar página
async function init() {
    showLoader();

    try {
        const productId = getQueryParam("id");
        const product = await getProductById(productId);

        if (!product) {
            throw new Error("Producto no encontrado");
        }

        renderProduct(product);
        upDateCartCount();
    } catch (error) {
        console.error("Error cargando producto:", error);
        showError();
    } finally {
        hideLoader();
    }
}

document.addEventListener("DOMContentLoaded", init);