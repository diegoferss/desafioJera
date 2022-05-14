<template>
  <div id="home">
    <header class="home__item">
      <h1 class="home__item__title">NETFLIX</h1>
      <div class="home__item__config">
        <button class="home__item__config__button home__item__config__button--language">Português</button>
        <router-link to="/login" class="home__item__config__button home__item__config__button--login">Entrar</router-link>
      </div>
    </header>

    <main class="home__item home__item--account">
      <p class="home__item__text">Filmes, séries e muito mais. Sem limites.</p>
      <p class="home__item__text home__item__text--middle">Assista onde quiser. Cancele quando quiser.</p>
      <p class="home__item__text home__item__text--bottom">Pronto para assistir? Informe o seu email para criar ou reiniciar a sua conta.</p>
      <div class="home__item__verify">
        <input class="home__item__verify__item home__item__verify__email" type="email" placeholder="Email">
        <router-link to="/register" class="home__item__verify__item home__item__verify__started">Vamos lá ></router-link>
      </div>
    </main>

    <footer class="home__item home__item--producced">
      <p>Produzido por Diego Fernando Silva Souza</p>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'HomeView',
    components: {

    }
  }
</script>

<style scoped>
  #home {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(195, 142, 153);
  }

  button:hover {
    cursor: pointer;
  }

  .home__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    max-width: 1440px;
    padding: 20px 30px;
  }

  .home__item--account {
    flex-direction: column;
    margin-top: 110px;
    max-width: 700px;
  }

  .home__item--producced {
    position: absolute;
    bottom: 0;
    padding: 0;
    justify-content: center;
    font-size: 0.5rem;
  }

  .home__item__title {
    color: white;
    font-weight: 800;
    font-size: 2.5rem;
  }

  .home__item__config {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .home__item__config__button {
    border: none;
    font-size: 1.1rem;
    font-weight: 400;
    color: white;
    background: transparent;
    border-radius: 4px;
  }

  .home__item__config__button:hover {
    cursor: pointer;
  }

  .home__item__config__button--language {
    border: 1px solid white;
    height: 42px;
    padding: 0 10px;
  }

  .home__item__config__button--login {
    background: white;
    height: 34px;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: hsl(348, 31%, 40%);
  }

  .home__item__text {
    color: white;
    font-weight: 800;
    font-size: 3rem;
    text-align: center;
    max-width: 600px;
    line-height: 55px;
  }

  .home__item__text--middle {
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 15px;
  }

  .home__item__text--bottom {
    font-weight: 400;
    font-size: 1.2rem;
    max-width: 700px;
  }

  .home__item__verify {
    width: 100%;
    max-width: 620px;
    display: flex;
    align-items: center;
    height: 60px;
    margin-top: 10px;
  }

  .home__item__verify__item {
    padding: 0 10px;
    font-size: 1.5rem;
    color: white;
    outline: none;
    border: 3px solid white;
    height: 100%;
    background-color: transparent;
  }

  .home__item__verify__email {
    flex: 3;
    color: white;
    font-size: 1rem;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  ::placeholder {
    color: white;
    padding-left: 10px;
  }

  .home__item__verify__started {
    flex: 1;
    background-color: white;
    display: flex;
    justify-content: center;
    font-weight: 600;
    align-items: center;
    padding: 15px 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-left: 0;
    text-decoration: none;
    color: hsl(348, 31%, 40%);
  }
</style>
