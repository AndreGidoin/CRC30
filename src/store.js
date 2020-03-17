import Vue from "vue"
import Vuex from "vuex"
import state from './store/state'
import getWeb3 from './util/getWeb3'
import getContract1 from './util/getContract1'
import getContract2 from './util/getContract2'
import getContract3 from './util/getContract3'
import getContract4 from './util/getContract4'
import getContract5 from './util/getContract5'
import getContract6 from './util/getContract6'
import getContract7 from './util/getContract7'
import getContract8 from './util/getContract8'
import getContract9 from './util/getContract9'
import getContract10 from './util/getContract10'
import getContract12 from './util/getContract12'
import getContract16 from './util/getContract16'
import getContract19 from './util/getContract19'
import getContract24 from './util/getContract24'
import getContract25 from './util/getContract25'
import getContract29 from './util/getContract29'
import getContract31 from './util/getContract31'
import getContract33 from './util/getContract33'
import getContract35 from './util/getContract35'
import getContract37 from './util/getContract37'

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

    // LINES TO DUPLICATE PER ARTICLE
    registerArticle1Instance (state, payload) {
      console.log('Article1 contract instance: ', payload)
      state.article1Instance = () => payload
    },
    registerArticle2Instance (state, payload) {
      console.log('Article2 contract instance: ', payload)
      state.article2Instance = () => payload
    },
    registerArticle3Instance (state, payload) {
      console.log('Article3 contract instance: ', payload)
      state.article3Instance = () => payload
    },
    registerArticle4Instance (state, payload) {
      console.log('Article4 contract instance: ', payload)
      state.article4Instance = () => payload
    },
    registerArticle5Instance (state, payload) {
      console.log('Article5 contract instance: ', payload)
      state.article5Instance = () => payload
    },
    registerArticle6Instance (state, payload) {
      console.log('Article6 contract instance: ', payload)
      state.article6Instance = () => payload
    },
    registerArticle7Instance (state, payload) {
      console.log('Article7 contract instance: ', payload)
      state.article7Instance = () => payload
    },
    registerArticle8Instance (state, payload) {
      console.log('Article8 contract instance: ', payload)
      state.article8Instance = () => payload
    },
    registerArticle9Instance (state, payload) {
      console.log('Article9 contract instance: ', payload)
      state.article9Instance = () => payload
    },
    registerArticle10Instance (state, payload) {
      console.log('Article10 contract instance: ', payload)
      state.article10Instance = () => payload
    },
    registerArticle12Instance (state, payload) {
      console.log('Article12 contract instance: ', payload)
      state.article12Instance = () => payload
    },
    registerArticle16Instance (state, payload) {
      console.log('Article16 contract instance: ', payload)
      state.article16Instance = () => payload
    },
    registerArticle19Instance (state, payload) {
      console.log('Article19 contract instance: ', payload)
      state.article19Instance = () => payload
    },
    registerArticle24Instance (state, payload) {
      console.log('Article24 contract instance: ', payload)
      state.article24Instance = () => payload
    },
    registerArticle25Instance (state, payload) {
      console.log('Article25 contract instance: ', payload)
      state.article25Instance = () => payload
    },
    registerArticle29Instance (state, payload) {
      console.log('Article29 contract instance: ', payload)
      state.article29Instance = () => payload
    },
    registerArticle31Instance (state, payload) {
      console.log('Article31 contract instance: ', payload)
      state.article31Instance = () => payload
    },
    registerArticle33Instance (state, payload) {
      console.log('Article33 contract instance: ', payload)
      state.article33Instance = () => payload
    },
    registerArticle35Instance (state, payload) {
      console.log('Article35 contract instance: ', payload)
      state.article35Instance = () => payload
    },
    registerArticle37Instance (state, payload) {
      console.log('Article37 contract instance: ', payload)
      state.article37Instance = () => payload
    },
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

    // LINES TO DUCPLICATE PER ARTICLE
    getArticle1Instance ({commit}) {
      getContract1.then(result => {
        commit('registerArticle1Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle2Instance ({commit}) {
      getContract2.then(result => {
        commit('registerArticle2Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle3Instance ({commit}) {
      getContract3.then(result => {
        commit('registerArticle3Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle4Instance ({commit}) {
      getContract4.then(result => {
        commit('registerArticle4Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle5Instance ({commit}) {
      getContract5.then(result => {
        commit('registerArticle5Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle6Instance ({commit}) {
      getContract6.then(result => {
        commit('registerArticle6Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle7Instance ({commit}) {
      getContract7.then(result => {
        commit('registerArticle7Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle8Instance ({commit}) {
      getContract8.then(result => {
        commit('registerArticle8Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle9Instance ({commit}) {
      getContract9.then(result => {
        commit('registerArticle9Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle10Instance ({commit}) {
      getContract10.then(result => {
        commit('registerArticle10Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle12Instance ({commit}) {
      getContract12.then(result => {
        commit('registerArticle12Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle16Instance ({commit}) {
      getContract16.then(result => {
        commit('registerArticle16Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle19Instance ({commit}) {
      getContract19.then(result => {
        commit('registerArticle19Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle24Instance ({commit}) {
      getContract24.then(result => {
        commit('registerArticle24Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle25Instance ({commit}) {
      getContract25.then(result => {
        commit('registerArticle25Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle29Instance ({commit}) {
      getContract29.then(result => {
        commit('registerArticle29Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle31Instance ({commit}) {
      getContract31.then(result => {
        commit('registerArticle31Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle33Instance ({commit}) {
      getContract33.then(result => {
        commit('registerArticle33Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle35Instance ({commit}) {
      getContract35.then(result => {
        commit('registerArticle35Instance', result)
      }).catch(e => console.log(e))
    },
    getArticle37Instance ({commit}) {
      getContract37.then(result => {
        commit('registerArticle37Instance', result)
      }).catch(e => console.log(e))
    }
  }
});
