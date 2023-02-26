import { Schema, model } from "mongoose";

import { ProductType } from "./types";

const productSchema = new Schema<ProductType>({
  name: { type: String, required: true },
  photoUrl: { type: String, required: true },
  shortDescription: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Product = model<ProductType>("Product", productSchema);
