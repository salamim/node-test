import  { Client } from "./client.interface";

export interface Result {
    statusCode: number;
    data: Client;
}