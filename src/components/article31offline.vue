<template>
  <div class="root-container">
    
    <!-- Start Card Container-->
    <div class="CardContainer" @mouseover="isMouseOver = true" @mouseout="isMouseOver = false">
      

    <!-- Start Flipcard -->
    <div class="flipcard" @click="flip">

      <div class="articleNumber">
            <p><span id="numerals">Article 31</span></p>
      </div>
    <!-- SHADOW CONTAINER -->
    <div class="ShadowContainer">

    <!-- The Frontside FALLBACK --><!-- The Frontside FALLBACK --><!-- The Frontside FALLBACK --><!-- The Frontside FALLBACK -->
    <div class="Frontside" v-bind:class="{ 'reveal' : flipped }">
      <!-- CARD SHAPE STARTS -->
      <div class="CardShape" id="CardShape">
      <div class="ArticleHeadline">
        <h2 class="redType">
          Error: No connection <br>to the blockchain
          </h2>
        </div>
      
      <div class="theArtwork">
        <div class="noMetaMaskPlaceholder">
          <div class="noMetaMaskText">
          Please connect to the Ethereum blockchain to see the content of each article.
          </div>
        </div>
      </div>
      
          </div>
          <!-- END CARD SHAPE -->

          <!-- Owner Info -->
        <div class="ownerPlaque" id="PlaqueShape">
        <p class="ownerPlaqueSmall">Last adopted by:</p>
        </div>
          <!-- END Owner Info -->
    </div>
    <!-- End Frontside FALLBACK --><!-- End Frontside FALLBACK --><!-- End Frontside FALLBACK --><!-- End Frontside FALLBACK --><!-- End Frontside FALLBACK -->

    <!-- The Backside About the Artwork and ordering a print -->
    <div class="Backside" v-bind:class="{ 'reveal' : flipped }">
        <!-- CARD SHAPE STARTS -->
      <div class="CardShape" id="CardShape">
        
        <div class="ArticleContainer">
          <h1>Please connect to the Ethereum blockchain to discover more.</h1>
          <p class="ArticleText"></p>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <!-- The artist who created the artwork for the article -->
        <p>
          Download MetaMask plugin for your browser here: <br>
          <a href="http://metamask.io" target="_blank">metamask.io</a>
        </p>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
         <!-- History of owners should go here, on the backside. -->
        <div class="ownerHistory">
          <h2> </h2>
                    <ul id="ownerHistory2">
                    </ul>
                  </div>
                  
       
        </div>
        
          <!-- ARTICLECONTAINER ENDS -->

    </div>
    <!-- END CARD SHAPE -->
    <!-- Card Plaque Backside -->
    <div class="ownerPlaque" id="PlaqueShape">
        </div>
    <!-- END Card Plaque Backside -->
</div>
<!-- END Backside -->

<!-- END SHADOW CONTAINER -->
    </div>
          
    </div>
    <!-- End Flipcard -->
<div class="flipControls" @click="flip">
      <li><div class="circle" v-bind:class="{ 'ring' : flipped }"></div></li>
      <li><div class="circle" v-bind:class="{ 'ring' : !flipped }"></div></li>
      </div>
    <!-- Controller for buying and stuff -->
    <div class="articleControls" v-bind:class="{ 'transparency' : isMouseOver }">
       <!-- Buying form and button -->
      <div class="buying">
          <input type="text"
            name="thisName"
            placeholder="Enter name or nickname"
          />
          <input type="number" placeholder="Price in Ξ" />
          <button class="Button-Buy">
            Connect to the Ethereum<br>Main Net to activate
          </button>
                    
        <!-- Small text under form -->
    <div class="smallText">
      <p>Adopt this article and artwork for any amount above its current worth. The information entered into this form will be displayed with the article so please be thoughtful. Enter amount in Ether.
      </p>
      </div>
      <!-- END small text under form -->
      </div>
      <!-- END buying form and button -->
      
    
    </div>
    <!-- END Controller for buying and stuff -->

    </div>
    <!-- End CardContainer -->

  </div>
  <!-- End Root -->

