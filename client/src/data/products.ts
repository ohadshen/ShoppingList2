import { Product } from "../models/product";

const products: Product[] = [{
    name: "necklace",
    imageUrl: "/necklace.jpeg",
    price: 1000,
    storeName: "Tanda Crafts inc.",
    secondImageUrl: "/necklace.webp",
    description: "the bex necklace ever!"
  }, {
    name: "bracelet",
    imageUrl: "/bracelet.jpeg",
    price: 300,
    storeName: "Tanda Crafts FOREVER",
    secondImageUrl: "/bracelet.png",
    description: "the bex bracelet ever!"
}];

export { products };