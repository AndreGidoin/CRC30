<template>
  <div class="blockchainContainer" id="blockchainOverlay" v-bind:class="{ 'opened' : openvariable3, 'closed' : closevariable3}">
    <div class="blockchain" v-bind:class="{ 'opened' : openvariable3, 'closed' : closevariable3}">
      <div class="blockchainContent" v-bind:class="{ 'opened' : openvariable3, 'closed' : closevariable3}">
        <h1>Why Blockchain?</h1>
        <div class="pagecontent">
        <p>We've chosen to create this platform on the Ethereum blockchain for a few different reasons. </p>
        
        <p><span class="bluecolor">A non-corruptible record of the rights</span><br>
        The core feature of all data being stored on the blockchain is that it is added to a permanent and immutable ledger. We love the idea that we can take something created by the United Nations and spread it across the web so that the rights of children are stored on the decentralized internet and can never be disputed. We just made sure the rights of children can never be deleted!
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
        </div>
    </div>
  </div>
</template>

<script>
export default {
props: {
    openvariable3: {
      type: Boolean
    },
    closevariable3: {
      type: Boolean
    }
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');

.blockchainContainer {
    font-family: 'Comfortaa', cursive;
  font-size: 1em;
  color: #3F3F3F;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 45px;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.4);
  overflow: hidden;
  display:none;
  opacity: 0;
  transition: ease-out 300ms; 
    &.opened {
      display:inline-block;
      animation: transparency 0.5s ease-out 0.2s forwards;
      }
      &.closed {
      display:inline-block;
      animation: transparency-reverse 0.5s ease-out forwards;
      }
   
  }
@keyframes transparency
{
from {opacity: 0;}
to {opacity: 1;}
transition: ease-out 300ms; 
}
@keyframes transparency-reverse
{
from {opacity: 1;}
to {opacity: 0;}
transition: ease-out 300ms; 
}

.blockchain {
  margin: 0;
  padding: 0;
  width: 100%; /* 100% width */
  height: 0%;
  background: white;
  display: inline-block;
    &.opened {
    animation: slide 0.5s ease-out 0.2s forwards;
    }
    &.closed {
      animation: slide-reverse 0.4s ease-out forwards;
    }
}

@keyframes slide {
  from {height: 0%;}
  to {height: 60%;}
}
@keyframes slide-reverse {
  from {height: 60%;}
  to {height: 0%;}
}

.blockchainContent {
  margin: 20px;
  height: 0%;
  opacity:0;
  overflow:scroll;
  &.opened {
    animation: slide2 0.5s ease-out 0.3s forwards;
  }
  &.closed {
      animation: slide2-reverse 0.4s ease-out forwards;
    }
}
.pagecontent {
  margin-right: 22%;
}
p {
  font-size: 0.8em;
}
.bluecolor {
  color: #2AACE0;
}

@keyframes slide2 {
  from {height: 0%;
  opacity:0;}
  to {height: 80%;
  opacity:1;}
}
@keyframes slide2-reverse {
  from {height: 80%;
  opacity:1;}
  to {height: 0%;
  opacity:0;}
}


</style>