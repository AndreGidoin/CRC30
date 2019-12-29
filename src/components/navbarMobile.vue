<template>
<div>
  <div class="theMenuMobile">
    
<ul class="NavBarContainerMobile">
  <!-- HOME ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="closeall"><img src="../assets/menu/Menu_Icons_home2.png"><p>Home</p></div></a></li>
  
  <!-- ARTISTS ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="openArtists"><img src="../assets/menu/Menu_Icons_artists.png"><p>The Artists</p>
  </div></a></li> 
  
  <!-- HOW IT WORKS ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox"  @click="openAbout"><img src="../assets/menu/Menu_Icons_howitworks.png"><p>How It Works</p>
  </div></a></li>

  <!-- ONBOARDING ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox"  @click="openOnboarding"><img src="../assets/menu/Menu_Icons_onboarding.png"><p>Onboarding instructions</p>
  </div></a></li>

  <!-- BLOCKCHAIN ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="openBlockchain"><img src="../assets/menu/Menu_Icons_blockchain.png"><p>Why Blockchain?</p>
  </div></a></li>

  <!-- CONTACT ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="openContact"><img src="../assets/menu/Menu_Icons_contact.png"><p>Get in touch</p>
  </div></a></li>

  <!-- SUBMIT ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="openSubmit"><img src="../assets/menu/Menu_Icons_submit.png"><p>Submit</p>
  </div></a></li>

  <!-- METAMASK -->
  <li class="MenuItems"><MetamaskMobile class="clickbox"/>
  </li>


</ul><!-- END OF LIST -->

  </div>

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
import MetamaskMobile from '@/components/MetamaskMobile.vue'



export default {
  name: 'navbarMobile',
    components: {
        'aboutpage': About,
        'artistspage': Artists,
        'contactpage': Contact,
        'blockchainpage': Blockchain,
        'submitpage': Submit,
        'MetamaskMobile': MetamaskMobile
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
        },
      closeall: function() {
        this.open1 = false;
        this.open2 = false;
        this.open3 = false;
        this.open4 = false;
        this.open5 = false;
        this.open6 = false;
        this.open7 = false;
        this.close1 = false;
        this.close2 = false;
        this.close3 = false;
        this.close4 = false;
        this.close5 = false;
        this.close6 = false;
        this.close7 = false;
      }
    }
}
</script>


<style lang="scss" scoped>


// NEW NAVBAR
.theMenuMobile{
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  padding: 0;
  width: 100vw;
  background-color: white;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.06));
  height:60px;
  z-index:999;
}
.MenuItems {
  height:60px;
  box-sizing: border-box;
}
.MenuItems img {
  display: inline-block;
  height: 30px;
}
ul li {
  list-style: none;
}
.NavBarContainerMobile {
  margin: auto;
  padding: 0;
  text-align: center;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-start;
}
.clickbox {
  padding-top:5px;
  margin: auto;
  box-sizing: border-box;
  height:60px;
  width: 12.5vw;
  align-self: auto;
  &:hover {
    background-color: rgb(222, 227, 177);
    background: -webkit-linear-gradient(-250deg, #f2b719, #ffdd46);
  }
}
.clickbox p {
  margin: 0;
  padding: 0;
  font-size:8px;
  color:black;
    font-family: 'Comfortaa', cursive;
}
.MetaMask {
  height: 60px;
  margin: auto;
  padding: 0;
}

// LINKS
a:link {
  text-decoration: none;
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
    top:87%;
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
