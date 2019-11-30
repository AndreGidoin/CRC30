import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle24.js'

let getContract24 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle24 = web3.eth.contract(ABI)
    let crcArticle24Instance = crcArticle24.at(address)
    resolve(crcArticle24Instance)
})

export default getContract24