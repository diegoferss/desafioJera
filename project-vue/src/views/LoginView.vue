<template>
  <div id="login">
    <header class="login__item login__item--header">
      <h1 class="login__item__title">
        <router-link to="/" class="login__item__title__text">NETFLIX</router-link>
      </h1>
    </header>

    <main class="login__item login__item--account">
      <p class="login__item__text">Login</p>
      <div class="login__item__wrapper">
        <input type="email" class="login__item__wrapper__button" placeholder="Email" v-model="email">
        <input type="password" class="login__item__wrapper__button" placeholder="Senha" v-model="password">
      </div>
      <button class="login__item__entry" @click="tryLogin()">
        Entrar
      </button>
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
      async tryLogin() {
        const { email, password } = this.account
        const res = await this.$http.get('usuarios.json')
        const users = await res.data
        let accountExist = false
        let accountLogged = ''
        for (let user in users) {
          if(users[user].email == email && users[user].password == password) {
            accountExist = true
            accountLogged = users[user]
            accountLogged.idAccount = user
            break
          }
        }
        if(accountExist) {
          this.$store.state.profile = accountLogged
          this.$store.state.logado = true
          this.$router.push('/profiles')
        }else {
          this.$store.state.profile = ''
          this.$store.state.logado = false
        }
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
    /*background: #000000BF;*/
    background: rgb(195, 142, 153);
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
    font-weight: 800;
    font-size: 3.2rem;
    margin-left: 17px;
    width: 95%;
    max-width: 1440px;
  }

  .login__item__title__text {
    text-decoration: none;
    color: white;
  }

  .login__item--account {
    /*background-color: #000000BF;*/
    background: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
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
    color: rgb(195, 142, 153);
    font-size: 2.3rem;
    font-weight: 900;
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
    color: hsl(348, 31%, 30%);
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
    font-size: 1.2rem;
    padding: 15px 20px;
    border: none;
    background: rgba(195, 142, 153, 0.9);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3) inset;
  }

  ::placeholder {
    color: white;
    font-weight: 700;
  }

  .login__item__entry {
    color: hsl(348, 31%, 40%);
    width: 100%;
    border: none;
    padding: 12px 0;
    margin-top: 25px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1.4rem;
    background: white;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  }

  .login__item__entry:hover {
    cursor: pointer;
  }
</style>