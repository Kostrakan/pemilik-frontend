import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import KosList from '../views/Kos/kosList.vue'
import KamarList from '../views/Kamar/kamarList.vue'
import LoginPage from '../views/auth/Login.vue'
import Login from '../views/auth/Login.vue'
import PostKos from '../views/Kos/PostKos.vue'
import DetailKos from '../views/Kos/DetailKos.vue'
import PostKamar from '../views/Kamar/PostKamar.vue'
import LandingPage from '../views/LandingPage.vue'
import Register from '../views/auth/Register.vue'
import GetAllKos from '../views/Kos/GetAllKos.vue'
import UpdateKos from '../views/Kos/UpdateKos.vue'
import DetailKamar from '../views/Kamar/DetailKamar.vue'
import UpdateKamar from '../views/Kamar/UpdateKamar.vue'

const routes = [
  {
    path: '/',
    name: LandingPage,
    component: LandingPage
  },
  {
    path: '/login',
    name: Login,
    component: LoginPage
  },
  {
    path: '/register',
    name: Register,
    component: Register
  },
  { 
    path: '/dashboard', 
    component: Dashboard 
  },
  { 
    path: '/kos',
    name: KosList,
    component: KosList 
  },
  { 
    path: '/kos/tambah', 
    name: PostKos,
    component: PostKos 
  },
  {
    path: '/kos/:id',
    name: DetailKos,
    component: DetailKos
  },
  {
    path: '/getallkos/:id',
    name: GetAllKos,
    component: GetAllKos
  },
  {
    path: '/updatekos/:id',
    name: UpdateKos,
    component: UpdateKos
  },
  {
    path: '/kamar', 
    component: KamarList
  },
  { 
    path: '/kamar/tambah', 
    name: PostKamar,
    component: PostKamar
  },
  {
    path: '/kamar/:id',
    name: DetailKamar,
    component: DetailKamar
  },
  {
    path: '/updatekamar/:id',
    name: UpdateKamar,
    component: UpdateKamar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
