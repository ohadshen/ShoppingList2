"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToTb = void 0;
// Import the mongoose module
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/my_database";
const connectToTb = () => {
    console.log("trying to connect");
    mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
};
exports.connectToTb = connectToTb;
// Get the default connection
// Bind connection to error event (to get notification of connection errors)
