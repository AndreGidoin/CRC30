<template>
  <div class="pageContainer">
    <div class="arrowcontainer makeLink" v-on:click="pageSwitch">    <div class="arrow"></div>    </div>
      <div class="pageContent">


          <a href="#"><div class="walletlink"><img src="../assets/Onboarding/Mobile/CoinbaseWallet_Logo.png"><p>Or click here to use Wallet Link by Coinbase Wallet</p></div></a>

        <!-- SLIDER CONTAINER -->
        <div class="sliderContainer desktop">
          <div class="sliderInfo">
            <p>Introducing Adop The Rights Of A Child - an Ethereum-Powered fundraiser for UNICEF</p>
            <h1>Please install MetaMask to fully experience this website.</h1>
            <h2>Just follow these four simple steps:</h2>
            </div>

          <div class="mySlides fade">
            <div class="slideImages">
              <img src="../assets/Onboarding/Desktop/Metamask_ChromeBrave.png">
              <img src="../assets/Onboarding/Desktop/Metamask_Firefox.png">
              <img src="../assets/Onboarding/Desktop/Metamask_Opera.png">
              </div>

            <div class="slideText">
              <h2>1. Install MetaMask, a browser extension</h2>
              <p>To use this Decentralized Application (DApp) you need a digital wallet like MetaMask. The MetaMask browser extension allows you to interact with and DApp on the Ethereum blockchain direcly in your browser.</p>
           
              </div>
          </div>

          <!-- Next and previous buttons -->
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>

          <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
          </div>





          </div><!-- END SLIDER CONTAINER -->
        
          
      </div>
      <close class="makeLink"  v-on:click.native="pageSwitch"/>
      <div class="spacer"></div>
  </div>
</template>

<script>
import close from './close.vue'

export default {
  components: {
        'close': close
    },
    methods: {
      pageSwitch: function() {
        this.$emit('onboardingSwitch', false)
        setTimeout(() => {
                this.$emit('onboardingSwitchB', true)
              }, 400);
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
  height: 50px;
  width: auto;
}


// ONBOARDING STYLES
.walletlink {
  position: relative;
  margin: auto;
  margin-bottom: 20px;
  padding:12px 0 0 0;
  width: 30vw;
  min-width: 370px;
  max-width: 500px;
  height: 50px;
  background-color: white;
  border-radius: 7px;
  text-align:center;
  box-sizing: border-box;
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
    display:inline;
  vertical-align: middle;
  }
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
  min-height: 400px;
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
  border-radius: 0 3px 3px 0;
  padding: 0 20px;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
}
.slideImages {
  img {
    height: 150px;
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

}

</style>