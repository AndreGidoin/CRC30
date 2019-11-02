<template>
  <div class="aboutContainer" id="aboutOverlay" v-bind:class="{ 'opened' : openvariable2, 'closed' : closevariable2}">
    <div class="about" v-bind:class="{ 'opened' : openvariable2, 'closed' : closevariable2}">
      <div class="aboutContent" v-bind:class="{ 'opened' : openvariable2, 'closed' : closevariable2}">
        <h1>Introducing CRC30 on the Blockchain</h1>
        <div class="pagecontent">
        <p>November 2019 is the 30th anniversary since the UN created the Convention on the Rights of the Child to protect kids and around the world and outline their rights.</p>
        <p>All member states of the United Nation has ratified the convention except for the USA.</p>
        <p>This is an experiment using blockchain technology to allow people to personally ratify articles from the convention on the right of the child and show your support for them, independent of what your country's stance is.</p>
        <p>... more to come...</p>
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
  },
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
  opacity:0;
  overflow:hidden;
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