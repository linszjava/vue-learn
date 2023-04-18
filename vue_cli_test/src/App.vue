<template>
  <div>
    <!-- <School></School> --> 
    <prop-student name="李清照" :age="22" sex="女"></prop-student> <br/>
    <prop-student></prop-student> <br/>
    <prop-student></prop-student>
  </div>
</template>

<script>
import PropStudent from './components/PropStudent.vue';
import School from './components/School.vue';
export default {
  components: { School, PropStudent },
  name: 'App',
  data() {
    return {
    
    
    };
  },
  


};
</script>

<style lang="scss" scoped>

</style>