import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      children: [{
        path: 'Contact',
        name: 'Contact',
        component: Contact,
      }],
    },
  ],
});
