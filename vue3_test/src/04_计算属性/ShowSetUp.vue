<template>
    <div>
        姓：<input type="text" v-model="person.firstName"/>
        <br/>
        名：<input type="text" v-model="person.lastName"/>
        <br/>
        全名：<input type="text" placeholder="修改全名" v-model="person.fullName"/>
        <br/>
        <span>全名:{{  person.fullName }}</span>
    </div>
</template>

<script>
import {  reactive, computed} from 'vue';
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

        let person = reactive({
            firstName: '张',
            lastName: '三',
            age: 20,
            job: {
                type: '全栈工程师',
                salary: '40K'
            }
        })

        // 计算属性  简写形式
        // person.fullName = computed(()=>{
        //     return person.firstName + '-'+ person.lastName
        // })
        // 计算属性的完整写法
        person.fullName = computed({
            get(){
                return person.firstName + '-'+ person.lastName
            },
            set(value){
                console.log('计算属性fullName被修改为了',value);
                const nameArr = value.split('-')
                person.firstName = nameArr[0],
                person.lastName = nameArr[1]
            }
        })

        // function
        

        return{
            person
        }


        
    }

    
};
</script>

<style lang="css" scoped>

</style>