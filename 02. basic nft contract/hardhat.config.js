require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            { version: "0.5.7" },
            { version: "0.6.7", settings: {} },
            { version: "0.8.20", settings: {} }, // Add this line.
        ],
    },
    networks: {
      // Define the sepolia network parameters here
      sepolia: {
        url: process.env.QUICKNODE_RPC_URL,
        accounts: [process.env.PRIVATE_KEY],
      },
    },
};