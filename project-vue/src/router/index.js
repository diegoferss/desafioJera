import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountView from '../views/AccountView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'
import LoginView from '../views/LoginView.vue'
import MovieView from '../views/MovieView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: AccountView
  },
  {
    path: '/register',
    name: 'register',
    component: CreateAccountView
  }, 
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MovieView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
