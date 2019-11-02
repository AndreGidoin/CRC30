<template>
  <div class="flex-grid artistMember">
      <div class="col artistImage">
        placeholder img</div>
      <div class="col2 artistInfo"><h2>Article {{artist.article}}</h2><p>{{artist.description}}</p><p>Artist: {{artist | thefullname}}</p><p>{{artist.bio}}</p></div>
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
    height: 100%;
    width: auto;
}
.artistInfo {
    margin: 0 30px 0 20px;
    max-height: 300px;
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
    margin: 0;
    padding: 0;
    font-size:0.75em;
}

</style>