<template>
  <div>

    <School :getSchoolName="getSchoolName"></School> 
    <student ref="student"></student>

    
   
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
    }
  },
  mounted(){
    // 第一个参数是自定义的事件名
    this.$refs.student.$on('getStudentName' ,this.getStudentName)
    // 测试全局bus总线
    // console.log('得到的全局的mydata',this.mydata);

  }
    

  


};
</script>

<style scoped>

</style>