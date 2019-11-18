<template>

<div class="cardRoot">

    <!-- SORT BUTTON -->
    <ul>
        <li>Sort articles by: {{this.lastClicked}}
            <ul>
        <li v-for="item in menuItems" v-bind:key="item.id" @click="() => handleClick(item.id)">{{item.name}}
        </li>
            </ul>
        </li>
    </ul>

    <!-- HORIZONTAL SCROLLER OF ARTICLES -->

    <div class="allCards" v-bind:class="{ 'nobackground': loader}">
        <component 
        v-for="component in ArticleComponents" 
        v-bind:is="component.name" 
        v-bind:key="component.id" 
        v-on:current-worthone="article1value = $event" 
        v-on:current-worthtwo="article2value = $event" 
        v-on:current-worththree="article3value = $event" 
        v-on:current-worthfour="article4value = $event" 
        v-on:current-worthfive="article5value = $event" 
        v-on:current-worthsix="article6value = $event" 
        v-on:current-worthseven="article7value = $event" 
        v-on:current-wortheight="article8value = $event" 
        v-on:current-worthnine="article9value = $event" 
        v-on:current-worthten="article10value = $event" 
        v-on:current-worththirtyone="article31value = $event" 
        v-on:current-worththirtyfive="article35value = $event" 

        v-on:artist-nameone="artistName1 = $event" 
        v-on:artist-nametwo="artistName2 = $event" 
        v-on:artist-nameseven="artistName7 = $event" 
        v-on:artist-nameeight="artistName8 = $event" 
        v-on:artist-namethirtyone="artistName31 = $event" 
        v-on:artist-namethirtyfive="artistName35 = $event" 

        class="cards"
        v-bind:class="{ 'fade-in': loader}"
        />
    </div>

    <!-- SYSTEM INFO - METAMASK and WEB3 -->
    <div class="MetaMask"><hello-metamask/></div>
    <div v-if="NoMetaMask === false" class="check">            
        <div class="stepOne">
        <a href="http://www.metamask.io" target="_blank"><img src="../assets/Onboarding-1.jpg"></a>
         <br><button class="closeOnboarding" @click="NoMetaMask = true">Close</button>
        </div>
    </div>

</div>

</template>


<script>
import { setTimeout } from "timers";

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
import Article31 from '@/components/article31'
import Article35 from '@/components/article35'



