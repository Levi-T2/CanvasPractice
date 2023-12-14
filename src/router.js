import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: loadPage('ChartPage')
  },
  {
    path: '/image',
    name: 'Image',
    component: loadPage('ImagePage')
  },
  {
    path: '/scale',
    name: 'Scale',
    component: loadPage('ScalePage')
  },
  {
    path: '/sprite',
    name: 'Sprite',
    component: loadPage('SpritePage')
  },
  // Currently Unused Routes Bellow.
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
