<template>
  <div class="artistContainer" id="artistOverlay" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
    <div class="artist" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
      <div class="artistContent" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
        <h1>This is the Artists page</h1>
        <div class="pagecontent">
        <p>Each artist and their artwork will be featured here.</p>
        <p>If you're an owner of an article you will get a code to order a print of that article for free.</p>
        <p>... more to come...</p>
        
        <div class="contributorComponentContainer">
        <contributor-component v-for="artist in artists" v-bind:key="artist.id" v-bind:artist="artist" class="artistchild"/>
        </div>


        </div>
        </div>
    </div>
  </div>
</template>

<script>
import contributor from './contributor'

export default {
  components: {
        'contributor-component': contributor
    },
props: {
    openvariable1: {
      type: Boolean
    },
    closevariable1: {
      type: Boolean
    }
  },
  data () {
        return {
            artists: [
                {
                article: '1',
                description: 'PLACE ARTICLE NAME HERE',
                first: 'FIRST NAME',
                last: 'LAST NAME',
                bio: 'SHORT BIO HERE',
                imgURL: 'TeamPics_Andre.jpg',
                },
                {
                article: '2',
                description: 'PLACE ARTICLE NAME HERE',
                first: 'FIRST NAME',
                last: 'LAST NAME',
                bio: 'SHORT BIO HERE',
                imgURL: 'TeamPics_Andre.jpg',
                },
                {
                article: '3',
                description: 'PLACE ARTICLE NAME HERE',
                first: 'FIRST NAME',
                last: 'LAST NAME',
                bio: 'SHORT BIO HERE',
                imgURL: 'TeamPics_Andre.jpg',
                },
                {
                article: '4',
                description: 'PLACE ARTICLE NAME HERE',
                first: 'FIRST NAME',
                last: 'LAST NAME',
                bio: 'SHORT BIO HERE',
                imgURL: 'TeamPics_Andre.jpg',
                },
                {
                article: '5',
                description: 'PLACE ARTICLE NAME HERE',
                first: 'FIRST NAME',
                last: 'LAST NAME',
                bio: 'SHORT BIO HERE',
                imgURL: 'TeamPics_Andre.jpg',
                },
                ]
            
        }
    }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');

.artistContainer {
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

.artist {
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

.artistContent {
  margin: 20px;
  height: 0%;
  opacity:0;
  overflow:hidden;
  &.opened {
    animation: slide2 0.5s ease-out 0.3s forwards;
    overflow: scroll;
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
.contributorComponentContainer {
    margin-top:70px;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (max-width: 985px) {
        flex-direction: column;
        }
    box-shadow: // ANIMATION 1
                0 0 0 0 #db49ad;
}
.artistchild {
    flex:1;
    max-width: 430px;
    margin:0 30px 55px 0;
}

</style>