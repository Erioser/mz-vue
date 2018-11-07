<template>
    <div ref = "root" class="app-films-list">
        <div>
            <app-films-item
                v-for = "film in films"
                :key  = "film.id"
                :info = "film"
            ></app-films-item>     
        </div>  
        
    </div>
</template>

<script>
import AppFilmsItem from '@c/common/app-films/AppFilmsItem'
import scroll from '@util/scroll'
export default {
    props: ['type'],
    data () {
        return {
            films: [],
            page: 1, // 页数
            hasMore: true // 是否还有更多
            
        }
    },
    watch: {
        type: { // 监听类型变化，如果类型变化之后
            immediate: true,
            handler () {
                this.films = [] // 清空当前的数据
                this.hasMore = true // 重新更多
                this.page = 1 // 重置页数
                this.getFilms()
            }
        }
    },
    methods: {
        backTop () {
            this.scroll.scrollTo(0,0,200)
        },
        async getFilms () { // 加载的主要逻辑
        // 如果没有更多了，就去请求了
            if ( !this.hasMore ) return false;

            let result = await this.$http({
                url: '/mz/v4/api/film/'+this.type,
                params: {
                    page: this.page,
                    count: 7
                }
            })
            // 判断有没有更多数据
            if ( result.page.total - result.page.current <= 0 ) {
                this.hasMore = false
            }else {
                this.page ++ // 有更多的话，页数增加
            } 
            // 更新数据
            this.films = this.films.concat(result.films)
        }
        
    },
    components: {
        AppFilmsItem
    },
    mounted () {
        this.scroll = scroll({
            // el: this.$el
            el: this.$refs.root,
            handler: this.getFilms.bind(this),
            onscroll: (y) => {
                this.$emit('update:isBackShow', !!(y < -200))
            }
        })
    }
}
</script>

<style lang="scss">
.app-films-list {
    flex: 1 1;
    overflow: hidden;
}
</style>
