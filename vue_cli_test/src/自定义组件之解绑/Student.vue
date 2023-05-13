<template>
    <div class="demo">
        <h3>学生姓名:{{ name }}</h3>
        <h3>学生年龄:{{ age }}</h3>
        <h3>自定义变量n: {{ n }}</h3>
        <!-- <button @click="showName">点我显示学生姓名</button>
        
         -->
         <button @click="addN">点我n++</button>
         <button @click="sonSendStudentName">点我把学生名给APP</button>
         <button @click="unbindCustomComp">解绑自定义组件</button>
         <button @click="killMyself">自杀自身VC</button>
    </div>
</template>

<script>
import { hunhe } from '@/mixin';
export default {
    name: 'Student',

    data() {
        return {
            name: 'linsz',
            age: 18,
            n: 10
        };
    },
    mixins:[hunhe],
    methods:{
        addN(){
            console.log('addN被调用了');
            return this.n++
        },
        showStudentName(){
            this.$emit('getStudentName',this.name)
        },
        sonSendStudentName(){
            this.$emit('getStudentNameFromSon', this.name, 66,77, 88)
            this.$emit('test')
        },
        unbindCustomComp(){
            // 使用 this.$off()解绑自定义组件通信
            this.$off('getStudentNameFromSon');
            // this.$off() 参数为空就表示解绑所有的自定义组件通信
        },
        killMyself(){
            this.$destroy()
        }
    }
    

};
</script>

<style scoped>
 .demo{
    background-color:orange;
 }
</style>

