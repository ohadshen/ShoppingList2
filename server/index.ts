import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { closeConnectionToDb, connectToDb } from "./db";
import productsRoute from "./routes/products";
import shoppingListRoute from "./routes/shoppingList";

dotenv.config();

const app: Express = express();
const port = Number(process.env.PORT) || 3000;

connectToDb();
app.use(bodyParser.json());

app.use("/products", productsRoute);
app.use("/shoppingList", shoppingListRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running https://localhost:${port}`);
});

app.use((err: Error, req: Request, res: Response, next: Function) => {
  res.status(500).send(err.message);
});

process.on("SIGINT", () => {
  closeConnectionToDb();
  console.log("connection Closed, Bye Bye");
  process.exit();
});
