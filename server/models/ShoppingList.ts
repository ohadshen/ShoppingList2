import { Schema, model, connect, Document } from "mongoose";
import { IProduct } from "./Product";

export interface IShoppingListItem extends Document {
  product: IProduct;
}

const productScheme = new Schema<IShoppingListItem>({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
});

export const ShoppingList = model<IShoppingListItem>(
  "ShoppingList",
  productScheme
);
