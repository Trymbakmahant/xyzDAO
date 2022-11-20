import express, { application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connection } from "./db";
import { Web3Storage } from "web3.storage";
import { File } from "web3.storage";
import { XyzDao } from "./model/database";
import dotenv from "dotenv";
dotenv.config();
connection();
import axios from "axios";
const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json({ strict: false }));
app.use(cors());

app.post("/api/ipfs", async (req, res) => {
  try {
    const client = new Web3Storage({
      token: process.env.key,
    });

    const buffer = Buffer.from(JSON.stringify(req.body));

    const files = [new File([buffer], "ok")];

    const cid = await client.put(files);

    const url = "https://" + cid + ".ipfs.w3s.link/ok";
    console.log(url);

    const Address = JSON.stringify(req.body.address);
    const dataofuser = new XyzDao({
      WalletAddress: Address,
      cid: cid,
      url: url,
    });
    await dataofuser.save();
    console.log("datasave hogya h ");

    res.json({ status: "success" });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.post("/api/getdata", async (req, res) => {
  try {
    const address = JSON.stringify(req.body.address);
    const Check = await XyzDao.find({
      WalletAddress: { $eq: address },
    });
    const UserActivity = [];
    for (var i = 0; i < Check.length; i++) {
      const ans = await axios.get(Check[i].url);
      UserActivity.push(ans.data);
    }

    res.json(UserActivity.reverse());
    console.log(UserActivity.reverse());
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/getcid", async (req, res) => {
  try {
    const address = JSON.stringify(req.body.address);
    const Check = await XyzDao.find({
      WalletAddress: { $eq: address },
    });
    console.log(JSON.stringify(Check));
    res.json(Check);
  } catch (e) {
    console.log(e);
  }
});
const port = 8081;
app.listen(port, console.log(`Listening on port ${port}...`));
