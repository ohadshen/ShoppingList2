"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Require Mongoose
const mongoose_1 = require("mongoose");
const productScheme = new mongoose_1.Schema({
    name: String,
    imageUrl: String,
    price: Number,
});
exports.Product = (0, mongoose_1.model)("Product", productScheme);
