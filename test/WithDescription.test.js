var WithDescription = artifacts.require('WithDescription');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('WithDescription', function () {
  it('should be properly instantiated', async function () {
    this.instance = await WithDescription.new('Test');
  });

  it('should have a public description', async function () {
    (await this.instance.description.call()).should.be.equal('Test');
  });
});
