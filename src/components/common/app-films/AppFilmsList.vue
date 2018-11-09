<template>
    <div ref = "root" class="app-films-list">
        <mt-loadmore 
            :autoFill="false" 
            :bottom-method="loadMore" 
            ref="loadmore"
        >
            <!-- <div> -->
                <app-films-item
                    v-for = "film in films"
                    :key  = "film.id"
                    :info = "film"
                ></app-films-item>     
            <!-- </div>   -->
        </mt-loadmore>
        
    </div>
</template>

<script>
import AppFilmsItem from '@c/common/app-films/AppFilmsItem'
import { Loadmore } from 'mint-ui';
import { Toast } from 'mint-ui';
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
    beforeDestroy () {
        if (this.instance) this.instance.close() // 切换路由的时候，关掉框框
    },
    methods: {
        backTop () {
            // this.scroll.scrollTo(0,0,200)
        },
        loadMore () {
            if ( !this.hasMore ) {
                // 如果以及有一个了，就上一个关掉
                if (this.instance) this.instance.close()
                this.instance = Toast({
                    message: '没有更多了...',
                    position: 'bottom'
                })
                this.$refs.loadmore.onBottomLoaded();
                return false;
            };
            this.getFilms()
        },
        async getFilms () { // 加载的主要逻辑
        // 如果没有更多了，就去请求了
            let result = await this.$http({
                url: '/mz/v4/api/film/'+this.type,
                params: {
                    page: this.page,
                    count: 7
                },
                loading: true
            })
            // 判断有没有更多数据
            if ( result.page.total - result.page.current <= 0 ) {
                
                this.hasMore = false
            }else {
                this.page ++ // 有更多的话，页数增加
            } 
            // 更新数据
            this.films = this.films.concat(result.films)
            // this.$nextTick(() => {
                this.$refs.loadmore.onBottomLoaded();
            // })
        }
        
    },
    components: {
        AppFilmsItem,
        [Loadmore.name]: Loadmore
    },
    mounted () {
        // this.scroll = scroll({
        //     // el: this.$el
        //     el: this.$refs.root,
        //     handler: this.getFilms.bind(this),
        //     onscroll: (y) => {
        //         this.$emit('update:isBackShow', !!(y < -200))
        //     }
        // })
    }
}
</script>

<style lang="scss">
.app-films-list {
    flex: 1 1;
    overflow: scroll;
}
</style>
