<template>
  <div class="contactContainer" id="contactOverlay" v-bind:class="{ 'opened' : openvariable4, 'closed' : closevariable4}">
    <div class="contact" v-bind:class="{ 'opened' : openvariable4, 'closed' : closevariable4}">
      <div class="contactContent" v-bind:class="{ 'opened' : openvariable4, 'closed' : closevariable4}">
        <h1>Get in touch</h1>
        <div class="pagecontent">
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
        </div>
    </div>
  </div>
</template>

<script>
export default {
props: {
    openvariable4: {
      type: Boolean
    },
    closevariable4: {
      type: Boolean
    }
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');

.contactContainer {
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

.contact {
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
  to {height: 80%;}
}
@keyframes slide-reverse {
  from {height: 80%;}
  to {height: 0%;}
}

.contactContent {
  padding: 60px 20px 20px 20px;
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