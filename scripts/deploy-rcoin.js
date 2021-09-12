// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const RCOIN = await ethers.getContractFactory('RCOIN');
  console.log('Deploying R-COIN...');
  const rcoin = await RCOIN.deploy();
  await rcoin.deployed();
  console.log('RCOIN deployed to:', rcoin.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });