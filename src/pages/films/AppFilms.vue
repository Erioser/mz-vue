<template>
    <section class="app-films">
        <div class="film-list-nav" >
            <div
                v-for = "item in types"
                :key  = "item.id"
                @click = "type = item.type"
                :class = "{choosing: item.type === type}"
            class="now-playing nav-btn" >{{item.title}}</div>
        </div>
        <app-films-list ref = "list" :isBackShow.sync = "isBackShow" :type = "type"></app-films-list>

        <transition
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
        >
            <div @click = "backTop" v-if = "isBackShow"  class="back-top animated">
                <i class="fa fa-arrow-up"></i>
            </div>  
        </transition>
    </section>
</template>

<script>
import AppFilmsList from '@c/common/app-films/AppFilmsList' 
export default {
    props: ['url'], // 路由组件传参，将参数与路由解耦 $route.params.url -> this.url
    data () {
        return {
            types: [
                {id: 1, title: '正在热映', type: 'now-playing'},
                {id: 2, title: '即将上映', type: 'coming-soon'}
            ],
            type: this.url || 'now-playing',
            isBackShow: false
        }
    },
    methods:{
        backTop (e) {
            this.$refs.list.backTop()
        }
    },
    components: {
        AppFilmsList
    }
};
</script>

<style lang="scss" >
.back-top {
       position: fixed;
       right: .533333rem;
       bottom: .533333rem;
        background-color: rgba(0,0,0,0.7);
        width: 1.28rem;
        height: 1.28rem;
        line-height: 1.28rem;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
   } 
.app-films {
  padding: 0 0.4rem;
  height: 100%;
  
  display: flex;
  flex-flow: column;
  .film-list-nav {
      width: 100%;
    flex: 0 0;
    height: 1.226667rem;
    margin: 0 auto;
    border-bottom: solid #fe6e00 1px;
    .nav-btn {
        float: left;
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: .426667rem;
        line-height: 1.226667rem;
        color: #6a6a6a;
        cursor: pointer;

        &.choosing {
                color: #fe6e00;
            border-bottom: solid;
        }
    }
  }
}
</style>

