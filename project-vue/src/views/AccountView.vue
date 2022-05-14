<template>
    <div id="account">
        <header class="account__item">
            <h1 class="account__item__title">
                <router-link to="/" class="account__item__title__text">NETFLIX</router-link>
            </h1>
        </header>

        <main class="account__item account__item--profiles">
            <p class="account__item__watching">Quem está assistindo?</p>
            <div class="account__item__profiles" @click="myMovies">
                <ProfileComponent :username="profiles.username" />
            </div>
            <button class="account__item__manageProfiles">GERENCIAR PERFIS</button>
        </main>
    </div>
</template>


<script>
    import ProfileComponent from '../components/ProfileComponent.vue'

    export default {
        components: {
            ProfileComponent
        },
        computed: {
            profiles() {
                console.log(this.$store.state.profiles)
                return this.$store.state.profile
            }
        },
        methods: {
            myMovies() {
                this.$router.push('/movies')
            }
        },
        beforeRouteEnter(to, from, next) {
            if(from.name=='login')
                next()
            else next(vm => vm.$router.push('/login'))
        }
    }
</script>

<style scoped>
    #account {
        min-height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgb(30, 30, 30);
    }

    button:hover {
        cursor: pointer;
    }

    .account__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        max-width: 1440px;
        padding: 10px;
    }

    .account__item__title {
        font-weight: 800;
        font-size: 2.5rem;
        text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
    }

    .account__item__title__text {
        text-decoration: none;
        color: red;
    }

    .account__item__title__text:hover {
        cursor: pointer;
    }

    .account__item--profiles {
        margin-top: 50px;
        flex-direction: column;
        padding: 0;
    }

    .account__item__watching {
        font-size: 2.8rem;
        color: white;
        font-weight: 700;
        text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
    }

    .account__item__profiles {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .account__item__manageProfiles {
        background: transparent;
        color: gray;
        font-size: 1.1rem;
        padding: 3px 30px;
        border: 1px solid gray;
        border-radius: 5px;
        margin-top: 60px;
    }
</style>