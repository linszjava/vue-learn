<template>
    <div>
        <h4>{{ sum  }}</h4> 
        <h4>{{ aName }}</h4>
        <button @click="sum++">点我sum++</button>
       
       <button @click="aName +='!'">点我修改名字的信息</button>
       <h4>{{ person.name }}, {{ person.age }}</h4>
       <button @click="person.name += '~'">点我修改person中的名字</button>
       <button @click="person.age++">点我修改person中的年龄</button>
       <h4>{{ person.job.work.gongzi }}K</h4>
       <button @click="person.job.work.gongzi++">点我修改多层次的工资的值</button>
    </div>
</template>

<script>
import {  reactive, ref, watchEffect} from 'vue';
export default {
    name: 'ShowSetUp',
    setup() {

        // data
        let sum = ref(0)
        let aName = ref('张三')
        let person = reactive({
            name: '林谦',
            age: 20,
            job: {
                type: '全栈工程师',
                salary: '40K',
                work:{
                    todo: '运维工程师',
                    gongzi: '30'
                }
            }
        })

        // watchEffect不关心是监视哪一个属性 
        watchEffect(()=>{
            const x1 = sum.value
            console.log('watchEffect被调用了');
        })



        // function
        

        return{
            sum,
            aName,
            person
        }


        
    }

    
};
</script>

<style lang="css" scoped>

</style>