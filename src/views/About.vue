<template>
  <div class="pageContainer">
    <div class="arrowcontainer makeLink" v-on:click="pageSwitch">    <div class="arrow"></div>    </div>
      <div class="pageContent">
        
        <h1>Adopt the Rights of a Child through the Blockchain</h1>
        <div class="pagecontentVideo">
          
          
          <div class="howtovideo">
            <iframe class="thevideo"
            src="https://www.youtube.com/embed/OZS8vxBh8fI" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <iframe class="thevideo-MetaMask"
            src="https://www.youtube.com/embed/ZIGUC9JAAw8" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <!-- <video class="thevideo" controls playsinline>
            <source src="../../public/graphics/HowItWorks/HowItWorks_Screencapture_1.mp4" type="video/mp4">
            
            Your browser does not support the video tag.
            </video> -->
          </div>

          <div class="howtocopy">

        <p class="noMargin">
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
            <p class="howtoHeadline nextChapter">Here is an explanation about DApps and digital wallets from <a href="https://www.stateofthedapps.com/help/metamask" blank="_blank">State of the DApps</a></p>
            <p class="howtoHeadline">Digital wallets</p>
            <p class="howtoSubhead">Installing a digital wallet like MetaMask</p>
            <p>To use most DApps, you need a digital wallet. Commonly supported are digital wallets, like Metamask, Coinbase Wallet, or Trust Wallet.</p>
            <p>After you install one of these wallets, it will guide you to to create an accounts. You can have multiple accounts for different purposes.</p>
            <p>You’ll need to put money in your wallet to make your first transaction. We can show you how to do that, too.</p>
            <p>Note: A digital wallet acts like a bank account — treat it with respect and make sure you don’t forget your password and seed words.</p>
            
            <p class="howtoSubhead">What are seed words? Why are they important?</p>
            <p>Some wallets use seed words for backing up your account. They let you restore your account in the case it’s deleted. This also means that anyone with your seed words can access your account and steal your assets. Please be sure to save your seed words, and do not share them with others.</p>

            <p class="howtoSubhead">Can you change my digital wallet’s password?</p>
            <p>No, we can’t. Wallets are independent programs that State of the DApps does not in any way control. This means we can’t help with resetting passwords or recovering lost accounts.</p>

            <p class="howtoSubhead">What is a “wallet address”?</p>
            <p>Your public wallet address (e.g. 0xaba935f589805095a892ecefdb6eb83eff45d67) is a unique identifier for your wallet. It’s like a name. You can share it freely with others, and it’s used to direct assets to your wallet.</p>

            <p class="howtoHeadline">Ethereum, a digital currency</p>
            <p class="howtoSubhead">What’s ether (ETH)? Why do I need it?</p>
            <p>Ether is a digital currency that powers the Ethereum network, which is what most DApps are built on. Ether acts like any other currency — its value fluctuates with the market.</p>
            <p>You need to convert your currency (e.g. USD, EUR, CNY) into ether to pay for things — and interact with DApps — on the Ethereum network.</p>

            <p class="howtoSubhead">How do I get ether? What is Coinbase?</p>
            <p>Some wallets let you buy currency directly, depending on the wallet and where you live.</p>
            <p>If your wallet doesn’t let you buy currency, you will need to purchase ETH from an exchange, and then transfer the ETH from your exchange wallet to your digital wallet.</p>
            <p>Some commonly used exchanges are Coinbase, Kraken, and Binance.</p>
            <p>You can’t use USD/EUR to directly send to a DApps — currencies need to be converted into ETH first.</p>
            

            <p class="howtoSubhead">How long does it take to receive ether?</p>
            <p>If it’s your first time purchasing ether, your exchange will need to verify your identify; that can take a day or two, so it’ll leave you time for a cat nap. In addition, if you need to link a bank account to your exchange (rather than a credit card), your bank may need a few more days to verify the charges.</p>

          </div>

        </div>


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
        this.$emit('howitworksSwitch', false)
        setTimeout(() => {
                this.$emit('howitworksSwitchB', true)
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
		#89ffb2
		#89ffb2
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
	background-color: #89ffb2;
	transform: 
		rotate(-45deg) 
		translate(2px, 4px);
}

.spacer {
  height: 50px;
  width: auto;
}


// HOW IT WORKS STYLES


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
.howtoHeadline{
  font-size: 1em;
  font-weight: bold;
}
.nextChapter {
  font-size: 1.2em;
  margin-top: 30px;
  border-top:1px;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  border-style:dashed;
  padding-top: 30px;
}
.howtoSubhead {
  font-weight: bold;
  color: #0367ea;
  margin-top: 25px;
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
  width: 465px;
  height: 448px;

}
.thevideo-MetaMask{
  width: 465px;
  height: 262px;

}


</style>