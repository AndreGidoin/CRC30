import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle19.js'

let getContract19 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle19 = web3.eth.contract(ABI)
    let crcArticle19Instance = crcArticle19.at(address)
    resolve(crcArticle19Instance)
})

export default getContract19