<template>
  <div class="pageContainer">
    <div class="arrowcontainer makeLink" v-on:click="pageSwitch">    <div class="arrow"></div>    </div>
      <div class="pageContent">
        
        <h1>Why Blockchain?</h1>
        <p>We've chosen to create this platform on the Ethereum blockchain for a few different reasons. </p>
        
        <p><span class="bluecolor">Democratizing the record of the rights.</span><br>
        A core feature of all data stored on the blockchain is that it is added to and distributed on permanent, immutable ledgers to all that participate in the chain. When information is decentralized and owned by the people they are empowered to use it. This also means that not one single entity can ever delete the rights from existence as it is spread all over the decentralized web.
        </p>

        <p><span class="bluecolor">Ownership (and digital art)</span><br>
We're also intrigued by the idea of ownership, how ownership is governed and what happens when you use a blockchain to store digital art. Using the Ethereum blockchain and IPFS we’re experimenting in controlling who owns digital art, and only by entering into the smart contract that represents the child rights are you able and allowed to order a physical copy. This is verified by a transaction on the blockchain which becomes the “party of trust” to control ownership for each article. Voila! No middle man : )        </p>

        
        <p><span class="bluecolor">Let's experiment!</span><br>
There hasn’t been a lot of projects like this, so we consider this very much an art experiment. We’re hoping the combination of art, charity and new tech will make people interested enough to test and interact with a DApp. All the proceeds will be donated directly to UNICEF.
        </p>

        
        <p><span class="bluecolor">The Decentralized Web and A distributed ledger</span><br>
The point of this campaign is that if everything in the world only were up to big governments or organizations we wouldn't get anywhere. It's up to us as citizens of the world to change things for the better. What better symbolic platform to use than one that promotes decentralization and in itself could be a threat to the old ways of institutional processes.
        </p>

              


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
        this.$emit('blockchainSwitch', false)
        setTimeout(() => {
                this.$emit('blockchainSwitchB', true)
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
  background-color: rgb(255,255,255);
  overflow-x: hidden;
  overflow-y: scroll;
  display:inherit;
  opacity: 1;
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
		#3F3F3F
		#3F3F3F
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
	background-color: #3F3F3F;
	transform: 
		rotate(-45deg) 
		translate(2px, 4px);
}

.spacer {
  height: 50px;
  width: auto;
}


// BLOCKCHAIN STYLES


.bluecolor {
  color: #2AACE0;
}


</style>