"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const parse_service_1 = require("../services/parse.service");
exports.router = express_1.default.Router();
exports.router.post("/v1/parse", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body.data;
        const Client = yield parse_service_1.parseV1(data);
        const result = {
            statusCode: 200,
            data: Client
        };
        res.status(200).send(result);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}));
exports.router.post("/v2/parse", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        let data = req.body.data;
        const Client = yield parse_service_1.parseV2(data);
        const result = {
            statusCode: 200,
            data: Client
        };
        res.status(200).send(result);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
}));
