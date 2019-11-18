import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle31.js'

let getContract31 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle31 = web3.eth.contract(ABI)
    let crcArticle31Instance = crcArticle31.at(address)
    resolve(crcArticle31Instance)
})

export default getContract31