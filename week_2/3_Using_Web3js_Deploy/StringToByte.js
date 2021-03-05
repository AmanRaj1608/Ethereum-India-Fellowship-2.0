const ethers = require('ethers')

const inBytes = ethers.utils.formatBytes32String("Aman is learning etherjs");

console.log(inBytes); // 0x416d616e206973206c6561726e696e672065746865726a730000000000000000
