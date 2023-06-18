# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

#When youd deploy your contract:
1. Get your contract address and got to Context/constants.js and add the contract address there
2. Copy your CrowdFunding,json file from aritifacts/contracts/CrowdFunding.sol folder and past it into the Context folder