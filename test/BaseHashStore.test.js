var BaseHashStore = artifacts.require('BaseHashStore');

var EVMRevert = require('zeppelin-solidity/test/helpers/EVMRevert');

require('chai')
  .use(require('chai-as-promised'))
  .should();
require('truffle-test-utils').init();

contract('BaseHashStore', function ([owner, other]) {
  let store;

  before(async function () {
    store = await BaseHashStore.new({ from: owner });
  });

  it('should allow the owner to set the hash', async function () {
      await store.setHashString('TEST', { from: owner });
      (await store.hashString()).should.be.equal('TEST');
  });

  it('should emit HashStringSet event', async function () {
    const res = await store.setHashString('TEST1', { from: owner });
    expect.web3Event(res, {
      event: 'HashStringSet', args: { newHashString: 'TEST1' } 
    });
  });

  it('should not allow anyone else to set the string', async function () {
    store.setHashString('TEST', { from: other }).should.be.rejectedWith(EVMRevert);
  });
});
