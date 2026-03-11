// rutas para productos
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products-controller");

router.get("/category/:category", productsController.getProductsByCategory);
router.get("/id/:id", productsController.getProductsById);
router.get("/", productsController.getAllProducts);

module.exports = router;

