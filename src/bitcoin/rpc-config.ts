/**
 * @property port - default is 18443
 */
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
}