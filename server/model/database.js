import mongoose from "mongoose";

const xyzDao = new mongoose.Schema({
  WalletAddress: { type: String, required: true },
  cid: { type: String, required: true },
  url: { type: String, required: true },
});

export const XyzDao = mongoose.model("XyzDao", xyzDao);
