import { IShoppingListItem, ShoppingList } from "../models/ShoppingList";

export const addShoppingListItems = async (
  shoppingListItems: IShoppingListItem[]
) => {
  // const newShoppingListItem = new ShoppingList(shoppingListItems[0]);
  // return await newShoppingListItem.save();
  return await ShoppingList.create(shoppingListItems);
};

export const getShoppingList = async () => {
  console.log("trying to get shopping list");

  return await ShoppingList.find().populate("product");
};
