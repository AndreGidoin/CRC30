import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle3.js'

let getContract3 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle3 = web3.eth.contract(ABI)
    let crcArticle3Instance = crcArticle3.at(address)
    // crc30ContractInstance = () => crc30ContractInstance
    resolve(crcArticle3Instance)
})

export default getContract3