const { expect } = require('chai');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Box = artifacts.require('Box');

contract('Box (proxy)', function() {
    beforeEach(async function() {
        this.box = await deployProxy(Box, [42], { initializer: 'store' });
    })

    it('retrieve returns a value previously initialized', async function() {
        expect((await this.box.retrieve()).toString()).to.equal('42');
    })
})