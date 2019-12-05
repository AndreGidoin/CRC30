<template>
  <div class="artistContainer" id="artistOverlay" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
    <div class="artist" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
      <div class="artistContent" v-bind:class="{ 'opened' : openvariable1, 'closed' : closevariable1}">
        <h1>Every article is represented by bespoke artwork created by an artist.</h1>
        <div class="pagecontent">
        <p>We’d like to thank all the amazing artists who has donated their time and talent to craft custom pieces inspired by article from the CRC. </p>
        <p>Read more about the art pieces and the artists who made them below.</p>
        
        <div class="contributorComponentContainer">
        <contributor-component v-for="artist in artists" v-bind:key="artist.id" v-bind:artist="artist"/>
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
                bio: 'TBD',
                link: 'https://www.thedofl.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmQtZmy7uaspUiQepjBBghpQkDfvUMWk16JW1vTbCXLiiE',
                },
                {
                article: '5',
                description: 'The Government should respect the right of my family to help me know about my rights.',
                first: 'Alberto & Sebastiano',
                last: 'Lot',
                bio: 'This is an artwork made by me and my 3 year old son. I used his drawings to create the lettering for the word RIGHTS. I represented how a parent should be aware of the abilities, wants and needs of children in his care and how he should take these into account when thinking about how to act in their best interests.',
                link: 'https://albertolot.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmXgBYJhwQQ51UtsLUz13PsUVVC5ctSFhsbiUK9RyxmbmN',
                },
                {
                article: '6',
                description: 'I should be supported to live and grow.',
                first: 'Kasper',
                last: 'Schøning-Kristiansen',
                bio: 'The art piece is a collage with the title «broken-homes». The piece is hand painted and drawn, and then edited in Photoshop. The focus of the piece is on a child’s adolescence represented by a sunflower that needs water to live and grow.',
                link: 'https://www.instagram.com/kaspergiraffe/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmeXWa3gec9ALMAbB6WmEUcmTeC9nuUiumQBaBAD2hpttg',
                },
                {
                article: '7',
                description: 'I have a right to a name and to belong to a country.',
                first: 'Emil',
                last: 'Karlsson',
                bio: 'It’s mind boggling that still today not everyone stands behind all of these rights.',
                link: 'http://www.emilkarlsson.se/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmQMH665wcPbqJ6QDK7g5aUWTWHqzT6doBY1hbcm9WVSJm',
                },
                {
                article: '8',
                description: 'You have the right to an identity.',
                first: 'Brian',
                last: 'Catelle',
                bio: 'TBD',
                link: 'https://www.briancattelle.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmaX2X52mHVZCdvfQg2fYQBkqTjhTB9ZDcbAhsAVLDo5ug',
                },
                {
                article: '9',
                description: 'I have a right to live with a family who cares for me.',
                first: 'Hanne',
                last: 'Berkaak',
                bio: 'BIO OR DESCRIPTION HERE',
                link: 'http://hanne-berkaak.squarespace.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmbuUkaXvKAD6S2DpfXmHoWGFDxmV4wBRH9qyjwE35gikL',
                },
                {
                article: '12',
                description: 'I have the right to be listened to and taken seriously.',
                first: 'Sandra Freij &',
                last: 'Jo McGuinness',
                bio: 'Children growing up today understand that their future is compromised through a changing climate. We see them taking to the streets all across the world to demand a future for the earth, and for themselves. Not only should they have the right to be heard and taken seriously, but it should be the top priority of all governments to #ACTNOW. Climate breakdown means the breakdown of human rights, in such a society the weakest are the most vulnerable and as such, all articles of the UN Convention on the Rights of the Child are compromised.',
                link: 'http://www.sandrafreij.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmVq72Vb58tfjaSnno4ecVrbmJPVUqM749zDDs5i8VDiKQ',
                },
                {
                article: '15',
                description: 'I have the right to meet with friends and to join groups.',
                first: 'Jessica',
                last: 'Marak',
                bio: 'Artwork coming soon...',
                link: 'https://jessicamarak.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmfVWV1RZnn7Jab6SzuVBed5nFpsZ2iuH7fExtBUATamJG/Article_Placeholder_Blue.gif',
                },
                {
                article: '16',
                description: 'I have the right to keep some things private.',
                first: 'GMUNK',
                last: '(Bradley G Munkowitz)',
                bio: 'TBD',
                link: 'https://gmunk.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmeBLXA5zB4s3F7zpczbWyH5sVWL41Vuw5kAFwod1f1Lfm',
                },
                {
                article: '28',
                description: 'I have the right to an education.',
                first: 'Julie',
                last: 'Wilkionson',
                bio: 'Artwork coming soon...',
                link: 'http://www.makeriestudio.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmfVWV1RZnn7Jab6SzuVBed5nFpsZ2iuH7fExtBUATamJG/Article_Placeholder_Blue.gif',
                },
                {
                article: '29',
                description: 'I have the right to an education which develops my personality, respect for others’ rights and the environment.',
                first: 'Line',
                last: 'Vågsmyr',
                bio: 'TBD',
                link: 'http://www.linevagsmyr.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmeCabgzLCmAo5TKoQ7SoqXcgn7vqcCtUyaonfnvAtwGsZ',
                },
                {
                article: '31',
                description: 'I have a right to relax and play.',
                first: 'Verena',
                last: 'Michelitsch',
                bio: 'TBD',
                link: 'https://verenamichelitsch.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmbB3uzdW7XHUnkqiB7xuAaaPzzQtEDQRDeRX6GTr3WKso',
                },
                {
                article: '35',
                description: 'I should not be abducted, sold or trafficked.',
                first: 'Davide',
                last: 'Parere',
                bio: 'TBD',
                link: 'http://www.davideparere.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmbGn52Zmp2gj64sbmbDvPLqV9sfu5vj14UFgVz7YqnbpR',
                },
                {
                article: '36',
                description: 'I have the right to be kept safe from things that could harm my development.',
                first: 'Fredrik',
                last: 'Melby',
                bio: 'Artwork coming soon...',
                link: 'https://www.behance.net/FredrikMelby',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmfVWV1RZnn7Jab6SzuVBed5nFpsZ2iuH7fExtBUATamJG/Article_Placeholder_Blue.gif',
                },
                {
                article: '37',
                description: 'I have the right not to be punished in a cruel or hurtful way.',
                first: 'André Gidoin &',
                last: 'Makerie Studio',
                bio: 'TBD',
                link: 'http://www.andregidoin.com',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmRaqqYMPwTnqD8X7G1kBmqnSKy7z2yHYLXjSpYD4p9ZjR',
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

.artistContent {
  padding: 40px 20px 20px 20px;
  height: 0%;
  width: 100vw;
  opacity:0;
  box-sizing: border-box;
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
    margin-top:40px;
    display: inline-block;
    width:100%;
    @media only screen and (max-width: 985px) {
        }
    box-shadow: // ANIMATION 1
                0 0 0 0 #db49ad;
}
.artistchild {
    margin:0 30px 55px 0;
}

</style>