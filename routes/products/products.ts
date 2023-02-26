import express from "express";

import {
  getListOfProducts,
  getProductDetails,
} from "../../controllers/products/products";
import { routes } from "./routes";

export const router = express.Router();

// GET products listing
router.get(routes.base, getListOfProducts);

// GET product details
router.get(routes.getProductDetails, getProductDetails);
