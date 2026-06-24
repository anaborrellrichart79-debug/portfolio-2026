import express from "express";
import userRoutes from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/applications", applicationRouter);

//user API routes
app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log(" HireFlow corriendo en http://localhost:3000 ");
});