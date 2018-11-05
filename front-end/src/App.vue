<template>
  <div id="app">
    <header-layout></header-layout>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>

import headerLayout from '@/components/headerLayout.vue'

export default {
  name: 'home',
  components: {
    headerLayout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  width: 750px;
}
</style>
