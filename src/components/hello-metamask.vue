<template>
    <div class="metamask-info">
        <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</p>
        <p v-else id="no-metamask"> Metamask not found </p>
        <p>Network: {{ network }}</p>
        <p>Account: {{ coinbase }}</p>
        <p>Balance: {{ balance }} Wei </p>
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

<style scoped>
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
  font-size: 0.5em;
  margin: 0 10px 5px 0;
  text-align: right;
  line-height:0.8;
}
</style>
