<template>
    <div>
        <h3>{{ studentName }}, {{ studentAge }}, {{ job.type}} , {{  job.salary}}</h3>
        <button @click="sayHello">点我说你好</button>
        <button @click="changeInfo">点我修改信息</button>
        
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'ShowSetUp',
    setup() {

        //data 
        let studentName = ref('林谦')
        let studentAge = ref(18)
        let job = ref({
            type: '全栈工程师',
            salary: '40K'
        })

        // function
        function sayHello(){
            alert(`我是${studentName.value},我今年${studentAge.value}`)
        }
        function changeInfo(){
            studentName.value = '王五',
            studentAge.value = 20
            // console.log(studentName);
            job.value.type = '后端工程师',
            job.value.salary = '33K'
            console.log(job.value);
        }

        return{
            sayHello,
            studentAge,
            studentName,
            job,
            changeInfo
        }


        
    }

    
};
</script>

<style lang="css" scoped>

</style>