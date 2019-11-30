import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle37.js'

let getContract37 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle37 = web3.eth.contract(ABI)
    let crcArticle37Instance = crcArticle37.at(address)
    resolve(crcArticle37Instance)
})

export default getContract37