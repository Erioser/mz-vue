<template>
    <section class="app-detail" v-if = "info">
        <div class="img-box">
            <img width="100%" :src="info.cover.origin" alt="">
        </div>
        <div class="film-word1" >影片简介</div>
        <div class="film-word2" >
            <span >导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
            <span >{{info.director}}</span>
        </div>
        <div class="film-word2" >
            <span >主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
            <span>{{actors}}</span>
        </div>
        <div class="film-word2" >
            <span >地区语言：</span>
            <span >{{info.nation}}({{info.language}})</span>
        </div>
        <div class="film-word2" >
            <span >类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
            <span>{{info.category}}</span>
        </div>
        <div class="film-word2" >
            <span >地区语言：</span>
            <span >{{info.premiereAt | premiere}})</span>
        </div>
        <div class="film-word3" >{{info.synopsis}}</div>
    </section>
</template>

<script>
export default {
    props: ['id'],
    async created () {
        let result = await this.$http({
            // url: '/mz/v4/api/film/'+ this.$route.params.id,
            url: '/mz/v4/api/film/'+ this.id,
            params: { __t: Date.now() }
        })
        console.log(result)
        this.info = result.film

        // this.info.name
    },
    computed: {
        actors () {
            return this.info.actors.map(actor => actor.name).join(' | ')
        }
    },
    data () {
        return {
            info: null
        }
    },
    // beforeRouteUpdate () {
    //     console.log('change')
    // }
}
</script>

<style lang="scss" >
    .app-detail {
        .img-box {
            height: 5.625067rem;
        }
        color: #333;

        [class^='film-word'] {
            font-size: 12px;
        }
        .film-word1 {
            margin: .426667rem auto;
            border-left: .426667rem solid RGB(228, 200, 156);
            font-size: .426667rem;
            padding-left: 4px;
        }
        .film-word2 {
                height: .48rem;
                overflow: hidden;
                margin-bottom: .266667rem;
                padding-left: .533333rem;
        }
        .film-word3 {
            text-overflow: ellipsis;
            margin-bottom: 2.133333rem;
            padding-left: .533333rem;
            padding-right: .533333rem;
            line-height: .48rem;
        }

    }
</style>

