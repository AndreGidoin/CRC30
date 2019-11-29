<template>
  <div class="flex-grid artistMember">
      <div class="col artistImage">
        <img v-bind:src="artist.imgURL"></div>
      <div class="col2 artistColumn">
          <div class="articleInfo"><h2>Article {{artist.article}} : {{artist | thefullname}}</h2><p>{{artist.description}}</p></div>
            <div class="artistInfo"><p>{{artist.bio}}</p><p>{{artist.link}}</p></div>
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
    display: flex;
    align-items: flex-start;
    width: 45%;
    align-content: flex-start;
}
.col {
    flex: 1;
}
.col2 {
    flex-grow:2;
}

.artistMember {
    margin: 10px;
}
.artistImage {
    height:150px;

}
.artistImage img {
    height: 150px;
}
.artistColumn {
    margin: 0 30px 0 20px;
    max-height: 400px;
    width: 70%;
    min-width:230px;
    @media only screen and (max-width: 985px) {
        width:200px;
        min-width:200px;
        }

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

</style>