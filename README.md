# How to deploy a contract on the BSC

## Add the wright config to the `hardhat.config.js`

```js
module.exports = {
  solidity: "0.8.4",
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`0x${PRIVATE_KEY}`],
      // testnet link: https://testnet.bscscan.com/
    },
    bscMainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
```

## Configure your MetaMask

Metamask => Networks => CustomRPC

- **Network Name:** BSC Testnet
- **New RPC URL:** https://data-seed-prebsc-1-s1.binance.org:8545
- **Chain ID:** 97
- **Currency Symbol:** BNB
- **Block Explorer URL:** https://testnet.bscscan.com

## Get test BNB at the [BNB testnet faucet](https://testnet.binance.org/faucet-smart)

## Deploy

As in Ethereum testnet or mainnet use:

```zsh
npx hardhat run --network bscTestnet scripts/CONTRACT-deploy.js
```

# Deploy on the Polygon Mumbai testnet

## `hardhat.config.js`

```js
module.exports = {
  solidity: "0.8.4",
  networks: {
    polygonTestnet: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
```

## Configure MetaMask:

- **Network Name:** Mumbai Testnet
- **New RPC URL:** https://rpc-mumbai.matic.today
- **Chain ID:** 80001
- **Currency Symbol:** MATIC
- **Block Explorer URL:** https://explorer-mumbai.maticvigil.com/

## [Get test MATIC](https://faucet.matic.network/)

## Deploy

As in Ethereum testnet or mainnet use:

```zsh
npx hardhat run --network polygonTestnet scripts/CONTRACT-deploy.js
```

# Deployed contract

**address:** 0xa5F6e9625Fc4FA8ae55F4B46De03Cda6C47b9Bad
