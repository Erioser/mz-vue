import Vue from 'vue'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// axios
import ajax from '@util/axios'

// filters
import '@util/filters'

// 将VueAwemeSwiper中的多个组件注册为全局组件
Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = ajax
