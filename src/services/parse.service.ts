import { Client } from "../models/client.interface";

let zeroes = "0";

const parseString = async(data: string): Promise<string[]> => {
    let parsedData = data.split("0");
    return parsedData;
}

const fromatPhoneNumber = async(phoneNumber: string): Promise<string> => {
    let match = phoneNumber.match(/^(\d{3})(\d{4})$/);
    
    if (match) {
        return match[1] + '-' + match[2]
    }

    return phoneNumber;
}

export const parseV1 = async(data: string): Promise<Client> => {
    let parsedData = await parseString(data);

    let newClient:Client = {
        firstName: parsedData[0] + zeroes.repeat(4),
        lastName: parsedData[4] + zeroes.repeat(3),
        clientId: parsedData[7]
    };

    return newClient;
}

export const parseV2 = async(data: string): Promise<Client> => {
    let parsedData = await parseString(data);

    let newClient:Client = {
        firstName: parsedData[0],
        lastName: parsedData[4],
        clientId: await fromatPhoneNumber(parsedData[7])
    };

    return newClient;
}