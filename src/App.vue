<template>
    <div class="nospace">
    <div class="menuContainer"><div class="menu"><navbar/></div></div>
    <div class="infoContainer">
      <div class="headline"><h1>Adopt the Rights of a Child</h1></div>
      <div class="subhead"><h2>Personally ratify any article from the Convention on the Rights of the Child</h2></div>
    </div>

  <div id="container">
    <router-view />
  </div>
  </div>
</template>

<script>
import MenuBar from '@/components/navbar'

export default {
  beforeCreate: function() {
    document.body.className = 'SinglePage';
    },
    created() {
    document.html.className = 'HTMLRoot';
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
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.HTMLRoot .nospace {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.SinglePage {
  width: 100%;
  height: 100%;
  margin: 0 0 0 0;
  padding: 0 0 0 0;  
  background-color: #B1E3E1;
  background: -webkit-linear-gradient(250deg, #fff9de, #b3e9ff);
  overflow-x:hidden;
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
    height: 40px;
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





</style>
