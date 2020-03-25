import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle17.js'

let getContract17 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle17 = web3.eth.contract(ABI)
    let crcArticle17Instance = crcArticle17.at(address)
    resolve(crcArticle17Instance)
})

export default getContract17