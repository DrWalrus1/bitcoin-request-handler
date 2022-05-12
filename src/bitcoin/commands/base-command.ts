import { RPCConfig } from "../rpc-config.js"
export { RPCResponse } from "../rpc-response.js";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";

export default class BaseCommand {
    protected config: RPCConfig

    constructor(config: RPCConfig) {
        this.config = config
    }

    async sendRequest(method: string, parameters?: Array<any>, path = "") {
        let id = uuidv4();

        let json = {
            jsonrpc: "1.0",
            id: id,
            method: method,
            params: parameters
        }

        const response = await fetch(`${this.config.host}:${this.config.port}/${path}`, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${this.config.rpcAuth}`
            }
        })

        return response.json();
    }
}