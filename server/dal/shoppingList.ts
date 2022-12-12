import { IShoppingListItem, ShoppingList } from "../models/ShoppingList";

export const addShoppingListItems = async (
  shoppingListItems: IShoppingListItem[]
) => await ShoppingList.create(shoppingListItems)

export const getShoppingList = async () => await ShoppingList.find().populate("product")
