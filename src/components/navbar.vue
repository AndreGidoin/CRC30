<template>
<div>
  <div class="theMenuDesktop"><!-- START MENU CONTAINER -->
    
<ul class="NavBarContainer">
  <!-- HOME ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="closeothers"><img src="../assets/menu/Menu_Icons_home2.png"><p>Home</p></div></a></li>
  
  <!-- ARTISTS ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="openArtists(); closeothers()"><img src="../assets/menu/Menu_Icons_artists.png"><p>The Artists</p>
  </div></a></li> 
  
  <!-- HOW IT WORKS ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox"  @click="openAbout(); closeothers()"><img src="../assets/menu/Menu_Icons_howitworks.png"><p>How It Works</p>
  </div></a></li>

  <!-- ONBOARDING ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox"  @click="openOnboarding(); closeothers()"><img src="../assets/menu/Menu_Icons_onboarding.png"><p>Onboarding instructions</p>
  </div></a></li>

  <!-- BLOCKCHAIN ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="openBlockchain(); closeothers()"><img src="../assets/menu/Menu_Icons_blockchain.png"><p>Why<br />Blockchain?</p>
  </div></a></li>

  <!-- CONTACT ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="openContact(); closeothers()"><img src="../assets/menu/Menu_Icons_contact.png"><p>Get in touch</p>
  </div></a></li>

  <!-- SUBMIT ITEM -->
  <li class="MenuItems"><a href="#"><div class="clickbox" @click="openSubmit(); closeothers()"><img src="../assets/menu/Menu_Icons_submit.png"><p>Submit</p>
  </div></a></li>

  <!-- METAMASK -->
  <li class="system">
    <div class="MetaMask"><hello-metamask/></div>
  </li>


</ul><!-- END OF LIST -->

  </div><!-- END MENU CONTAINER -->



<!-- ARTIST PAGE -->
<div class="artistPage" v-if="!close1" v-bind:class="{ 'open': open1}">
<artistspage 
  v-on:artistSwitch="open1 = $event"
  v-on:artistSwitchB="close1 = $event"
 />
</div>

<!-- HOW IT WORKS PAGE -->
<div class="howitworksPage" v-if="!close2" v-bind:class="{ 'open': open2}">
<aboutpage 
  v-on:howitworksSwitch="open2 = $event"
  v-on:howitworksSwitchB="close2 = $event"
 />
</div>

<!-- ONBOARDING PAGE -->
<div class="onboardingPage" v-if="!close3" v-bind:class="{ 'open': open3}">
<onboardingpage 
  v-on:onboardingSwitch="open3 = $event"
  v-on:onboardingSwitchB="close3 = $event"
 />
</div>

<!-- BLOCKCHAIN PAGE -->
<div class="blockchainPage" v-if="!close4" v-bind:class="{ 'open': open4}">
<blockchainpage 
  v-on:blockchainSwitch="open4 = $event"
  v-on:blockchainSwitchB="close4 = $event"
 />
</div>

<!-- CONTACT PAGE -->
<div class="contactPage" v-if="!close5" v-bind:class="{ 'open': open5}">
<contactpage 
  v-on:contactSwitch="open5 = $event"
  v-on:contactSwitchB="close5 = $event"
 />
</div>

<!-- SUBMIT PAGE -->
<div class="submitPage" v-if="!close6" v-bind:class="{ 'open': open6}">
<submitpage 
  v-on:submitSwitch="open6 = $event"
  v-on:submitSwitchB="close6 = $event"
 />
</div>


</div>
</template>

<script>
import Artists from '@/views/Artists.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Blockchain from '@/views/Blockchain.vue'
import Submit from '@/views/Submit.vue'
import Onboarding from '@/views/Onboarding.vue'
import HelloMetamask from '@/components/hello-metamask'



export default {
  name: 'navbar',
    components: {
        'aboutpage': About,
        'artistspage': Artists,
        'contactpage': Contact,
        'blockchainpage': Blockchain,
        'submitpage': Submit,
        'onboardingpage': Onboarding,
        'hello-metamask': HelloMetamask
    },
    data() {
        return {
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            open6: false,
            close1: true,
            close2: true,
            close3: true,
            close4: true,
            close5: true,
            close6: true
            }
        },
    methods: {
        openArtists: function() {
            if (this.open1 === false) {
              this.close1 = false;
              setTimeout(() => {
                this.open1 = true;
              }, 200);
            } else {
                this.open1 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close1 = true;
              }, 500);
            }
        },
        openAbout: function() {
            if (this.open2 === false) {
              this.close2 = false;
              setTimeout(() => {
                this.open2 = true;
              }, 200);
            } else {
                this.open2 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close2 = true;
              }, 500);
            }
        },
        openOnboarding: function() {
            if (this.open3 === false) {
              this.close3 = false;
              setTimeout(() => {
                this.open3 = true;
              }, 200);
            } else {
                this.open3 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close3 = true;
              }, 500);
            }
        },
        openBlockchain: function() {
            if (this.open4 === false) {
              this.close4 = false;
              setTimeout(() => {
                this.open4 = true;
              }, 200);
            } else {
                this.open4 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close4 = true;
              }, 500);
            }
        },
        openContact: function() {
          if (this.open5 === false) {
              this.close5 = false;
              setTimeout(() => {
                this.open5 = true;
              }, 200);
            } else {
                this.open5 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close5 = true;
              }, 500);
            }
        },
      openSubmit: function() {
            if (this.open6 === false) {
              this.close6 = false;
              setTimeout(() => {
                this.open6 = true;
              }, 200);
            } else {
                this.open6 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close6 = true;
              }, 500);
            }
        },
      closeothers: function() {
        if (this.open1 === true) {
          this.open1 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close1 = true;
              }, 500);
        } else if (this.open2 === true) {
          this.open2 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close2 = true;
              }, 500);
        } else if (this.open3 === true) {
          this.open3 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close3 = true;
              }, 500);
        } else if (this.open4 === true) {
          this.open4 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close4 = true;
              }, 500);
        } else if (this.open5 === true) {
          this.open5 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close5 = true;
              }, 500);
        } else if (this.open6 === true) {
          this.open6 = false;
                history.pushState(null, null, ' ');
              setTimeout(() => {
                this.close6 = true;
              }, 500);
        } else {
          console.log('all done');
        }
    }
    }
}
</script>


<style lang="scss" scoped>


// NEW NAVBAR
.theMenuDesktop {
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  padding: 0;
  width: 70px;
  background-color: white;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.06));
  height:100vh;
  z-index:999;
}
.MenuItems {
  border-color: black;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  height:90px;
  box-sizing: border-box;
}
.MenuItems img {
  display: inline-block;
  width: 40px;
  height: auto;
}
ul li {
  list-style: none;
}
.NavBarContainer {
  margin: auto;
  padding: 0;
  text-align: center;
}
.clickbox {
  padding-top:19px;
  padding-bottom:10px;
  box-sizing: border-box;
  height:90px;
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


// LINKS
a:link {
  text-decoration: none;
}



// THE PAGES

.artistPage, .blockchainPage, .contactPage, .submitPage, .howitworksPage, .onboardingPage {
  display: inherit;
  transition: 200ms;
  transition-timing-function: ease;
  position: relative;
  top: 0;
  left: -100%;
  &.open {
    left: 0;
  transition-duration: 500ms;
  transition-timing-function: ease;
  }
  &.dontshow {
    display: none;
  }
}


</style>
