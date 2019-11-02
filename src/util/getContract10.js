import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle10.js'

let getContract10 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle10 = web3.eth.contract(ABI)
    let crcArticle10Instance = crcArticle10.at(address)
    resolve(crcArticle10Instance)
})

export default getContract10