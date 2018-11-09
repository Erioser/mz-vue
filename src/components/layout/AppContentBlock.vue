<template>
    <div class="app-content-block">
        <div class="city-index-title" >{{title}}</div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
    .app-content-block {
        .city-index-title {
            padding-left: .4rem;
            font-size: .373333rem;
            line-height: 1.066667rem;
            background-color: #ebebeb;
            margin-top: -1px;
        }
        .content {
            background: #fff;
        }
    }
</style>
