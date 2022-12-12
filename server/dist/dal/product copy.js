"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllProducts = exports.getProducts = exports.addProduct = void 0;
const Product_1 = require("../models/Product");
const addProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new Product_1.Products(product);
    return yield newProduct.save();
});
exports.addProduct = addProduct;
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("trying to get products");
    return yield Product_1.Products.find();
});
exports.getProducts = getProducts;
const deleteAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Product_1.Products.deleteMany({});
});
exports.deleteAllProducts = deleteAllProducts;
