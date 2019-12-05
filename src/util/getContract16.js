import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle16.js'

let getContract16 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle16 = web3.eth.contract(ABI)
    let crcArticle16Instance = crcArticle16.at(address)
    resolve(crcArticle16Instance)
})

export default getContract16