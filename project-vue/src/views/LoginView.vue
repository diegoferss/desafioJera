<template>
  <div id="login">
    <header class="login__item login__item--header">
      <h1 class="login__item__title">NETFLIX</h1>
    </header>

    <main class="login__item login__item--account">
      <p class="login__item__text">Entrar</p>
      <div class="login__item__wrapper">
        <input type="email" class="login__item__wrapper__button" placeholder="Email" v-model="email">
        <input type="password" class="login__item__wrapper__button" placeholder="Senha" v-model="password">
      </div>
      <button class="login__item__entry" @click="tryLogin()">Entrar</button>
      <p class="login__item__text login__item__text--create">Novo por aqui?
        <router-link to="/register" class="login__item__text__link">Crie a sua conta aqui!</router-link>
      </p>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      account() {
        return {
          email: this.email,
          password: this.password
        }
      }
    },
    methods: {
      tryLogin() {
        const items = this.account
        console.log(items)
      }
    }
  }
</script>

<style scoped>
  #login {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #000000BF;
  }

  .login__item {
    width: 95%;
    max-width: 1440px;
    padding: 7px 0;
  }

  .login__item--header {
    width: 100%;
    max-width: none;
    border-bottom: 1px solid rgba(128, 128, 128, 0.1);
    display: flex;
    justify-content: center;
  }

  .login__item__title {
    color: red;
    font-weight: 800;
    font-size: 3.2rem;
    margin-left: 17px;
    width: 95%;
    max-width: 1440px;
  }

  .login__item--account {
    background-color: #000000BF;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 420px;
    margin-top: 30px;
    padding: 50px;
    border-radius: 5px;
  }

  .login__item__text {
    align-self: flex-start;
    color: white;
    font-size: 2.3rem;
    font-weight: 700;
  }

  .login__item__text--create {
    font-size: 1rem;
    margin-top: 25px;
    font-weight: 500;
  }

  .login__item__text--create:hover {
    cursor: pointer;
  }

  .login__item__text__link {
    text-decoration: none;
    color: lightgray;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .login__item__wrapper {
    margin-top: 20px;
  }

  .login__item__wrapper__button {
    width: 100%;
    margin-bottom: 16px;
    border-radius: 5px;
    font-size: 1.1rem;
    padding: 15px 20px;
    border: none;
  }

  .login__item__entry {
    font-size: 1.2rem;
    color: white;
    font-weight: 700;
    width: 100%;
    background-color: red;
    border: none;
    padding: 12px 0;
    margin-top: 25px;
    border-radius: 5px;
  }

  .login__item__entry:hover {
    cursor: pointer;
  }
</style>