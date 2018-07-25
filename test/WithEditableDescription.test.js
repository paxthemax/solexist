var WithEditableDescription = artifacts.require('WithEditableDescription');

var EVMRevert = require('zeppelin-solidity/test/helpers/EVMRevert');

const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('WithEditableDescription', function ([owner, other]) {
  it('should be properly instantiated', async function () {
    this.instance = await WithEditableDescription.new('Test', { from: owner });
    this.instance.should.exist;
  });

  it('should have the right owner', async function () {
    (await this.instance.owner.call()).should.be.bignumber.equal(owner);
  });

  it('should allow the owner to change the description', async function () {
    await this.instance.changeDescription('Change', { from: owner });
    (await this.instance.description.call()).should.be.equal('Change');
  });

  it('should forbid anyone else form changing the description', async function () {
    await this.instance.changeDescription('Should fail', { from: other }).should.be.rejectedWith(EVMRevert);
  });
});
