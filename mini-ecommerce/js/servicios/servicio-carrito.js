
import { establecimiento } from "../situacion/establecimiento.js";

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(establecimiento.cart));
}

//añadir producto al carrito
export function addToCart(product) {
    const existing = establecimiento.cart.find(item => item.id === product.id);

    if (existing) {
        existing.quality +=1;

    } else {
        establecimiento.cart.push ({
            ...product,
            quantity: 1
        });
        localStorage.setItem("cart", JSON.stringify(establecimiento.cart));
    }

    saveCart();

};

// Eliminar producto del carrito
export function eliminarDelCarrito(id) {
    establecimiento.cart.filter(item => item.id !== id);

    saveCart();
    upDateCartCount();
}

// Total del carrito
export function getCartTotal() {

    return establecimiento.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

// Contador de carrito
export function upDateCartCount(){
    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    const totalItems = establecimiento.cartreduce((sun, item) => {
        return sun + item.quantity;
    }, 0);
    cartCount.textContent = totalItems;
}