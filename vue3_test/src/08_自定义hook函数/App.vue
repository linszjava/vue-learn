<template>
  <div>
    <h3>你好啊</h3>
    <button @click="isShow = !isShow">点我显示或者隐藏操作</button>
    <show-set-up v-if="isShow"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import ShowSetUp from './components/ShowSetUp.vue'

export default {
  name: 'App',
  components: {
    ShowSetUp,
  },
  setup() {
      
      //data
      const isShow = ref(true) 


    




      return{
        isShow,
      } 
    },
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
