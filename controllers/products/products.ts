import { Request, Response } from "express";

import { Product } from "../../models/product/Product";

// return list of products
// TODO: add params to filter query and pagination
export const getListOfProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  res.json(products);
};
