<template>
  <div class="root-container">
    
    
    <!-- Start Card Container-->
    <div class="CardContainer" @mouseover="isMouseOver = true" @mouseout="isMouseOver = false">
      

    <!-- Start Flipcard -->
    <div class="flipcard" @click="flip">

 <!-- Article Number -->
    <div class="articleNumber" v-if="crcArticleChecked">
            <p><span id="numerals">Article {{ crcArticleEvent }}</span></p>
      </div>
    <!-- Article Number END -->


    <!-- SHADOW CONTAINER -->
    <div class="ShadowContainer">


    <!-- The Frontside with Convention Article and Artwork -->
    <div class="Frontside" v-bind:class="{ 'reveal' : flipped }">
      <!-- CARD SHAPE STARTS -->
      <div class="CardShape" id="CardShape">
      <div class="ArticleHeadline">
        <h2 v-if="ArticleNameChecked"> {{ ArticleNameEvent }}</h2>
        </div>
      
      <div class="theArtwork">
        <span v-if="ipfshHashChecked">
          <img id="IPFSImage10" />
        </span>
      </div>
      
          </div>
          <!-- END CARD SHAPE -->

          <!-- Owner Info -->
      <div class="ownerPlaque" id="PlaqueShape" v-if="!worthIsZero">
        <p class="ownerPlaqueSmall">Current owner:</p>
          <p class="ownerPlaqueBig">{{ theCurrentOwner }}</p>
        </div>
        <div class="ownerPlaque" id="PlaqueShape" v-if="worthIsZero">
        <p class="ownerPlaqueSmall">Current owner:</p>
        </div>
          <!-- END Owner Info -->
    </div>
    <!-- End Frontside -->

    <!-- The Backside About the Artwork and ordering a print -->
    <div class="Backside" v-bind:class="{ 'reveal' : flipped }">
        <!-- CARD SHAPE STARTS -->
      <div class="CardShape" id="CardShape">
        
        <!-- ArticleContainer STARTS -->
        <div class="ArticleContainer" v-if="crcArticleContentChecked">
          <h1>This article states that:</h1>
          <p class="ArticleText">{{ crcArticleContentEvent }}</p>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
         <!-- History of owners should go here, to the backside. -->
        <div class="ownerHistory" v-if="hasOwners">
          <h2 v-if="hasPreviousOwners">Thank you to all supporters:</h2>
                    <ul id="ownerHistory10">
                    </ul>
                  </div>
                  <div class="ownerHistory" v-if="!hasOwners">
          <h2>Nobody has supported this article yet. Claim it yourself for any price.</h2>
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
<div class="flipControls">
      <li><div class="circle" v-bind:class="{ 'ring' : flipped }"></div></li>
      <li><div class="circle" v-bind:class="{ 'ring' : !flipped }"></div></li>
      </div>
    <!-- Controller for buying and stuff -->
    <div class="articleControls" v-bind:class="{ 'transparency' : isMouseOver }">
      <p class="gold" v-if="worth">Current worth: {{CurrentWorth}} ETH</p>
          <p class="NoOwner" v-if="worthIsZero">This article has not been ratified by anyone yet. <i>Claim it for any price.</i></p>
      <!-- Buying form and button -->
      <div class="buying">
          <input type="text"
            v-model="yourName"
            name="thisName"
            placeholder="Enter name or nickname"
          />
          <input type="number" v-model="amount" placeholder="Price in Ξ" />
          <button class="Button-Buy" v-on:click="buyConvention" v-if="!pending && buyButton">
            Buy this article
          </button>
                    <button class="Button-Buy Pending" v-if="pending">
                      <div class="pendingContainer"><div class="lds-dual-ring" v-if="pending"></div><div class="TransactionButtonText"><i>Transaction in process</i></div></div>
                    </button>
                              <button class="Button-Buy Failure" v-on:click="buyConvention" v-if="failure">
                                Transaction failed. Try again.
                              </button>
                              <button class="Button-Buy Success" v-if="success">
                                Success! You are the new owner.
                              </button>
        <!-- Small text under form -->
    <div class="smallText">
      <p>Buy this article and artwork for any amount above its current worth. The information entered into this form will be displayed with the article so please be thoughtful. Enter amount in Ether.
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
  name: "article10",
  mounted() {
    console.log("dispatching getArticle10Instance");
    this.$store.dispatch("getArticle10Instance");
    setTimeout(this.ipfsNewEvent, 100);
    setTimeout(this.ArticleName, 100);
    setTimeout(this.crcArticleNumber, 100);
    setTimeout(this.crcArticleContentEvent, 100);
    setTimeout(this.ownerPromise, 300);
    setTimeout(this.currentWorthOfArticle, 500);
  },
  data() {
    return {
      WalletAddress: null,
      theBalance: null,
      Admin: null,
      amount: null,
      yourName: null,
      pending: false,
      success: false,
      failure: false,
      newOwnerEvent: null,
      ipfshHashChecked: false,
      ArticleNameChecked: false,
      crcArticleChecked: false,
      crcArticleContentChecked: false,
      hasOwners: false,
      ownersarray2: [],
      theCurrentOwner: null,
      listOfOwners2: [],
      hasPreviousOwners: false,
      flipped:false,
      CurrentWorth: null,
      worth: false,
      worthIsZero: false,
      isMouseOver: false,
      buyButton: true
    };
  },
  methods: {
    buyConvention(event) {
      // this is wrong
      console.log(this.yourName, this.amount);
      this.failure = false;
      this.newOwnerEvent = null;
      this.$store.state.article10Instance().buyCRC(
        this.yourName,
        {
          gas: 300000,
          value: this.$store.state.web3
            .web3Instance()
            .toWei(this.amount, "ether"),
          from: this.$store.state.web3.coinbase
        },
        (err, result) => {
          if (err) {
            console.log(err);
            this.pending = false;
            this.failure = true;
          } else {
            this.pending = true;
            let newOwner = this.$store.state.article10Instance().newOwner();
            newOwner.watch((err, result) => {
              if (err) {
                console.log("could not get event newOwner()");
              } else {
                this.newOwnerEvent = result.args;
                this.pending = false;
                this.success = true;
                this.buyButton = false;
                this.currentWorthOfArticle();
                this.theCurrentOwner = this.yourName;
              }
            });
          }
        }
      );
    },
    ArticleName(event) {
      console.log("Getting ArticleName");
      this.$store.state.article10Instance().conventionArticleName(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theArticleName = this.$store.state
              .article10Instance()
              .conventionArticleName((err, result) => {
                if (err) {
                  console.log(err);
                  console.log(
                    "cant get the convention name from the smart contract"
                  );
                } else {
                  this.ArticleNameChecked = true;
                }
              });
            console.log(JSON.stringify(result));
            this.ArticleNameEvent = result;
          } else {
            console.error(error);
          }
        }
      );
    },
    crcArticleNumber(event) {
      console.log("getting article number");
      this.$store.state.article10Instance().conventionArticleNumber(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theArticleNumber = this.$store.state
              .article10Instance()
              .conventionArticleNumber((err, result) => {
                if (err) {
                  console.log(err);
                  console.log(
                    "cant get the convention number from the smart contract"
                  );
                } else {
                  this.crcArticleChecked = true;
                }
              });
            console.log(JSON.stringify(result));
            this.crcArticleEvent = result;
          } else {
            console.error(error);
          }
        }
      );
    },
    crcArticleContentEvent(event) {
      console.log("Getting article content");
      this.$store.state.article10Instance().conventionArticleContent(
        
        (error, result) => {
          if (!error) {
            let theArticleContent = this.$store.state
              .article10Instance()
              .conventionArticleContent((err, result) => {
                if (err) {
                  console.log(err);
                  console.log(
                    "cant get the article content from the smart contract"
                  );
                } else {
                  this.crcArticleContentChecked = true;
                }
              });
            console.log(JSON.stringify(result));
            this.crcArticleContentEvent = result;
          } else {
            console.error(error);
          }
        }
      );
    },
    currentWorthOfArticle(event) {
      console.log("Getting current worth of this article");
      const theCurrentWorth = new Promise((resolve, reject) => {
        this.$store.state.article10Instance().currentWorth((error, result) => {
          if (error) {
            console.log("Cant get currentWorth()");
            console.log(error);
          } else {
            if (result == 0) {
              console.log(result + " Current worth is ZERO");
              this.worthIsZero = true;
              this.worth = false;
            } else {
            this.CurrentWorth = web3.fromWei(result);
            this.worth = true;
            this.worthIsZero = false;
            console.log("This article is worth " + result);
            console.log(web3.fromWei(result) + " is the result in ETH")
            } 
          }
          resolve(result);
          console.log(this.worth + " is that it's worth now" + this.worthIsZero + " is zero worth")
        })
      })
    },
    // Maybe the constactInstances will have to be unique to each vue file? Or is there a way to automate this?
    ipfsNewEvent(event) {
      console.log("Starting ipfsNewEvent function");
      const theIPFSHash = new Promise((resolve, reject) => {
        this.$store.state.article10Instance().ipfsImageHash((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash from the smart contract");
            console.log(err);
            reject(new Error("ipfsNewEvent function went wrong"));
          } else {
            this.ipfshHashChecked = true;
            console.log(
              "https://gateway.pinata.cloud/ipfs/" +
                result +
                " - this is to see if the result and resolve will render correctly"
            );
            resolve("https://gateway.pinata.cloud/ipfs/" + result);
          }
        });
      }).then(result => {
        console.log("IPFS URL generation success");
        var myURLBitch = result;
        document.getElementById("IPFSImage10").src = myURLBitch;
      });
    },
    ownerCount(event) {
      console.log("getting owner count");
      const promise1 = new Promise((resolve, reject) => {
        this.$store.state.article10Instance().owners((error, result) => {
          if (error) {
            console.log(err);
            reject(new Error("ownerCount function went wrong"));
          } else {
            console.log(result);
            console.log(JSON.stringify(result));
            resolve(result);
          }
        });
      });
    },
    ownerPromise(event) {
      console.log("running ownerPromise");

      const _ownerCount = new Promise((resolve, reject) => {
        this.$store.state.article10Instance().getUsersCount((error, result) => {
          if (error) {
            console.log(error);
            reject( new Error('stopping here'))
          } else {
            console.log(result);
            console.log(result + " is the result");
            resolve(result);
          }
        });
      });
      _ownerCount.then((result) => {
          const ownersarray = []
          const getArray = new Promise((resolve, reject) => {
                let ownerVariable = result;
              for (let i = 0; i < result; i++) {
                  const ownernames = new Promise((resolve, reject) => {
                      this.$store.state.article10Instance().getUser(i, (error, result) => {
                          if (error) {
                              console.log(error + ' error in for loop');
                              reject(new Error('for loop stops here'))
                          } else {
                              console.log(ownerVariable + ' is the ownerVariable')
                              console.log(i + ' – this is the value of I')
                              console.log(ownerVariable-1 + ' this is ownervariable-2');
                              if (i === ownerVariable-1) {
                                console.log('going into the IF statement in the for loop')
                                this.ownersarray2.push(' ' + result[1]);
                                console.log('end of first for loop');
                                console.log(this.ownersarray2 + ' this is the end result for ownersarray2');
                                resolve(result);
                              } else {
                              console.log(result + ' is the result in the first for loop');
                              ownersarray.push(' ' + result[1]);
                              this.ownersarray2.push(' ' + result[1]);
                              console.log(this.ownersarray2 + ' this is the ownersarray2 preliminary result')
                              }
                          }
                      });
                  });
                  ownernames.then((result) => {
                      console.log('running ownernames.then')
                      console.log(this.ownersarray2 + ' are the owners of this contract')
                      console.log(result + ' this is the result from the previous promise called ownernames')
                      if (this.ownersarray2 === "undefined") {
                          console.log('ownersarray is undefined');
                      } else {
                          console.log('Done with getting the array from the contract and now were triggering showCurrentOwner()')
                          this.showCurrentOwner();
                      }
                  })
              }
          })
      })
    },
    showCurrentOwner(event) {
        console.log('running show current owner');
        console.log(this.ownersarray2);
        const showCurrentOwner = new Promise((resolve, reject) => {
            const minusArray = this.ownersarray2;
        console.log(minusArray.length + ' is minusArray');
        this.theCurrentOwner = this.ownersarray2[(minusArray.length-1)];
        console.log(this.theCurrentOwner + ' is the current owner');
        resolve(this.showOwnerHistoryList());
        });
        
    },
    showOwnerHistoryList(event) {
        console.log('running show owner history list');
        console.log(this.ownersarray2 + ' are in the ownersarray2 array');

        for (let i = 0; i < (this.ownersarray2.length); i++) {
            const forPromise = new Promise ((resolve, reject) => {
                console.log('were inside the for Promise')
                if (i === this.ownersarray2.length-2) {
                    this.listOfOwners2 += "<li>" + this.ownersarray2[i] + "</li>";
                    console.log('did we make it?')
                    this.hasOwners = true;
                    this.hasPreviousOwners = true;
                    resolve(this.listOfOwners2);
                    console.log(this.listOfOwners2 + ' loggin the resolve')
                } else {
                this.listOfOwners2 += "<li>" + this.ownersarray2[i] + "</li>";
                console.log(this.listOfOwners2 + ' – the owner loop');
                }
            })
            forPromise.then((result) => {
                console.log('in the then promise')
                document.getElementById("ownerHistory10").innerHTML = result;
                console.log(result);
            })
        }
    },
    flip: function() {
      this.flipped = !this.flipped;
      console.log(this.flipped);
    }
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
    transform: scale3d(1.05, 1.05, 1.05);
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
#IPFSImage4 {
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
  padding: 0 0 0 0;
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

// loader stuff
.lds-dual-ring {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 5px 0 0 0;
}
.lds-dual-ring:after {
  content: " ";
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 0 0 0;
  border-radius: 50%;
  border: 3px solid white;
  border-color: white transparent white transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
#CardShape {
      clip-path: polygon(0% 5%, 9% 0%, 91% 0%, 100% 5%, 100% 100%, 0 100%);
}
#PlaqueShape {
  clip-path: polygon(75% 0, 82% 50%, 75% 100%, 25% 100%, 18% 50%, 25% 0%);
}
.ShadowContainer {
  height: 100%;
  width: auto;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.04));
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

</style>
