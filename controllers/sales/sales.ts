import { Request, Response } from "express";

import { Client } from "../../models/client/Client";
import { Sale } from "../../models/sale/Sale";

// create sale
export const createSale = async (req: Request, res: Response) => {
  try {
    // create client
    const clientCreated = await Client.create(req.body.client);

    // get array of products [{productId, quantity}]
    const products = req.body.products;

    // create sale instance with 1) list of ref products 2) ref to client
    const saleInstance = await Sale.create({
      client: clientCreated,
      products: products,
    });

    // return sale instance created
    res.json(saleInstance);

    // res.json(clientCreated);
  } catch (e) {
    // TODO: send correct code
    res.sendStatus(500);
  }
};
