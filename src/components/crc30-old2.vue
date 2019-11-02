<template>
  <div class="root-container">
    
    <!-- Start Card Container-->
    <div class="CardContainer">

    <!-- Start Flipcard -->
    <div class="flipcard" @click="flip">

    <!-- The Frontside with Convention Article and Artwork -->
    <div class="Frontside" v-bind:class="{ 'reveal' : flipped }">
      <h4 v-if="crcArticleChecked">Article {{ crcArticleEvent }}</h4>
      <h2 v-if="crcNameChecked">{{ crcNameEvent }}</h2>
      
      <div class="theArtwork">
        <p v-if="ipfshHashChecked">
          <img id="IPFSImage" />
        </p>
      </div>

      <div class="theConvention">
          <p v-if="crcArticleContentChecked">{{ crcArticleContentEvent }}</p>
      </div>
      
      <!-- Owner Info -->
      <div class="currentOwner" v-if="!hasOwners">
          <p>This article has not been ratified by anyone yet.
          <br/><i>Claim it for any price.</i></p>
        <button v-on:click="ownerPromise">Owner Promise</button>
      </div>

      <div class="currentOwner" v-if="hasOwners">
          <p><b>{{ theCurrentOwner }}</b> is the current owner of this contract</p>
        </div>

    </div>
    <!-- End Frontside -->

    <!-- The Backside About the Artwork and ordering a print -->
    <div class="Backside" v-bind:class="{ 'reveal' : flipped }">
        <div class="regularText">
            <p><i>This is where info about the artist, the artwork and the possilibity to order a print goes.</i></p>
        </div>
         <!-- History of owners should go here, to the backside. -->
        <div class="ownerHistory" v-if="hasOwners">
          <p v-if="hasPreviousOwners"><i>List of previous owners:</i></p>
        <ul id="ownerHistory">
        </ul>
        </div>
        <!-- End Backside -->
    </div>

    <!-- End Flipcard -->
    </div>

    <!-- Controller for buying and stuff -->
    <div class="articleControls">
      <p>Buy it for more than it's current worth and become a part owner in addition to receiving a printed version shipped free to you</p>
      <div class="buing">
        <p>
          Enter your price:
          <input v-model="amount" placeholder="0 Ether" />
          Name:
          <input
            v-model="yourName"
            name="thisName"
            placeholder="This name will appear as the owner of the convention"
          />
        </p>
        <p>
          <button v-on:click="buyConvention">Buy this convention</button>
        </p>
        <p>
          <i v-if="pending">Transaction in process</i>
        </p>
        <p>
          <i v-if="success">Transaction was successful</i>
        </p>
        <p>
          <i v-if="failure">Transaction failed</i>
        </p>

        <div
          class="event"
          v-if="newOwnerEvent"
        >Thank you! {{ newOwnerEvent.currentOwner }} is now the new owner of the convention. {{ newOwnerEvent.currentOwner }} bought the convention for {{ newOwnerEvent.currentWorth }} from address {{ newOwnerEvent.currentAddress }}. This convention is now worth a total of {{ newOwnerEvent.allTimeWorth }}.</div>
      </div>
    </div>

    <!-- End CardContainer -->
    </div>

<!-- End Root -->
  </div>
</template>

<script>
import { setTimeout } from "timers";

