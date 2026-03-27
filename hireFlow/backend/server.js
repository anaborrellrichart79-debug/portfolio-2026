
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

// ruta test
app.get("/", (res, req) => {
    res.setEncoding("HireFlow API esta corriendo");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
});