const ethers = require("ethers");

const {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo,
} = require("./AddressList");

const { erc20ABI, factoryABI, routerABI, pairABI } = require("./AbiList");

// Standard Provider
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.bnbchain.org"); //Binance

console.log(provider);

// Connect to Factory
const contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);

//Connect to Router
const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

console.log(contractRouter);

//Call the Blockchain