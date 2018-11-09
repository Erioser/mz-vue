<template>
    <section class="app-citys">
       <app-content-block title = "当前所在城市">
           <app-content-item class="active">{{activeCity.name}}</app-content-item>
       </app-content-block>

       <app-content-block title = "热门城市">
           <app-content-item 
                v-for = "city in hotCitys"
                :key  = "city.id"
           >{{city.name}}</app-content-item>
       </app-content-block>
    </section>
</template>

<script>
import AppContentBlock from '@c/layout/AppContentBlock'
import AppContentItem from '@c/layout/AppContentItem'
export default {
    data () {
        return {
            activeCity: {
                id: 12,
                name: '北京'
            },
            hotCitys: [
                {id: 12, name: '北京'},
                {id: 13, name: '上海'},
                {id: 14, name: '广州'},
                {id: 15, name: '深圳'}
            ]
        }
    },
    components: {
        AppContentBlock,
        AppContentItem
    }
}
</script>

<style lang="scss" >
    .app-citys {
        
    }
</style>

