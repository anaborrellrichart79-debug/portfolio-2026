const express = require("express");
const cors =require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Llamar a rutas
const productsRoutes = require("./routes/products-routes");

app.use("/products", productsRoutes);


app.listen(PORT, () =>{
    console.log('servidor corriendo en el puerto' + PORT);
});

