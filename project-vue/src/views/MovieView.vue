<template>
  <div id="movies">
    <header class="movies__item">
      <h1 class="movies__item__title">NETFLIX</h1>
      <button class="movies__item__searchBar">
        <img class="movies__item__searchBar__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" alt=""
          @click="active()">
        <input class="movies__item__searchBar__search" :class="{'movies__item__searchBar__search--clicked': clicked}" type="text"
          @click="active()" @input="startingFetch" v-model="fetch">
      </button>
      <div class="movies__item__user">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" alt="" class="movies__item__user__profile">
      </div>
    </header>

    <main class="movies__item movies__item--gender">
      <div v-if="!amIFetching" class="movies__item__category">
        <p class="movies__item__category__type">Seus filmes</p>
        <div class="movies__item__category__movie">
          <Movie v-for="el in movieList" :key="el.id" :values="el" />
        </div>
      </div>
      <template v-if="amIFetching">
        <div class="movies__item__category">
          <p class="movies__item__category__type">{{ fetch }}</p>
          <div class="movies__item__category__movie">
            <Movie v-for="el in fetchMovies" :key="el.id" :values="el" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="movies__item__category" v-for="(el, index) in genres_ids" :key="index">
          <p class="movies__item__category__type">{{ genres[index] }}</p>
          <div class="movies__item__category__movie">
            <span v-for="movie in movies" :key="movie.id">
              <Movie :values="movie" v-if="movie.genre_ids.includes(el)"/>
            </span>
          </div>
        </div>
      </template>
    </main>
  </div>
</template>

<script>
import Movie from '../components/MovieComponent.vue'

  export default {
    data() {
      return {
        API_KEY: '2ff39883ff80b10c14dfb78fe5a121ba',
        BASEURL: 'https://api.themoviedb.org/3',
        SEARCH: '/genre/movie/list?api_key=',
        clicked: false,
        movies: '',
        fetchMovies: '',
        fetch: '',
        genres: [],
        genres_ids: [],
        amIFetching: false
      }
    },
    computed: {
      URL() {
        return this.BASEURL + this.SEARCH + this.API_KEY
      },
      movieList() {
        return this.$store.state.list
      }
    },
    components: {
      Movie
    },
    methods: {
      active() {
        this.clicked = !this.clicked
      },
      startingFetch(event) {
        if(event.target.value=='')
          this.amIFetching = false
        else this.amIFetching = true
        const fetch = event.target.value.toLowerCase()
        const string = fetch.split(' ').join('+')
        this.fetchMovies = []
        /*for (let item in this.movies) {
          if(this.movies[item].title.toLowerCase().includes(fetch))
            this.fetchMovies.push(this.movies[item])
        }*/
        this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=2ff39883ff80b10c14dfb78fe5a121ba&query=' + string)
          .then(res => res.data.results)
          .then(data => this.fetchMovies = data)
      }
    },
    created() {
      this.$http.get('https://api.themoviedb.org/3/discover/movie?api_key=2ff39883ff80b10c14dfb78fe5a121ba&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate')
        .then(res => res.data)
        .then(data => data.results)
        .then(results => { 
          this.movies = results
          this.fetchMovies = results
          let ids
          for (let item in results) {
            ids = results[item].genre_ids
            ids.forEach(id => {
              if(!this.genres.includes(id)) 
                this.genres.push(id)
            })
          }
          this.genres_ids = this.genres
          this.$http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2ff39883ff80b10c14dfb78fe5a121ba&language=en-US')
            .then(res => res.data.genres)
            .then(data => {
              this.genres = this.genres.map(id => {
                for (let genre in data) {
                  if(data[genre].id==id) {
                    return data[genre].name
                  }
                }
              })
            })
        })
    }
  }
</script>

<style scoped>
  #movies {
    min-height: 100vh;
    width: 100vw;
    background: #000000BF;
  }

  .movies__item {
    display: flex;
    align-items: center;
    width: 95%;
    max-width: 1440px;
    padding: 20px 30px;
  }

  .movies__item--gender {
    flex-direction: column;
  }

  .movies__item__title {
    color: red;
    font-weight: 800;
    font-size: 2.5rem;
  }

  .movies__item__searchBar {
    flex-basis: 70%;
    margin-left: 60px;
    background: transparent;
    display: flex;
    align-items: center;
    border: 1px solid rgba(211, 211, 211, 0.5);
    padding: 0 10px;
    border-radius: 10px;
  }

  .movies__item__searchBar__image {
    height: 30px;
    width: 30px;
  }

  .movies__item__searchBar__image:hover {
    cursor: pointer;
  }

  .movies__item__searchBar__search {
    color: white;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px;
    margin-left: 20px;
    flex: 2;
    padding-left: 10px;
  }

  .movies__item__searchBar__search--clicked {
    border-bottom: 1px solid black;
  }

  .movies__item__user {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
  }

  .movies__item__user__profile {
    height: 40px;
    width: 40px;
    align-self: flex-end;
  }

  .movies__item__category {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 45px;
  }

  .movies__item__category__type {
    font-size: 1.4rem;
    color: white;
    font-weight: 650;
  }

  .movies__item__category__movie {
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
  }
</style>