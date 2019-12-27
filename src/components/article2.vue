<template>
  <div class="root-container">
    
    <!-- Start Card Container-->
    <div class="CardContainer" @mouseover="isMouseOver = true" @mouseout="isMouseOver = false" v-bind:class="{ 'foldout' : flipped }" @click="flip">
      


 <!-- Article Number -->
    <div class="articleNumber" v-if="crcArticleChecked" v-bind:class="{ 'invisible' : flipped }">
            <p><span id="numerals">Article {{ crcArticleEvent }}</span></p>
      </div>
    <!-- Article Number END -->


    <!-- SHADOW CONTAINER -->
    <div class="ShadowContainer" v-bind:class="{ 'foldout' : flipped }">


      <!-- Artwork SHAPE STARTS -->
      <div class="ArtworkShape" v-bind:class="{ 'foldout' : flipped }" v-if="isInjected">
      
      <div class="theArtwork" v-if="ipfshHashChecked">
        <span >
          <img id="IPFSImage2_1" class="slideshow"/>
          <img id="IPFSImage2_2" class="slideshow"/>
          <img id="IPFSImage2_3" class="slideshow"/>
          <img id="IPFSImage2_4" class="slideshow"/>
          <img id="IPFSImage2_5" class="slideshow"/>
          <img id="IPFSImage2_6" class="slideshow"/>
          <img id="IPFSImage2_7" class="slideshow"/>
          <img id="IPFSImage2_8" class="slideshow"/>
          <img id="IPFSImage2_9" class="slideshow"/>
        </span>
      </div>
      <div class="worthInfo">
      <p class="gold" v-if="worth">Current worth: {{CurrentWorth}} ETH</p>
          <p class="NoOwner" v-if="!worth">This article has not been ratified by anyone yet. <i>Claim it for any price.</i></p>
      
    </div>
    </div>
    <!-- END Artwork SHAPE -->

    <!-- START FOLD OUT CONTENT -->
    <div class="articleInfo" v-if="flipped" v-bind:class="{ 'visible' : flipped }">

    <div class="articleInfoNumber"><p class="numerals">Article {{ crcArticleEvent }}</p></div>
    <div class="ArticleHeadline">
        <h2 v-if="ArticleNameChecked"> {{ ArticleNameEvent }}</h2>
        </div>
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
          
