const OwnerAddress = '0xEB2529B90301CeD7417FEB7eF20A8c986Cb2B1ae'; // goerli testnet

const OwnerBytecode = "608060405234801561001057600080fd5b5060008054600160a060020a0319163317808255604051600160a060020a039190911691907f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a735908290a360c6806100686000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663893d20e881146043575b600080fd5b348015604e57600080fd5b506055607e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff16905600a165627a7a723058205ad081552bd9a6cb0669ce8888fb40c795cdf6856cf9387dad945b3db862d1a80029";

const OwnerAbi = [
  {
    "constant": true,
    "inputs": [],
    "name": "getOwner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "oldOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnerSet",
    "type": "event"
  }
];


module.exports = { OwnerAbi, OwnerAddress, OwnerBytecode }