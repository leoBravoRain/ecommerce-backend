import express from "express";

import { routes } from "./routes";
import { createSale } from "../../controllers/sales/sales";

export const router = express.Router();

// POST create sale
router.post(routes.base, createSale);
