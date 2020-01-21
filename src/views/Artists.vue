<template>
  <div class="pageContainer">
    <div class="arrowcontainer makeLink" v-on:click="pageSwitch">    <div class="arrow"></div>    </div>
      <div class="pageContent">
        <h1>Every article is represented by bespoke artwork created by an artist.</h1>
        <p>We’d like to thank all the amazing artists who has donated their time and talent to craft custom pieces inspired by article from the CRC. </p>
        <p>Read more about the art pieces and the artists who made them below.</p>
        
          <div class="contributorComponentContainer">
          <contributor-component v-for="artist in artists" v-bind:key="artist.id" v-bind:artist="artist"/>
        
        </div>
      </div>
      <close class="makeLink"  v-on:click.native="pageSwitch"/>
      <div class="spacer"></div>
  </div>
</template>

<script>
import contributor from './contributor'
import close from './close.vue'

export default {
  components: {
        'contributor-component': contributor,
        'close': close
    },
    methods: {
      pageSwitch: function() {
        this.$emit('artistSwitch', false)
        setTimeout(() => {
                this.$emit('artistSwitchB', true)
              }, 400);
      }
    },
  data () {
        return {
          closeBtn: false,
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
                bio: 'TBD',
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
                article: '24',
                description: 'I have the right to good quality health care, to clean water and good food.',
                first: 'Malte',
                last: 'Gruhl',
                bio: 'TBD',
                link: 'https://maltegruhl.com/',
                imgURL: 'https://gateway.pinata.cloud/ipfs/QmW23rb2iZ3w4nP9qqzzkXX1YPNqEZcQMQKBkzKWnXSWw2',
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
  transition: ease-out 300ms; 
    &.opened {
      animation: transparency 0.5s ease-out 0.2s forwards;
      }
      &.closed {
      animation: transparency-reverse 0.5s ease-out forwards;
      }
   
  }
@keyframes transparency
{
from {opacity: 0;}
to {opacity: 1;}
}
@keyframes transparency-reverse
{
from {opacity: 1;}
to {opacity: 0;}
}



.pageContent {
  padding: 40px 20px 20px 20px;
  height: auto;
  width: 100%;
  opacity:1;
  box-sizing: border-box;
  &.opened {
    animation: slide2 0.5s ease-out 0.3s forwards;
  }
  &.closed {
      animation: slide2-reverse 0.4s ease-out forwards;
    }
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

</style>