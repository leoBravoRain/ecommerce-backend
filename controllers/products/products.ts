import { Request, Response } from "express";
import { Types } from "mongoose";

import { Product } from "../../models/product/Product";
import { ProductType } from "../../models/product/types";

// return list of products
export const getListOfProducts = async (req: Request, res: Response) => {
  const products = await Product.find();

  // format id
  // TODO: improve the way of change _id by id
  const formattedProducts = products.map((product) => ({
    id: product._id,
    name: product.name,
    photoUrl: product.photoUrl,
    shortDescription: product.shortDescription,
    price: product.price,
  }));

  res.json({ products: formattedProducts });
};

// return product details based on product id
export const getProductDetails = async (req: Request, res: Response) => {
  try {
    // get product id
    const productId = new Types.ObjectId(req.params.productId);

    // get product
    const product = await Product.findOne({ _id: productId });

    // format id
    // TODO: improve the way of change _id by id
    if (!!product) {
      const formattedProduct = {
        id: product._id,
        name: product.name,
        photoUrl: product.photoUrl,
        shortDescription: product.shortDescription,
        price: product.price,
      };

      res.json({ product: formattedProduct });
    } else {
      throw Error;
    }
  } catch (e) {
    res.sendStatus(404);
  }
};
