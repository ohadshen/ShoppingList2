import { IShoppingListItem, ShoppingList } from "../models/ShoppingList";

export const addShoppingListItem = async (
  shoppingListItem: IShoppingListItem
) => {
  const newShoppingListItem = new ShoppingList(shoppingListItem);
  return await newShoppingListItem.save();
};

export const getShoppingList = async () => {
  console.log("trying to get shopping list");

  return await ShoppingList.find().populate("product");
};
