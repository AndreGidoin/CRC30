<template>
  <div class="pageContainer">
    <div class="arrowcontainer makeLink" v-on:click="pageSwitch">    <div class="arrow"></div>    </div>
      <div class="pageContent">

          <!-- CHOOSE CONNECTION METHOD -->
          <div class="connectionMethod">
          <div class="walletType" v-bind:class="{ 'active' : connect }" @click="connectionMetaMask(), revert()"><img src="../assets/Onboarding/Desktop/Metamask_logo.png"><p>Connect with MetaMask</p></div>
          <div class="walletType" v-bind:class="{ 'active' : !connect }" @click="connectionWalletLink"><img src="../assets/Onboarding/Mobile/CoinbaseWallet_Logo.png"><p>Connect with Wallet Link</p></div>
          </div>
      <div class="spacer"></div>

        <!-- SLIDER CONTAINER -->
        <div v-if="connect" class="sliderContainer desktop">
          
          <div class="sliderInfo">
            <p>Introducing Adop The Rights Of A Child - an Ethereum-Powered fundraiser for UNICEF</p>
            <h1>Please install MetaMask to fully experience this website.</h1>
            <h2>Just follow these four simple steps:</h2>
            </div>

          <!-- SLIDER PAGE 1 -->
          <div class="mySlides fade">
            <div class="slideImages">
              <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank"><img src="../assets/Onboarding/Desktop/Metamask_ChromeBrave.png"></a>
              <a href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/" target="_blank"><img src="../assets/Onboarding/Desktop/Metamask_Firefox.png"></a>
              <a href="https://addons.opera.com/en/extensions/details/metamask/" target="_blank"><img src="../assets/Onboarding/Desktop/Metamask_Opera.png"></a>
              </div>

            <div class="slideText">
              <h2>1. Install MetaMask, a browser extension</h2>
              <p>To use this Decentralized Application (DApp) you need a digital wallet like MetaMask. The MetaMask browser extension allows you to interact with and DApp on the Ethereum blockchain direcly in your browser.</p>
           
              </div>
          </div>

          <!-- SLIDER PAGE 2 -->
          <div class="mySlides fade">
            <div class="slideImages">
              <img src="../assets/Onboarding/Desktop/Desktop_Step2.png">
               </div>

            <div class="slideText">
              <h2>2. Create a Wallet (no credit card information required)</h2>
              <p>
                Once you've installed MetaMask you'll be asked to create a wallet which will act as your account to interact with and explore and DApp on the Ethereum Blockchain. Chose a safe password and write down the secret backup phrase should you need to recover your accuont. The extension is accessible from the top right of your browser window, just click the orange fox icon to get started.
                </p>
           
              </div>
          </div>

          <!-- SLIDER PAGE 3 -->
          <div class="mySlides fade">
            <div class="slideImages">
              <img src="../assets/Onboarding/Desktop/Desktop_Step3.png">
               </div>

            <div class="slideText">
              <h2>3. Connect to the Adopt-The-CRC DApp</h2>
              <p>
                When you are logged into MetaMask you will get a pop-up prompt to connect the DApp to your wallet account. Once accepted, the website is fully operational and ready for use. Make sure you're connected to the Main Ethereum Network which is seen on the dropdown menu on the top of the browser plugin.
                </p>
              </div>
          </div>

          <!-- SLIDER PAGE 4 -->
          <div class="mySlides fade">
            <div class="slideImages">
              <img src="../assets/Onboarding/Desktop/Desktop_Step4.png">
               </div>

            <div class="slideText">
              <h2>4. No ether needed to view the site</h2>
              <p>
                Your digital wallet doesn't have to contain any ether to acces the site. But if you want to adopt an article and donate to the fundraiser you will have to buy some ether for your wallet. <a href="https://www.coinbase.com/buy-ethereum" target="_blank">Click to find out how to do that.</a>
                </p>
              </div>
          </div>

          

          <!-- Next and previous buttons -->
          <a class="prev" @click="plusSlides(-1)" v-if="!page1"><img src="../assets/Onboarding/Desktop/Left_Arrow.png"></a>
          <a class="next" @click="plusSlides(1)" v-if="!page4"><img src="../assets/Onboarding/Desktop/Right_Arrow.png"></a>

          <div class="pageNumber">
             <img v-if="page1" src="../assets/Onboarding/Desktop/1_green.png" class="dot"/>
             <img v-if="!page1" src="../assets/Onboarding/Desktop/1_white.png" class="dot active" @click="currentSlide(1)"/>

             <img v-if="page2" src="../assets/Onboarding/Desktop/2_green.png" class="dot"/>
             <img v-if="!page2" src="../assets/Onboarding/Desktop/2_white.png" class="dot active" @click="currentSlide(2)"/>

             <img v-if="page3" src="../assets/Onboarding/Desktop/3_green.png" class="dot"/>
             <img v-if="!page3" src="../assets/Onboarding/Desktop/3_white.png" class="dot active" @click="currentSlide(3)"/>

             <img v-if="page4" src="../assets/Onboarding/Desktop/4_green.png" class="dot"/>
             <img v-if="!page4" src="../assets/Onboarding/Desktop/4_white.png" class="dot active" @click="currentSlide(4)"/>
             <!-- <img v-bind:src="getImgUrl(member.imgURL)" v-bind:alt="member.imgURL"> -->
          </div>





          </div><!-- END SLIDER CONTAINER -->

        <!-- WALLET LINK CONTAINER -->  
        <div v-if="!connect" class="sliderContainer desktop">
          <div class="sliderInfo walletlink">
            <h1>Wallet Link integration coming soon...</h1>
            </div>
        </div>
      </div>
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
      page4: false,
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
          this.page4 = false;
        } else if (n === 2) {
          this.page1 = false;
          this.page2 = true;
          this.page3 = false;
          this.page4 = false;
        }else if (n === 3) {
          this.page1 = false;
          this.page2 = false;
          this.page3 = true;
          this.page4 = false;
        }else if (n === 4) {
          this.page1 = false;
          this.page2 = false;
          this.page3 = false;
          this.page4 = true;
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
@import "../components/styles/menustyle.scss";

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
  padding-left:80px;
  }


