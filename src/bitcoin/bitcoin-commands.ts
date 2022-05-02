import fetch from "node-fetch";
import { RPCConfig } from "./rpc-config";
import BlockchainCommands from "./commands/blockchain";
import ControlCommands from "./commands/control";
import GeneratingCommands from "./commands/generating";
import MiningCommands from "./commands/mining";
import NetworkCommands from "./commands/network";
import SignerCommands from "./commands/signer";
import TransactionCommands from "./commands/transactions";
import UtilityCommands from "./commands/util";
import WalletCommands from "./commands/wallet";
import ZmqCommands from "./commands/zmq";

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