import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle35.js'

let getContract35 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle35 = web3.eth.contract(ABI)
    let crcArticle35Instance = crcArticle35.at(address)
    resolve(crcArticle35Instance)
})

export default getContract35