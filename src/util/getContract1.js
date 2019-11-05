import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle1.js'


let getContract1 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle1 = web3.eth.contract(ABI)
    let crcArticle1Instance = crcArticle1.at(address)
    // crc30ContractInstance = () => crc30ContractInstance
    resolve(crcArticle1Instance)
})

export default getContract1