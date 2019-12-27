<template>
  <div class="root-container">
    
    <!-- Start Card Container-->
    <div class="CardContainer" @mouseover="isMouseOver = true" @mouseout="isMouseOver = false">
      

    <!-- Start Flipcard -->
    <div class="flipcard" @click="flip">

      <div class="articleNumber">
            <p><span id="numerals">Article 2</span></p>
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
        <p class="ownerPlaqueSmall">Artwork by:</p>
          <p class="ownerPlaqueBig">Dofl Yun</p>
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
  name: "article2offline",
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
@import "./styles/cardstyle.scss";

// EVERYTHING BELOW THIS IS FALLBACK FOR THE CARDS IF PEOPLE ARENT CONNECTED TO WEB3.
.noMetaMaskPlaceholder {
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
}
.noMetaMaskPlaceholder::after {
  content: "";
  background-image: url('https://gateway.pinata.cloud/ipfs/QmSMWw7ozKDr9LJ7ptF7gQtfc6MnLe3TSrNrTSAePyWuUJ');
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0.3;
  top:66px;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  -webkit-filter: blur(1px);
  filter: blur(1px);
}
.noMetaMaskText {
  font-size: 1.3em;
  color: white;
  font-weight: 900;
  box-sizing: border-box;
  padding: 20px;
  z-index:1;
}
.redType {
  color: red;
  padding-top: 18px;
}
.redTypePosition {
}
</style>
