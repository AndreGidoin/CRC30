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

    <div class="allCards" v-bind:class="{ 'nobackground': loader}" v-if="isInjected">
        <component 
        v-for="component in ArticleComponents" 
        v-bind:is="component.name" 
        v-bind:key="component.id" 
        v-on:current-worthtwo="article2value = $event" 
        v-on:current-worthfive="article5value = $event" 
        v-on:current-worthsix="article6value = $event" 
        v-on:current-worthseven="article7value = $event" 
        v-on:current-wortheight="article8value = $event" 
        v-on:current-worthnine="article9value = $event" 
        v-on:current-worthtvelve="article12value = $event" 
        v-on:current-worthsixteen="article16value = $event" 
        v-on:current-worthtwentyfour="article24value = $event" 
        v-on:current-worthtwentynine="article29value = $event" 
        v-on:current-worththirtyone="article31value = $event" 
        v-on:current-worththirtyfive="article35value = $event" 
        v-on:current-worththirtyseven="article37value = $event" 

        v-on:artist-nametwo="artistName2 = $event" 
        v-on:artist-namefive="artistName5 = $event" 
        v-on:artist-nameseven="artistName7 = $event" 
        v-on:artist-nameeight="artistName8 = $event" 
        v-on:artist-namenine="artistName9 = $event" 
        v-on:artist-nametvelve="artistName12 = $event" 
        v-on:artist-namesixteen="artistName16 = $event" 
        v-on:artist-nametwentyfour="artistName24 = $event" 
        v-on:artist-nametwentysix="artistName26 = $event" 
        v-on:artist-namethirtyone="artistName31 = $event" 
        v-on:artist-namethirtyfive="artistName35 = $event" 
        v-on:artist-namethirtyseven="artistName37 = $event" 

        class="cards"
        v-bind:class="{ 'fade-in': loader}"
        />
    </div>
    <div class="allCards nobackground" v-else> 
        <component 
        v-for="offline in OfflineComponents" 
        v-bind:is="offline.name" 
        v-bind:key="offline.id" 

        class="cards"
        v-bind:class="{ 'fade-in': loader}"
        />
        
        </div>


    <div class="ScrollDown">
        <p class="morebelow">Scroll down to learn more</p>
        <p class="morebelow"><i class="arrow down"></i></p>
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
import {mapState} from 'vuex'


import HelloMetamask from '@/components/hello-metamask'
import Article2 from '@/components/article2'
import Article3 from '@/components/article3'
import Article4 from '@/components/article4'
import Article5 from '@/components/article5'
import Article6 from '@/components/article6'
import Article7 from '@/components/article7'
import Article8 from '@/components/article8'
import Article9 from '@/components/article9'
import Article10 from '@/components/article10'
import Article12 from '@/components/article12'
import Article16 from '@/components/article16'
import Article24 from '@/components/article24'
import Article29 from '@/components/article29'
import Article31 from '@/components/article31'
import Article35 from '@/components/article35'
import Article37 from '@/components/article37'

import article2offline from '@/components/article2offline'
import article5offline from '@/components/article5offline'
import article6offline from '@/components/article6offline'
import article7offline from '@/components/article7offline'
import article8offline from '@/components/article8offline'
import article9offline from '@/components/article9offline'
import article12offline from '@/components/article12offline'
import article15offline from '@/components/article15offline'
import article16offline from '@/components/article16offline'
import article24offline from '@/components/article24offline'
import article28offline from '@/components/article28offline'
import article29offline from '@/components/article29offline'
import article31offline from '@/components/article31offline'
import article35offline from '@/components/article35offline'
import article36offline from '@/components/article36offline'
import article37offline from '@/components/article37offline'


