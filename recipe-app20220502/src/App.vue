<template>
  <div>
    <Header class="header fixed-top"></Header>
    <!-- <hr> -->
    <router-view class="router" :key="$route.path"></router-view>
    <!-- <hr> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue'
import Footer from './components/FooterComp.vue'

export default {
  name: 'App',
  
  components: {
    Header,
    Footer,
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 75px;
}
.header{
  height: 75px;
}
</style>
