<template>
  <div id="app">
    <app-header></app-header>
    
    <main>
      <app-home></app-home>
    </main>

  </div>
</template>


<script>
import AppHeader from '@c/layout/AppHeader'
import AppHome from '@pages/home/AppHome'

export default {
    name: 'app',
    components: {
      AppHome,
      AppHeader
    }
}

</script>

<style lang="scss">

main {
  padding-top: 1.333333rem;
  
}


</style>
