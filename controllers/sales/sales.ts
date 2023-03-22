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

    // return status code for now
    // to improve this can return for example created instance with selected information to display to user as a payment confirmation
    res.json(saleInstance.id);

    // res.json(clientCreated);
  } catch (e) {
    res.sendStatus(500);
  }
};
