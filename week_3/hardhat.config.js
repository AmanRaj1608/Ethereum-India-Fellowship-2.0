require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const INFURA_PROJECT_ID = "196440d5d02d41dfa2a8ee5bfd2e96bd";

const ROPSTEN_PRIVATE_KEY = "97d8cb40d55f97fa4a9dcbb9d89b159128b95043edfd835467553f3b5c69d7af";

module.exports = {
  solidity: "0.7.3",
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};


// So I deployed same contract on Kovan, Rinkeby, Goerli and Ropsten. They deployment process is same in all we just have to configure the hardhat.config.js with networks and hardhat handles everything. 

// Ropsten 0x544f5086fd0006582f05ec1f298bfb261aa07244
// Rinkeby 0xf6071df658a7a70c3581d23162ca95d282c869d0
// Goerli 0x586fac8b05e524e23b0429e31fe6fc3fed9164db
// Kovan 0x762c9df60bddff3d8affc4151ee7c0b63af3944d


// ____ denotes a sequence of connector functions to achieve a given use case in Instadapp.
// (A) web3
// (B) Spells
// (C) infura
// (D) oasis