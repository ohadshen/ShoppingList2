import { Schema, model, connect, Document } from "mongoose";

export interface IProduct extends Document {
  name: String;
  imageUrl: String;
  price: Number;
}

const productScheme = new Schema<IProduct>({
  name: String,
  imageUrl: String,
  price: Number,
});

export const Products = model<IProduct>("Products", productScheme);
