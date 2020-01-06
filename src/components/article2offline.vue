<template>
  <div class="root-container">
    
    <!-- Start Card Container-->
    <div class="CardContainer" @mouseover="isMouseOver = true" @mouseout="isMouseOver = false" v-bind:class="{ 'foldout' : flipped }">
      


 <!-- Article Number -->
    <div class="articleNumber" v-bind:class="{ 'invisible' : flipped }">
            <p><span id="numerals">Article {{ number }}</span></p>
      </div>
    <!-- Article Number END -->


    <!-- SHADOW CONTAINER -->
    <div class="ShadowContainer" v-bind:class="{ 'foldout' : flipped }" @click="flip">
      <div class="closeX" v-bind:class="{ 'foldout' : flipped }"><img src="../assets/Close_X.png"></div>

      <!-- Artwork SHAPE STARTS -->
      <div class="ArtworkShape" v-bind:class="{ 'foldout' : flipped }">
      
      <div class="theArtwork">
        <span >
          <img src="https://gateway.pinata.cloud/ipfs/QmQtZmy7uaspUiQepjBBghpQkDfvUMWk16JW1vTbCXLiiE" class="slideshow"/>
          <img src="https://gateway.pinata.cloud/ipfs/QmXLKk9UjdCF8vCMbUKCyY9NYs81j1MxT7w165ugsSpvha" class="slideshow"/>
          <img src="https://gateway.pinata.cloud/ipfs/QmdRiUxMEisdjKqdGMyCq2T94bg2F6fufmKcvFAqFoZC7S" class="slideshow"/>
          <img src="https://gateway.pinata.cloud/ipfs/QmVLqC2u6pe8urEGKp8hFzVm17zjjxBgQ4ZfSZ433kYRX3" class="slideshow"/>
          <img src="https://gateway.pinata.cloud/ipfs/QmQeaRUBtuSXZSTF9ai349wXcfbnWdp4k68zQzRKjVfs8P" class="slideshow"/>
          <img src="https://gateway.pinata.cloud/ipfs/QmRVFHjSJuqgoYoGth1A8PmGjXtoMeer7TGXXMyNzVediV" class="slideshow"/>
          <img src="https://gateway.pinata.cloud/ipfs/QmQstNHF1QFS1rnh2ZyAiWjftBxK76fH9n5MuLfj5pEGJL" class="slideshow"/>
          <img src="https://gateway.pinata.cloud/ipfs/QmXXaCbihyD2mE3ds9mva3q7A4TDsuAzVWUz4RtQXmnvE1" class="slideshow"/>
          <img src="https://gateway.pinata.cloud/ipfs/QmSMWw7ozKDr9LJ7ptF7gQtfc6MnLe3TSrNrTSAePyWuUJ" class="slideshow"/>
        </span>
      </div>
      <div class="worthInfo">
          <p class="NoOwner smallSize">Please connect to the Ethereum blockchain<br />to see how much this artwork is worth.</p>
    </div>
    </div>
    <!-- END Artwork SHAPE -->

    <!-- START FOLD OUT CONTENT -->
    <div class="articleInfo" v-if="tricked" v-bind:class="{ 'visible' : visible }">

    <div class="articleInfoNumber"><p class="numerals">Article {{ number }}</p></div>
    <div class="ArticleHeadline">
        <h2> {{ ArticleName }}</h2>
    </div>
    <div class="ArticleContainer">
        <p class="ArticleText">{{ ArticleContent }} <a href="https://downloads.unicef.org.uk/wp-content/uploads/2019/10/UNCRC_summary-1_1.pdf" target="_blank">Read More</a></p>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <!-- The artist who created the artwork for the article -->
          <div class="redeem">
            <h2>This article is illustrated by: <br /> {{artistName}}</h2>
            <p>
              Adopt this article and order a free physical copy of the art piece. Stay loge in with the same wallet you used to adopt this article and this button will take you to the order site.
            </p>
            <button class="Button-Inactive Success">
            Adopt first, then click for a free print
            </button>
            </div>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
         <!-- History of owners should go here, on the backside. -->
        <div class="ownerHistory">
          <h2 class="error NoOwner">To join the fundraiser and support the Convention on the Rights of the Child you have to connect to the decentralized web. All donations will go directly to UNICEF and their work to protect children around the world. Learn how to connect by clicking the cog icon in the menu or go directly to <a href="https://metamask.io/" target="_blank">MetaMask.io</a> to install the browser extension needed. </h2>
          </div>
        </div>
        <!-- ARTICLECONTAINER ENDS -->
    </div>
    <!-- END FOLD OUT CONTENT (the end div above)-->


    <!-- Owner Info -->
    <div class="ownerPlaque" id="PlaqueShape" v-bind:class="{ 'invisible' : flipped }">
      <p class="ownerPlaqueSmall">Last adopted by:</p>
      <p class="ownerPlaqueBig error">- - -</p>
      </div>
    <!-- END Owner Info -->

