import Web3 from 'web3'
import {address, ABI} from './constants/crcArticle9.js'

let getContract9 = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let crcArticle9 = web3.eth.contract(ABI)
    let crcArticle9Instance = crcArticle9.at(address)
    resolve(crcArticle9Instance)
})

export default getContract9