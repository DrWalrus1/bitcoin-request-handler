import {BitcoinHandler, RPCConfig } from "./bitcoin/bitcoin-handler";

let config = new RPCConfig("127.0.0.1", 18443, "lnd", "lightning");

let bitcoinHandler = new BitcoinHandler(config)

bitcoinHandler.sendRequest("loadwallet")
