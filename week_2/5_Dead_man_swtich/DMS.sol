// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.8.0; // using payable takes version above 5

// the SELFDESTRUCT opcode uses negative gas because the operation frees up space on the blockchain by clearing all of the contract's data.
contract DMS {
    address owner;
    uint256 balance;
    uint256 previousBlock;
    address payable recoverAddress;

    // Init contract with owner contract
    constructor() payable {
        owner = msg.sender;
        previousBlock = block.number;
        recoverAddress = payable(0xdbCaD3ca6AF619Ff5d8756aa13d6D917aD1f7E6C); // my addr
        balance = msg.value;
    }

    // keep track that 10 block not passed
    function isAlive() public {
        if (msg.sender == owner) {
            if (block.number - previousBlock <= 10) {
                previousBlock = block.number;
            } else {
                selfdestruct(recoverAddress);
            }
        }
    }

    // if 10 block passed use selfdestruct to send all contract's current balance to address
    function checkInactive() public {
        if (block.number - previousBlock > 10) {
            selfdestruct(recoverAddress);
        }
    }

    function getOwner() public view returns (address) {
        return msg.sender;
    }
}
