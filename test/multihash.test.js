const getBytes32FromMultihash = require('../src/multihash').getBytes32FromMultihash;
const getMultihashFromBytes32 = require('../src/multihash').getMultihashFromBytes32;

require('chai')
  .should();

describe('multihash', async function () {
  it('should convert IPFS hash back and forth', async function () {
    const multihash = 'QmahqCsAUAw7zMv6P6Ae8PjCTck7taQA6FgGQLnWdKG7U8';

    multihash.should.be.equal(
      getMultihashFromBytes32(getBytes32FromMultihash(multihash))
    );
  });
});
