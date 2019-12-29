<template>
    <div class="metamask-info">
      <div class="greencircle" v-if="isInjected"></div>
      <div class="redcircle" v-if="!isInjected"></div>
        <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i>You are connected to the Ethereum Blockchain</p>
        <p v-else id="no-metamask"> Metamask not found. <a href="https://metamask.io/" target="_blank">Please install to fully experience the website.</a> </p>
        <p v-if="isInjected" >Network:<br />{{ network }}</p>
        <!-- 
          <p>Account: {{ coinbase }}</p>
        <p>Balance: {{ balance }} Wei </p>
         -->
    </div>
</template>

<script>
import {NETWORKS} from '../util/constants/networks'
import {mapState} from 'vuex'
export default {
  name: 'hello-metamask',
  computed: mapState({
    isInjected: state => state.web3.isInjected,
    network: state => NETWORKS[state.web3.networkId],
    coinbase: state => state.web3.coinbase,
    balance: state => state.web3.balance
  })
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');

#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}
.metamask-info {
  font-family: 'Space Mono', monospace;
  color: #999999;
  font-size: 10px;
  margin: auto;
  text-align: center;
  line-height:0.8;
  height:60px;
}
.metamask-info a {
  color: red;
}
.greencircle {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: green;
  text-align: center;
  margin: auto;
  padding: 0;
}
.redcircle {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: red;
  text-align: center;
  margin: auto;
  padding: 0;
}
</style>
