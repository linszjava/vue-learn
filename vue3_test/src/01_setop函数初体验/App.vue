<template>
  <div>
    <h3>你好啊</h3>
    <show-set-up/>
  </div>
</template>

<script>
import ShowSetUp from './components/ShowSetUp.vue'

export default {
  name: 'App',
  components: {
    ShowSetUp
   
  }
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
