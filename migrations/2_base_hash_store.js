var BaseHashStore = artifacts.require('./BaseHashStore.sol');

module.exports = function (deployer) {
  deployer.deploy(BaseHashStore);
};
