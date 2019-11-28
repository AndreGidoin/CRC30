<template>
  <div class="aboutContainer" id="aboutOverlay" v-bind:class="{ 'opened' : openvariable2, 'closed' : closevariable2}">
    <div class="about" v-bind:class="{ 'opened' : openvariable2, 'closed' : closevariable2}">
      <div class="aboutContent" v-bind:class="{ 'opened' : openvariable2, 'closed' : closevariable2}">
        <h1>Adopt the Rights of a Child through the Blockchain</h1>
        <div class="pagecontentVideo">
          
          
          <div class="howtovideo">
            <video class="thevideo" controls >
            <source src="../../public/graphics/HowItWorks/HowItWorks_Screencapture_1.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </video>
          </div>

          <div class="howtocopy">

        <p>
          This is an experiment using a public ledger and blockchain technology to allow people to personally ratify articles from the CRC that matter the most to them, independent of what their country’s stance on the convention is. Each article from the CRC has been uploaded to the Ethereum Blockchain in the form of a smart contract that stores information on who’s adopted it and also the amount ether donated.
          </p>
        <p>
          To access and experience the decentralized convention you have to connect to the decentralized web (Web 3.0) through <a href="https://metamask.io/" target="_blank">a plugin in your browser like MetaMask.</a> This is completely free and there is no need to have any crypto currencies to browse the site.
          </p>
        <p>
          Each article from the CRC has been visualized by an artist and is represented by flip-cards here on the website. The information on each flip-cards are gathered from smart contracts on the Ethereum Blockchain. 
          </p>
        <p>
          To adopt an article, you’ll use an ether wallet (which you can connect to MetaMask) and donate ether to support that right. All donations will go directly to UNICEF’s work to protect these rights around the world.
          </p>
        <p>
          Once you’ve adopted an article, you’ll permanently be listed as a donor and adopter of the CRC. 
          </p>
        <p>
          <b>We’re currently working on the functionality, which lets people order printed copies of the artwork. Every person who’s adopted an article will be able to order one copy for free.</b>
          </p>
          </div>

        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

props: {
    openvariable2: {
      type: Boolean
    },
    closevariable2: {
      type: Boolean
    }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');


.aboutContainer {
font-family: 'Comfortaa', cursive;
  font-size: 1em;
  color: #3F3F3F;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 45px;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.4);
  overflow: hidden;
  display:none;
  opacity: 0;
  z-index:1;
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

.about {
  margin: 0;
  padding: 0;
  width: 100%; /* 100% width */
  height: 0%;
  background: white;
  display: inline-block;
  overflow:scroll;
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

.aboutContent {
  margin: 20px;
  height: 0%;
  width: 100vw;
  opacity:0;
  box-sizing: border-box;
  padding-top: 40px;
  &.opened {
    animation: slide2 0.5s ease-out 0.3s forwards;
  }
  &.closed {
      animation: slide2-reverse 0.4s ease-out forwards;
    }
}

.pagecontentVideo {
  display: inline-block;
  box-sizing: border-box;
  padding-top: 30px;
  padding-bottom: 40px;
}
.howtocopy{
  width: 45%;
  display:inherit;
  @media only screen and (max-width: 949px) {
    width: 100%;
    }
}
.howtovideo{
  width:500px;
  display:inherit;
  vertical-align: top;
  @media only screen and (max-width: 949px) {
    width: 60vw;
    }
}
p {
  font-size: 0.8em;
}
.thevideo {
  width: 90%;
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