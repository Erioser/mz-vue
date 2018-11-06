<template>
  <div id="app">
    <app-header></app-header>
    
    <main>
      <router-view></router-view>
    </main>

  </div>
</template>


<script>
import AppHeader from '@c/layout/AppHeader'

export default {
    name: 'app',
    components: {
      AppHeader
    }
}

</script>

<style lang="scss">

main {
  padding-top: 1.333333rem;
  
}


</style>
