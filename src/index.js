import "dotenv/config";
import express from "express";
import { conectar } from "./config/database.js";

import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import setupSwagger from "./config/swagger.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

conectar();

setupSwagger(app);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("¡Hola desde el backend de Ecommerce!");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
