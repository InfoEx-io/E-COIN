const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ECOIN", function () {
  it("Should return the new greeting once it's changed", async function () {
    const ECOIN = await ethers.getContractFactory("ECOIN");
    const ecoin = await ECOIN.deploy("Deploying E-COIN...");
    await ecoin.deployed();

    expect(await ecoin.greet()).to.equal("Deploying E-COIN...");

    const setGreetingTx = await ecoin.setGreeting("ECOIN deployed to:", ecoin.address);

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await ecoin.greet()).to.equal("ECOIN deployed to:", ecoin.address);
  });
});
