// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.22 <0.8.0;
import "remix_tests.sol"; // this import is automatically injected by Remix.
import "remix_accounts.sol";
import "../1_Storage.sol";

// File name has to end with '_test.sol', this file can contain more than one testSuite contracts
contract testSuite {
    // Create global instance of contract
    Storage s;

    // Random data for testing
    uint256 randNum = 10; // change value to testing
    bool isNegative = false;
    int256 i;

    // update instance beforeAll other func
    function beforeAll() public {
        s = new Storage();
    }

    //
    function checkSuccess() public {
        s.store(randNum);
        Assert.equal(randNum, s.retrieve(), "varification failed");
    }

    function checkSuccess2() public {
        Assert.greaterThan(
            randNum,
            int256(-1),
            "Given value found is negative"
        );
    }

    function checkFailure() public {
        // testing many values using for loop
        for (i = 0; i < 100; i++) {
            s.store(randNum);
            Assert.equal(s.retrieve(), randNum, "Failed on running many times");
        }
    }

    function checkSenderAndValue() public payable {
        // account index varies 0-9, value is in wei
        Assert.equal(msg.sender, TestsAccounts.getAccount(1), "Invalid sender");
        Assert.equal(msg.value, 100, "Invalid value");
    }
}
