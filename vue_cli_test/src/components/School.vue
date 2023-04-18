<template>
    <div class="demo">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{addr}}</h3>
        <Student></Student>
        
    </div>
</template>

<script>
import Student from '@/components/Student'
export default {
    name: 'School',

    data() {
        return {
            name: '厦门大学',
            addr: '厦门'
            
        };
    },
    components:{
        Student
    }
};
</script>

<style>
 .demo{
    background-color: aqua;
 }


</style>