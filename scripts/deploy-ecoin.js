// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const ECOIN = await ethers.getContractFactory('ECOIN');
  console.log('Deploying E-COIN...');
  const ecoin = await ECOIN.deploy();
  await ecoin.deployed();
  console.log('ECOIN deployed to:', ecoin.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });