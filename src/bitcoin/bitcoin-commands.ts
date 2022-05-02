import fetch from "node-fetch";
import WalletCommands from "./commands/wallet";
import BlockchainCommands from "./commands/blockchain";
import { RPCConfig } from "./rpc-config";

export class Bitcoin {
    blockchain: BlockchainCommands
    wallet: WalletCommands

    constructor(config: RPCConfig) {
        this.setConfig(config);

    }

    setConfig(config: RPCConfig) {
        this.blockchain = new BlockchainCommands(config);
        this.wallet = new WalletCommands(config);
    }
}