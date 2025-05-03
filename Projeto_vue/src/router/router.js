import { createRouter, createWebHistory } from 'vue-router';
import Header from '@/components/Header.vue';
import Home  from '@/components/Home.vue';
import Certificados from '@/components/Certificados.vue'
//import Formulario from '@/components/Formulario.vue';
import Footer from '@/components/Footer.vue'


const routes = [
  
  { path: '/header', component: Header },
  { path: '/Home', component: Home},
  { path: '/Certificados', component: Certificados },
  //{ path: '/formulario', component: Formulario },
  { path: '/footer', component: Footer }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
