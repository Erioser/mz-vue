import Vue from 'vue'

import VueRouter from 'vue-router'
// import bus from '@util/bus'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppFilms from '@pages/films/AppFilms'
import AppDetail from '@pages/detail/AppDetail'
import AppNotFound from '@pages/not-found/AppNotFound'

// 路由表
const routes = [
    {
        path: '/',
        // redirect: '/home'
        // redirect: { path: '/home'}
        redirect: { name: 'home'}
    },
    {
        path: '/home',
        name: 'home',
        component: AppHome,
        // alias: '/'
    },
    {
        path: '/films',
        name: 'films',
        component: AppFilms
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: AppDetail
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: AppNotFound
    },
    {
        path: '**',
        redirect: '/not-found'
    }
]



// 路由工具
const router = new VueRouter({
    mode: 'history', // hash
    // base: '/app/',
    routes
})




export default router