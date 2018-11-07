import Vue from 'vue'

import VueRouter from 'vue-router'
import auth from '@util/auth'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppFilms from '@pages/films/AppFilms'
import AppDetail from '@pages/detail/AppDetail'
import AppLogin from '@pages/login/AppLogin'
import AppUserInfo from '@pages/user-info/AppUserInfo'
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
        path: '/films/:url',
        name: 'films',
        component: AppFilms,
        props: true
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: AppDetail,
        props: true
    },
    {
        path: '/login',
        name: 'login',
        component: AppLogin
    },
    {
        path: '/user-info',
        name: 'user-info',
        component: AppUserInfo,
        beforeEnter:  (to, from ,next) => {
            let result = auth.authLogin()
            console.log(result,111)
            next(result.id ? true : {name: 'login'})
        }
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
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) { // 如果能记录
            return savedPosition // 滚动到上次记录的位置
        } else {

            return JSON.parse(localStorage.position || JSON.stringify({ x: 0, y: 0 }) )       
            // return JSON.parse(localStorage.position || JSON.stringify({ x: 0, y: 0 }) )       
        }
    }
})




export default router