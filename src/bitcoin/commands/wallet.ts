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
    createwallet() {}
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
    loadwallet() {}
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