<template>
  <div class="flex-grid artistMember">
      <div class="col artistImage">
        <img v-bind:src="artist.imgURL"></div>
      <div class="col2 artistColumn">
          <div class="articleInfo"><h2>Article {{artist.article}} : {{artist | thefullname}}</h2><p>{{artist.description}}</p></div>
            <div class="artistInfo"><p>{{artist.bio}}</p><p><a v-bind:href="artist.link" target="_blank">{{artist.link}}</a></p></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'contributor-component',
    props: ['artist'],
    filters: {
        thefullname(value) {
            return value.first + ' ' + value.last;
        }
    }
}
</script>

<style lang="scss" scoped>


.flex-grid {
    display: inline-block;
    vertical-align: top;
    width:100%;
}
.col {
    width: 30%;
    display:inline-block;
    vertical-align: top;
}
.col2 {
    width: 50%;
    display:inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding-left:20px;
}

.artistMember {
    margin: 10px;
    padding-bottom: 50px;
    box-sizing: border-box;
}
.artistImage {
}
.artistImage img {
    width:100%;
}
.artistColumn {

}


h2 {
    margin: 0;
    padding: 0;
    font-size: 1em;
}
p {
    margin: 0 0 0 0;
    padding: 0;
    font-size:0.75em;
}
.articleInfo p {
    font-style: italic;
    margin-top: 5px;
    margin-bottom: 10px;
}
.artistInfo p {
    margin-top: 5px;
}


a {
  color: #89ffb2;
  text-decoration: underline;
}

a:hover {
  color: black;
  text-decoration: none;
}


</style>