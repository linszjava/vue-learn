<template>
    <div class="demo">
        <h3>学生姓名:{{ name }}</h3>
        <h3>学生年龄:{{ age }}</h3>
        <!-- <button @click="showName">点我显示学生姓名</button>
        <button @click="showStudentName">点我把学生名给APP</button>
         -->
         <button @click="sendStudentNameToSchool">点我把学生名发给兄弟组件school</button>
    </div>
</template>

<script>
import { hunhe } from '@/mixin';
export default {
    name: 'Student',

    data() {
        return {
            name: 'linsz',
            age: 18
        };
    },
    mixins:[hunhe],
    methods:{
        showStudentName(){
            this.$emit('getStudentName',this.name)
        },
        sendStudentNameToSchool(){
            this.$bus.$emit('sendStudentNameToBro',this.name)
        }
    }
    

};
</script>

<style scoped>
 .demo{
    background-color:orange;
 }
</style>