</template>

<script>
import { setTimeout } from "timers";

export default {
  name: "article31offline",
  mounted() {
  },
  data() {
    return {
      flipped:false,
      isMouseOver: false
    }
  },
  methods: {
    flip: function() {
      this.flipped = !this.flipped;
      console.log(this.flipped);
    },
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');

.root-container {
  margin: 40px;
  text-align: center;
  width: auto;
  position: relative;
  font-family: 'Comfortaa', cursive;
  font-size: 1em;
  color: #3F3F3F;
}
h2 {
  margin: 0 0 0 0;
  font-size: 0.8em;
  padding: 25px 0 0 0;
}
h4 {
  margin: 12px 0 0 0;
  font-size: 0.7em;
  font-style:italic;
  font-weight:normal;
}
.CardContainer{
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  display: inline-block;
  align-items: center;
  width:236px;
  height: auto; 
  transition: ease-out 300ms; 
  &:hover {
    transform: scale3d(1.09, 1.09, 1.09);
  }
}
.ShadowContainer {
  height: 100%;
  width: auto;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.04));
  transition: ease-out 300ms; 
  &:hover {
    filter: drop-shadow(14px 14px 10px rgba(0, 0, 0, 0.06));
  }
}
.flipcard {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  transition: ease-in 300ms;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.flipControls{
  margin: 30px 0 0 0;
  padding: 0 0 0 0;
  width:100%;
  height:auto;
}
.flipControls li {
  display: inline-block;
  margin: 0 7px 0 7px;
}
.circle {
  width:17px;
  height:17px;
  background: white;
  border-radius: 50%;
  &.ring {
    width: 15px;
    height: 15px;
    border: 1px;
    border-color: white;
    border-style: solid;
    background: transparent;
  }
}

.articleNumber {
  font-family: 'Space Mono', monospace;
  color: #999999;
  font-size: 0.5em;
  position: absolute;
  top: -35px;
  width:100%;
}

// FRONTSIDE

.Frontside, .Backside {
  margin: 0 0 0 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  transition: ease-in 600ms;
}

.Frontside {
  z-index: 1;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  transform: rotate3d(0, 1, 0, 0);
  backface-visibility: hidden;

  &.reveal {
              transform: rotate3d(0, 1, 0, 180deg);
        }
}

.Backside {
  z-index: 2;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  transform: rotate3d(0, 1, 0, 180deg);
  backface-visibility: hidden;

  &.reveal {
              transform: rotate3d(0, 1, 0, 0);
        }

}
.CardShape {
  background-color:rgb(255, 255, 255);
}

.flipcard, .Frontside, .Backside, .CardShape {
  width: 236px;
  height: 387px;
  
}
.ArticleHeadline {
  height: 17%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.theArtwork {
  height: 83%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  overflow: hidden;
}
.theArtwork img {
  height: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
}
#IPFSImage {
}
.slideshow {
  display:none;
}


.currentOwner {
  color: #124588;
}
.ownerPlaque {
  position: absolute;
  bottom: -17px;
  height: 34px;
  width: 100%;
  background-color: white;
}
.ownerPlaqueSmall {
  margin: 6px 0 0 0;
  padding: 0 0 0 0;
  font-size: 5px;
}
.ownerPlaqueBig {
  margin: 2px 0 0 0;
  padding: 0 0 0 0;
  font-size: 0.8em;
}

// BACKSIDE

.ArticleContainer {
  margin: 0 0 0 0;
  padding: 0 14px 0 14px;
  height: 365px;
  overflow:scroll;

}
.ArticleText {
  font-size: 0.65em;
  text-align: left;
  color: black;
}
.ownerHistory {
  margin: -12px 0 0 0;
  padding: 0 0 8px 0;
}
.ownerHistory ul {
  font-size: 0.65em;
  list-style: none;
  margin: 10px 0 0 0;
  padding: 0 0 10px 0;
}
.ArticleContainer h1, h2 {
  font-size: 0.8em;
  margin: 0 0 0 0;
  padding: 26px 0 0 0;
  line-height: 1.4;
}
.dot {
  margin: 0 3px 0 3px;
  height: 3px;
  width: 3px;
  background-color: #3F3F3F;
  border-radius: 50%;
  display: inline-block;}


// CONTROLS

.articleControls {
  margin: 0 0 0 0;
  padding: 20px 0 0 0;
  margin-top: 0px;
  text-align: center;
  width: 236px;
  height:auto;
  opacity:0;
  transition: ease-in 200ms;
}
.transparency {
  opacity:1;
}
.gold {
  color: #FFB000;
  font-family: 'Space Mono', monospace;
  font-size: 0.9em;
  margin: 12px 0 12px 0;
// background: -webkit-linear-gradient(#eee, #FFB000);
//  -webkit-background-clip: text;
//  -webkit-text-fill-color: transparent;
}
.buying {
  width: 100%;
  height: auto;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
input {
  display: inline;
  height: 30px;
  outline:none;
  background:white;
  border-radius:6px;
  border-style: none;
  box-sizing: border-box;
  padding-left:8px;
  color: black;
}
input::placeholder {
  color: #BABABA;
}
input[type=text] {
  width: 65%;
  margin-right:7px;
}
input[type=number] {
  width:29%;
  margin-left:7px;
}
.Button-Buy {
  margin: 12px 0 0 0;
  padding: 0 0 0 0;
  font-family:'Comfortaa', cursive;
  font-size:0.8em;
  height: 45px;
  width:100%;
  outline:none;
  background:white;
  border-radius:6px;
  border-style: none;
  box-sizing: border-box;
  background: -webkit-linear-gradient(#68F09E, #00AA56);
  color: white;
  transition: ease-in 300ms;
}
.smallText {
  font-size:0.3em;
  color: #A0A0A0;
  line-height: 1.5;
}

.inProcess {
  display: inline-block;
  height: 30px;
  margin: 0 0 0 14px;
}

// LINKS
a {
  color: #FFB000;
}
a:hover {
  color: black;
}

// loader stuff
.adoptionPending {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: -3px 0 0 -10px;
  padding-right: 15px;
  background-image: url("../assets/block-rotate-loading.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px 30px;
}

#CardShape {
      clip-path: polygon(0% 5%, 9% 0%, 91% 0%, 100% 5%, 100% 100%, 0 100%);
}
#PlaqueShape {
  clip-path: polygon(75% 0, 82% 50%, 75% 100%, 25% 100%, 18% 50%, 25% 0%);
}



// FALLBACK STYLES
.NoOwner {
  font-family: 'Space Mono', monospace;
  font-size: 0.6em;
  margin: 12px 0 12px 0;
  color:red;
}
.Pending {
  background: -webkit-linear-gradient(#7FFFEB, #0065FF);
  display:inline-block;
}
.Failure { 
  background: -webkit-linear-gradient(#FFC794, #E90020);
}
.Success {
  background: -webkit-linear-gradient(#DDDDDD, #B2B2B2);
}
.TransactionButtonText {
  display: inline-block;
  margin: 7px 0 0 0;
  vertical-align: top;

}
.pendingContainer {
  width: 100%;
  height: 100%;
  margin: 10px 0 0 -5px;
}
// EVERYTHING BELOW THIS IS FALLBACK FOR THE CARDS IF PEOPLE ARENT CONNECTED TO WEB3.
.noMetaMaskPlaceholder {
  width:100%;
  height:100%;
  background-image: url('https://gateway.pinata.cloud/ipfs/QmbB3uzdW7XHUnkqiB7xuAaaPzzQtEDQRDeRX6GTr3WKso');
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: gray;
  background-blend-mode: screen;
  display: flex;
  align-items: center;
  justify-content: center;
}
.noMetaMaskText {
  font-size: 1.3em;
  color: black;
  font-weight: 900;
  box-sizing: border-box;
  padding: 20px;
}
.redType {
  color: red;
  padding-top: 18px;
}
.redTypePosition {
}
</style>
