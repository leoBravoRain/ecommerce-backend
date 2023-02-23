import express from "express";

import { getListOfProducts } from "../controllers/products/products";

export const router = express.Router();

/* GET products listing. */
router.get("/", getListOfProducts);
