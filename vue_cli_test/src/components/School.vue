<template>
    <div class="demo">
        <h3 ref="r1">学校名称：{{name}}</h3>
        <h3>学校地址：{{addr}}</h3>
        <button @click="showDOM" ref="r2">点我显示上方的dom元素</button>
        <Student ref="r3"></Student>
        
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
    },
    methods:{
        showDOM(){
            console.log(this.$refs.r1);  // 使用ref可以获得html标签或者子组件
            console.log(this.$refs.r2);
            console.log(this.$refs.r3);
        }
    }
};
</script>

<style>
 .demo{
    background-color: aqua;
 }


</style>