<template>
  <div class="headlineContainer">
        <div class="headlineImage"><img src="../../public/graphics/Card_Logo.png"></div>
        <div class="introduction"><p>An Ethereum-Powered Fundraiser:</p></div>
        <div class="headline"><h1>Adopt the Rights of a Child</h1></div>
        <div class="subhead"><h2>Personally ratify any article from the UN Convention on the Rights of the Child</h2></div>
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
    display: grid;
    grid-gap: 0 20px;
    grid-template-columns: 80px 620px;
    grid-template-rows:  25px 44px 100px;
    padding: 0;
    justify-content: center;
  }
  .headlineContainer > div {
  padding: 20px 0;
}
  .headline {
    font-size: 21px;
    padding: 0;
    margin: 0;
  }
  .subhead {
    font-size: 9.6px;
  }
  .headlineImage {
    text-align:right;
    grid-row-start: 1;
    grid-row-end: 4;
    margin-left: -7px;
  }
  .headlineImage img {
    height: 130px;
    width: auto;
    margin-top: -10px;
  }
 
  .introduction {
    font-size: 9px;

  }

</style>