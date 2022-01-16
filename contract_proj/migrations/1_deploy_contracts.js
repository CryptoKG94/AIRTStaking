const stake = artifacts.require("AIRTStaking");
// const ape = artifacts.require("TheApeProject")
//const BUSD = artifacts.require("BUSD")

module.exports = async function(deployer) {
    //deploy Token

    // await deployer.deploy(ape)
    // const LS1 = await ape.deployed()

    const varibleAddress = "0x016CF83732f1468150D87dCC5BdF67730B3934D3";
    const AIRT = "0xF5db804101d8600c26598A1Ba465166c33CdAA4b";
    // await deployer.deploy(stake, LS1.address, varibleAddress)

    await deployer.deploy(stake, AIRT, varibleAddress)
    const staked = await stake.deployed();
    console.log('contract deployed at: ', staked.address)
};