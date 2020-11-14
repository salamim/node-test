import express, { Request, Response } from "express";
import { Client } from "../models/client.interface";
import { Result } from "../models/result.interface";
import { parseV1, parseV2 } from "../services/parse.service";

export const router = express.Router();

router.post("/v1/parse", async (req: Request, res: Response) => {
  try {
    let data = req.body.data;

    const Client: Client = await parseV1(data);
    const result: Result = {
        statusCode: 200,
        data: Client
    }

    res.status(200).send(result);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.post("/v2/parse", async (req: Request, res: Response) => {
  try {
    let data = req.body.data;

    const Client: Client = await parseV2(data);
    const result: Result = {
        statusCode: 200,
        data: Client
    }

    res.status(200).send(result);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
