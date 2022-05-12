import BaseCommand from "./base-command.js";;

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
    

    createwallet(walletName: string) {
        this.sendRequest("createwallet", [walletName])
    }

    dumpprivkey() {}
    dumpwallet() {}
    encryptwallet() {}
    getaddressesbylabel() {}
    getaddressinfo() {}
    getbalance() {}
    getbalances() {}
    getnewaddress() {}
    getrawchangeaddress() {}
    getreceivedbyaddress() {}
    getreceivedbylabel() {}
    gettransaction() {}
    getunconfirmedbalance() {}
    getwalletinfo() {}
    importaddress() {}
    importdescriptors() {}
    importmulti() {}
    importprivkey() {}
    importprunedfunds() {}
    importpubkey() {}
    importwallet() {}
    keypoolrefill() {}
    listaddressgroupings() {}
    listlabels() {}
    listlockunspent() {}
    listreceivedbyaddress() {}
    listreceivedbylabel() {}
    listsinceblock() {}
    listtransactions() {}
    listunspent() {}
    listwalletdir() {}

    
    listwallets() {}

    /**
     * 
     * @param walletName {String} - Name of the wallet
     */
    loadwallet(walletName: string) {
        this.sendRequest("loadwallet", [walletName]);
    }
    
    lockunspent() {}
    psbtbumpfee() {}
    removeprunedfunds() {}
    rescanblockchain() {}
    send() {}
    sendmany() {}
    sendtoaddress() {}
    sethdseed() {}
    setlabel() {}
    settxfee() {}
    setwalletflag() {}
    signmessage() {}
    signrawtransactionwithwallet() {}
    unloadwallet() {}
    upgradewallet() {}
    walletcreatefundedpsbt() {}
    walletlock() {}
    walletpassphrase() {}
    walletpassphrasechange() {}
    walletprocesspsbt() {}
}