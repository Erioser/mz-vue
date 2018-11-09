

import { AppContentBlock as GP8ContentBlock,  AppContentItem as GP8ContentItem} from './block-item'
import { cities } from './cities'
import directives from './directives'
const util = {
    cities
}

const install = (Vue, options) => {
    Vue.component('gp8-content-block', GP8ContentBlock)
    Vue.component('gp8-content-item', GP8ContentItem)
    Vue.prototype.$util = util

    // 注册大量的指令
    for (const key in directives) {
        directives[key](Vue)
    }
}

export { GP8ContentBlock, GP8ContentItem, util }

export default {
    install
}




// import GP8UI from './gp8-ui'
// import Vue from 'vue';
// Vue.use(GP8UI, {})