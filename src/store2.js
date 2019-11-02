import Vue from "vue"
import Vuex from "vuex"
import state from './store/state'
import getWeb3 from './util/getWeb3'
import getContract from './util/getContract-Article2'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state,
  mutations: {
    registerWeb3Instance (state, payload) {
      console.log('registerWeb3instance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.coinbase = result.coinbase
      web3Copy.networkId = result.networkId
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Instance = result.web3
      state.web3 = web3Copy
    },
    registerContractInstance (state, payload) {
      console.log('CRC30 contract instance: ', payload)
      state.contractInstance = () => payload
    },
    registerContractInstance2 (state, payload) {
        console.log('Article 2 contract instance: ', payload)
        state.contractInstance2 = () => payload
    },
    registerIpfsHash (state, payload) {
      console.log('IPFS hash is ', payload)
      let result = payload
      imageHashIPFS = console.log(JSON.stringify(result))
    }
  },
  actions: {
    registerWeb3 ({commit}) {
      console.log('registerWeb3 Action being executed')
        getWeb3.then(result => {
          console.log('committing result to registerWeb3Instance mutation')
          commit('registerWeb3Instance', result)
        }).catch(e => {
          console.log('error in action registerWeb3', e)
        })
    },
    getContractInstance ({commit}) {
      getContract.then(result => {
        commit('registerContractInstance', result)
      }).catch(e => console.log(e))
    },
    hashIPFS ({commit}) {
      console.log('getting ipfs hash')
      state.contractInstance.ipfsImageHash().then(result => {
        console.log('committing ipfs result to registerIpfsHash mutation')
        commit('registerIpfsHash', result)
      }).catch(e => {
        console.log('error in action hash', e)
      })
    }
  }
});
