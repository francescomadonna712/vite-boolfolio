<script >
import AppHeader from './components/AppHeader.vue';

export default {

  
  name: 'App',


  components: {
    AppHeader
  },

}
</script>

<template>

<div id="app">
    <AppHeader></AppHeader>
     <router-view></router-view>
  </div>
  
</template>

<style>

</style>
