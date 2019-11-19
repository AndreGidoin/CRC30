<template>
  <div class="submitContainer" id="submitOverlay" v-bind:class="{ 'opened' : openvariable5, 'closed' : closevariable5}">
    <div class="submit" v-bind:class="{ 'opened' : openvariable5, 'closed' : closevariable5}">
      <div class="submitContent" v-bind:class="{ 'opened' : openvariable5, 'closed' : closevariable5}">
        <h1>Submit artwork for an article</h1>
        <div class="pagecontent">
        <p>Are you a visual artist and want to contribute with an art piece to the project? Choose one of the article below, create an art piece inspired by that child right, and submit to <a href="mailto:projects@blockchainclub.io">projects@blockchainclub.io</a></p>
        <div class="articleimages">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
          <img src="../../public/Articles/Free_Article1.png" class="freeArticle">
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

.submit {
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

.submitContent {
  margin: 20px;
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
}
.articleimages {
  margin-top: 50px;
}
a {
  color: #FFB000;
}
a:hover {
  color: black;
}


</style>