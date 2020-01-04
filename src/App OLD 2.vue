<template>
    <div class="website">

      <div class="menuContainer desktopMenu"><div class="menu"><navbar/></div></div>
      <navbarMobile class="mobileMenu"/>
 <!-- 
      <div class="menuContainerMobile">
        <router-link to="/"><div class="homes">CRC 30th Anniversary Fundraiser</div></router-link>
        <a href="#"><div class="mobileMenuItem"  @click="openArtists">The Artists</div></a>
        <div class="mobileMenuItem">How it works</div>
        <div class="mobileMenuItem">Why Blockchain?</div>
        <div class="mobileMenuItem">Contact</div>
        <div class="mobileMenuItem">Submit</div>
      </div>
    <artistspage :openvariable1="open1" :closevariable1="close1"/>
<div class="close" v-if="open1">
      <button class="closeBTN" @click="openArtists">Close</button>
      </div>
      -->


      <div class="headlineContainer">
        <div class="headline"><h1>Adopt the Rights of a Child</h1></div>
        <div class="subhead"><h2>Personally ratify any article from the Convention on the Rights of the Child</h2></div>
      </div>

      <div id="container">
          <router-view />
      </div>

  <div class="infoContainer nr1">

        <div class="infoItems color"><span class="imgItem"><img src="../public/graphics/WorldMap_CRC_White-Black.gif"></span></div>
        <div class="infoItems"><span class="item"><h1>30 years ago, the United Nations created the Convention on the Right of the Child (CRC). Every UN country has ratified it and are bound to it by international law. <br><br><b>Every country except the USA.</b></h1></span></div>
  </div>
  <div class="infoContainer nr2">

        <div class="infoItems color"><span class="imgItem"><img src="../public/graphics/Articles_CRC-2_2.gif"></span></div>
        <div class="infoItems"><span class="item"><h1>Adopt the Rights of a Child is a project about democratizing the ratification of children’s rights, allowing people to support the convention regardless of what their government might say. So choose an article you want to support and ratify it yourself by adopting and donating money to that right. </h1></span></div>
  </div>
  <div class="infoContainer nr3">      
        <div class="infoItems color"><span class="imgItem"><img src="../public/graphics/42_Articles_Animation-2.gif"></span></div>
        <div class="infoItems"><span class="item"><h1>The CRC is a human rights treaty based on 42 articles which sets out the civil, political, economic, social, health and cultural rights of children. It goes without saying that governments should support it and create laws meant to protect children. This project aims to let people take the power into our own hands and make sure that all our children have a safe and nourishing place to live and grow.</h1></span></div>
            
  </div>

  <div class="footer">
    <div class="footerContent">This is a fundraiser for UNICEF. All proceeds are directly donated to them and their work to protect children's rights. This project was created pro-bono by <a href="http://blockchainclub.io" target="_blank">The Experimental Blockchain Club</a>. For any questions please send an email to <a href="mailto:contact@blockchainclub.io">contact@blockchainclub.io</a>
    </div>
  </div>

  <div class="beta">This is only a prototype version of the website. WEBSITE LAUNCHING DECEMBER 1ST!</div>

  
  </div>
</template>

<script>
import MenuBar from '@/components/navbar'
import MenuBarMobile from '@/components/navbarMobile'
import Artists from '@/views/Artists.vue'


export default {
  beforeCreate () {
    },
    created() {
    },
    components: {
        'navbar': MenuBar,
        'navbarMobile': MenuBarMobile,
        'artistspage': Artists
    },
  name: 'App',
  data() {
        return{
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
        }
  }
}
</script>


<style lang="scss">

h1 {
    font-family: 'Comfortaa', arial, sans-serif;
    margin: auto;
    padding: auto;
}
b {
  color:black;
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
    display: none;
}
.spinner{
  margin: auto;
  text-align: center;
  height: 500px;
}
.spinner img {
  width: 50px;
  margin: auto;
  padding: 200px;
}

#container {
  width: 100%;
  height: auto;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.HTMLRoot .website {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.website {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.SinglePage {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;  
  background-color: #B1E3E1;
  background: -webkit-linear-gradient(250deg, #fff9de, #b3e9ff);
  overflow-x:hidden;
  overflow-y:hidden;
}
@media (min-width: 768px) {
}
.menuContainer {
  position:absolute;
  top:0;
  z-index:1;
  width:100vw;
  height:auto;
  .menu {
  }
}
.headlineContainer{
    height: auto;
    width: 100%;
    text-align: center;
    margin: 95px 0 0 0;
    font-size: 1em;
    color: #1B204C;
  }
  .headline {
    font-size: 1em;
  }
  .subhead {
    font-family: 'Comfortaa', arial, sans-serif;
    font-size: 0.4em;
  }
  .infoContainer {
    margin: 0;
    padding: 0 0 0 0;
    display: block;
    width: 100%;
    height: 90vh;
    min-height: 650px;
    text-align: center;
  }
  .nr1 {
    background-color: rgb(38, 122, 155);
    background: -webkit-linear-gradient(-250deg, #cc3838, #e499a9);
  }
  .nr2 {
    background-color: rgb(247, 230, 240);
  background: -webkit-linear-gradient(-250deg, #538294, #94d7f1);
  }
  .nr3 {
    background-color: rgb(222, 227, 177);
    background: -webkit-linear-gradient(-250deg, #f2b719, #ffdd46);
  }
  .infoItems {
    margin: auto;
    font-size: 0.6em;
    line-height: 2.7em;
    width:65%;
    height: 350px;
    box-sizing: border-box;
    padding: 10px;
    @media only screen and (max-width: 985px) {
      // width: 100%;
      //flex-direction: row;
      font-size: 0.6em;
      width:80%;
    }
    @media only screen and (max-width: 550px) {
      // width: 100%;
      //flex-direction: row;
      font-size: 0.6em;
      width:90%;
    }
  }

  .infoItems h1 {
    height: auto;
    color: white;
    @media only screen and (max-width: 985px) {
      font-size: 1.6em;
    line-height: 1.7em;
    }
  }
  .item {
  }
  .imgItem {
    height: 100%;
  }
  .color {
    background-color: none;
  }
  .color img {
    width: auto;
    height: 400px;
    margin: auto;
    padding-top: 20px;
    @media only screen and (max-width: 985px) {
    height: 350px;
    padding-top: 50px;
    }
    @media only screen and (max-width: 450px) {
    height: auto;
    width: 300px;
    padding-top: 50px;
    }
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .footer{
    height: 400px;
    margin: auto;
    padding: auto;
    text-align: center;
    font-family: 'Space Mono', monospace;
    font-size: 0.6em;
    display: flex;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .footerContent{
    width:60%;

  }

// Menu fallback options
.desktopMenu {
  display: inherit;
@media only screen and (max-width: 560px) {
  display:none;
    }
}
.mobileMenu {
  display: none;
@media only screen and (max-width: 560px) {
  display: inherit;
    }
}



</style>
