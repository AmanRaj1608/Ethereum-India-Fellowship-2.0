# Week 2: Smart contract development

### Objective

This week we learned about the intricacies of smart contracts, and the Solidity programming language.

#### 1: Introduction to Remix IDE & Solidity

Remix IDE is an open source web and desktop application. It fosters a fast development cycle and has a rich set of plugins with intuitive GUIs. Remix is used for the entire journey of contract development as well as being a playground for learning and teaching Ethereum.

I went through basic [guide](https://remix-learneth-plugin.readthedocs.io/en/latest/ui.html) of Remix.

Then I went to [Crypto Zombies course](https://cryptozombies.io/en/course/). I solved first 3 courses there. It was super helpful, I got know how we can write solidity and event compile, deploy and use it with javascript.

So as we are now one of the node of goerli we are syncing all data available on other nodes running. For me it took aroud 6hrs to sync all the data.

After syncing finished we are one of the node. Now we can interact with it.

#### 2: Exploring Remix

In this task we learned about compiling, deployment and write unit test on Remix.

So on the I easily compiled one contract and then I explored the testing part.

I used the [docs](https://remix-ide.readthedocs.io/en/latest/unittesting.html) to learn and write test files. Using Unit Testing plugin then tested the contract.

#### 3: Using Web3.js or ethers.js scripts

Here I explored both web3.js and ether.js. I found Web.js community to big and moved ahead with it. We learned how to interact with using contract, calling functions using web3.

#### 4: Create your own ERC20 token

In this task we were supposed to create our own ERC20 token on a testnet, then create an exchange for your token with Uniswap so that anyone can buy your token with Eth.

I explored and learned about the ERC20 tokens and industry standard. I wrote my own token and named it AMR. I created a pool on Uniswap of ETH to AMR on goerli testnet. You can checkout here-
`Pool created on UniSwap ETH -> AMR (AmanRaj1608)`
`https://goerli.etherscan.io/tx/0xd95d32a867efdcbb0044a27f6f05edf88cb96a804360f219bb2430ce926d75f1`

#### 5. DIY smart contract

Here we were expected to write a smart contract that will send all of its balance to a pre-set address if the owner of that contract has not called a still_alive function on the contract in the last 10 blocks.

Here I learned about the SELFDESTRUCT opcode uses negative gas because the operation frees up space on the blockchain by clearing all of the contract's data.

I wrote the smart contract that keep track that 10 block not passed adn if 10 block passed use selfdestruct to send all contract's current balance to address.

This “Dead-man’s switch” assignment was best way to reinforce our knowledge of solidity.

#### 6. Create a simple multi-sig wallet

In simple multi-sig wallets we require two or more private keys to sign and send a transaction.
I learned how these works and tried to write a smart cobtract on this.

### What I learned

This week was very big jump, I learned about Solidity language and Remix IDE to compile and deploy contracts. Used web3.js to interact with smart contract deployed on testnet. I created my own ERC20 token.

I also tried to interact with contracts deplyed on mainnet. We can call read only functions deployed on mainnet without gas fee.

After finishing all these I started to learn more about web3.js. I tried truffle tool which is an alternative of deplying using Remix.
