<template>
  <div class="pageContainer">
    <div class="arrowcontainer makeLink" v-on:click="pageSwitch">    <div class="arrow"></div>    </div>
      <div class="pageContent">
        
        <h1>Get in touch</h1>
        <p>
          For any questions or enquiries regarding this project please feel free to reach out:
          </p>
        <p>
          André Gidoin<br>
          Creative Director &amp; Founder<br>
          Blockchainclub.io<br>
          <a href="mailto:contact@blockchainclub.io">contact@blockchainclub.io</a>
        </p>
        <p>
        If you’re an artist and would like to submit an art piece for an article, please head over to the submit section of the site. We’d love to hear from you!
        </p>
        <p>
          This project is a pro-bono campaign launched by The Experimental Blockchain Club. The club consists of a bunch of people who are curious about technology and how to use it to create new types of consumer experiences. “Adopt the Rights of a Child” is our first project and all proceeds will go directly to UNICEF and their work to protect the rights of children around the world.
        </p>
        <p>
          Our sources for creating this campaign:<br>
          
          <a href="https://www.unicef.org/what-we-do" target="_blank">https://www.unicef.org/what-we-do</a><br>
          <a href="https://www.cypcs.org.uk/rights/uncrcarticles" target="_blank">https://www.cypcs.org.uk/rights/uncrcarticles</a><br>
          <a href="https://downloads.unicef.org.uk/wp-content/uploads/2019/10/UNCRC_summary-1_1.pdf" target="_blank">https://downloads.unicef.org.uk/wp-content/uploads/2019/10/UNCRC_summary-1_1.pdf</a><br>
          <a href="https://www.unicef.org/child-rights-convention/convention-text-childrens-version" target="_blank">https://www.unicef.org/child-rights-convention/convention-text-childrens-version</a><br>
          
        </p>

              


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
        this.$emit('contactSwitch', false)
        setTimeout(() => {
                this.$emit('contactSwitchB', true)
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
  line-height: 1.5em;
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


// CONTACT STYLES




</style>