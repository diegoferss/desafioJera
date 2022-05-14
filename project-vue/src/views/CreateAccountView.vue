<template>
  <div id="createAccount">
    <header class="createAccount__item">
      <div class="createAccount__item__wrapper">
        <h1 class="createAccount__item__wrapper__title">
          <router-link to="/" class="createAccount__item__wrapper__title__text">NETFLIX</router-link>
        </h1>
        <router-link to="/login" class="createAccount__item__wrapper__login">Entrar</router-link>
      </div>
    </header>

    <main class="createAccount__item createAccount__item--form">
      <p class="creatAccount__item__text">Sua conta para listar filmes está quase pronta</p>
      <p class="creatAccount__item__text creatAccount__item__text--information">Preencha os dados abaixo!</p>
      <p class="creatAccount__item__text creatAccount__item__text--information">Eu não sei mais o que fazer</p>
      <section class="createAccount__item__questions">
        <input class="createAccount__item__questions__button" type="text" placeholder="Nome de usuário" v-model="username">
        <input class="createAccount__item__questions__button" type="email" placeholder="Email" v-model="email">
        <input class="createAccount__item__questions__button" type="password" placeholder="Senha" v-model="password">
        <input type="date" class="createAccount__item__questions__button" v-model="date">
        <button class="createAccount__item__questions__button createAccount__item__questions__button--send"
          @click="sendForm()" >Finalizar</button>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        username: '',
        date: ''
      }
    },
    computed: {
      account() {
        return {
          email: this.email,
          password: this.password,
          username: this.username,
          date: this.date
        }
      }
    },
    methods: {
      async sendForm() {
        const checkIsEmpty = this.checkFormIsEmpty()
        const res = await this.$http.get('usuarios.json')
        const users = await res.data
        let checkEmail = true
        for (let user in users) {
          if(users[user].email == this.email) {
            checkEmail = false
            break
          }
        }
        if(!checkIsEmpty || !checkEmail) {
          console.log('err')
        }
        else { 
          this.$http.post(`usuarios.json`, this.account)
          this.$router.push('/login')
        }
      },
      checkFormIsEmpty() {
        let boolCheck = true
        const items = this.account
        for (let item in items) {
          if(items[item]=='') {
            boolCheck = false
            break
          }
        }
        return boolCheck
      },
      checkEmail() {
        
      }
    }
  }
</script>

<style scoped>
  #createAccount {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(195, 142, 153);
    /*background: white;*/
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
    margin-top: 10px;
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
    font-weight: 800;
    font-size: 3.2rem;
    margin-left: 10px;
  }

  .createAccount__item__wrapper__title__text {
    /*color: red;*/
    color: white;
    text-decoration: none;
  }

  .createAccount__item__wrapper__login {
    background: transparent;
    border: none;
    font-weight: 700;
    font-size: 1.2rem;
    margin-right: 10px;
    /*color: black;*/
    color: white;
    text-decoration: none;
  }

  .creatAccount__item__text {
    font-size: 1.8rem;
    font-weight: 700;
    /*color: rgb(20, 20, 20);*/
    color: rgb(245, 245, 245);
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
    border: 3px solid white;
    outline: none;
    border-radius: 20px;
    font-size: 1.1rem;
    padding: 18px 10px;
    margin-bottom: 10px;
    background: transparent;
  }

  ::placeholder {
    color: white;
  }

  .createAccount__item__questions__button--send {
    /*background-color: red;*/
    background: white;
    /*color: white;*/
    color: hsl(348, 31%, 40%);
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 5px;
  }
</style>