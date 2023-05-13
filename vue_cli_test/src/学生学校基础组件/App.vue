<template>
  <div>
    <!-- <h3>使用$ref 学生的名字是{{ refStudentName }}</h3> -->
    <!-- 把学校名给app -->
    <!-- 方法1 使用props加提前制定好的函数 -->
    <School :getSchoolName="getSchoolName"></School> 

     <!-- 方法2 -->
    <!-- 实现子组件向父组件的通信 this.$emit() 自定义组件的使用 -->
    <!-- <student  @getStudentName="getStudentName"></student> -->
    <!-- <prop-student name="李清照" :age="22" sex="女"></prop-student> <br/>
    <prop-student></prop-student> <br/>
    <prop-student></prop-student> -->
    <!-- 方法3 使用$ref -->
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

  }
    

  


};
</script>

<style scoped>

</style>