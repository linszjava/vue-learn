<template>
    <div class="demo">
        <h3 ref="r1">学校名称：{{name}}</h3>
        <h3>学校地址：{{addr}}</h3>
        <h3>该校有一学生的名字是:{{ aStudentName }}</h3>
        <!-- <button @click="showDOM" ref="r2">点我显示上方的dom元素</button> -->
        <!-- <Student ref="r3"></Student>       -->
        <!-- <button @click="showName">点我显示学校姓名</button> <br/>
        <button @click="sendSchoolName">把学校名给APP</button> -->
    

        
    </div>
</template>

<script>
import Student from '@/components/Student'
import { hunhe } from '@/mixin';
export default {
    name: 'School',

    props:['getSchoolName'],

    data() {
        return {
            name: '厦门大学',
            addr: '厦门',
            aStudentName:''
            
        };
    },
    components:{
        Student
    },
    methods:{
        showDOM(){
            console.log(this.$refs.r1);  // 使用ref可以获得html标签或者子组件
            console.log(this.$refs.r2);
            console.log(this.$refs.r3);
        },
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    },
    mounted(){
        this.$bus.$on('sendStudentNameToBro',(studentName)=>{
            console.log('我接收到了兄弟组件student发送过来的数据',studentName)
            this.aStudentName = studentName
        
        })
    },
    beforeDestroy(){
        this.$bus.$off('sendStudentNameToBro')
    },

    mixins:[hunhe]
};
</script>

<style>
 .demo{
    background-color: aqua;
 }
 button{
    margin-top: 10px;
 }


</style>