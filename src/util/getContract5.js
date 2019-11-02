import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle5.js'

let getContract5 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle5 = web3.eth.contract(ABI)
    let crcArticle5Instance = crcArticle5.at(address)
    resolve(crcArticle5Instance)
})

export default getContract5