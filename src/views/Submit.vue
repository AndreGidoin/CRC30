<template>
  <div class="submitContainer" id="submitOverlay" v-bind:class="{ 'opened' : openvariable5, 'closed' : closevariable5}">
    <div class="submit" v-bind:class="{ 'opened' : openvariable5, 'closed' : closevariable5}">
      <div class="submitContent" v-bind:class="{ 'opened' : openvariable5, 'closed' : closevariable5}">
        <h1>Submit artwork for an article</h1>
        <div class="pagecontent">
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
          <a href="mailto:projects@blockchainclub.io?subject=Article24%20Artwork%20Submission"> <img src="../../public/Articles/Article24.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article25%20Artwork%20Submission"> <img src="../../public/Articles/Article25.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article26%20Artwork%20Submission"> <img src="../../public/Articles/Article26.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article27%20Artwork%20Submission"> <img src="../../public/Articles/Article27.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article30%20Artwork%20Submission"> <img src="../../public/Articles/Article30.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article32%20Artwork%20Submission"> <img src="../../public/Articles/Article32.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article33%20Artwork%20Submission"> <img src="../../public/Articles/Article33.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article37%20Artwork%20Submission"> <img src="../../public/Articles/Article37.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article38%20Artwork%20Submission"> <img src="../../public/Articles/Article38.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article39%20Artwork%20Submission"> <img src="../../public/Articles/Article39.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article40%20Artwork%20Submission"> <img src="../../public/Articles/Article40.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article41%20Artwork%20Submission"> <img src="../../public/Articles/Article41.png" class="freeArticle"></a>
          <a href="mailto:projects@blockchainclub.io?subject=Article42%20Artwork%20Submission"> <img src="../../public/Articles/Article42.png" class="freeArticle"></a>
        </div>

        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

props: {
    openvariable5: {
      type: Boolean
    },
    closevariable5: {
      type: Boolean
    }
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');


.submitContainer {
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
@keyframes transparency {
  from {opacity: 0;}
  to {opacity: 1;}
  transition: ease-out 300ms; 
}

@keyframes transparency-reverse {
  from {opacity: 1;}
  to {opacity: 0;}
  transition: ease-out 300ms; 
}

.submit {
  margin: 0;
  padding: 0;
  width: 100%; /* 100% width */
  height: 0%;
  background: white;
  display: inline-block;
  overflow:scroll;
    &.opened {
    animation: slide2 0.5s ease-out 0.2s forwards;
    }
    &.closed {
      animation: slide2-reverse 0.4s ease-out forwards;
    }
}

@keyframes slide {
  from {height: 0%;}
  to {height: 80%;}
}
@keyframes slide-reverse {
  from {height: 80%;}
  to {height: 0%;}
}

.submitContent {
  padding: 60px 20px 20px 20px;
  height: 0%;
  opacity:0;
  &.opened {
    animation: slide2 0.5s ease-out 0.3s forwards;
  }
  &.closed {
      animation: slide2-reverse 0.4s ease-out forwards;
    }
}

.pagecontent {
}
p {
  font-size: 0.8em;
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
.freeArticle {
  height: 250px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right:15px;
}
.articleimages {
  margin-top: 50px;
}
a {
  color: #FFB000;
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