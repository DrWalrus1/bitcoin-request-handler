import { RPCConfig } from "../rpc-config"

export default class BaseCommand {
    protected config: RPCConfig

    constructor(config: RPCConfig) {
        this.config = config
    }
}