import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import { router as productsRouter } from "./routes/products";

// app setup
const app: Express = express();
const port = 3000;

// Cors middleware
// TODO: change to only allowed domains
app.use(cors());

// logger
app.use(morgan("dev"));

// Set up mongoDB connection
mongoose.set("strictQuery", false);
// local database
const mongoDB = "mongodb://localhost/ecommerce-db";
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// routes
app.use("/products", productsRouter);

// server listening
app.listen(port, () => {
  console.log(`[Server]: running at https://localhost:${port}`);
});
