import express from "express";
import { SERVER_PORT } from "./configConect.js";
import productRoutes from "./routes/product.routes.js";
import cors from 'cors';
const app = express();
app.use(cors());

app.use(express.json());
app.use(productRoutes);


app.get("/", (req, res) => {
    res.send("Welcome to my API");
});
app.listen(SERVER_PORT, () => {
    console.log(`Servidor en escucha en el puerto ${SERVER_PORT}`);
});