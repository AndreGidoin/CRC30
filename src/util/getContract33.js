import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle33.js'

let getContract33 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle33 = web3.eth.contract(ABI)
    let crcArticle33Instance = crcArticle33.at(address)
    resolve(crcArticle33Instance)
})

export default getContract33