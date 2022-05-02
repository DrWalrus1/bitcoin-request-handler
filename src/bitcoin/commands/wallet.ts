import BaseCommand from "./base-command";

export default class WalletCommands extends BaseCommand {
    
    /**
     * Abandons the Transaction
     */
    abandonTransaction(transactionID: string) {

    }
    /**
     * Abort rescan
     */
    abortrescan() {

    }

    addmultisigaddress() {}
    backupwallet() {}
    bumpfee(transactionID: string, options: object) {}
    loadwallet() {}
    unloadwallet() {}
}