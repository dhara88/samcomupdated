import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import ContactDetails from './components/ContactDetails.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, Axios);



const routes = [
    {
      name: 'ContactDetails',
      path: '/contactdetails',
      component: ContactDetails
    },
    {
      name: 'Home',
      path: '/home',
      component: Home
    }
  ];
  
  
  const router = new VueRouter({ mode: 'history', routes: routes });
  
  router.beforeResolve((to, from, next) => {
    if (to.name) {
        // NProgress.start()
    }
    next()
  });
  // router.beforeEach((to, from, next) => {
  //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  //   else next()
  // })
  router.afterEach(() => {
    // NProgress.done()
  });
  
  

  export default router
