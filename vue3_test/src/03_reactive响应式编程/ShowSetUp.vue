<template>
    <div>
        <h3>{{ person.name }}, {{ person.age }}, {{ person.job.type}} , {{  person.job.salary}}</h3>
        <button @click="changeInfo">点我修改信息</button>
        
    </div>
</template>

<script>
import { ref , reactive} from 'vue';
export default {
    name: 'ShowSetUp',
    setup() {

        //data 
        // let studentName = ref('林谦')
        // let studentAge = ref(18)
        // let job = ref({
        //     type: '全栈工程师',
        //     salary: '40K'
        // })

        const person = reactive({
            name: '林谦',
            age: 20,
            job: {
                type: '全栈工程师',
                salary: '40K'
            }
        })

        // function
        function changeInfo(){
            person.name = '王五',
            person.age = 33,
            person.job.type = '后端工程师'
        }

        return{
            person,
            changeInfo
        }


        
    }

    
};
</script>

<style lang="css" scoped>

</style>