import fetch from "node-fetch";

type BitcoinCommand = "loadwallet" | "unloadwallet";

export class RPCConfig {
    host: string
    port: number
    rpcAuth: string

    constructor(host: string, port: number, rpcuser: string, rpcpass: string) {
        this.host = host;
        this.port = port;

        this.setAuth(rpcuser, rpcpass);
    }

    setAuth(rpcuser: string, rpcpass: string) {
        this.rpcAuth = Buffer.from(`${rpcuser}:${rpcpass}`).toString('base64');
    }

    getAuth() {
        return this.rpcAuth;
    }
}

class BitcoinRequest {

}

export class BitcoinHandler {
    config: object

    constructor(config: RPCConfig) {
        
    }

    sendRequest(command: BitcoinCommand) {
        
    }
}