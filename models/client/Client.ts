import { Schema, model } from "mongoose";

import { ClientType } from "./types";

const clientSchema = new Schema<ClientType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  zipCode: { type: String, required: true },
});

export const Client = model<ClientType>("Client", clientSchema);
