// controlador de productos
const products = require("../data/products");

// Endpoint para obtener todos los productos
exports.getAllProducts = (_req, res) =>{
    res.json(products);
};

//Endpoint para obtener producto con id
exports.getProductsById = (req, res) => {
    const filteredProduct = products.filter(p =>p.id === parseInt( req.params.id));
    res.json(filteredProduct);
};

//Endpoint para obtener productos por categorías
exports.getProductsByCategory = (req, res) => {
    const filteredProducts = products.filter(
        p => p.category.toLowerCase() === req.params.category.toLowerCase()
    );
    res.json(filteredProducts);
};

//Endpoint para agregar nuevo producto
exports.createProduct = (req, res) => {
    const newProduct = {
        id: products.length + 1,
        category: req.body.category,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

//Endpoint para actualizar producto
exports.updateProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex !== -1) {
        products[productIndex] = {
            id: products[productIndex].id,
            category: req.body.category || products[productIndex].category
        };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
};

//Endpoint para eliminar producto
exports.deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.json({ message: "Producto eliminado" });
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
};
