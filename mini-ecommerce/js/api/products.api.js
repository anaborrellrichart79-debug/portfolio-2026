
//products.api.js
const API_URL = "http://localhost:3000/api/products";

// función para obtener todos los productos
export const getAllProducts = async () => {
    try{
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Error API" + response.status);
            }
            return await response.json();
        } catch (error) {
            console.error("Error cargando productos", error);
            return [];
        }
    };

//función para obtener producto por ID
export const getProductById = async (id) => {
    try {
        const response = await fetch('${API_URL}/${id}');
        if (!response.ok) {
            throw new Error("Error API" + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Error cargando producto", error);
        return null;
    }
};

// función para obtener productos por categoría
export const getProductByCategory = async (category) => {
    try {
        const response = await fetch('${API_URL}/category/${category}');
        if (!response.ok) {
            throw new Error("Error API" + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Error cargando producto por categoría", error);
        return null;
    }
};

// función para agregar nuevo producto
export const createProduct = async (createData) => {
    try {
        const response = await fetch('${API_URL}/category/${category}');
        if (!response.ok) {
            throw new Error("Error API" + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error("Error al cargar nuevo producto", error);
        return null;
    }
};