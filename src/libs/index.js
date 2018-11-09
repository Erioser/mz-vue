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

// progress
import VueProgressBar from 'vue-progressbar'

// mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui';



// 将VueAwemeSwiper中的多个组件注册为全局组件
Vue.use(VueAwesomeSwiper)

Vue.use(VueCookies)

Vue.use(Lazyload);

// Vue.use(MintUI)

const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}
   
Vue.use(VueProgressBar, options)

Vue.prototype.$http = ajax
Vue.prototype.$bus = bus
