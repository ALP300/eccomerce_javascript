import "dotenv/config";
import express from "express";
import { conectar } from "./config/database.js";

import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

conectar();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("¡Hola desde el backend de Ecommerce!");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
