import express from "express";

import {
  getListOfProducts,
  getProductDetails,
} from "../controllers/products/products";

export const router = express.Router();

// GET products listing
router.get("/", getListOfProducts);

// GET product details
router.get("/:productId", getProductDetails);