export default {
  name: "crc30",
  mounted() {
    console.log("dispatching getContractInstance");
    this.$store.dispatch("getContractInstance");
    setTimeout(this.ipfsNewEvent, 100);
    setTimeout(this.crcName, 100);
    setTimeout(this.crcArticleNumber, 100);
    setTimeout(this.crcArticleContentEvent, 100);
    setTimeout(this.ipfsHash, 100);
    setTimeout(this.myImageLoader, 300);
    setTimeout(this.ownerPromise, 300);
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
      crcNameChecked: false,
      crcArticleChecked: false,
      crcArticleContentChecked: false,
      ipfsImageAddress: null,
      ipsfImageSrc: null,
      imageSrc: null,
      hasOwners: false,
      ownerList: null,
      ownersarray2: [],
      theCurrentOwner: null,
      listOfOwners2: [],
      hasPreviousOwners: false,
      flipped:false
    };
  },
  methods: {
    buyConvention(event) {
      // this is wrong
      console.log(this.yourName, this.amount);
      this.failure = false;
      this.newOwnerEvent = null;
      this.$store.state.contractInstance().buyCRC(
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
            let newOwner = this.$store.state.contractInstance().newOwner();
            newOwner.watch((err, result) => {
              if (err) {
                console.log("could not get event newOwner()");
              } else {
                this.newOwnerEvent = result.args;
                this.pending = false;
                this.success = true;
              }
            });
          }
        }
      );
    },
    updateOwners(event) {},
    updateValue(event) {},
    crcName(event) {
      console.log("Getting CRC30 name");
      this.$store.state.contractInstance().conventionArticleName(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theIPFSHash = this.$store.state
              .contractInstance()
              .conventionArticleName((err, result) => {
                if (err) {
                  console.log(err);
                  console.log(
                    "cant get the contion name from the smart contract"
                  );
                } else {
                  this.crcNameChecked = true;
                }
              });
            console.log(JSON.stringify(result));
            this.crcNameEvent = result;
          } else {
            console.error(error);
          }
        }
      );
    },
    crcArticleNumber(event) {
      console.log("getting article number");
      this.$store.state.contractInstance().conventionArticleNumber(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theIPFSHash = this.$store.state
              .contractInstance()
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
      this.$store.state.contractInstance().contentionArticleContent(
        {
          gas: 30000,
          from: this.$store.state.web3.coinbase
        },
        (error, result) => {
          if (!error) {
            let theIPFSHash = this.$store.state
              .contractInstance()
              .contentionArticleContent((err, result) => {
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
    // Maybe the constactInstances will have to be unique to each vue file? Or is there a way to automate this?
    ipfsNewEvent(event) {
      console.log("Starting ipfsNewEvent function");
      const theIPFSHash = new Promise((resolve, reject) => {
        this.$store.state.contractInstance().ipfsImageHash((error, result) => {
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
        document.getElementById("IPFSImage").src = myURLBitch;
      });
    },
    ownerCount(event) {
      console.log("getting owner count");
      const promise1 = new Promise((resolve, reject) => {
        this.$store.state.contractInstance().owners((error, result) => {
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
        this.$store.state.contractInstance().getUsersCount((error, result) => {
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
                      this.$store.state.contractInstance().getUser(i, (error, result) => {
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
                document.getElementById("ownerHistory").innerHTML = result;
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
.root-container {
  margin: 10px;
  text-align: center;
  width: auto;
}
h2 {
  margin: 5px;
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
}
.flipcard {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  width: 450px;
  height: 520px;
  transition: ease-in 300ms;
  backface-visibility: hidden;
  transform-style: preserve-3d;
    &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
}
.Frontside, .Backside {
  margin: 0 0 0 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  background-color:rgb(240, 240, 240);
  width: 450px;
  height: 520px;
  transition: ease-in 600ms;
}

.Frontside {
  z-index: 1;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  background-color:rgb(240, 240, 240);
  width: 450px;
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
  background-color:rgb(240, 240, 240);
  width: 450px;
  transform: rotate3d(0, 1, 0, 180deg);
  backface-visibility: hidden;

  &.reveal {
              transform: rotate3d(0, 1, 0, 0);
        }

}
.theArtwork {
}
.currentOwner {
  color: #124588;
}
.ownerHistory {

}
.articleControls {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  margin-top: 0px;
  text-align: center;
  width: 450px;
}
.buing {
  border-style: dotted;
  border-width: 1px;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
}
.theConvention {
  margin: 10px;
}
#IPFSImage {
  width: 450px;
}
li{
  
}
</style>
