"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const products_1 = __importDefault(require("./routes/products"));
const shoppingList_1 = __importDefault(require("./routes/shoppingList"));
dotenv_1.default.config();
const cors = require('cors');
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
(0, db_1.connectToDb)();
app.use(body_parser_1.default.json());
app.use(cors());
app.use("/products", products_1.default);
app.use("/shoppingList", shoppingList_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running https://localhost:${port}`);
});
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});
process.on("SIGINT", () => {
    (0, db_1.closeConnectionToDb)();
    console.log("connection Closed, Bye Bye");
    process.exit();
});
