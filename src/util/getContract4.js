import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle4.js'

let getContract4 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle4 = web3.eth.contract(ABI)
    let crcArticle4Instance = crcArticle4.at(address)
    resolve(crcArticle4Instance)
})

export default getContract4