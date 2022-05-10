<template>
  <div id="movies">
    <header class="movies__item">
      <h1 class="movies__item__title">NETFLIX</h1>
      <button class="movies__item__searchBar">
        <img class="movies__item__searchBar__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" alt=""
          @click="active()">
        <input class="movies__item__searchBar__search" :class="{'movies__item__searchBar__search--clicked': clicked}" type="text"
          @click="active()">
      </button>
      <div class="movies__item__user">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" alt="" class="movies__item__user__profile">
      </div>
    </header>

    <main class="movies__item movies__item--gender">
      <div class="movies__item__category">
        <p class="movies__item__category__type">Seus filmes</p>
        <div class="movies__item__category__movie">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
      <div class="movies__item__category">
        <p class="movies__item__category__type">Seus filmes</p>
        <div class="movies__item__category__movie">
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
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
        clicked: false
      }
    },
    computed: {
      URL() {
        return this.BASEURL + this.SEARCH + this.API_KEY
      }
    },
    components: {
      Movie
    },
    methods: {
      active() {
        this.clicked = !this.clicked
      }
    },
    created() {
      this.$http.get(this.URL + '&language=en-US')
        .then(res => res.data)
        .then(data => console.log(data))
    }
  }
</script>

<style scoped>
  #movies {
    height: 100vh;
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
    margin-top: 8px;
    background: red;
  }
</style>