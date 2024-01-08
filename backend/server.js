import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import products from "./data/product.js";
dotenv.config();
const port = process.env.PORT || 5500;
connectDB();
const app = express();

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
