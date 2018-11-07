
<template>
    <header class="app-header">      
        <div class="header-content">
            <div class="left">
                <div class="nav-btn icon" @click = "isNavShow = !isNavShow">
                    <i class="fa fa-navicon"></i>
                </div>
                <div class="title">{{title}}</div>
            </div>
            <div class="right">
                <div class="city">
                    北京
                    <i  class="fa fa-angle-down"></i>
                </div>
                <router-link tag = "div" :to = "{name: 'user-info'}" class="user icon">
                    <i  class="fa fa-user-o"></i>
                </router-link>
            </div>
        </div>
        <app-nav :show.sync = "isNavShow"></app-nav>

    </header>
</template>

<script>
import AppNav from '@c/layout/AppNav'
export default {
    data () {
        return {
            isNavShow: false,
            title: '卖座电影'
        }
    },
    components: {
        AppNav
    },
    created () {
        // 给bus绑定事件
        // this.$bus.$on('change:title', title => this.title = title)
        // 全局路由钩子
        this.title =this.createTitle()
        this.$router.beforeEach((to, from, next) => {
            this.title =this.createTitle(to)
            next()
        })
    },
    methods: {
        createTitle (to) {
            let _to = to || this.$route
            switch ( _to.name ) {
                case 'films': return '影片列表';
                case 'detail': return _to.query.name;
                case 'login': return '登录';
                default: return '卖座电影';
            }
        }
    }
}
</script>

<style lang="scss">
// sass语法，不是webpack的东西，所以不能使用alias
@import '../../stylesheets/particles/variable';

.app-header{
    background: $base-bg-color;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 1.333333rem;
    line-height:1.333333rem;
    // overflow: hidden;

    .header-content {
        height: 100%;

        display: flex;

        justify-content: space-between;
        
        color: #999;

        .left, .right {

            display: flex;
            align-items: stretch;
            width: auto;

            .icon {
                width: 1.28rem;
                display: flex;justify-content: center;align-items: center;
                flex-grow: 0; flex-shrink: 0;
            }
        }
        .left .icon {
            border-right: 1px solid #222;
            box-shadow: 1px 0 1px #363636;
        }
        .title {
            color: #efefef;
            padding: 0 1em;
        }
        .city {
            padding: 0 .16rem;
            display: flex;justify-content: center;align-items: center;

            i {
                display: inline-block;margin-left: .12rem;
            }
        }
    }
}
</style>

