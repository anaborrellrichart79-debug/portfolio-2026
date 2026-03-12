
function loadCartFromStorage() {
    try {
        const servicioCarrito = localStorage.getItem("cart");
        return servicioCarrito ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Error al cargar el carrito desde el almacenamiento:", error);
        return [];
    }
}

export const establecimiento = {
    products: [],
    cart: JSON.parse(localStorage.getItem("cart")) || []
};