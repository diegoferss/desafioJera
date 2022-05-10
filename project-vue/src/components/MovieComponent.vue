<template>
  <div id="movie" @mouseover="mouseAbove = true">
    <img v-if="!mouseAbove" :src="imagePath" class="movie__image">
    <p v-else @mouseleave="mouseAbove = false">{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      values: Object
    },
    data() {
      return {
        basisURL: 'https://image.tmdb.org/t/p/original/',
        mouseAbove: false
      }
    },
    computed: {
      imagePath() {
        console.log(this.values)
        return this.basisURL + this.values.poster_path
      },
      description() {
        return this.values.overview
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