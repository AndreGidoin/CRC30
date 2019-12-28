<template>
  <div class="root-container">
    
    <!-- Start Card Container-->
    <div class="CardContainer" @mouseover="isMouseOver = true" @mouseout="isMouseOver = false" v-bind:class="{ 'foldout' : flipped }">
      


 <!-- Article Number -->
    <div class="articleNumber" v-if="crcArticleChecked" v-bind:class="{ 'invisible' : flipped }">
            <p><span id="numerals">Article {{ crcArticleEvent }}</span></p>
      </div>
    <!-- Article Number END -->


    <!-- SHADOW CONTAINER -->
    <div class="ShadowContainer" v-bind:class="{ 'foldout' : flipped }" @click="flip">
      <div class="closeX" v-bind:class="{ 'foldout' : flipped }"><img src="../assets/Close_X.png"></div>

      <!-- Artwork SHAPE STARTS -->
      <div class="ArtworkShape" v-bind:class="{ 'foldout' : flipped }" v-if="isInjected">
      
      <div class="theArtwork">
        <span v-if="ipfshHashChecked">
          <img v-bind:id="numberID" />
          </span>
      </div>
      <div class="worthInfo" v-bind:class="{ 'noWorth' : !worth }" >
      <p class="gold" v-if="worth">Current worth: {{CurrentWorth}} ETH</p>
          <p class="NoOwner" v-if="!worth">This article has not been ratified by anyone yet.<br> <i>Claim it for any price.</i></p>
    </div>
    </div>
    <!-- END Artwork SHAPE -->

    <!-- START FOLD OUT CONTENT -->
    <div class="articleInfo" v-if="tricked" v-bind:class="{ 'visible' : visible }">

    <div class="articleInfoNumber"><p class="numerals">Article {{ crcArticleEvent }}</p></div>
    <div class="ArticleHeadline">
        <h2 v-if="ArticleNameChecked"> {{ ArticleNameEvent }}</h2>
    </div>
    <div class="ArticleContainer" v-if="crcArticleContentChecked">
        <p class="ArticleText">{{ crcArticleContentEvent }} <a href="https://downloads.unicef.org.uk/wp-content/uploads/2019/10/UNCRC_summary-1_1.pdf" target="_blank">Read More</a></p>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <!-- The artist who created the artwork for the article -->
          <div class="redeem">
            <h2>This article is illustrated by {{artistName}}</h2>
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
        <div class="ownerHistory" v-if="hasOwners">
          <h2 v-if="hasPreviousOwners">Thank you to all adopters:</h2>
          <ul class="ownerlist"  v-bind:id="this.ownerHistoryNumber">
          </ul>
          </div>
          <div class="ownerHistory" v-if="!hasOwners">
          <h2>Nobody has adopted this article yet. Claim it yourself for any price.</h2>
          </div>
        </div>
        <!-- ARTICLECONTAINER ENDS -->
    </div>
    <!-- END FOLD OUT CONTENT (the end div above)-->


    <!-- Owner Info -->
    <div class="ownerPlaque" id="PlaqueShape" v-if="!worthIsZero" v-bind:class="{ 'invisible' : flipped }">
      <p class="ownerPlaqueSmall">Last adopted by:</p>
      <p class="ownerPlaqueBig">{{ theCurrentOwner }}</p>
      </div>
    <div class="ownerPlaque" id="PlaqueShape" v-if="worthIsZero" v-bind:class="{ 'invisible' : flipped }">
      <p class="ownerPlaqueSmall">Last adopted by:</p>
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
      <p class="gold" v-if="worth">Article {{ crcArticleEvent }} is currently worth:<br> {{CurrentWorth}} ETH</p>
          <p class="NoOwner" v-if="!worth">This article has not been ratified by anyone yet. <i>Claim it for any price.</i></p>
      
    </div>
    <!-- END CURRENT WORTH -->

    </div>
    <!-- End CardContainer -->

  </div>
  <!-- End Root -->

</template>

<script>
import { setTimeout } from "timers";
import {mapState} from 'vuex'

