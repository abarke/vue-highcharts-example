import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/chartjs',
      name: 'chartjs',
      // route level code-splitting
      // this generates a separate chunk (chart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "chartjs" */ './views/ChartJs.vue'),
    },
    {
      path: '/highcharts',
      name: 'highcharts',
      // route level code-splitting
      // this generates a separate chunk (chart.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "highcharts" */ './views/HighCharts.vue'),
    },
  ],
});
