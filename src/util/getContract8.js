import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle8.js'

let getContract8 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle8 = web3.eth.contract(ABI)
    let crcArticle8Instance = crcArticle8.at(address)
    resolve(crcArticle8Instance)
})

export default getContract8