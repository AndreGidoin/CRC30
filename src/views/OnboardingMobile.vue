<template>
  <div class="pageContainer">
    <div class="arrowcontainer makeLink" v-on:click="pageSwitch">    <div class="arrow"></div>    </div>
      <div class="pageContent">

          
      <div class="spacer"></div>

        <!-- SLIDER CONTAINER -->
        <div v-if="connect" class="sliderContainer">
          
          <div class="sliderInfo">
            <p>Introducing Adop The Rights Of A Child - an Ethereum-Powered fundraiser for UNICEF</p>
            <h1>Please install the Coinbase Wallet app to fully experience this website.</h1>
            <h2>Just three simple steps:</h2>
            </div>

          <!-- SLIDER PAGE 1 -->
          <div class="mySlides fade">
            <div class="slideImages">
              <img src="../assets/Onboarding/Mobile/CoinbaseWallet_Logo.png" class="singleImage">
              <a href="https://play.google.com/store/apps/details?id=org.toshi" target="_blank"><img src="../assets/Onboarding/Mobile/GooglePlay.png" class="images1"></a>
              <a href="https://apps.apple.com/app/coinbase-wallet/id1278383455?ls=1" target="_blank"><img src="../assets/Onboarding/Mobile/iOSAppStore.png" class="images1"></a>
              </div>

            <div class="slideText">
              <h2>1. Download the Coinbase Wallet app</h2>
              <p>
                To use this Decentralized Application (DApp) you need a digital wallet, and the easiest one to get started with is the Coinbase Wallet or MetaMask app. Both apps are a digital wallet with an integrated browser that lets you interact with DApps.
                </p>
              </div>
          </div>

          <!-- SLIDER PAGE 2 -->
          <div class="mySlides fade">
            <div class="slideImages">
              <img src="../assets/Onboarding/Mobile/Mobile_Step2.png" class="images2">
               </div>

            <div class="slideText">
              <h2>2. Create an account<br />(no credit card information required)</h2>
              <p>
                Both Coinbase Wallet and MetaMask makes it easy to create an account. Just register a username and chose a password. Tada!
                </p>
           
              </div>
          </div>

          <!-- SLIDER PAGE 3 -->
          <div class="mySlides fade">
            <div class="slideImages">
              <img src="../assets/Onboarding/Mobile/Mobile_Step3.png" class="images3">
               </div>

            <div class="slideText">
              <h2>3. Go to Adopt-the-crc.com<br />No ether needed to view the site</h2>
              <p>
                Your digital wallet doesn't have to contain any ether to acces the site. But if you want to adopt an article and donate to the fundraiser you will have to buy some ether for your wallet. <a href="https://www.coinbase.com/buy-ethereum" target="_blank">Click to find out how to do that.</a>
                </p>
              </div>
          </div>

          

          <!-- Next and previous buttons -->
          <a class="prev" @click="plusSlides(-1)" v-if="!page1"><img src="../assets/Onboarding/Desktop/Left_Arrow.png"></a>
          <a class="next" @click="plusSlides(1)" v-if="!page3"><img src="../assets/Onboarding/Desktop/Right_Arrow.png"></a>

          <div class="pageNumber">
             <img v-if="page1" src="../assets/Onboarding/Desktop/1_green.png" class="dot"/>
             <img v-if="!page1" src="../assets/Onboarding/Desktop/1_white.png" class="dot active" @click="currentSlide(1)"/>

             <img v-if="page2" src="../assets/Onboarding/Desktop/2_green.png" class="dot"/>
             <img v-if="!page2" src="../assets/Onboarding/Desktop/2_white.png" class="dot active" @click="currentSlide(2)"/>

             <img v-if="page3" src="../assets/Onboarding/Desktop/3_green.png" class="dot"/>
             <img v-if="!page3" src="../assets/Onboarding/Desktop/3_white.png" class="dot active" @click="currentSlide(3)"/>
          </div>

          </div><!-- END SLIDER CONTAINER -->

      </div>
      <div class="spacer"></div>
      <close class="makeLink"  v-on:click.native="pageSwitch"/>
  </div>
</template>

<script>
import close from './close.vue'
import { setTimeout } from "timers";

