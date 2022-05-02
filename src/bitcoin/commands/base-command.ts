import { RPCConfig } from "../rpc-config"

export default class BaseCommand {
    config: RPCConfig

    constructor(config: RPCConfig) {
        this.config = config
    }
}