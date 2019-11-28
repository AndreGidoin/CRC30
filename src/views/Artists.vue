<template>
  <div class="artistContainer" id="artistOverlay" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
    <div class="artist" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
      <div class="artistContent" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
        <h1>Every article is represented by bespoke artwork created by an artist.</h1>
        <div class="pagecontent">
        <p>We’d like to thank all the amazing artists who has donated their time and talent to craft custom pieces inspired by article from the CRC. </p>
        <p>Read more about the art pieces and the artists who made them below.</p>
        
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
                article: '2',
                description: 'All children have these rights.',
                first: 'Dofl',
                last: 'Yun',
                bio: 'SHORT BIO HERE',
                link: 'WEBSITE LINK HERE',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmPPcHSFLTwMCRut6rQnjPEuyUjRMFFx9mkswc3EXXc9n7',
                },
                {
                article: '5',
                description: 'The Government should respect the right of my family to help me know about my rights.',
                first: 'Alberto and Sebastiano',
                last: 'Lot',
                bio: 'This is an artwork made by me and my 3 year old son. I used his drawings to create the lettering for the word RIGHTS. I represented how a parent should be aware of the abilities, wants and needs of children in his care and how he should take these into account when thinking about how to act in their best interests.',
                link: 'WEBSITE LINK HERE',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmPPcHSFLTwMCRut6rQnjPEuyUjRMFFx9mkswc3EXXc9n7',
                },
                {
                article: '7',
                description: 'I have a right to a name and to belong to a country.',
                first: 'Emil',
                last: 'Karlsson',
                bio: 'BIO OR DESCRIPTION HERE',
                link: 'WEBSITE LINK HERE',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmPPcHSFLTwMCRut6rQnjPEuyUjRMFFx9mkswc3EXXc9n7',
                },
                {
                article: '8',
                description: 'PLACE ARTICLE NAME HERE',
                first: 'Brian',
                last: 'Catelle',
                bio: 'BIO OR DESCRIPTION HERE',
                link: 'WEBSITE LINK HERE',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmPPcHSFLTwMCRut6rQnjPEuyUjRMFFx9mkswc3EXXc9n7',
                },
                {
                article: '9',
                description: 'I have a right to live with a family who cares for me.',
                first: 'Hanne',
                last: 'Berkaak',
                bio: 'BIO OR DESCRIPTION HERE',
                link: 'WEBSITE LINK HERE',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmPPcHSFLTwMCRut6rQnjPEuyUjRMFFx9mkswc3EXXc9n7',
                },
                {
                article: '28',
                description: 'I have the right to an education.',
                first: 'Julie Wilkionson at',
                last: 'Makerie Studio',
                bio: 'BIO OR DESCRIPTION HERE',
                link: 'WEBSITE LINK HERE',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmPPcHSFLTwMCRut6rQnjPEuyUjRMFFx9mkswc3EXXc9n7',
                },
                {
                article: '31',
                description: 'I have a right to relax and play.',
                first: 'Verena',
                last: 'Michelitsch',
                bio: 'BIO OR DESCRIPTION HERE',
                link: 'WEBSITE LINK HERE',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmPPcHSFLTwMCRut6rQnjPEuyUjRMFFx9mkswc3EXXc9n7',
                },
                {
                article: '35',
                description: 'I should not be abducted, sold or trafficked.',
                first: 'Davide',
                last: 'Parere',
                bio: 'BIO OR DESCRIPTION HERE',
                link: 'WEBSITE LINK HERE',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmPPcHSFLTwMCRut6rQnjPEuyUjRMFFx9mkswc3EXXc9n7',
                }
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

.artistContent {
  padding: 20px;
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