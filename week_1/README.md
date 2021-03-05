# Week 1: Interacting with a node

### Objective

The goal of this week was to give some familiarity with interacting with an Ethereum node. Even though we might use a service like [infura](https://infura.io/) to abstract node interactions away for most projects, it’s valuable to understand what’s going on under the hood when debugging contracts.

We used goerli testnet to

1. run and sync a goerli geth node
2. manage an account and send transactions with your node
3. use your node to retrieve data from goerli Ethereum
4. (optional challenge) learn about merkle trees

#### 1: Running geth on [goerli](https://goerli.net/)

I downloaded and installed [geth client](https://geth.ethereum.org/docs/install-and-build/installing-geth) and instaled on my Win 10 PC.
After installation we can interact it with our terminal. We can run un geth with the RPC API open:

`geth --goerli --rpc --rpcapi="eth,web3,personal,web3"`

So as we are now one of the node of goerli we are syncing all data available on other nodes running. For me it took aroud 6hrs to sync all the data.

After syncing finished we are one of the node. Now we can interact with it.

#### 2. Sending Transactions

In this task had to use interface with the newly synced Geth Node, using one of the several libraries available for this, I chose to do it using [web3js](https://web3js.readthedocs.io/en/v1.2.8/index.html) with Node.

I created a new Ethereum wallet, gave myself from Ethereum on the Testnet, used the management API to sign the message, and sent a transaction to another public address. Basically we figured out how to write data to the blockchain.

#### 3. Reading data

In this module, we had to

1.  Retrieve the first 128 block hashes and put them in a text file

This was easy to do with javascipt. I wrote a script loop through all

2. Next, we were supposed to find the first block on the goerli node to which a smart contract is deployed to.

This was quite complicated. What I did was I looped through all the blocks and checked if the size of block should be 10 times larger than old ones.

### What I learned

So, I learned about testnets, there are many more like rposten, rinkeby, kovan. We used goerli because it’s relatively small and quick to sync.

I learned about the difference between RPC and RPC. [Read here](https://stackoverflow.com/questions/2161674/is-there-a-difference-between-rpc-and-ipc)

Reading and writing data to the a RPC running node.