<!-- END SHADOW CONTAINER -->
    </div>

<!-- Buying form and button -->
      <div class="buying" v-if="tricked" v-bind:class="{ 'visible' : visible }">
          <input type="text"
            v-model="yourName"
            name="thisName"
            placeholder="Enter name or nickname"
          />
          <input type="number" v-model="amount" placeholder="Price in Ξ" />
          <button class="Button-Buy" v-on:click="buyConvention" v-if="!pending && buyButton">
            Adopt this article
          </button>
          <button class="Button-Buy Pending" v-if="pending">
            <div class="adoptionPending"><img src="../assets/block-rotate-loading.gif" class="pendingImage"><i>Transaction in progress</i></div>
            </button>
            <button class="Button-Buy Failure" v-on:click="buyConvention" v-if="failure">
              Transaction failed. Try again.
              </button>
            <button class="Button-Buy Success" v-if="success">
              Success! You are the new owner.
              </button>
          <!-- Small text under form -->
          <div class="smallText">
            <p>Adopt this article and artwork for any amount above its current worth. The information entered into this form will be displayed with the article so please be thoughtful. Enter amount in Ether.
            </p>
          </div>
          <!-- END small text under form -->
    </div>
    <!-- END buying form and button -->    
          
<div class="flipControls" @click="flip" v-bind:class="{ 'foldout' : flipped }">
      <li><div class="circle" v-bind:class="{ 'ring' : flipped }"></div></li>
      <li><div class="circle" v-bind:class="{ 'ring' : !flipped }"></div></li>
      </div>
    <!-- CURRENT WORTH -->
    <div class="articleControls" v-bind:class="{ 'transparency' : isMouseOver, 'invisible' : flipped  }">
          <p class="NoOwner smallSize">Please connect to the Ethereum Blockchain to see how much this article is worth.</p>
      
    </div>
    <!-- END CURRENT WORTH -->

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
    this.imageCarousel()
  },
  data() {
    return {
      number: 2,
      textnumber: 'two',
      ArticleName: ' All children have these rights',
      ArticleContent: "States Parties shall respect and ensure the rights set forth in the present Convention to each child within their jurisdiction without discrimination of any kind, irrespective of the child's or his or her parent's or legal guardian's race, colour, sex, language, religion, political or other opinion, national, ethnic or social origin, property, disability, birth or other status...",
      artistName:'Dofl Yun',
      flipped:false,
      tricked: false,
      visible: false,
      isMouseOver: false,
      imageSlideShow: 0,
      pending: false,
      success: false,
      failure: false,
      buyButton: true,
      amount: null,
      yourName: null,
      //FALLBACK VARIABLE FOR THE CARD CONTENT
      fallbackContent: false
    };
  },
  methods: {
    buyConvention(event) {
      // Returns alert
        alert('Please connect to the Ethereum Blockchain to adopt this article');
    },
    //
    // ARTICLE SLIDESHOW
    //
    imageCarousel: function() {
      var i;
      var x = document.getElementsByClassName("slideshow");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        }
        this.imageSlideShow++;
        if (this.imageSlideShow > x.length) {this.imageSlideShow = 1}
        x[this.imageSlideShow-1].style.display = "block";
        setTimeout(this.imageCarousel, 2000); // Change image every 2 seconds
    },
    flip: function() {
      this.flipped = !this.flipped;
      if (this.flipped === true) {
      setTimeout(this.trick, 1000)
      } else {
        this.trick();
      }
    },
    trick: function() {
      this.tricked = !this.tricked;
      setTimeout(this.vision, 200)
    },
    vision: function() {
      this.visible = !this.visible;
    },
    // THIS IS FALLBACK FOR THE CARD CONTENT
    checkingFallbackContent: function() {
            if (window.ethereum.selectedAddress === null) {
                this.fallbackContent = true;
                setTimeout(this.checkingFallbackContent, 3000);
            } else {
                this.fallbackContent = false;
            }
        }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');
@import "./styles/cardstyle.scss";
.error {
  color: red;
}
.smallSize {
  font-size: 9px;
  margin-top: 5px;
}
</style>
