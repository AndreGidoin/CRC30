import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle25.js'

let getContract25 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle25 = web3.eth.contract(ABI)
    let crcArticle25Instance = crcArticle25.at(address)
    resolve(crcArticle25Instance)
})

export default getContract25