import express, { Request, Response } from "express";
import { Client } from "../models/client.interface";
import { Result } from "../models/result.interface";
import { Error } from "../models/error.interface";
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

    res.status(200).json(result);
  } catch (e) {
    const error:Error = {
      statusCode: 400,
      message: e.message
    }

    res.status(400).json(error);
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

    res.status(200).json(result);
  } catch (e) {
    const error:Error = {
      statusCode: 400,
      message: e.message
    }

    res.status(400).json(error);
  }
});
