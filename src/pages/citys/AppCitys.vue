<template>
    <section class="app-citys">
       <gp8-content-block title = "当前所在城市">
           <gp8-content-item class="active">{{activeCity.name}}</gp8-content-item>
       </gp8-content-block>

       <gp8-content-block title = "热门城市">
           <gp8-content-item 
                v-for = "city in hotCitys"
                :key  = "city.id"
           >{{city.name}}</gp8-content-item>
       </gp8-content-block>

        <app-citys-content></app-citys-content>
    </section>
</template>

<script>

import AppCitysContent from '@c/common/app-citys/AppCitysContent'
export default {
    name: 'app-citys',
    data () {
        return {
            activeCity: {
                id: 12,
                name: '北京'
            },
            hotCitys: [
                {id: 12, name: '北京'},
                {id: 11, name: '上海'},
                {id: 13, name: '广州'},
                {id: 10, name: '深圳'}
            ]
        }
    },
    components: {
        AppCitysContent
    }
}
</script>

<style lang="scss" >
    .app-citys {
        
    }
</style>