export default {
    name: 'crc30-dapp',
    beforeCreate () {
        console.log('registerWeb3 Action dispatched from crc30-dapp.vue')
        this.$store.dispatch('registerWeb3')
    },
    mounted() {
    setTimeout(this.checkMetaMask, 500);
    setTimeout(this.setValue, 1300);
    setTimeout(this.setName, 1400);
    setTimeout(this.setLoader, 1100);
    },
    data() {
        return{
            loader: false,
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
            article31value: null,
            article35value: null,

            artistName1: '',
            artistName2: '',
            artistName3: '',
            artistName4: '',
            artistName5: '',
            artistName6: '',
            artistName7: '',
            artistName8: '',
            artistName9: '',
            artistName10: '',
            artistName31: '',
            artistName35: '',

            lastClicked: 'number',


            ArticleComponents: [
                {
                    name: 'article1',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '1',
                },
                
                {
                    name: 'article2',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '2',
                },
                {
                    name: 'article3',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '3'
                },
                {
                    name: 'article4',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '4'
                },
                {
                    name: 'article5',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '5'
                },
                {
                    name: 'article6',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '6'
                },
                {
                    name: 'article7',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '7'
                },
                {
                    name: 'article8',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '8'
                },
                {
                    name: 'article9',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '9'
                },
                {
                    name: 'article10',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '10'
                },
                {
                    name: 'article31',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '31'
                },
                {
                    name: 'article35',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '35'
                }

            ],
            menuItems: [
                {
                    name: 'Article number',
                    url:'',
                    id: 'number'
                 },
                {
                    name: 'Article worth',
                    url:'',
                    id: 'value'
                 },
                {
                    name: 'Artist name ',
                    url:'',
                    id: 'name'
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
        'article10': Article10,
        'article31': Article31,
        'article35': Article35
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
        sortNumber: function() {
            console.log(this.ArticleComponents.sort(this.compareArticleNumber) + ' ' + 'sort by number');
        },
        compareArticleNumber: function(a,b) {
            return a.articleNumber - b.articleNumber
        },
        sortValue: function() {
            console.log(this.ArticleComponents.sort(this.compareArticleValue) + ' ' + 'sort by value');
        },
        compareArticleValue: function(a,b) {
            return b.value - a.value;
        },
        setValue: function() {
            console.log(this.ArticleComponents[0].value = (this.article1value));
            console.log(this.ArticleComponents[1].value = (this.article2value));
            console.log(this.ArticleComponents[2].value = (this.article3value));
            console.log(this.ArticleComponents[3].value = (this.article4value));
            console.log(this.ArticleComponents[4].value = (this.article5value));
            console.log(this.ArticleComponents[5].value = (this.article6value));
            console.log(this.ArticleComponents[6].value = (this.article7value));
            console.log(this.ArticleComponents[7].value = (this.article8value));
            console.log(this.ArticleComponents[8].value = (this.article9value));
            console.log(this.ArticleComponents[9].value = (this.article10value));
            console.log(this.ArticleComponents[10].value = (this.article31value));
            console.log(this.ArticleComponents[11].value = (this.article35value));
        },
        sortName: function() {
            console.log(this.ArticleComponents.sort(this.compareArtistName) + ' ' + 'sort by Name');
        },
        compareArtistName: function(a,b) {
            if(a.artistName < b.artistName) { return -1; }
            if(a.artistName > b.artistName) { return 1; }
            return 0;
        },
        setName: function() {
            console.log(this.ArticleComponents[0].artistName = (this.artistName1));
            console.log(this.ArticleComponents[1].artistName = (this.artistName2));
            console.log(this.ArticleComponents[6].artistName = (this.artistName7));
            console.log(this.ArticleComponents[10].artistName = (this.artistName31));
            console.log(this.ArticleComponents[11].artistName = (this.artistName35));
        },
        
        handleClick: function(e) {
            console.log('hello ' + e);
            if (e === 'number') {
                this.sortNumber();
                console.log('sortNumber IF');
                this.lastClicked = 'number'
            }
            else if (e === 'value') {
                this.sortValue();
                console.log('sortValue IF');
                this.lastClicked = 'value'
            }
            else if (e === 'name') {
                this.sortName();
                console.log('sortName IF');
                this.lastClicked = 'name'
            }
        },
        setLoader: function() {
            this.loader = true;
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
    margin: 15px 0 0 0;
    height:auto;
    -webkit-overflow-scrolling: touch;
    background-image: url("../assets/block-rotate-loading.gif");
    background-repeat: no-repeat;
    background-position:50% 30%;
    background-size: 100px 100px;

    &.nobackground {
            background-image: none;
    }
    .cards{
        flex: 0 0 auto;
        margin: 0 35px 0 35px;
        transform: scale3d(0.74, 0.74, 0.74);
        opacity: 0;
        transition: opacity .5s;
        &.fade-in {
            opacity: 1;
        }
    }
    .cards:last-child {
        padding-right: 150px;
        margin-left: 15px;
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


.check img {
    width: 70%;
}



ul {
    list-style: none;
    margin: auto;
    margin-top: 15px;
    width: 130px;
    font-size: 0.5em;
    font-family: 'Comfortaa', cursive;
    text-align: center;
    padding: auto;
    height: auto;
    outline:none;
    background:none;
}

li {
    color: black;
    background: white;
    display: block;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
    width:130px;
    margin: auto;
    padding:7px;

}
  
li a {
  color: #fff;
}

li:hover {
    background: #F6D6F2;
    cursor: pointer;
    color: white;
}

ul li ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    left: 0;
    margin-top: 7px;
    vertical-align: middle;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

ul li ul li {
    clear: both;
    
}



</style>

