import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle7.js'

let getContract7 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle7 = web3.eth.contract(ABI)
    let crcArticle7Instance = crcArticle7.at(address)
    resolve(crcArticle7Instance)
})

export default getContract7