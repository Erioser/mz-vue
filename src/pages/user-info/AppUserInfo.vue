<template>
    <section class="app-user-info">
      app-user-info
      <button @click = "exit">exit</button>
    </section>
</template>

<script>
export default {
    beforeRouterEnter () {
        this.$Progress.start()
    },
    mounted () {
        this.$Progress.finish()
    },
    methods: {
        exit () {
            // 退出的时候去掉本地存储中存储的登录状态
            localStorage.removeItem('userInfo')
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style lang="scss" >
    .app-user-info{

    }
</style>

