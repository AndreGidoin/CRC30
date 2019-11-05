<template>

<div class="cardRoot">

    <!-- HORIZONTAL SCROLLER -->
    <div class="allCards">
        <component 
        v-for="component in ArticleComponents" 
        v-bind:is="component.name" 
        v-bind:key="component.id" 
        v-on:current-worthone="article1value = $event" 
        v-on:current-worthtwo="article2value = $event" 
        v-on:current-worththree="article3value = $event" 
        class="cards"/>
    </div>

    <button v-on:click="test">Sort by Article number</button>
    <button v-on:click="sortValue">Sort by Article value</button>

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
    setTimeout(this.setValue, 1300);
    },
    data() {
        return{
            NoMetaMask: false,
            article1value: null,
            article2value: null,
            article3value: null,
            article4value: null,
            article5value: null,
            article6value: null,
            article7value: null,
            article8value: null,
            article9value: null,
            article10value: null,
            article1ArtistName: null,
            ArticleComponents: [
                {
                    name: 'article1',
                    value: '',
                    artistName: this.article1ArtistName,
                    articleNumber: '1'
                },
                
                {
                    name: 'article2',
                    value: '',
                    artistName: this.article2ArtistName,
                    articleNumber: '2'
                },
                {
                    name: 'article3',
                    value: '',
                    artistName: this.article3ArtistName,
                    articleNumber: '3'
                },
                {
                    name: 'article4',
                    value: '',
                    artistName: this.article4ArtistName,
                    articleNumber: '4'
                },
                {
                    name: 'article5',
                    value: '',
                    artistName: this.article5ArtistName,
                    articleNumber: '5'
                },
                {
                    name: 'article6',
                    value: '',
                    artistName: this.article6ArtistName,
                    articleNumber: '6'
                },
                {
                    name: 'article7',
                    value: '',
                    artistName: this.article7ArtistName,
                    articleNumber: '7'
                },
                {
                    name: 'article8',
                    value: '',
                    artistName: this.article8ArtistName,
                    articleNumber: '8'
                },
                {
                    name: 'article9',
                    value: '',
                    artistName: this.article9ArtistName,
                    articleNumber: '9'
                },
                {
                    name: 'article10',
                    value: '',
                    artistName: this.article10ArtistName,
                    articleNumber: '10'
                }
            ]
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
        },
        test: function() {
            console.log("tester" + ' ' + this.article1data);
            console.log(this.ArticleComponents.sort(this.compareArticleNumber) + ' ' + 'sorting1');
        },
        sortValue: function() {
            console.log(this.ArticleComponents.sort(this.compareArticleValue) + ' ' + 'sorting2');
        },
        setValue: function() {
            console.log(this.ArticleComponents[0].value = (this.article1value));
            console.log(this.ArticleComponents[1].value = (this.article2value));
            console.log(this.ArticleComponents[2].value = (this.article3value));
        },
        checkValue: function() {
            console.log(JSON.stringify(this.article1value + ' ' + this.article2value + ' ' + this.article3value));

        },
        compareArticleNumber: function(a,b) {
            return a.articleNumber - b.articleNumber
        },
        compareArticleValue: function(a,b) {
            return b.value - a.value 
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');

.cardRoot {
    width: 100%;
    height:auto;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
}
.allCards{
    display:flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin: 0 0 0 0;
    height:auto;
    -webkit-overflow-scrolling: touch;
    .cards{
        flex: 0 0 auto;
        margin: 0 35px 0 35px;
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
    top: 55px;
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

