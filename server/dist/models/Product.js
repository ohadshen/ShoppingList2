"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
const productScheme = new mongoose_1.Schema({
    name: String,
    imageUrl: String,
    price: Number,
});
exports.Products = (0, mongoose_1.model)("Products", productScheme);
