const HDWalletProvider = require("truffle-hdwallet-provider");

require('babel-register')({
  ignore: /node_modules\/(?!zeppelin-solidity\/test\/helpers)/,
});
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: '8545',
      network_id: '*', // eslint-disable-line camelcase
    },
    // Testnets
    // Properties
    // network_id: identifier for network based on ethereum blockchain. Find out more at https://github.com/ethereumbook/ethereumbook/issues/110
    // gas: gas limit
    // gasPrice: gas price in gwei
    ropsten_infura: {
      provider: new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
    }
  }
};
