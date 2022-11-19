const {ethers} = require("hardhat");
const {expect} = require("chai");

describe('XYZ Contract', () => {
    let XYZ, owner, addr1; 

    beforeEach(async () => {

        [owner, addr1] = await ethers.getSigners();
        const contractFactory = await ethers.getContractFactory('XYZ');
        XYZ = await contractFactory.deploy('0x068399E117886632101eddA8FA00f81A9866af9c');

        await XYZ.deployed();

        console.log("Contract is deployed at address ", XYZ.address);
    });


    it('should become a member and get the proposal', async () => {

        await XYZ.connect(owner).becomeMember({value: ethers.utils.parseEther("100")});

        await XYZ.connect(owner).createProposal('XYZ', "hel", 'a', 'asasa', {value: ethers.utils.parseEther("20")});

        expect(await XYZ.totalProposals()).to.equal(1);

        const arr = await XYZ.getProposals();

        expect(arr.length).to.equal(1);
    });

})