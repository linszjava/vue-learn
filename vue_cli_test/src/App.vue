<template>
  <div> 
    <Header></Header>
    <router-link active-class="active" to="/home">首页</router-link>  |
    <router-link active-class="active" to="/about">关于</router-link>

    <div>
      <router-view></router-view>
    </div>

    
   
  </div>
</template>

<script>


import Header from './components/Header.vue';
export default {
  components:  {Header},
  name: 'App',
  data() {
    return {

    };
  }

};
</script>

<style scoped>

</style>