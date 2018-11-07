
<template>
    <div class="app-home-film-box">

        <app-home-film-item
            v-for = "film in films"
            :key  = "film.id"
            :info = "film"
        ></app-home-film-item>

        <router-link tag = "div" :to = "{name:'films', params: {url: type.url}}" class="more-button" >更多{{type.title}}电影</router-link>
    </div>
</template>
<script>
 import AppHomeFilmItem from '@c/common/app-home/AppHomeFilmItem'
 export default {
     components:{
         AppHomeFilmItem
     },
     props: ['type'],
     data () {
         return {
             films: []
         }
     },
     async created () {
         let { url, count = 5 } = this.type
         let result = await this.$http({
            url: '/mz/v4/api/film/'+ url +'?page=1' ,
            params: {
                count
            }
         })
         this.films = result.films
     }
 }
    
</script>
<style lang="scss">
   .app-home-film-box {
       padding-top: .48rem;
       margin-bottom:.266667rem;

       .more-button {
            width: 4.266667rem;
            height: .8rem;
            border: 1px solid #aaa;
            border-radius: .4rem;
            margin: .266667rem auto .8rem;
            text-align: center;
            line-height: .8rem;
            font-size: .32rem;
            color: #616161;
            cursor: pointer;
       }
   }
</style>

