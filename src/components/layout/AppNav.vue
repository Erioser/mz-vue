
<template>
    
    <div class="app-nav">
        <transition 
            enter-active-class="slideInLeft"
            leave-active-class="slideOutLeft"
        >
            <nav class="nav-list animated" v-if = "show">
                <ul class="nav-content">
                    <router-link active-class="active" @click.native = "$emit('update:show', false)" tag = "li" :to = "item.path" class="nav-item" 
                        v-for = "item in navs"
                        :key  = "item.id"
                    >
                        <a>
                            <span>{{ item.title }}</span>
                            <i class="fa fa-angle-right"></i>
                        </a>
                        
                    </router-link>
                </ul>
                
            </nav>
        </transition>
        <transition 
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
        >
            <div @click="$emit('update:show', false)" class="mask animated"  v-if = "show"></div>  
        </transition>  
    </div>

</template>

<script>
export default {
    data () {
        return {
            navs: [
                { id: 1, title: '首页', path: '/home' },
                { id: 2, title: '影片', path: '/films/now-playing' },
                { id: 3, title: '我的', path: '/user-info' }
            ]
        }
    },
    props: {
        show: Boolean
    }
}




</script>

<style lang="scss">

@import '../../stylesheets/particles/variable';
.app-nav {
    .animated {
        animation-duration: 0.5s;
    }
    position: absolute;
    z-index: -1;
    height: auto;
    top: 1.333333rem;
    width: 100%;
    // padding-top: ;
    .nav-list {
        width: 7.066667rem;
        border-top: 1px solid #222;
        box-shadow: 0 1px 1px #363636 inset;
        background:  $base-bg-color;
        height: 100vh;
        .nav-item {
            height: 1.333333rem;
            a {
                padding: 0 .426667rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px dotted #333;
                color: #9a9a9a;
            }

            &.active a { color: #fff; }
        } 
    }
    .mask {
        background: rgba(0,0,0,0.5);
        position: absolute;
        top: 0;
        z-index: -1;
        height: 100vh;
        width: 100%;
    }
}

</style>

