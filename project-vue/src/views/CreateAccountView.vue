<template>
  <div id="createAccount">
    <header class="createAccount__item">
      <div class="createAccount__item__wrapper">
        <h1 class="createAccount__item__wrapper__title">NETFLIX</h1>
        <button class="createAccount__item__wrapper__login">Entrar</button>
      </div>
    </header>

    <main class="createAccount__item createAccount__item--form">
      <p class="creatAccount__item__text">Sua conta para listar filmes está quase pronta</p>
      <p class="creatAccount__item__text creatAccount__item__text--information">Preencha os dados abaixo!</p>
      <p class="creatAccount__item__text creatAccount__item__text--information">Eu não sei mais o que fazer</p>
      <section class="createAccount__item__questions">
        <input class="createAccount__item__questions__button" type="text" placeholder="Nome de usuário">
        <input class="createAccount__item__questions__button" type="email" placeholder="Email">
        <input class="createAccount__item__questions__button" type="password" placeholder="Senha">
        <input type="date" class="createAccount__item__questions__button" placeholder="Data de nascimento">
        <button class="createAccount__item__questions__button createAccount__item__questions__button--send">Finalizar</button>
      </section>
    </main>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #createAccount {
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  button:hover {
      cursor: pointer;
  }

  .createAccount__item {
    width: 100%;
    border-bottom: 1px solid rgba(128, 128, 128, 0.1);
  }

  .createAccount__item--form {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    max-width: 450px;
  }

  .createAccount__item__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    max-width: 1440px;
    padding: 7px 0;
    margin: auto;
  }

  .createAccount__item__wrapper__title {
    color: red;
    font-weight: 800;
    font-size: 3.2rem;
    margin-left: 10px;
  }

  .createAccount__item__wrapper__login {
    background: transparent;
    border: none;
    font-weight: 700;
    font-size: 1.2rem;
    margin-right: 10px;
  }

  .creatAccount__item__text {
    font-size: 1.8rem;
    font-weight: 700;
    color: rgb(20, 20, 20);
    align-self: flex-start;
    margin-bottom: 10px;
  }

  .creatAccount__item__text--information {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .createAccount__item__questions {
    width: 100%;
    margin-top: 10px;
  }

  .createAccount__item__questions__button {
    width: 100%;
    border: 1px solid gray;
    outline: none;
    font-size: 1.1rem;
    padding: 18px 10px;
    margin-bottom: 10px;
  }

  .createAccount__item__questions__button--send {
    background-color: red;
    color: white;
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 5px;
  }
</style>