import Vue from 'vue'
import VueRouter from 'vue-router'
import  CreateArticle from  '../views/CreateArticle.vue'
import  ListArticle from  '../views/ListArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/articles/index'
  },
  {
    path: '/articles/index',
    name: 'create-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/CreateArticle.vue')
    component:ListArticle
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component:CreateArticle
  },
]

const router = new VueRouter({
  routes
})

export default router
