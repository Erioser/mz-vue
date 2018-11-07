import Vue from 'vue'

import VueRouter from 'vue-router'
import auth from '@util/auth'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppFilms from '@pages/films/AppFilms'
import AppDetail from '@pages/detail/AppDetail'
import AppMine from '@pages/mine/AppMine'
import AppLogin from '@pages/mine/login/AppLogin'
import AppUserInfo from '@pages//mine/user-info/AppUserInfo'
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
        path: '/mine',
        name: 'mine',
        component: AppMine,
        redirect: {name: 'user-info'},
        children: [
            {
                path: 'login',
                name: 'login',
                components: {
                    login: AppLogin
                },
            },
            {
                path: 'user-info',
                name: 'user-info',
                components: {
                    'user-info': AppUserInfo
                },
                beforeEnter:  (to, from ,next) => {
                    let result = auth.authLogin()
                    console.log(result,111)
                    next(result.id ? true : {name: 'login'})
                }
            }
        ]
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

// {
//     path: '/login',
//     name: 'login',
//     component: AppLogin
// },
// {
//     path: '/user-info',
//     name: 'user-info',
//     component: AppUserInfo,
//     beforeEnter:  (to, from ,next) => {
//         let result = auth.authLogin()
//         console.log(result,111)
//         next(result.id ? true : {name: 'login'})
//     }
// },

// 路由工具
const router = new VueRouter({
    mode: 'history', // hash
    // base: '/app/',
    routes
})




export default router