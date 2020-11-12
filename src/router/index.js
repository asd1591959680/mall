import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
  import ('views/home/Home.vue')
const Catagory = () =>
  import ('views/catagory/Catagory.vue')
const Buy = () =>
  import ('views/buy/buy.vue')
const Profile = () =>
  import ('views/profile/Profile.vue')
const Detail = () =>
  import ('views/detail/Detail.vue')
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catagory',
    component: Catagory
  },
  {
    path: '/buy',
    component: Buy
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router