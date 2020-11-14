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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseV2 = exports.parseV1 = void 0;
let zeroes = "0";
const parseString = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let parsedData = data.split("0");
    return parsedData;
});
const fromatPhoneNumber = (phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    let match = phoneNumber.match(/^(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2];
    }
    return '';
});
exports.parseV1 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let parsedData = yield parseString(data);
    let newClient = {
        firstName: parsedData[0] + zeroes.repeat(4),
        lastName: parsedData[4] + zeroes.repeat(3),
        clientId: parsedData[7]
    };
    return newClient;
});
exports.parseV2 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let parsedData = yield parseString(data);
    let newClient = {
        firstName: parsedData[0],
        lastName: parsedData[4],
        clientId: yield fromatPhoneNumber(parsedData[7])
    };
    return newClient;
});
