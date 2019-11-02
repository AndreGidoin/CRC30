import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle6.js'

let getContract6 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle6 = web3.eth.contract(ABI)
    let crcArticle6Instance = crcArticle6.at(address)
    resolve(crcArticle6Instance)
})

export default getContract6