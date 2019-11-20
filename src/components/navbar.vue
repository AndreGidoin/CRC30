<template>
  <div id="container">
      
<ul class="NavBarContainer">
  <!-- HOME ITEM -->
  <li class="HomeItem"><a href="#"><div class="homeContainer"><p>CRC 30th Anniversary</p></div></a></li>
  
  <!-- ARTISTS ITEM -->
  <li class="MenuItems"><a href="#"><div class="lineContainer" @click="openArtists"><svg><line x1="0" y1="14"/></svg><p>The Artists</p>
  <!-- ARROWHEAD -->
  <svg class="pageLineExtend" v-if="open1">
      <defs>
    <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="8" refY="6.5"
           orient="auto-start-reverse">
        <path d="M2,2 L2,11 L10,6 L2,2" style="fill: #000000;" />
    </marker>
  </defs>
  <line x1="0" y1="12" marker-start="url(#markerArrow)"/>
  </svg>
  <!-- ARROWHEAD END -->
  </div></a></li> 
  
  <!-- ABOUT ITEM -->
  <li class="MenuItems"><a href="#"><div class="lineContainer"  @click="openAbout"><svg><line x1="0" y1="14"/></svg><p>How It Works</p>
  <!-- ARROWHEAD -->
  <svg class="pageLineExtend" v-if="open2">
      <defs>
    <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="8" refY="6.5"
           orient="auto-start-reverse">
        <path d="M2,2 L2,11 L10,6 L2,2" style="fill: #000000;" />
    </marker>
  </defs>
  <line x1="0" y1="12" marker-start="url(#markerArrow)"/>
  </svg>
  <!-- ARROWHEAD END -->
  </div></a></li>

  <!-- BLOCKCHAIN ITEM -->
  <li class="MenuItems"><a href="#"><div class="lineContainer" @click="openBlockchain"><svg><line x1="0" y1="14"/></svg><p>Why Blockchain?</p>
  <!-- ARROWHEAD -->
  <svg class="pageLineExtend" v-if="open3">
      <defs>
    <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="8" refY="6.5"
           orient="auto-start-reverse">
        <path d="M2,2 L2,11 L10,6 L2,2" style="fill: #000000;" />
    </marker>
  </defs>
  <line x1="0" y1="12" marker-start="url(#markerArrow)"/>
  </svg>
  <!-- ARROWHEAD END -->
  </div></a></li>

  <!-- CONTACT ITEM -->
  <li class="MenuItems"><a href="#"><div class="lineContainer" @click="openContact"><svg><line x1="0" y1="14"/></svg><p>Get in touch</p>
  <!-- ARROWHEAD -->
  <svg class="pageLineExtend" v-if="open4">
      <defs>
    <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="8" refY="6.5"
           orient="auto-start-reverse">
        <path d="M2,2 L2,11 L10,6 L2,2" style="fill: #000000;" />
    </marker>
  </defs>
  <line x1="0" y1="12" marker-start="url(#markerArrow)"/>
  </svg>
  <!-- ARROWHEAD END -->
  </div></a></li>

  <!-- SUBMIT ITEM -->
  <li class="MenuItems"><a href="#"><div class="lineContainer" @click="openSubmit"><svg><line x1="0" y1="14"/></svg><p>Submit</p>
  <!-- ARROWHEAD -->
  <svg class="pageLineExtend" v-if="open5">
      <defs>
    <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="8" refY="6.5"
           orient="auto-start-reverse">
        <path d="M2,2 L2,11 L10,6 L2,2" style="fill: #000000;" />
    </marker>
  </defs>
  <line x1="0" y1="12" marker-start="url(#markerArrow)"/>
  </svg>
  <!-- ARROWHEAD END -->
  </div></a></li>
</ul>


<!-- ARTIST PAGE -->
<artistspage :openvariable1="open1" :closevariable1="close1"/>
<div class="close" v-if="open1">
      <button class="closeBTN" @click="openArtists">Close</button>
      </div>

<!-- ABOUT PAGE -->
<aboutpage :openvariable2="open2" :closevariable2="close2"/>
<div class="close" v-if="open2">
      <button class="closeBTN" @click="openAbout">Close</button>
      </div>

  <!-- BLOCKCHAIN PAGE -->
<blockchainpage :openvariable3="open3" :closevariable3="close3"/>
    <div class="close" v-if="open3">
      <button class="closeBTN" @click="openBlockchain">Close</button>
      </div>

  <!-- CONTACT PAGE -->
<contactpage :openvariable4="open4" :closevariable4="close4"/>
    <div class="close" v-if="open4">
      <button class="closeBTN" @click="openContact">Close</button>
      </div>

  <!-- Submit PAGE -->
<submitpage :openvariable5="open5" :closevariable5="close5"/>
    <div class="close" v-if="open5">
      <button class="closeBTN" @click="openSubmit">Close</button>
      </div>


  </div>
</template>

<script>
import Artists from '@/views/Artists.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Blockchain from '@/views/Blockchain.vue'
import Submit from '@/views/Submit.vue'



