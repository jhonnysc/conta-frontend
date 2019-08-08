import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import CidadeList from '@/views/cidade-list.vue';
import AgenciaList from '@/views/agencia-list.vue';
import ClienteList from '@/views/cliente-list.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cidades',
      component: CidadeList
    },
    {
      path: '/agencias',
      component: AgenciaList
    },
    {
      path: '/clientes',
      component: ClienteList
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});
