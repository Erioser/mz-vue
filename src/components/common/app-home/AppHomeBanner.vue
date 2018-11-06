
<template>
    <div class="app-home-swiper">
        <swiper v-if = "billboards.length" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide
                v-for = "billboard in billboards"
                :key  = "billboard.id"
            >
            
                <img width="100%" :src="billboard.imageUrl" :title= "billboard.name" :alt="billboard.name">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
    
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
              el: '.swiper-pagination'
          },
          loop: true, 
          autoplay: true
        },
        billboards: []
      }
    },
    beforeCreate () {
        this.$http({
            url: '/mz/v4/api/billboard/home?__t=1541468153894',
            react: false
        }).then(result => {
            this.billboards = result.billboards
        })
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    }, 
    mounted() {
        // current swiper instance
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        //   console.log('this is current swiper instance object', this.swiper)
        //   this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="scss">
    .app-home-swiper {
        height: 5.625067rem!important;
    }
</style>

