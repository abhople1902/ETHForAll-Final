# MusicalNFT

*A decentralised music NFT marketplace where in one can generate a music as an nft , put it for sale on the marketplace or can buy the same*

# Features

- Implementation of NFT on a Musical Platform. Users can create their own decentralized music nfts.
- Built on ERC721 token using [OpenZeppelin](https://www.openzeppelin.com/)
- Using Metamask users can connect their wallet to the platform.
- To showcase different music styles via NFT creation
- Used ipfs for metadata storage of nfts.

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Ethers](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ipfs](https://ipfs.io/) (Metadata storage)
- [React routers](https://v5.reactrouter.com/) (Navigational components)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Hardhat](https://hardhat.org/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd nft_marketplace
$ npm install
```
### 3. Boot up local development blockchain
```
$ cd nft_marketplace
$ npx hardhat node
```

### 4. Connect development blockchain accounts to Metamask
- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337". Then click save.  


### 5. Migrate Smart Contracts
`npx hardhat run src/backend/scripts/deploy.js --network localhost`

### 6. Run Tests
`$ npx hardhat test`

### 7. Launch Frontend
`$ npm run start`

## Local Demo


# Challenges Faced
- Setting up a new environment to work with blockchain concepts included installation of several dependencies.
- OpenZeppelin was something new for us and it required reading its documentation for getting what we needed out of it.
- Source code of some open source projects that worked on a similar framework were needed to be reffered.
- Integration of  Next.js (used for frontend) and Solidity contract (used in backend) posed a major challenge as we needed to go back and forth between learning and applying it to our project.
- Some hard to catch bugs were needed to be resolved during testing the project by connecting to a wallet via metamask.
- Finally, referring and learning helped us overcome the above difficulties.

License
----
MIT

