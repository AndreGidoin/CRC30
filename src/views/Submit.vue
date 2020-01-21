<template>
  <div class="pageContainer">
    <div class="arrowcontainer makeLink" v-on:click="pageSwitch">    <div class="arrow"></div>    </div>
      <div class="pageContent">
        
        <h1>Submit artwork for an article</h1>
        
        <p>Are you a visual artist and want to contribute with an art piece to the project? Choose one of the article below, create an art piece inspired by that child right, and submit to <a href="mailto:projects@blockchainclub.io">projects@blockchainclub.io</a></p>
        <div class="articleimages">
          <a href="mailto:projects@blockchainclub.io?subject=Article1%20Artwork%20Submission"> <img src="../../public/Articles/Article1.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article3%20Artwork%20Submission"> <img src="../../public/Articles/Article3.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article4%20Artwork%20Submission"> <img src="../../public/Articles/Article4.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article10%20Artwork%20Submission"> <img src="../../public/Articles/Article10.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article11%20Artwork%20Submission"> <img src="../../public/Articles/Article11.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article13%20Artwork%20Submission"> <img src="../../public/Articles/Article13.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article14%20Artwork%20Submission"> <img src="../../public/Articles/Article14.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article17%20Artwork%20Submission"> <img src="../../public/Articles/Article17.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article18%20Artwork%20Submission"> <img src="../../public/Articles/Article18.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article19%20Artwork%20Submission"> <img src="../../public/Articles/Article19.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article20%20Artwork%20Submission"> <img src="../../public/Articles/Article20.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article21%20Artwork%20Submission"> <img src="../../public/Articles/Article21.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article22%20Artwork%20Submission"> <img src="../../public/Articles/Article22.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article23%20Artwork%20Submission"> <img src="../../public/Articles/Article23.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article25%20Artwork%20Submission"> <img src="../../public/Articles/Article25.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article26%20Artwork%20Submission"> <img src="../../public/Articles/Article26.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article27%20Artwork%20Submission"> <img src="../../public/Articles/Article27.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article30%20Artwork%20Submission"> <img src="../../public/Articles/Article30.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article32%20Artwork%20Submission"> <img src="../../public/Articles/Article32.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article33%20Artwork%20Submission"> <img src="../../public/Articles/Article33.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article38%20Artwork%20Submission"> <img src="../../public/Articles/Article38.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article39%20Artwork%20Submission"> <img src="../../public/Articles/Article39.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article40%20Artwork%20Submission"> <img src="../../public/Articles/Article40.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article41%20Artwork%20Submission"> <img src="../../public/Articles/Article41.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article42%20Artwork%20Submission"> <img src="../../public/Articles/Article42.png" class="freeArticle"></a>
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
        this.$emit('submitSwitch', false)
        setTimeout(() => {
                this.$emit('submitSwitchB', true)
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


// SUBMIT STYLES

.freeArticle {
  height: 250px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right:15px;
}
.articleimages {
  margin-top: 50px;
}
.freeArticle:hover {
  color: black;
  transition: ease 300ms;
  transform: scale(1.05);
}
img {
  transition: ease 300ms;
}


</style>