export default {
    name: 'crc30-dapp',
    computed: mapState({
    isInjected: state => state.web3.isInjected,
    }),
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
            article2value: null,
            article3value: null,
            article4value: null,
            article5value: null,
            article6value: null,
            article7value: null,
            article8value: null,
            article9value: null,
            article10value: null,
            article12value: null,
            article16value: null,
            article24value: null,
            article29value: null,
            article31value: null,
            article35value: null,
            article37value: null,

            artistName2: '',
            artistName3: '',
            artistName4: '',
            artistName5: '',
            artistName6: '',
            artistName7: '',
            artistName8: '',
            artistName9: '',
            artistName10: '',
            artistName12: '',
            artistName16: '',
            artistName24: '',
            artistName29: '',
            artistName31: '',
            artistName35: '',
            artistName37: '',

            lastClicked: 'number',


            ArticleComponents: [                
                {
                    name: 'article2',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '2',
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
                    name: 'article12',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '12'
                },
                {       
                    name: 'article16',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '16'
                },
                {
                    name: 'article24',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '24'
                },
                {
                    name: 'article29',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '29'
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
                },
                {
                    name: 'article37',
                    value: '',
                    artistName: 'Z',
                    articleNumber: '37'
                }

            ],
            OfflineComponents: [
                    {
                        name: 'article2offline',
                    },
                    {
                        name: 'article5offline'
                    },
                    {
                        name: 'article6offline'
                    },
                    {
                        name: 'article7offline'
                    },
                    {
                        name: 'article8offline'
                    },
                    {
                        name: 'article9offline'
                    },
                    {
                        name: 'article12offline'
                    },
                    {
                        name: 'article15offline'
                    },
                    {
                        name: 'article16offline'
                    },
                    {
                        name: 'article24offline'
                    },
                    {
                        name: 'article28offline'
                    },
                    {
                        name: 'article29offline'
                    },
                    {
                        name: 'article31offline'
                    },
                    {
                        name: 'article35offline'
                    },
                    {
                        name: 'article36offline'
                    },
                    {
                        name: 'article37offline'
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
        'article2': Article2,
        'article5': Article5,
        'article6': Article6,
        'article7': Article7,
        'article8': Article8,
        'article9': Article9,
        'article12': Article12,
        'article16': Article16,
        'article24': Article24,
        'article29': Article29,
        'article31': Article31,
        'article35': Article35,
        'article37': Article37,

        'article2offline': article2offline,
        'article5offline': article5offline,
        'article6offline': article6offline,
        'article7offline': article7offline,
        'article8offline': article8offline,
        'article9offline': article9offline,
        'article12offline': article12offline,
        'article15offline': article15offline,
        'article16offline': article16offline,
        'article24offline': article24offline,
        'article28offline': article28offline,
        'article29offline': article29offline,
        'article31offline': article31offline,
        'article35offline': article35offline,
        'article36offline': article36offline,
        'article37offline': article37offline
    },
    methods: {
        checkMetaMask: function() {
            if (window.ethereum.selectedAddress === null) {
                this.NoMetaMask = false;
                console.log("checkMetaMask is false");
                console.log("check" + ' ' + window.ethereum.selectedAddress)
                // setTimeout(this.checkMetaMask, 1000);
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
            console.log(this.ArticleComponents[0].value = (this.article2value));
            console.log(this.ArticleComponents[1].value = (this.article5value));
            console.log(this.ArticleComponents[2].value = (this.article6value));
            console.log(this.ArticleComponents[3].value = (this.article7value));
            console.log(this.ArticleComponents[4].value = (this.article8value));
            console.log(this.ArticleComponents[5].value = (this.article9value));
            console.log(this.ArticleComponents[6].value = (this.article12value));
            console.log(this.ArticleComponents[7].value = (this.article24value));
            console.log(this.ArticleComponents[8].value = (this.article31value));
            console.log(this.ArticleComponents[9].value = (this.article35value));
            console.log(this.ArticleComponents[10].value = (this.article37value));
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
            console.log(this.ArticleComponents[0].artistName = (this.artistName2));
            console.log(this.ArticleComponents[1].artistName = (this.artistName5));
            console.log(this.ArticleComponents[2].artistName = (this.artistName6));
            console.log(this.ArticleComponents[3].artistName = (this.artistName7));
            console.log(this.ArticleComponents[4].artistName = (this.artistName8));
            console.log(this.ArticleComponents[5].artistName = (this.artistName9));
            console.log(this.ArticleComponents[6].artistName = (this.artistName12));
            console.log(this.ArticleComponents[7].artistName = (this.artistName24));
            console.log(this.ArticleComponents[8].artistName = (this.artistName31));
            console.log(this.ArticleComponents[9].artistName = (this.artistName35));
            console.log(this.ArticleComponents[10].artistName = (this.artistName37));
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
    min-height: 650px;
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

// Bounce arrow
.ScrollDown{
    width:100%;
    height:60px;
    margin: auto;
    text-align: center;
  font-family:'Comfortaa', cursive;
  font-size:0.6em;
  box-sizing: border-box;
  margin-top: -50px;
  animation: bounce 2s;
    -webkit-animation: bounce 2s ;
	-moz-animation: bounce 2s ;
	-o-animation: bounce 2s ;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);

}
i {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 10px;
}
.morebelow{
    margin:0;
    padding: 0;
    animation: fadeout 3.5s ease-out 10s forwards;
}
@keyframes fadeout {
  from {  opacity:1;}
  to {  opacity:0;}
}    

 
@-webkit-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}	
	40% {-webkit-transform: translateY(-30px);}
	60% {-webkit-transform: translateY(-15px);}
}
 
@-moz-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
	40% {-moz-transform: translateY(-30px);}
	60% {-moz-transform: translateY(-15px);}
}
 
@-o-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
	40% {-o-transform: translateY(-30px);}
	60% {-o-transform: translateY(-15px);}
}
@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}


</style>

