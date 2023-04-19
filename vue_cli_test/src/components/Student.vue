<template>
    <div>
        <h3>学生姓名:{{ name }}</h3>
        <h3>学生年龄:{{ age }}</h3>
        <button @click="showName">点我显示学生姓名</button>
        
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
    mixins:[hunhe]
    

};
</script>

