import BaseCommand from "./base-command.js";

/**
  * If verbosity is 0, returns a string that is serialized, hex-encoded data for block ‘hash’.
  * 
  * If verbosity is 1, returns an Object with information about block ‘hash’.
  * 
  * If verbosity is 2, returns an Object with information about block ‘hash’ and information about each transaction.
 */
type Verbosity = 0 | 1 | 2;

type BlockchainResponse = {
    response?: {

    },
    result?: string,
    error: null

}

function isBlockchainResponse (value: any): value is BlockchainResponse {
    return ((value as BlockchainResponse).result !== undefined || (value as BlockchainResponse).response !== undefined) && (value as BlockchainResponse).error !== undefined
}

export default class BlockchainCommands extends BaseCommand {
    /**
     * Returns the hash of the best (tip) block in the most-work fully-validated chain.
     */
    async getBestBlockHash() {
        let response: unknown = await this.sendRequest("getbestblockhash");
        if (isBlockchainResponse(response)) {
            console.log(response.result);
        } else {
            throw new Error("Something went wrong trying to receive a response from Bitcoin RPC.")
        }
        

    }

    /**
     * 
     * @param hash the block hash
     * @param verbosity 0 for hex-encoded data, 1 for a json object, and 2 for json object with transaction data
     * @returns A string that is serialized, hex-encoded data for block ‘hash’
     */
    getBlock(hash: string, verbosity?: Verbosity) {
        
    }

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