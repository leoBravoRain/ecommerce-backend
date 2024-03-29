import { Types } from "mongoose";

import { ClientType } from "../client/types";

export type ProductItemType = {
  productId: Types.ObjectId;
  quantity: number;
};
export type SaleType = {
  client: ClientType;
  products: ProductItemType[];
};
