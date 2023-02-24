import { Schema, model } from "mongoose";

import { ProductItemType, SaleType } from "./types";

const productItemSchema = new Schema<ProductItemType>({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
});

const saleSchema = new Schema<SaleType>({
  client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
  products: { type: [productItemSchema], required: true },
});

export const Sale = model<SaleType>("Sale", saleSchema);
