import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('../views/CollectionPage.vue'),
      // children: [
      //   {name: 'collectionItems', path: ':id', component: () => import('../views/collection/item.vue'), props: true}
      // ],
    },
    {
      path: '/collection/:id',
      name: 'product',
      component: () => import('../views/ProductPage.vue'),
      props: true,

    },
    {
      path: '/sustainability',
      name: 'sustainability',
      component: () => import('../views/SustainPage.vue'),
      // children: [
      //   {name: 'collectionItems', path: ':id', component: () => import('../views/collection/item.vue'), props: true}
      // ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (savedPosition) {
      return savedPosition
    } else {
      return { 
        top: 0,
        behavior: 'smooth',
       }
    }
  },
})

export default router