export default {
  name: "article6",
  computed: mapState({
    isInjected: state => state.web3.isInjected,
  }),
  mounted() {
    this.$store.dispatch("getArticle6Instance");
    setTimeout(this.ipfsNewEvent, 100);
    setTimeout(this.ArticleName, 100);
    setTimeout(this.crcArticleNumber, 100);
    setTimeout(this.getArtistName, 100);
    setTimeout(this.crcArticleContentEvent, 100);
    setTimeout(this.ownerPromise, 300);
    setTimeout(this.currentWorthOfArticle, 500);
    setTimeout(this.checkingFallbackContent, 300);
  },
  data() {
    return {
      number: 6,
      textnumber: 'six',
      numberID: 'IPFSImage6',
      ownerHistoryNumber: 'ownerList6',
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
      tricked: false,
      visible: false,
      CurrentWorth: null,
      worth: false,
      worthIsZero: false,
      isMouseOver: false,
      buyButton: true,
      artistName:'none',
      imageSlideShow: 0,
      //FALLBACK VARIABLE FOR THE CARD CONTENT
      fallbackContent: false
    };
  },
  methods: {
    buyConvention(event) {
      // Check if amount if bigger than current calue
      if (this.amount < this.CurrentWorth) {
        alert('To adopt this article please enter a value higher than the current value of the article');
      } else {

      // The call to the contract
      console.log(this.yourName, this.amount);
      this.failure = false;
      this.newOwnerEvent = null;
      this.$store.state.article6Instance().buyCRC(
        this.yourName,
        {
          gas: 400000,
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
            setTimeout(this.buyButton = true, 2000);
          } else {
            this.pending = true;
            let newOwner = this.$store.state.article6Instance().newOwner();
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
    }
    },
    ArticleName(event) {
      this.$store.state.article6Instance().conventionArticleName(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theArticleName = this.$store.state
              .article6Instance()
              .conventionArticleName((err, result) => {
                if (err) {
                  console.log("cant get the convention name from the smart contract");
                } else {
                  this.ArticleNameChecked = true;
                }
              });
            this.ArticleNameEvent = result;
          } else {
            console.error(error);
          }
        }
      );
    },
    crcArticleNumber(event) {
      this.$store.state.article6Instance().conventionArticleNumber(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theArticleNumber = this.$store.state
              .article6Instance()
              .conventionArticleNumber((err, result) => {
                if (err) {
                  console.log("cant get the convention number from the smart contract");
                } else {
                  this.crcArticleChecked = true;
                }
              });
            this.crcArticleEvent = result;
          } else {
            console.error(error);
          }
        }
      );
    },
    crcArticleContentEvent(event) {
      this.$store.state.article6Instance().conventionArticleContent(
        (error, result) => {
          if (!error) {
            let theArticleContent = this.$store.state
              .article6Instance()
              .conventionArticleContent((err, result) => {
                if (err) {
                  console.log("cant get the article content from the smart contract");
                } else {
                  this.crcArticleContentChecked = true;
                }
              });
            this.crcArticleContentEvent = result;
          } else {
            console.error(error);
          }
        }
      );
    },
    currentWorthOfArticle(event) {
      const theCurrentWorth = new Promise((resolve, reject) => {
        this.$store.state.article6Instance().currentWorth((error, result) => {
          if (error) {
            console.log("Cant get currentWorth()");
          } else {
            if (result == 0) {
              this.worthIsZero = true;
              this.worth = false;
            } else {
            this.CurrentWorth = web3.fromWei(result);
            this.worth = true;
            } 
          }
          resolve(result);
          this.$emit('current-worth' + this.textnumber, this.CurrentWorth)

        })
      })
    },
    // GETTING THE ARTPIECE FROM THE CONTRACT
    ipfsNewEvent(event) {
      const theIPFSHash = new Promise((resolve, reject) => {
        this.$store.state.article6Instance().ipfsImageHash((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash from the smart contract");
            reject(new Error("ipfsNewEvent function went wrong"));
          } else {
            this.ipfshHashChecked = true;
            resolve("https://gateway.pinata.cloud/ipfs/" + result);
          }
        });
      }).then(result => {
        var myURLBitch = result;
        document.getElementById("IPFSImage" + this.number).src = myURLBitch;
      });
    },
    ownerCount(event) {
      const promise1 = new Promise((resolve, reject) => {
        this.$store.state.article6Instance().owners((error, result) => {
          if (error) {
            reject(new Error("ownerCount function went wrong"));
          } else {
            resolve(result);
          }
        });
      });
    },
    ownerPromise(event) {
      const _ownerCount = new Promise((resolve, reject) => {
        this.$store.state.article6Instance().getUsersCount((error, result) => {
          if (error) {
            console.log(error);
            reject( new Error('stopping here'))
          } else {
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
                      this.$store.state.article6Instance().getUser(i, (error, result) => {
                          if (error) {
                              reject(new Error('for loop stops here'))
                          } else {
                              if (i === ownerVariable-1) {
                                this.ownersarray2.push(' ' + result[1]);
                                resolve(result);
                              } else {
                              ownersarray.push(' ' + result[1]);
                              this.ownersarray2.push(' ' + result[1]);
                              }
                          }
                      });
                  });
                  ownernames.then((result) => {
                      if (this.ownersarray2 === "undefined") {
                          console.log('ownersarray is undefined');
                      } else {
                          this.showCurrentOwner();
                      }
                  })
              }
          })
      })
    },
    showCurrentOwner(event) {
        console.log(this.ownersarray2);
        const showCurrentOwner = new Promise((resolve, reject) => {
            const minusArray = this.ownersarray2;
        this.theCurrentOwner = this.ownersarray2[(minusArray.length-1)];
        resolve();
        });
        
    },
    showOwnerHistoryList(event) {
        this.listOfOwners2 = [];

        for (let i = 0; i < (this.ownersarray2.length); i++) {
            const forPromise = new Promise ((resolve, reject) => {
                if (i === this.ownersarray2.length-1) {
                    this.listOfOwners2 += "<li id='listId'>" + this.ownersarray2[i] + "</li>";
                    this.hasOwners = true;
                    this.hasPreviousOwners = true;
                    resolve(this.listOfOwners2);
                } else {
                this.listOfOwners2 += "<li id='listId'>" + this.ownersarray2[i] + "</li>";
                }
            })
            forPromise.then((result) => {
                document.getElementById("ownerList" + this.number).innerHTML = result;
            })
        }
    },
    flip: function() {
      this.flipped = !this.flipped;
      console.log(this.flipped);
      if (this.flipped === true) {
      setTimeout(this.trick, 1000)
      } else {
        this.trick();
      }
    },
    trick: function() {
      this.tricked = !this.tricked;
      if (this.tricked === true) {
        this.showOwnerHistoryList();
      }
      setTimeout(this.vision, 200)
    },
    vision: function() {
      this.visible = !this.visible;
    },
    getArtistName(event) {
      const theArtistName = new Promise((resolve, reject) => {
        this.$store.state.article6Instance().artistName((error, result) => {
          if (error) {
            console.log("Cant get artistName()");
          } else {
            if (result === 0) {
            } else {
            this.artistName = result;
            } 
          }
          resolve(result);
          this.$emit('artist-name' + this.textnumber, this.artistName)

        })
      })
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
</style>
