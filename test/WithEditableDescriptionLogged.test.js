var WithEditableDescriptionLogged = artifacts.require("WithEditableDescriptionLogged");

require('truffle-test-utils').init();
require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('WithEditableDescriptionLogged', function() {
    it('should be properly constructed', async function(){
        this.instance = await WithEditableDescriptionLogged.new("Test");
    });

    it('should emit proper DescriptionChanged event', async function(){
        expect.web3Event((await this.instance.changeDescription('Changed')),{
            event: 'DescriptionChanged',
            args: {
                newDescription: 'Changed'
            }
        }, 'Emitted event with new description');
    });
});  