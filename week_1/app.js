const Web3 = require('web3');

const makeTransec = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545/");
  // Get all accounts you created
  let accounts = await web3.eth.personal.getAccounts();
  console.log('All accounts generated \n', accounts);

  // Check for balance of accounts in wei
  let balance = await web3.eth.getBalance(accounts[0]);
  console.log(`balance of account accounts[0] is ${balance} wei`);

  // Lets sign the message ‘gEth is Money’ hash
  let signed_message_hash = await web3.eth.personal.sign('gEth is Money', accounts[0], "aman");
  console.log(`signed_message_hash is ${signed_message_hash}`);

  // Now transaction sending gEth
  let transaction_hash = await web3.eth.personal.sendTransaction({
    from: accounts[0],
    gasPrice: "20000000000",
    gas: "2100000",
    to: accounts[1],
    value: "10",
    data: ""
  }, "aman");
  console.log(`transaction hash of sent transaction: ${transaction_hash}`);
}
makeTransec()
