<template>
  <div id="movie">
    <img :src="imagePath" class="movie__image">
  </div>
</template>

<script>
  export default {
    props: {
      values: Object
    },
    data() {
      return {
        basisURL: 'https://image.tmdb.org/t/p/original/'
      }
    },
    computed: {
      imagePath() {
        return this.basisURL + this.values.poster_path
      }
    }
  }
</script>

<style scoped>
  #movie {
    width: 300px;
    height: 150px;
  }

  .movie__image {
    width: 100%;
    height: 100%;
  }
</style>