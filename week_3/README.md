# Week 3: Modern Eth Developement & getting started with DeFi

This week we had to start developing with the development environment that's fast becoming essential for the modern Ethereum developer. Later we deep dived into the most popular use case of Ethereum out there (DeFi) and putting our skills to use by building a basic decentralized application end-to-end.

#### 1. Exploring Hardhat

So as I used Remix IDE and truffle last week, Hardhat is also a development environment to compile, deploy, test, and debug your Ethereum software. Some features to be noted -

- Automate the recurring tasks like compiling, running, and testing smart contracts at the very core.
- Hardhat comes built-in with Hardhat Network, a local Ethereum network designed for development.
- console.log() and explicit error messages for debugging.

I completed the [tutorial](https://hardhat.org/tutorial/) and was able to understand all of the features it offers.
Used hardhat to deploy on different testnets.
Deployed same contract on Kovan, Rinkeby, Goerli and Ropsten. The deployment process is same in all we just have to configure the hardhat.`config.js` with networks and hardhat handles everything.

```
Ropsten 0x544f5086fd0006582f05ec1f298bfb261aa07244
Rinkeby 0xf6071df658a7a70c3581d23162ca95d282c869d0
Goerli 0x586fac8b05e524e23b0429e31fe6fc3fed9164db
Kovan 0x762c9df60bddff3d8affc4151ee7c0b63af3944d
```

Scaffold.eth integrates with Hardhart to provide a frontend to interact our smart contract. I tried installing but it was giving errors to all other members of fellowship too, so I moved on.

#### 2. Dive into DeFi

In this module we explored about Decentralized finance. A $39 billion worth of value locked in Ethereum smart contracts, decentralized finance has emerged as the most active sector in the blockchain space, with a wide range of use cases for individuals, developers, and institutions.

I watched few videos from YouTube and read few blogs on Defi.

```
DeFi Pulse is a site where you can find the latest analytics and rankings of DeFi protocols.
https://defipulse.com/
DeFiprime.com is a media outlet and analytical services provider for the DeFi community.
http://defiprime.com/
```

In this module we were assigned a Defi to which we needed to research, explore and present to everyone on weekend.
All the Defi protocols/projects were:

1. [Derivatives](https://defiprime.com/derivatives) + [Insurance](https://defiprime.com/insurance) (Synthetix, Opyn, Yearn.finance, Nexus Mutual) - Team Arth
2. [Decentralised Exchanges](https://defiprime.com/exchanges#ethereum) (Uniswap, Curve, Balancer, 1inch.exchange) - Team Harsh
3. [Lending & Borrowing](https://defiprime.com/decentralized-lending) + [Stablecoins](https://defiprime.com/stablecoins) (AAVE, Compound, Maker, DefiDollar) - Team Divya
4. [Asset Mangment Tools](https://defiprime.com/assets-management-tools#ethereum) (Instadapp, Zapper, Furucombo, Set Protocol) - Team Aniket
5. [Prediction Markets](https://defiprime.com/prediction-markets) + [Alternate Savings](https://defiprime.com/alternative-savings)/[Payments](https://defiprime.com/payments) (Augur, Pooltogether, Superfluid, Polymarket) - Team Pranav

So I got assigned to Instadapp, I went through the project and learned how they build their EthIndia hackathon project to $2.4M funded company.

I made one presentation - [here]()

### What I learned

This week I learned about new development tool hardhat. It was quite similar to truffle but have some advantage over it. I researched Instadapp a lot. I got familiar with concepts like flash loans, arbitrage and how instadapp helps web2 developers to use their platfor to take advantage of it.

I also learned a lot when other fellow mates presented and told about their protocols.
