<template>
    <section class="app-home">
        <app-home-banner></app-home-banner>
        <app-home-film-box
            v-for = "type in film_types"
            :key  = "type.id"
            :type = "type"
        ></app-home-film-box>
    </section>
</template>

<script>
import AppHomeBanner from '@c/common/app-home/AppHomeBanner'
import AppHomeFilmBox from '@c/common/app-home/AppHomeFilmBox'
export default {
    data () {
        return {
            film_types: [
                { id: 1, url: 'now-playing', title: '热映',  },
                { id: 2, url: 'coming-soon', title: '即将上映', count: 3 }
            ]
        }
    },
    components: {
        AppHomeBanner,
        AppHomeFilmBox
    },
    beforeRouteLeave (to, from ,next) {
        localStorage.position  = JSON.stringify({x: 0, y: 300})
        next()
    }
}
</script>

<style lang="scss" >
    .app-home-banner {

    }
</style>

