<template>
    <div class="demo">
        <h3 ref="r1">学校名称：{{name}}</h3>
        <h3>学校地址：{{addr}}</h3>
        <h3>该学校有一学生 :{{ studentName }}</h3>
        <!-- <button @click="showDOM" ref="r2">点我显示上方的dom元素</button> -->
        <!-- <Student ref="r3"></Student>       -->
        <!-- <button @click="showName">点我显示学校姓名</button> <br/>
        <button @click="sendSchoolName">把学校名给APP</button> -->
    

        
    </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import Student from '@/components/Student'
import { hunhe } from '@/mixin';
export default {
    name: 'School',


    props:['getSchoolName'],

    data() {
        return {
            name: '厦门大学',
            addr: '厦门',
            studentName: ''
            
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
        Pubsub.subscribe('PubsubStudentName',(_, data)=>{
            console.log('我是消息的订阅者,得到了发布者发布的消息如下',data);
            this.studentName = data
        })
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