
<template>
    <div class="test">
        <input type="text" v-model = "message">
        <h1 >{{message}}</h1>
        <h1 v-text = "message"></h1>
        <h1 v-abc = "message"></h1>
            <!-- <img
                v-for = "x in 20"
                :key  = "x"
                v-gp8-lazy = "src" /> -->

        <div
            v-abcd = "laugh"
            symbol = "???"
            text   = "message"
        >

        </div>
        
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            src: 'https://pic.maizuo.com/usr/movie/b6da3092e1bf9ec575882212450bce0a.jpg',
            isShow: true,
            message: 'hello world'
        }
    },
    methods: {
        laugh (text = 'laugh',symbol) {
            console.log(text + symbol)
        }
    }
}
</script>

<style lang="scss">
    .test {
        img {
            width: 100%;
            height: 200px;
            margin-bottom: 15px;
        }
    }
</style>

