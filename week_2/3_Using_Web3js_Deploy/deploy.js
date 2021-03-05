const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');


const privateKey = '97d8cb40d55f97fa4a9dcbb9d89b159128b95043edfd835467553f3b5c69d7af';
const rpcUrl = 'https://goerli.infura.io/v3/196440d5d02d41dfa2a8ee5bfd2e96bd';

const provider = new HDWalletProvider(privateKey, rpcUrl);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();