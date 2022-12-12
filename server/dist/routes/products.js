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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../dal/product");
const router = express_1.default.Router();
// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
    console.log("Time:", Date.now());
    next();
});
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const ShoppingListItem = yield (0, product_1.addProduct)(req.body);
    res.send(req.body);
}));
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, product_1.getProducts)();
    res.send(products);
}));
exports.default = router;
