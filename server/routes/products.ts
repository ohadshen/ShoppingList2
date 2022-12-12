import express from "express";
import { addProduct, getProducts } from "../dal/product";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    res.send(await addProduct(req.body));
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const products = await getProducts();
    res.send(products);
  } catch (error) {
    next(error);
  }
});

export default router;
