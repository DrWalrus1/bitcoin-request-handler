import fetch from "node-fetch";
import { RPCConfig } from "./rpc-config.js";
import BlockchainCommands from "./commands/blockchain.js";
import ControlCommands from "./commands/control.js";
import GeneratingCommands from "./commands/generating.js";
import MiningCommands from "./commands/mining.js";
import NetworkCommands from "./commands/network.js";
import SignerCommands from "./commands/signer.js";
import TransactionCommands from "./commands/transactions.js";
import UtilityCommands from "./commands/util.js";
import WalletCommands from "./commands/wallet.js";
import ZmqCommands from "./commands/zmq.js";

export class Bitcoin {
    blockchain: BlockchainCommands
    control: ControlCommands
    generating: GeneratingCommands
    mining: MiningCommands
    network: NetworkCommands
    signer: SignerCommands
    transaction: TransactionCommands
    utility: UtilityCommands
    wallet: WalletCommands
    zmq: ZmqCommands

    constructor(config: RPCConfig) {
        this.setConfig(config);

    }

    setConfig(config: RPCConfig) {
        this.blockchain = new BlockchainCommands(config);
        this.control = new ControlCommands(config)
        this.generating = new GeneratingCommands(config);
        this.mining = new MiningCommands(config);
        this.network = new NetworkCommands(config);
        this.signer = new SignerCommands(config);
        this.transaction = new TransactionCommands(config);
        this.utility = new UtilityCommands(config);
        this.wallet = new WalletCommands(config);
        this.zmq = new ZmqCommands(config);
    }
}