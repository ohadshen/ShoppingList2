"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingList = void 0;
const mongoose_1 = require("mongoose");
const productScheme = new mongoose_1.Schema({
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Products",
    },
});
exports.ShoppingList = (0, mongoose_1.model)("ShoppingList", productScheme);
