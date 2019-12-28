<template>
    <div class="website">

    <div class="logoContainer">
      <logo class="theLogo"/>
      <logoMobile class="theLogoMobile"/>
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
    <div class="social"><a href="https://www.instagram.com/adoptthecrcproject/" target="_blank"><img src="../public/graphics/instagram2.png"><br><p>Follow the project on Instagram</p></a></div>
    <div class="footerContent">This is a fundraiser for UNICEF. All proceeds are directly donated to them and their work to protect children's rights. This project was created pro-bono by <a href="http://blockchainclub.io" target="_blank">The Experimental Blockchain Club</a>. For any questions please send an email to <a href="mailto:contact@blockchainclub.io">contact@blockchainclub.io</a>
    </div>
  </div>

  
  </div>
</template>

<script>
import Logo from '@/views/logo.vue'
import LogoMobile from '@/views/logoMobile.vue'


export default {
  beforeCreate () {
    },
    created() {
    },
    components: {
        'logo': Logo,
        'logoMobile': LogoMobile
    },
  name: 'App',
  data() {
        return{
        }
  },
  methods: {
  }
}
</script>


<style lang="scss" >

h1 {
    font-family: 'Comfortaa', cursive;
    margin: auto;
    padding: auto;
}
b {
  color:black;
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
@media (min-width: 768px) {
}

.logoContainer {
  height: auto;
  width: 100%;
  margin: auto;
}
.theLogo {
  @media (max-width: 820px) {
    transform: scale(0.8);
    transition: ease 300ms;
  }
  @media (max-width: 620px) {
    display:none!important;
  }
}
.theLogoMobile {
  @media (max-width: 620px) {
    display:inline-block!important;
  }
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
      font-size: 0.6em;
      width:80%;
    }
    @media only screen and (max-width: 550px) {
      font-size: 0.6em;
      width:90%;
    }
    @media only screen and (min-width: 1500px) {
      font-size: 1.2em;
      height:450px;
    }
    @media only screen and (min-width: 1100px) {
      font-size: 0.7em;
      height:380px;
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
    @media only screen and (min-width: 1500px) {
      height:540px;
    }
    @media only screen and (min-width: 1100px) {
      height:490px;
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
    flex-direction: column;
  }
  .footerContent{
    width:60%;
  }
  .social {
    margin-bottom:30px;
  }
  .social img {
    width: 70px;
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
