import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import { router as productsRouter } from "./routes/products/products";
import { router as salesRouter } from "./routes/sales/sales";
import { baseRoutes } from "./config/baseRoutes";

// app setup
const app: Express = express();
const port = 3000;

// Cors middleware
// TODO: change to only allowed domains
app.use(cors());

// support JSON-encoded and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logger
app.use(morgan("dev"));

// Set up mongoDB connection
mongoose.set("strictQuery", false);
// local database
// TODO: add as env variable
const mongoDB = "mongodb://localhost/ecommerce-db";
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// routes
app.use(baseRoutes.products, productsRouter);
app.use(baseRoutes.sales, salesRouter);

// server listening
app.listen(port, () => {
  console.log(`[Server]: running at https://localhost:${port}`);
});
