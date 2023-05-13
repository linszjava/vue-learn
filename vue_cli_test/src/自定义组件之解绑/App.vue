<template>
  <div>
    <h3>APP收到了学生的姓名是:{{ studentName }}</h3>
    <!-- 实现子给父传递消息  $emit  -->
    <School @getSchoolNameFromSon="getSchoolNameFromSon"></School>
    <student @getStudentNameFromSon="getStudentNameFromSon" @test="testCustomComp"></student> 
    <!-- <student ref="student"></student> -->

    
   
  </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';
export default {
  components: { School, Student },
  name: 'App',
  data() {
    return {
      schoolName:'',
      studentName: '',
      refStudentName: ''
    
    
    };
  },
  methods:{
    getSchoolName(value){
      // console.log('从app得到了学校名',value);
      this.schoolName = value
    },
    getStudentName(value){
      // console.log('使用$emit得到了学生名',value );
      this.studentName = value
    },

    // 作为父亲的那一方  只需要接收消息即可   ...params为es6写法，类比java
    getSchoolNameFromSon(schoolName, ...params){
      console.log('APP收到了儿子的消息了，内容为',schoolName, params);
    },
    getStudentNameFromSon(studentName, ...params){
      console.log('APP收到了儿子使用$emit传递过来的消息',studentName, params);
      

    },
    testCustomComp(){
      console.log('测试自定义组件通信被调用了');
    }
  },
  mounted(){
    // 第一个参数是自定义的事件名
    // this.$refs.student.$on('getStudentName' ,this.getStudentName)

  }
    

  


};
</script>

<style scoped>

</style>