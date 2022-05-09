import BaseCommand from "./base-command.js";

/**
  * If verbosity is 0, returns a string that is serialized, hex-encoded data for block ‘hash’.
  * 
  * If verbosity is 1, returns an Object with information about block ‘hash’.
  * 
  * If verbosity is 2, returns an Object with information about block ‘hash’ and information about each transaction.
 */
type Verbosity = 0 | 1 | 2;

export default class BlockchainCommands extends BaseCommand {
    /**
     * Returns the hash of the best (tip) block in the most-work fully-validated chain.
     */
    getBestBlockHash(): string {
        return "hello";
    }

    /**
     * 
     * @param hash the block hash
     * @param verbosity 0 for hex-encoded data, 1 for a json object, and 2 for json object with transaction data
     * @returns A string that is serialized, hex-encoded data for block ‘hash’
     */
    getBlock(hash: string, verbosity?: Verbosity) {}

    /**
     * Returns an object containing various state info regarding blockchain processing.
     */
    getBlockChainInfo() {}

    getblockcount() {}
    getblockfilter(blockhash: string, filterType: string) {}
    getblockhash(height: number) {}
    getblockheader() {}
    getblockstats() {}
    getchaintips() {}
    getchaintxstats() {}
    getdifficulty() {}
    getmempoolancestors() {}
    getmempooldescendants() {}
    getmempoolentry() {}
    getmempoolinfo() {}
    getrawmempool() {}
    gettxout() {}
    gettxoutproof() {}
    gettxoutsetinfo() {}
    preciousblock() {}
    pruneblockchain() {}
    savemempool() {}
    scantxoutset() {}
    verifychain() {}
    verifytxoutproof() {}

}