/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
const { expect } = require('chai')
const { ethers } = require('hardhat')

// some tests: https://github.com/RaphaelHardFork/ico-hardhat

const CONTRACT_NAME = 'TibetanSandFoxCoin'

describe('TibetanSandFoxCoin', function () {
  let TibetanSandFoxCoin, tibetanSandFoxCoin, dev, owner

  const SUPPLY = ethers.utils.parseEther('37000')
  const ADDRESS_ZERO = ethers.constants.AddressZero

  beforeEach(async function () {
    ;[dev, owner] = await ethers.getSigners()
    TibetanSandFoxCoin = await ethers.getContractFactory(CONTRACT_NAME)
    tibetanSandFoxCoin = await TibetanSandFoxCoin.connect(dev).deploy(
      SUPPLY,
      owner.address
    )
    await tibetanSandFoxCoin.deployed()
  })

  describe('Deployment', function () {
    it('should have name', async function () {
      expect(await tibetanSandFoxCoin.name()).to.equal('TibetanSandFoxCoin')
    })

    it('should have symbol', async function () {
      expect(await tibetanSandFoxCoin.symbol()).to.equal('TSFC')
    })
  })
})
