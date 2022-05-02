import BaseCommand from "./base-command";


type Verbosity = 0 | 1 | 2;

export default class BlockchainCommands extends BaseCommand {
    /**
     * Returns the hash of the best (tip) block in the most-work fully-validated chain.
     */
    getBestBlockHash(): string {
        return "hello";
    }

    getBlock(hash: string, verbosity?: Verbosity) {}
}