<template>
  <div id="app">
    <index></index>
    <router-view></router-view>
    <footerIndex v-show="this.$route.meta.footerShow"></footerIndex>
  </div>
</template>

<script>
import index from './components/Header/index.vue'
import footerIndex from './components/Footer/index.vue'

export default {
  name: 'App',
  components: {
    index,
    footerIndex
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
