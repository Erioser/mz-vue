
<template>
    <div @click="goToDetail" class="app-home-film-item">
        <div class="img-box">
            <img width="100%" :src="info.cover.origin" alt="">
        </div>
        <div class="film-info">
            <div class="left">
                <p class="title">{{info.name}}</p>
                <p class="count" v-if = "info.isNowPlaying">{{info.cinemaCount}}家影院上映，{{info.watchCount}}人购票</p>
            </div>
            <div class="right">
                <p class="grade" v-if = "info.isNowPlaying">{{info.grade}}</p>
                <p class="time" v-else >{{info.premiereAt | premiere}}</p>
            </div>
        </div>
       
    </div>
</template>

<script>   
 export default {
     props: ['info'],
    //  computed: {
    //      time () {
    //          return new Date(this.info.premiereAt).getMonth() + 1
    //      }
    //  }
    methods: {
      goToDetail () {
        //   this.$router.push({ name: 'detail', params: { id: this.info.id } })
          this.$router.push({ name: 'detail',params: {id: this.info.id}, query: {  name: this.info.name } })
      }  
    }
 } 
</script>
<style lang="scss">
   .app-home-film-item {
       margin: .453333rem;
       margin-top: 0;
        background: #fff;
        .img-box {
            width: 9.093333rem;
            height: 5.114933rem;
        }

        .film-info {
            padding: .32rem;
            padding-bottom: .266667rem;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            .left {
                
                color: #9a9a9a;
                .title {
                    color: #333;
                }
            }

            .right {
                color: #f78360;
                .grade {
                    font-size: 18px;
                }
                .time {
                    width: 2.655653rem;
                }
            }

        }
   }
</style>

