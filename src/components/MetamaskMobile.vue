<template>
    <div class="metamask-info">
        <p v-if="isInjected" id="has-metamask" class="textposition">You are connected to the <b>{{ network }}</b> Ethereum Blockchain</p>
        <p v-else id="no-metamask" class="textposition"> Metamask not found. <a href="https://metamask.io/" target="_blank">Please install to fully experience the website.</a> </p>

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
  height:auto;
}
.metamask-info a {
  color: red;
}
.textposition {
  width: 100vw;
  margin: auto;
  text-align: center;
}
</style>
