<template>
  <div class="headlineContainer">
    <div class="headlineImage"><img src="../../public/graphics/Card_Logo.png"></div>
        <div class="introduction"><p>An Ethereum-Powered Fundraiser:</p></div>
        <div class="headline"><h1>Adopt the<br>Rights of a Child</h1></div>
        <div class="subhead"><h2>Personally ratify any article from the UN<br>Convention on the Rights of the Child</h2></div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa|Libre+Baskerville|Space+Mono&display=swap');

.headlineContainer{
  width: 100%;
  height: auto;
    margin: auto;
    margin-top:85px;
    color: #3d3d3d;
    font-family: 'Comfortaa', arial, sans-serif;
    display: none;
    text-align: center;
}
  .headlineContainer > div {
  padding: 3px 0 0 0;
}
  .headline {
    font-size: 19px;
    padding: 0;
    margin: 0;
  }
  .subhead {
    font-size: 6.9px;
  }
 
  .introduction {
    font-size: 8px;

  }
  .headlineImage img {
    height: 80px;
  }

</style>