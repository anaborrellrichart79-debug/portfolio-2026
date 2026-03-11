export async function getProduct(params) {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Error al cargar los productos");
        return await response.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}