export default {
    components: {
        'aboutpage': About,
        'artistspage': Artists,
        'contactpage': Contact,
        'blockchainpage': Blockchain,
        'submitpage': Submit
    },
    data() {
        return {
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            close1: false,
            close2: false,
            close3: false,
            close4: false,
            close5: false
            }
        },
    methods: {
        openArtists: function() {
            if (this.open1 === false) {
                this.open1 = !this.open1;
                this.close1 = false;
                console.log('About is ' + this.open1);
                // CLOSING OTHER PAGES
                this.open2 = false;
                this.close2 = false;
                this.open3 = false;
                this.close3 = false;
                this.open4 = false;
                this.close4 = false;
                this.open5 = false;
                this.close5 = false;
            } else {
                this.close1 = !this.close1;
                this.open1 = !this.open1;
                console.log('Artists is already ' + this.open1 + '. And now were closing it ' + this.close1);
                setTimeout(() => {
                    this.close1 = !this.close1;
                    console.log('resetting class - closed is ' + this.close1);
                    history.pushState(null, null, ' ');
                }, 400);
            }
        },
        openAbout: function() {
            if (this.open2 === false) {
                this.open2 = !this.open2;
                this.close2 = false;
                console.log('About is ' + this.open2);
                // CLOSING OTHER PAGES
                this.open1 = false;
                this.close1 = false;
                this.open3 = false;
                this.close3 = false;
                this.open4 = false;
                this.close4 = false;
                this.open5 = false;
                this.close5 = false;
            } else {
                this.close2 = !this.close2;
                this.open2 = !this.open2;
                console.log('About is already ' + this.open2 + '. And now were closing it ' + this.close2);
                setTimeout(() => {
                    this.close2 = !this.close2;
                    console.log('resetting class - closed is ' + this.close2);
                    history.pushState(null, null, ' ');
                }, 400);
            }
        },
        openBlockchain: function() {
            if (this.open3 === false) {
                this.open3 = !this.open3;
                this.close3 = false;
                console.log('Blockchain is ' + this.open3);
                // CLOSING OTHER PAGES
                this.open1 = false;
                this.close1 = false;
                this.open2 = false;
                this.close2 = false;
                this.open4 = false;
                this.close4 = false;
                this.open5 = false;
                this.close5 = false;
            } else {
                this.close3 = !this.close3;
                this.open3 = !this.open3;
                console.log('Blockchain is already ' + this.open3 + '. And now were closing it ' + this.close3);
                setTimeout(() => {
                    this.close3 = !this.close3;
                    console.log('resetting class - closed is ' + this.close3);
                    history.pushState(null, null, ' ');
                }, 400);
            }
        },
        openContact: function() {
            if (this.open4 === false) {
                this.open4 = !this.open4;
                this.close4 = false;
                console.log('Contact is ' + this.open4);
                // CLOSING OTHER PAGES
                this.open1 = false;
                this.close1 = false;
                this.open2 = false;
                this.close2 = false;
                this.open3 = false;
                this.close3 = false;
                this.open5 = false;
                this.close5 = false;
            } else {
                this.close4 = !this.close4;
                this.open4 = !this.open4;
                console.log('Contact is already ' + this.open4 + '. And now were closing it ' + this.close4);
                setTimeout(() => {
                    this.close4 = !this.close4;
                    console.log('resetting class - closed is ' + this.close4);
                    history.pushState(null, null, ' ');
                }, 400);
            }
        },
      openSubmit: function() {
            if (this.open5 === false) {
                this.open5 = !this.open5;
                this.close5 = false;
                console.log('Submit is ' + this.open5);
                // CLOSING OTHER PAGES
                this.open1 = false;
                this.close1 = false;
                this.open2 = false;
                this.close2 = false;
                this.open3 = false;
                this.close3 = false;
                this.open4 = false;
                this.close4 = false;
            } else {
                this.close5 = !this.close5;
                this.open5 = !this.open5;
                console.log('Submit is already ' + this.open5 + '. And now were closing it ' + this.close5);
                setTimeout(() => {
                    this.close5 = !this.close5;
                    console.log('resetting class - closed is ' + this.close5);
                    history.pushState(null, null, ' ');
                }, 400);
            }
        }
    }
}
</script>


<style lang="scss">

// NEW NAVBAR

.NavBarContainer {
  margin: 0 0 0 0;
  height: 45px;
  list-style: none;
  background: white;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: row;
}
.NavBarContainer a {
  color: #000000;
  font-family: 'Comfortaa', cursive;
  font-size: 0.5em;
  text-decoration: none;
}
.MenuItems, .HomeItem, li {
    flex: 1;
    margin: 0;
    padding: 0;
    width: 20px;
    text-align: center;
    width: 20px;
}
.MenuItems {
    flex-basis: 10px;
}
.HomeItem {
    flex-grow: 4;
    text-align: left;
}
ul {
    margin: 0;
    padding: 0;
}
.homeContainer {
  height: 100%;
  width:100%;
  text-align: left;
  margin: 21px;
}
.lineContainer {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  display: inline-block;
  height: 100%;
  width:100%;
  text-align: center;
}
.lineContainer:hover {
  background: rgb(245, 245, 245);
}
.lineContainer p {
    margin: 5px 0 0 0;
}
svg {
  height: 14px;
  margin-left: 50%;
  width: auto;
  overflow:visible;
}
line {
  stroke:rgb(0,0,0);
  stroke-width:1;
}
.pageLineAbout {
    position:fixed;
    top: 45px;
    right:22.2%;
    height:40px;
    margin: 0;
    width: 1px;
    z-index:1;
}





// NAVBAR

.burgerIcon {
  display:none;
}

// CLOSE BTN
.close {
    position:relative;
    z-index:1;
  text-align: center;
  margin: 20px;
  padding: 0;
  width: 100%;
  height: 40px;
  opacity:0;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: 0.5s;
}

@keyframes fadeIn {
    from {opacity:0;}
    to {opacity:1;}
}

.closeBTN {
    position:fixed;
    top:69%;
    left:44%;
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
.closeBTN:hover {
  background-color: rgba(255,255,255, 0.9);
  color: black;
}
</style>
