<template>
      <div class="close">
      <button class="closeBTN">Close</button>
      </div>
</template>

<script>

export default {
}
</script>


<style lang="scss" scoped>

// CLOSE BUTTON

.close {
  position:relative;
  z-index:1;
  text-align: center;
  margin: auto;
  padding: 0 0 0 0;
  height: 45px;
  width:150px;
  // background: -webkit-linear-gradient(250deg, #fff9de, #b3e9ff);
  background-color: #89ffb2;
  border-radius:6px;
  transition: 200ms;
}
.close:hover {
  transform: translateY(-3px);
  cursor: pointer;
}
.closeBTN {
  margin: auto;
  padding: 0 0 0 0;
  font-family: 'Comfortaa', arial, sans-serif;
  font-size:0.8em;
  height: 45px;
  width:150px;
  outline:none;
  background-color: white;
  border-radius:6px;
  border-style: solid;
  border-width: 1px;
  color: black;
}
.closeBTN:hover {
  color: black;
  height: 39px;
  width:144px;
  margin-top: 3px;
  box-sizing: border-box;
  border-width: 0;
  border-radius:4px;
  cursor: pointer;
}



</style>