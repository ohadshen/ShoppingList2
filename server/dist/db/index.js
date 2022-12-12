"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeConnectionToDb = exports.connectToDb = void 0;
// Import the mongoose module
const mongoose_1 = __importDefault(require("mongoose"));
const mongoConnectionString = "mongodb+srv://ohad:8353@cluster0.bfdwxfc.mongodb.net/ShoppingList?retryWrites=true&w=majority";
const db = mongoose_1.default.Connection;
const connectToDb = () => {
    console.log("trying to connect");
    mongoose_1.default.connect(mongoConnectionString);
    const db = mongoose_1.default.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.on("open", () => {
        console.log("connected to db");
    });
};
exports.connectToDb = connectToDb;
const closeConnectionToDb = () => {
    mongoose_1.default.connection.close();
};
exports.closeConnectionToDb = closeConnectionToDb;
// Get the default connection
// Bind connection to error event (to get notification of connection errors)
