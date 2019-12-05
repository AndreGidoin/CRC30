import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle29.js'

let getContract29 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle29 = web3.eth.contract(ABI)
    let crcArticle29Instance = crcArticle29.at(address)
    resolve(crcArticle29Instance)
})

export default getContract29