.pageContent {
  padding: 40px 20px 20px 20px;
  height: auto;
  width: 100%;
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
  height: 20px;
  width: auto;
}


// ONBOARDING STYLES
.walletType {
  position: relative;
  margin: 0 20px 0 20px;
  padding:12px 0 0 0;
  width: 210px;
  height: 50px;
  background-color: white;
  border-radius: 7px;
  text-align:center;
  box-sizing: border-box;
  display:inline-block;
  cursor: pointer;
  p {
    font-size:0.7em;
    margin: auto;
    display:inline;
  vertical-align: middle;
  }
  img {
    height: 70%;
    margin:auto;
    padding:0 10px 0 0 ;
    display:inline-block;
  vertical-align: middle;
  }
  &.active {
    background-color: #a7fcbe;
    cursor:auto ;
  }
}
.connectionMethod {
  margin: auto;
  padding:0;
  width: 70vw;
  min-width: 500px;
  max-width: 1000px;
  height: auto;
  text-align: center;
}

a {
    text-decoration: none;
    color: black;
}

.sliderContainer {
  position: relative;
  margin: auto;
  padding:0;
  width: 70vw;
  min-width: 500px;
  max-width: 1000px;
  min-height: 464px;
  height: auto;
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
    font-size: 8.5px;
    padding-bottom: 5px;
  }
  h1 {
    font-size: 1.4em;
  }
  h2 {
    font-size: 1em;
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
  top: 50%;
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
.slideImages {
  img {
    height: 130px;
    padding: 0 20px;
  }
}

.slideText {
  margin: auto;
  padding:10px;
  width:100%;
  text-align:center;
  box-sizing: border-box;
  p {
    font-size: 0.7em;
    padding: 0 17px 0 17px;
    line-height: 1.5;
  }
  h1 {
    font-size: 1.4em;
  }
  h2 {
    font-size: 1em;
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


// WALLET LINK STYLES

.walletlink {
  height: 440px;
  vertical-align: middle;
  margin: auto;
  padding: auto;
  h1 {
    height: 100%;
    line-height: 440px;
  }
}
</style>