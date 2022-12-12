// Import the mongoose module
import mongoose from "mongoose";

const mongoConnectionString =
  "mongodb+srv://ohad:8353@cluster0.bfdwxfc.mongodb.net/ShoppingList?retryWrites=true&w=majority";

const db = mongoose.Connection;

export const connectToDb = () => {
  console.log("trying to connect");

  mongoose.connect(mongoConnectionString);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", () => {
    console.log("connected to db");
  });
};

export const closeConnectionToDb = () => {
  mongoose.connection.close();
};

// Get the default connection

// Bind connection to error event (to get notification of connection errors)