<div class="flipControls" @click="flip">
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
  name: "article2",
  computed: mapState({
    isInjected: state => state.web3.isInjected,
  }),
  mounted() {
    console.log("dispatching getArticle2Instance");
    this.$store.dispatch("getArticle2Instance");
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
      this.$store.state.article2Instance().buyCRC(
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
            let newOwner = this.$store.state.article2Instance().newOwner();
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
      console.log("Getting ArticleName");
      this.$store.state.article2Instance().conventionArticleName(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theArticleName = this.$store.state
              .article2Instance()
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
      this.$store.state.article2Instance().conventionArticleNumber(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theArticleNumber = this.$store.state
              .article2Instance()
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
      this.$store.state.article2Instance().conventionArticleContent(
        (error, result) => {
          if (!error) {
            let theArticleContent = this.$store.state
              .article2Instance()
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
        this.$store.state.article2Instance().currentWorth((error, result) => {
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
            console.log("This article is worth " + result);
            console.log(web3.fromWei(result) + " is the result in ETH")
            } 
          }
          resolve(result);
          this.$emit('current-worthtwo', this.CurrentWorth)

        })
      })
    },
    // GETTING ALL THE 9 IMAGES FROM THE CONTRACT
    ipfsNewEvent(event) {
      console.log("Starting ipfsNewEvent function loop 1");
      const theIPFSHash1 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash1((error, result) => {
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
        document.getElementById("IPFSImage2_1").src = myURLBitch;
      });
      //
      // NUMBER 2
      //
      console.log("Starting ipfsNewEvent function loop 2");
      const theIPFSHash2 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash2((error, result) => {
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
        document.getElementById("IPFSImage2_2").src = myURLBitch;
      });
      //
      // NUMBER 3
      //
      console.log("Starting ipfsNewEvent function loop 3");
      const theIPFSHash3 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash3((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash 3 from the smart contract");
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
        document.getElementById("IPFSImage2_3").src = myURLBitch;
      });
      //
      // NUMBER 4
      //
      console.log("Starting ipfsNewEvent function loop 4");
      const theIPFSHash4 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash4((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash 4 from the smart contract");
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
        document.getElementById("IPFSImage2_4").src = myURLBitch;
      });
      //
      // NUMBER 5
      //
      console.log("Starting ipfsNewEvent function loop 5");
      const theIPFSHash5 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash5((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash 5 from the smart contract");
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
        document.getElementById("IPFSImage2_5").src = myURLBitch;
      });
      //
      // NUMBER 6
      //
      console.log("Starting ipfsNewEvent function loop 6");
      const theIPFSHash6 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash6((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash 6 from the smart contract");
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
        document.getElementById("IPFSImage2_6").src = myURLBitch;
      });
      //
      // NUMBER 7
      //
      console.log("Starting ipfsNewEvent function loop 7");
      const theIPFSHash7 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash7((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash 7 from the smart contract");
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
        document.getElementById("IPFSImage2_7").src = myURLBitch;
      });
      //
      // NUMBER 8
      //
      console.log("Starting ipfsNewEvent function loop 8");
      const theIPFSHash8 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash8((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash 8 from the smart contract");
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
        document.getElementById("IPFSImage2_8").src = myURLBitch;
      });
      //
      // NUMBER 9
      //
      console.log("Starting ipfsNewEvent function loop 9");
      const theIPFSHash9 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().ipfsImageHash9((error, result) => {
          if (error) {
            console.log("cant get the IPFS hash 9 from the smart contract");
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
        document.getElementById("IPFSImage2_9").src = myURLBitch;
        this.imageCarousel();
      });
    
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
    ownerCount(event) {
      console.log("getting owner count");
      const promise1 = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().owners((error, result) => {
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
        this.$store.state.article2Instance().getUsersCount((error, result) => {
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
                      this.$store.state.article2Instance().getUser(i, (error, result) => {
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
                if (i === this.ownersarray2.length-1) {
                    this.listOfOwners2 += "<li>" + this.ownersarray2[i] + "</li>";
                    console.log('did we make it?')
                    this.hasOwners = true;
                    this.hasPreviousOwners = true;
                    resolve(this.listOfOwners2);
                    console.log(this.listOfOwners2 + ' logging the resolve')
                } else {
                this.listOfOwners2 += "<li>" + this.ownersarray2[i] + "</li>";
                console.log(this.listOfOwners2 + ' – the owner loop');
                }
            })
            forPromise.then((result) => {
                console.log('in the then promise')
                document.getElementById("ownerHistory2").innerHTML = result;
                console.log(result);
            })
        }
    },
    flip: function() {
      this.flipped = !this.flipped;
      console.log(this.flipped);
    },
    getArtistName(event) {
      console.log("Getting artist name of this article");
      const theArtistName = new Promise((resolve, reject) => {
        this.$store.state.article2Instance().artistName((error, result) => {
          if (error) {
            console.log("Cant get artistName()");
            console.log(error);
          } else {
            if (result === 0) {
              console.log(result + " artistName is NULL");
            } else {
            this.artistName = result;
            console.log("This article artwork is made by " + result);
            } 
          }
          resolve(result);
          this.$emit('artist-nametwo', this.artistName)

        })
      })
    },
    // THIS IS FALLBACK FOR THE CARD CONTENT
    checkingFallbackContent: function() {
            if (window.ethereum.selectedAddress === null) {
                this.fallbackContent = true;
                console.log("checkingFallbackContent is true");
                console.log("check" + ' ' + window.ethereum.selectedAddress)
                setTimeout(this.checkingFallbackContent, 3000);
            } else {
                this.fallbackContent = false;
                console.log("checkingFallbackContent is false");
                console.log("check" + ' ' + window.ethereum.selectedAddress)
            
            }
        }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');
@import "./styles/cardstyle.scss";
</style>
