import express from "express";
import { addProduct, deleteAllProducts, getProducts } from "../dal/product";
import { ShoppingList } from "../models/ShoppingList";
const router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

router.post("/", async (req, res, next) => {
  const ShoppingListItem = await addProduct(req.body);
  res.send(req.body);
});

router.get("/", async (req, res, next) => {
  const products = await getProducts();
  res.send(products);
});

export default router;
