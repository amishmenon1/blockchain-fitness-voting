# Blockchain Fitness Voting App

Deployed site: https://amishmenon1.github.io/blockchain-fitness-voting/

# Fitness Voting App (Using self-deployed smart contracts)

This is a simple application that allows users to vote between Weightlifting and Cardio. The results are posted to the blockchain using a custom smart contract that keeps track of the votes. The winning selection is displayed in the UI.

** This is for testing purposes only. All addresses and keys are for the Ropsten testnet. **

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application Design

<>

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap

## Developer Docs

### Prerequisites

1. Install Ethers
   - `npm install ethers`
2. Install Truffle (I used 5.0.0)
   - `npm install truffle@5.0.0`
3. Install Ganache CLI
   - `npm install ganache-cli`
4. Install HDWallet Provider
   - `npm install @truffle/hdwallet-provider`
5. Register for Infura account and set up node on Ropsten network (ETH testnet)
6. Install Metamask and configure connection to Ropsten testnet
   - You will also need to fund the wallet with test ETH from a Ropsten faucet

### Configuring Truffle and Ganache

1. Start Ganache CLI

   - `ganache-cli`
   - the first address in the array is the account being used (accounts[0])
   - Add mnemonic phrase to _.env_ file (must be git ignored!!)

2. Configure development network to point to local ganache instance (CLI is 8545, GUI is 7545)

3. Add Infura `PROJECT_ID` to same _.env_ file (must be git ignored!!)

4. Setup HDWallet Provider to be able to connect to a testnet

   - add these 2 lines at the top of _truffle-config.js_:
     - `require("dotenv").config();`
     - `const HDWalletProvider = require("@truffle/hdwallet-provider");`

5. Configure Ropsten network to point to Infura instance

   - ```ropsten: {
       provider: () =>
         new HDWalletProvider(
           process.env.MNEMONIC,
           `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
         ),
       network_id: 3, // Ropsten's id
       gas: 5500000, // Ropsten has a lower block limit than mainnet
       confirmations: 2, // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
     },
     ```

   ```

   ```

### Compiling and Deploying Smart Contracts (Local)

1. Add Solidity smart contracts (.sol) to _/contracts_ folder
2. Compile with Truffle
   - `truffle compile`
   - if truffle command not found, try `npx truffle compile`
3. Migrate smart contracts to _/build_ folder
   - `truffle migrate` or `npx truffle migrate`

### Deploying Smart Contract to Testnet via Infura Node

1. Fund your test account with ETH on the Ropsten network
   - go to a Ropsten faucet and provide your account address (accounts[0] from above)
2. Migrate smart contracts to Ropsten network
   - `truffle migrate --network ropsten`

### Connecting to Smart Contract via UI

#### (Assuming an already set up skeleton UI project - I'm using React)

1. Import ethers
2. Pull in ABIs from _build_ folder
3. Pull in deployed contract address from _build_ folder
4. Get contract
   - `const storageContract = new ethers.Contract(<contract_address>)`

## Resources

- https://medium.com/coinmonks/simplest-way-to-connect-your-smart-contracts-to-the-front-end-react-with-web3-js-1e75702ea36a

- https://blog.infura.io/ethereum-javascript-libraries-web3-js-vs-ethers-js-part-ii/
