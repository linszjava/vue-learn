<template>
    <div class="demo">
        <h3>学生姓名:{{ name }}</h3>
        <h3>学生年龄:{{ age }}</h3>
        <!-- <button @click="transferStudentNameToSchool">点我把姓名传递给学校组件</button>  -->
    </div>
</template>

<script>
import { hunhe } from '@/mixin';
import Pubsub from 'pubsub-js';
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
        transferStudentNameToSchool(){

        }
    },
    mounted(){
        Pubsub.publish('PubsubStudentName',this.name)
    }
    

};
</script>

<style scoped>
 .demo{
    background-color:orange;
 }
</style>

