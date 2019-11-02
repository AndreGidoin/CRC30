import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle1.js'


let getContract1 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle2 = web3.eth.contract(ABI)
    let crcArticle2Instance = crcArticle2.at(address)
    // crc30ContractInstance = () => crc30ContractInstance
    resolve(crcArticle2Instance)
})

export default getContract1