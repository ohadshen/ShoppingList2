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
exports.getShoppingList = exports.addShoppingListItems = void 0;
const ShoppingList_1 = require("../models/ShoppingList");
const addShoppingListItems = (shoppingListItems) => __awaiter(void 0, void 0, void 0, function* () {
    // const newShoppingListItem = new ShoppingList(shoppingListItems[0]);
    // return await newShoppingListItem.save();
    return yield ShoppingList_1.ShoppingList.create(shoppingListItems);
});
exports.addShoppingListItems = addShoppingListItems;
const getShoppingList = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("trying to get shopping list");
    return yield ShoppingList_1.ShoppingList.find().populate("product");
});
exports.getShoppingList = getShoppingList;
