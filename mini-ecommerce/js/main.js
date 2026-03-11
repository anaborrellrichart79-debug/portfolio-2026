// js/main.js

import { getProducts } from './api/products.js';
import { store } from './situacion/establecimiento.js';
import { renderProducts } from './ui/renderProducts.js';
import { upDateCartCount } from "./servicios/carritoServicios.js";

const contenedorProductos = document.getElementById("contenedor-productos");
const cargadoraProductos = document.getElementById("cargador-productos");
const buscarProductoInput = document.getElementById("buscar-producto");
const errorMensaje = document.getElementById("error-mensaje");

async function init() {
    const products = await getProducts();
    store.produts = products;
    renderProducts(products);
}

init();


// Función para cargar productos desde el JSON
function mostrarCargando() {
    cargadoraProductos.classList.remove("hidden");
}
// ocultar cargando
function ocultarCargando() {
    cargadoraProductos.classList.add("hidden");
}
// función para mostrar mensaje de error
function mostrarError() {
    errorMensaje.classList.remove("hidden");
}
// función para ocultar mensaje de error
function ocultarError() {
    errorMensaje.classList.add("hidden");
}

// Iniciar aplicación
async function iniciarAplicacion() {
    mostrarCargando();
    ocultarError();
    try {

        const products = await getProducts();

        if (products.length === 0) {
            mostrarError();
        } else {
            store.produts = products;
            renderProducts(products);
            upDateCartCount();
        }
    } catch (error) {
        console.error("Error al cargar productos", error);
        mostrarError();
    } finally {
        ocultarCargando();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarAplicacion();
    setupSearch();
});

// Configuración de la busqueda de productos
function setupSearch() {
    buscarProductoInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        const filtered = store.products.filter(procuct => {
            product.title.toLowerCase().includes(value) ||
            product.category.toLowerCase().includes(value) ||
            product.description.toLowerCase().includes(value)
        })
        renderProducts(filtered);       
    });
}

//funcion mostrar productos en el DOM
function mostrarProductos(products) {
    contenedorProductos.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");    
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button data-id="${product.id}">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(productElement);
    });
}   