export default {
  components: {
        'close': close
    },
    mounted() {
    this.showSlides(this.slideIndex);
  },
    data: function() {
    return {
      connect: true,
      page1: true,
      page2: false,
      page3: false,
      slideIndex: 1,
    }
  },
  methods: {
    pageSwitch: function() {
      this.$emit('onboardingSwitch', false)
      setTimeout(() => {
              this.$emit('onboardingSwitchB', true)
            }, 400);
      },
      plusSlides: function(n) {
        this.showSlides(this.slideIndex += n);
      },
      currentSlide: function(n) {
        this.showSlides(this.slideIndex = n);
      },
      showSlides: function(n) {
        const slides = document.getElementsByClassName("mySlides");
        var i;
        if (n > slides.length) {
          this.slideIndex = 1;
        }
        if (n < 1) {
          this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"
        }
        slides[this.slideIndex-1].style.display ="block";
        // VARIABLES FOR BUTTONS
        if (n === 1) {
          this.page1 = true;
          this.page2 = false;
          this.page3 = false;
        } else if (n === 2) {
          this.page1 = false;
          this.page2 = true;
          this.page3 = false;
        }else if (n === 3) {
          this.page1 = false;
          this.page2 = false;
          this.page3 = true;
        } else {
          console.log('no page found');
        }
      },
      connectionMetaMask: function() {
        this.connect = true;
      },
      connectionWalletLink: function() {
        this.connect = false;
      },
      revert: function() {
        setTimeout(() => {
              this.showSlides(this.slideIndex);
            }, 100);
       
      }
    }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');


.pageContainer {
  font-family: 'Comfortaa', arial, sans-serif;
  font-size: 1em;
  color: #3F3F3F;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 98;
  left: 0;
  top: 0;
  background: rgba(0,0,0, 0.5);
  overflow-x: hidden;
  overflow-y: scroll;
  display:inherit;
  box-sizing: border-box;
  }


.pageContent {
  padding: auto;
  margin: auto;
  height: auto;
  width: 370px;
  opacity:1;
  box-sizing: border-box;
}

p {
  font-size: 0.8em;
}

.arrowcontainer {
	position: relative;
  height: 50px; 
  width: 60px;
  margin-top: 35px;
  margin-bottom: -35px;
  padding-left:25px;
}
.makeLink:hover {
  cursor: pointer;
}

.arrow {
	/* more triangle */
	position: relative;
	height: 0px; width: 0px;
	border: 8px solid;
	border-color: 
		white
		white
		transparent
		transparent;
	transform: rotate(225deg); 
}

.arrow:before {
	content: '';
	position: absolute;
	top: 0px; right: 0px;
	display: block;
	height: 6px; width: 16px;
	background-color: white;
	transform: 
		rotate(-45deg) 
		translate(2px, 4px);
}

.spacer {
  height: 25px;
  width: auto;
}

a {
    text-decoration: none;
    color: black;
}

.sliderContainer {
  position: relative;
  margin: auto;
  padding:auto;
  width: 370px;
  height: 450px;
  background-color: white;
  border-radius: 15px;
  box-sizing: border-box;
}
.sliderInfo {
  margin: auto;
  padding:10px;
  width:100%;
  text-align:center;
  box-sizing: border-box;
  p {
    font-size: 7px;
    padding-bottom: 5px;
  }
  h1 {
    font-size: 1em;
    line-height: 1.3em;
  }
  h2 {
    font-size: 0.6em;
  }
}
.mySlides {
  margin: auto;
  padding:10px;
  width:100%;
  text-align:center;
  position: relative;
  bottom:0;
  box-sizing: border-box;
  display:none;
}
/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  padding: 0 20px;
  user-select: none;
  img {
    height: 40px;
    transition: 0.3s ease;
  }
  
}
/* Position the "next button" to the right */
.next {
  right: 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  img {
    height: 45px;
  transition: 0.3s ease;
  }
}
.singleImage {
    height: 75px;
    padding-bottom: 30px;
    display:block;
    margin: auto;
}
.images1  {
    height: 27px;
    padding: 0 10px;
    margin: auto;
}
.images2  {
    width: 70%;
    padding: 0 10px;
    margin: auto;
}
.images3  {
    height: 120px;
    padding: 0 20px;
    margin: auto;
}

.slideText {
  margin: auto;
  padding:7px;
  width:100%;
  text-align:center;
  box-sizing: border-box;
  p {
    font-size: 0.6em;
    line-height: 1.5;
  }
  h1 {
    font-size: 1.4em;
  }
  h2 {
    font-size: 0.8em;
  }
  a {
    text-decoration: underline;
    color: #FFB000;
  }
  a:hover {
    color: black;
  }

}

.dot {
  height: 25px;
  width: 25px;
  margin: 0 4px 20px 4px;
  display: inline-block;
  &.active {
    cursor: pointer;
    }
}
.pageNumber {
  text-align: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
}

a {
  color: #FFB000;
  text-decoration: underline;
}

a:hover {
  color: black;
  text-decoration: none;
}



</style>