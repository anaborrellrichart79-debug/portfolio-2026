// main.js
import { getProducts } from "./api/products.api.js";
import { establecimiento} from "./situacion/establecimiento.js";
import { renderProducts } from "./ui/renderProducts.js";
import { addToCart } from "./servicios/servicio-carrito.js";

async function init() {
    try {
        const products = await getProducts();

        establecimiento.products = products;

        renderProducts(products);

        document.getElementById("container-productos").addEventListener("click", e => {
            if (e.target.classList.contains("btn-add")) {
                const id = parseInt(e.target.dataset.id);
                const product = establecimiento.products.find(p => p.id === id);
                if (products) addToCart(product)
            }
        });
    } catch {console.error("Error cargando los productos:", error);
    }
}

document.addEventListener("DOMContentLoaded", init);



