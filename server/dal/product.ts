import { IProduct, Products } from "../models/Product";

export const addProduct = async (product: IProduct) => {
  const newProduct = new Products(product);
  return await newProduct.save();
};

export const getProducts = async () => {
  console.log("trying to get products");

  return await Products.find();
};

export const deleteAllProducts = async () => {
  return await Products.deleteMany({});
};
