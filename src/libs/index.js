import Vue from 'vue'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// axios
import ajax from '@util/axios'

// filters
import '@util/filters'

// bus
import bus from '@util/bus'

// cookies
import VueCookies from 'vue-cookies'

// 将VueAwemeSwiper中的多个组件注册为全局组件
Vue.use(VueAwesomeSwiper)

Vue.use(VueCookies)

Vue.prototype.$http = ajax
Vue.prototype.$bus = bus
