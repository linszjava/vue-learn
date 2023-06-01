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
import {  reactive, ref, watch} from 'vue';
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

        // watch
        // 情况一 watch监听某一个ref基本类型 
        // watch(sum, (newValue, oldValue)=>{
        //     console.log('watch监听sum发生了改变',newValue,oldValue);
        // })

        // 情况二 监听多个ref基本类型 每个newValue或者oldValue都是以数组的形式展开
        // watch([sum,aName], (newValue, oldValue)=>{
        //     console.log('watch监听sum或者aName发生了改变',newValue,oldValue);
        // })

        // 情况三 监听一个reactive的对象  oldValue失效
        // watch(person,(newValue,oldValue)=>{
        //     console.log('person中的name属性发生了变化',newValue,oldValue);
        // })

        // 情况四 监听一个reactive的对象的某几个属性  oldValue和newValue均能使用
        // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        //     console.log('person中的name和age均发生了改变',newValue,oldValue);
        // })

        // 情况五 监听一个对象中的一个属性 
        // watch(()=>person.age,(newValue,oldValue)=>{
        //     console.log('person中的name和age均发生了改变',newValue,oldValue);
        // })

        // 情况六 监听一个对象中的某一个属性时  深度监视失效
        // watch(person,(newValue,oldValue)=>{
        //     console.log('person中的age均发生了改变',newValue,oldValue);
        // },{immediate:true,deep:true})

        // 情况七 监听一个对象中的某一个属性时  深度监视有效
        watch(()=>person.job,(newValue,oldValue)=>{
            console.log('person中的job.work.gongzi均发生了改变',newValue,oldValue);
        },{immediate:true,deep:true})



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