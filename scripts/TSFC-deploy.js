/* eslint-disable comma-dangle */
const { ethers } = require('hardhat')
const hre = require('hardhat')
const { deployed } = require('./deployed')

const CONTRACT_NAME = 'TibetanSandFoxCoin'
const SUPPLY = ethers.utils.parseEther('37000')

const main = async () => {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)
  const TibetanSandFoxCoin = await hre.ethers.getContractFactory(CONTRACT_NAME)
  const tibetanSandFoxCoin = await TibetanSandFoxCoin.deploy(
    SUPPLY,
    deployer.address
  )
  await tibetanSandFoxCoin.deployed()
  await deployed(CONTRACT_NAME, hre.network.name, tibetanSandFoxCoin.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
