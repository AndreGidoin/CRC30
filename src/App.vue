<template>
    <div class="website">

      <div class="menuContainer"><div class="menu"><navbar/></div></div>
      <div class="infoContainer">
        <div class="headline"><h1>Adopt the Rights of a Child</h1></div>
        <div class="subhead"><h2>Personally ratify any article from the Convention on the Rights of the Child</h2></div>
      </div>


      <div id="container">
          <router-view />
      </div>
  <div class="infoContainer secondinfo">
        <div class="headline facts"><h1>30 years ago in 1989 the UN created the Convention on the Rights of the child.</h1></div>
        <div class="headline facts"><h1>The convention is a human rights treaty based on 42 articles which sets out the civil, political, economic, social, health and cultural rights of children.</h1></div>
        <div class="headline facts"><h1>Every UN country has ratified the convention and are bound to it by international law. <b>Every country except the USA.</b></h1></div>
      </div>
  
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
  name: 'App'
}
</script>


<style lang="scss">

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
.infoContainer{
    height: auto;
    width: 100%;
    text-align: center;
    margin: 95px 0 0 0;
    font-family: 'Comfortaa', cursive;
    font-size: 1em;
    color: #1B204C;
  }
  .headline {
    font-size: 1em;
  }
  .subhead {
    font-size: 0.4em;
  }
  .secondinfo {
    margin: 0;
    padding: 0 0 100px 0;
  }
  .facts {
    font-size: 0.7em;
    width: 50%;
    text-align: center;
    margin: auto;
    padding: 0 0 50px 0;
  }





</style>
