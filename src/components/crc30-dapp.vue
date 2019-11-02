<template>

<div class="superRoot">

    <!-- HORIZONTAL SCROLLER -->
    <div class="hs">
        <div class="cards"><article1/></div>
        <div class="cards"><article2/></div>
        <div class="cards"><article3/></div>
        <div class="cards"><article4/></div>
        <div class="cards"><article5/></div>
        <div class="cards"><article6/></div>
        <div class="cards"><article7/></div>
        <div class="cards"><article8/></div>
        <div class="cards"><article9/></div>
        <div class="cards"><article10/></div>
    </div>

    <!-- SYSTEM INFO - METAMASK and web3 -->
    <div class="MetaMask"><hello-metamask/></div>
    <div v-if="NoMetaMask === false" class="check">            
        <div class="stepOne">
        <a href="http://www.metamask.io" target="_blank"><img src="../assets/Onboarding-1.jpg"></a>
         <br><button class="closeOnboarding" @click="NoMetaMask = true">Close</button>
        </div>
    </div>


<div class="beta">This is only a prototype version of the website. All content is FPO!</div>

</div>



</template>




<script>
import HelloMetamask from '@/components/hello-metamask'
import Article1 from '@/components/article1'
import Article2 from '@/components/article2'
import Article3 from '@/components/article3'
import Article4 from '@/components/article4'
import Article5 from '@/components/article5'
import Article6 from '@/components/article6'
import Article7 from '@/components/article7'
import Article8 from '@/components/article8'
import Article9 from '@/components/article9'
import Article10 from '@/components/article10'


export default {
    name: 'crc30-dapp',
    beforeCreate () {
        console.log('registerWeb3 Action dispatched from crc30-dapp.vue')
        this.$store.dispatch('registerWeb3')
    },
    mounted() {
    setTimeout(this.checkMetaMask, 500);
    },
    data() {
        return{
            NoMetaMask: false
        }
    },
    components: {
        'hello-metamask': HelloMetamask,
        'article1': Article1,
        'article2': Article2,
        'article3': Article3,
        'article4': Article4,
        'article5': Article5,
        'article6': Article6,
        'article7': Article7,
        'article8': Article8,
        'article9': Article9,
        'article10': Article10
    },
    methods: {
        checkMetaMask: function() {
            if (window.ethereum.selectedAddress === null) {
                this.NoMetaMask = false;
                console.log("checkMetaMask is false");
                console.log("check" + ' ' + window.ethereum.selectedAddress)
                setTimeout(this.checkMetaMask, 1000);
            } else {
                this.NoMetaMask = true;
                console.log("checkMetaMask is true");
                console.log("check" + ' ' + window.ethereum.selectedAddress)

            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');

.superRoot {
    width: 100%;
    height:100%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
}
.hs{
    display:flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin: 0 0 0 0;
    height:100%;
    -webkit-overflow-scrolling: touch;
    .cards{
        flex: 0 0 auto;
        margin: -55px 0 0 0;
        transform: scale3d(0.70, 0.70, 0.70);
    }
}

.MetaMask {
    position: absolute;
    bottom: 5px;
    right: 0;
}
.check{
  height: 100vh;
  width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color:rgba(0, 0, 0, 0.7);
}
.stepOne {
    text-align: center;
    opacity: 1;
    margin: 6% 0 0 0;
    width: 100%;
    height: 100%;
}
.closeOnboarding {
  margin: 12px 0 0 0;
  padding: 0 0 0 0;
  font-family:'Comfortaa', cursive;
  font-size:0.8em;
  height: 45px;
  width:150px;
  outline:none;
  background:none;
  border-radius:6px;
  border-style: solid;
  box-sizing: border-box;
  // background: -webkit-linear-gradient(#68F09E, #00AA56);
  color: white;
}
.closeOnboarding:hover {
  background-color: rgba(255,255,255, 0.9);
  color: black;
}

.beta{
    position: absolute;
    top: 55apx;
    left: 10px;
    z-index: 1;
    width:100px;
    color:black;
    background-color:#f9e784;
    font-size:0.4em;
    padding: 4px;
    font-family: 'Space Mono', monospace;
}

.check img {
    width: 70%;
}
</style>

