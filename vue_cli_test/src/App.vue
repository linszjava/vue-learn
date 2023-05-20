<template>
  <div> 
    <Counter/>
    <hr/>
    <person/>
  </div>
</template>

<script>

import Counter from './components/Counter.vue';
import Person from './components/Person.vue';
export default {
  components:  {Counter, Person},
  name: 'App',
  data() {
    return {

    };
  },
  methods:{
  },
  mounted(){

    // console.log(this);


  }
    

  


};
</script>

<style scoped>

</style>