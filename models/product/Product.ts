import { Schema, model } from "mongoose";

import { ProductType } from "./types";

const productSchema = new Schema<ProductType>({
  name: { type: String, required: true },
  phothoUrl: { type: String, required: true },
  shortDescription: { type: String, required: true },
});

export const Product = model<ProductType>("Product", productSchema);
