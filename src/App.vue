<template>
    <div class="website">

      <div class="menuContainer"><div class="menu"><navbar/></div></div>
      <div class="headlineContainer">
        <div class="headline"><h1>Adopt the Rights of a Child</h1></div>
        <div class="subhead"><h2>Personally ratify any article from the Convention on the Rights of the Child</h2></div>
      </div>

      <div id="container">
          <router-view />
      </div>

  <div class="infoContainer">
        <div class="infoItems"><span class="item"><h1>Every UN country has ratified the Convention on the Rights of the Child and are bound to it by international law. <br><b>Every country except the USA.</b></h1></span></div>
            <div class="infoItems color"></div>
            <div class="infoItems color"></div>
        <div class="infoItems"><span class="item"><h1>Adopt the Rights of a Child is a project about democratizing the ratification of children's rights.</h1></span></div>
        <div class="infoItems"><span class="item"><h1>30 years ago in 1989 the UN created the Convention on the Rights of the child.</h1></span></div>
            <div class="infoItems color"></div>
            <div class="infoItems color"></div>
        <div class="infoItems"><span class="item"><h1>The convention is a human rights treaty based on 42 articles which sets out the civil, political, economic, social, health and cultural rights of children.</h1></span></div>
        <div class="infoItems"><span class="item"><h1>Governments should of course create laws meant to protect children, but it is up to us as individuals and part of society to make sure our children have a safe and nourishing place to live.</h1></span></div>
            <div class="infoItems color"></div>
      </div>

  <div class="beta">This is only a prototype version of the website. All content is FPO!</div>

  
  </div>
</template>

<script>
import MenuBar from '@/components/navbar'

export default {
  beforeCreate () {
    },
    created() {
    },
    components: {
        'navbar': MenuBar
    },
  name: 'App',
  data() {
        return{
        }
  }
}
</script>


<style lang="scss">

h1 {
    font-family: 'Comfortaa', cursive;
    margin: auto;
    padding: auto;
}
.beta{
    position: absolute;
    top: 55px;
    left: 10px;
    z-index: 1;
    width:100px;
    color:black;
    background-color:#f9e784;
    font-size:0.4em;
    padding: 4px;
    font-family: 'Space Mono', monospace;
}
.spinner{
  margin: auto;
  text-align: center;
  height: 500px;
}
.spinner img {
  width: 50px;
  margin: auto;
  padding: 200px;
}

#container {
  width: 100%;
  height: auto;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.HTMLRoot .website {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.website {
  overflow: scroll;
}
.SinglePage {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;  
  background-color: #B1E3E1;
  background: -webkit-linear-gradient(250deg, #fff9de, #b3e9ff);
  overflow-x:hidden;
  overflow-y:hidden;
}
@media (min-width: 768px) {
}
.menuContainer {
  position:absolute;
  top:0;
  z-index:1;
  width:100%;
  height:auto;
  .menu {
  }
}
.headlineContainer{
    height: auto;
    width: 100%;
    text-align: center;
    margin: 95px 0 0 0;
    font-size: 1em;
    color: #1B204C;
  }
  .headline {
    font-size: 1em;
  }
  .subhead {
    font-size: 0.4em;
  }
  .infoContainer {
    margin: 0;
    padding: 0 0 100px 0;
    display: flex;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    flex-flow: row wrap;
    text-align: center;
  }
  .infoItems {
    font-size: 0.8em;
    line-height: 2.7em;
    flex-grow: 1;
    width:50%;
    height: 350px;
    box-sizing: border-box;
    padding: 30px;
    @media only screen and (max-width: 985px) {
      // width: 100%;
      //flex-direction: row;
      font-size: 0.6em;
    }
  }

  /* ODERING THE DIVS. MIGHT NOT NEED THIS
  @media only screen and (max-width: 985px) {
      .infoContainer :nth-child(1) { order: 1; }
      .infoContainer :nth-child(2) { order: 2; }
      .infoContainer :nth-child(3) { order: 4; }
      .infoContainer :nth-child(4) { order: 3; }
      .infoContainer :nth-child(5) { order: 5; }
      .infoContainer :nth-child(6) { order: 6; }
      .infoContainer :nth-child(7) { order: 10; }
      .infoContainer :nth-child(8) { order: 7; }
      .infoContainer :nth-child(9) { order: 10; }
      .infoContainer :nth-child(10) { order: 10; }
  }
  */


  .infoItems h1 {
    height: auto;
  }
  .item {
    display: flex;
    height: 100%;
  }
  .color {
    background-color: #B1E3E1;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }





</style>
