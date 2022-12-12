import express from "express";
import { addShoppingListItem, getShoppingList } from "../dal/shoppingList";
const router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

router.post("/", async (req, res, next) => {
  res.send(await addShoppingListItem(req.body));
});

router.get("/", async (req, res, next) => {
  res.send(await getShoppingList());
});

export default router;
