import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle12.js'

let getContract12 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle12 = web3.eth.contract(ABI)
    let crcArticle12Instance = crcArticle12.at(address)
    resolve(crcArticle12Instance)
})

export default getContract12