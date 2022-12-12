import express from "express";
import { addShoppingListItems, getShoppingList } from "../dal/shoppingList";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    res.send(await addShoppingListItems(req.body.products));
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    res.send(await getShoppingList());
  } catch (error) {
    next(error);
  }
});

export default router;
