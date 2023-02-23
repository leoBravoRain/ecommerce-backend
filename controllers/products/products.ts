import { Request, Response } from "express";

import { Product } from "../../models/product/Product";

// return list of products
export const getListOfProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  res.json({ products: products });
};
