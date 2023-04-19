<template>
  <div>
    <School></School> 
    <student></student>
    <!-- <prop-student name="李清照" :age="22" sex="女"></prop-student> <br/>
    <prop-student></prop-student> <br/>
    <prop-student></prop-student> -->
  </div>
</template>

<script>
import PropStudent from './components/PropStudent.vue';
import School from './components/School.vue';
import Student from './components/Student.vue';
export default {
  components: { School, PropStudent, Student },
  name: 'App',
  data() {
    return {
    
    
    };
  },
  


};
</script>

<style lang="scss" scoped>

</style>