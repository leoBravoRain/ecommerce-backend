import { Request, Response } from "express";
import { Types } from "mongoose";

import { Product } from "../../models/product/Product";

// return list of products
export const getListOfProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  res.json({ products: products });
};

// return product details based on product id
export const getProductDetails = async (req: Request, res: Response) => {
  try {
    // get product id
    const productId = new Types.ObjectId(req.params.productId);

    // get product
    const product = await Product.findOne({ _id: productId });

    // TODO: maybe create virtual "id" instead of _id, because i have to use it on front and i think it's better to have "id"
    res.json({ product: product });
  } catch (e) {
    res.sendStatus(404);
  }
};
