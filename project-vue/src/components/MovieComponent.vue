<template>
  <!--<div id="movie" @mouseover="mouseAbove = true" @mouseleave="mouseAbove = false">
    <img v-if="!mouseAbove" :src="imagePath" class="movie__image">
    <p v-else>{{ description }}</p>
  </div>-->
  <div id="movie" @mouseover="mouseAbove = false" @mouseleave="mouseAbove = true">
    <template v-if="mouseAbove">
      <img :src="imagePath" class="movie__image">
      <span class="movie__rate">
        {{ values.vote_average }}
      </span>
    </template>
    <div class="movie__description" v-else>
      <p class="movie__description__text">{{ values.overview }}</p>
      <div class="movie__description__buttons">
        <button class="movie__description__buttons__button" @click="addToList">{{ label }}</button>
        <button v-if="this.myMovie" class="movie__description__buttons__button" @click="watched">Assistido</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      values: Object,
      myMovie: Boolean
    },
    data() {
      return {
        basisURL: 'https://image.tmdb.org/t/p/original/',
        mouseAbove: true
      }
    },
    computed: {
      imagePath() {
        return this.basisURL + this.values.poster_path
      },
      description() {
        return this.values.overview
      },
      label() {
        const actualList = this.$store.state.list
        if(actualList.includes(this.values))
          return 'Remover da lista'
        return 'Adicionar na lista'
      }
    },
    methods: {
      addToList() {
        let actualList = this.$store.state.list
        if(this.label == 'Adicionar na lista') {
          if(!actualList.includes(this.values)) {
            this.$store.state.list.push(this.values)
          }
        }else {
          actualList = actualList.filter(el => {
            if(el != this.values)
              return true
          }) 
          this.$store.state.list = actualList
        }
        const user = this.$store.state.profile
        user.moviesToWatch = this.$store.state.list
        user.moviesWatched = this.$store.state.watchedMovies
        this.$http.patch(`/usuarios/${user.idAccount}.json`, user)
      },
      watched() {
        let watchedMovies = this.$store.state.watchedMovies
        console.log(watchedMovies)
        if(!watchedMovies.includes(this.values))
          this.$store.state.watchedMovies.push(this.values)
        let myMovies = this.$store.state.list

        myMovies = myMovies.filter(el => {
            if(el != this.values)
              return true
          }) 
        this.$store.state.list = myMovies
        const user = this.$store.state.profile
        user.moviesToWatch = this.$store.state.list
        user.moviesWatched = this.$store.state.watchedMovies
        this.$http.patch(`/usuarios/${user.idAccount}.json`, user)
      }
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: black;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #0fa2b3;
  }

  #movie {
    width: 300px;
    height: 150px;
    position: relative;
  }

  .movie__image {
    width: 100%;
    height: 100%;
  }

  .movie__rate {
    color: white;
    font-size: 1.2rem;
    background: red;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .movie__description {
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    padding: 10px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .movie__description__text {
    font-size: 1.1rem;
    color: black;
    font-weight: 600;
    text-align: justify;
  }

  .movie__description__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .movie__description__buttons__button {
    background: transparent;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    color: white;
    border: none;
    outline: none;
    font-weight: 700;
    font-size: 1.3rem;
    margin-top: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 4px;
  }

  .movie__description__buttons__button:hover {
    cursor: pointer;
  }
</style>