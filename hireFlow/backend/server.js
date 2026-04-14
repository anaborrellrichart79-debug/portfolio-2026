import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

//user API routes
app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log(" HireFlow corriendo en http://localhost:3000 ");
});