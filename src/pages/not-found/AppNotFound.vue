<template>
    <section class="app-not-found">
        <div class="img-box"><img width="100%" src="/images/not-found.jpg" alt=""></div>
        <p>这个页面，神秘失踪了…</p>
        <p>不如<router-link :to = "{ name: 'home' }">返回卖座电影首页</router-link>吧</p>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" >
    .app-not-found {
        width: 6.16rem;
        height: 6.186667rem;
        padding-top: 1.28rem;
        margin: 0 auto;

        .img-box {
            height: 4.214667rem;
            margin-bottom: .266667rem;
        }
        p {
            font-size: .426667rem;
            color: #666;
            line-height: .64rem;
            margin: 0 0 8px;
            text-align: center;
        }

        a {
            color: #cb885e;
        }
    }
</style>

