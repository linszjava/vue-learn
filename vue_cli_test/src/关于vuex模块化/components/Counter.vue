<template>
    <div>
        <h3>求和的结果是：{{ sum}}</h3>
        <!-- <h3>该学校 {{ $store.state.school }} 有一名学生 {{ $store.state.studentName }}</h3> -->
        <h3>该学校 {{ school }} 有一名学生 {{ studentName }}</h3>
        <!-- <h3>求和放大十倍的结果是：{{ $store.getters.bigSum}}</h3> -->
        <h3>求和放大十倍的结果是：{{ bigSum}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
        <h3>下方组件的人数是：{{ personList.length }}</h3>
    </div>
  
</template>

<script>

import { mapState, mapGetters, mapMutations,mapActions} from 'vuex'
export default {
    name: 'Counter',
    data(){
        return{
            n: 1
        }
    },
    computed:{
        ...mapState('getSumOptions',['sum','school','studentName']),
        ...mapState('personOptions',['personList']),
        ...mapGetters('getSumOptions',['bigSum'])

    },
    methods:{
       
        ...mapMutations('getSumOptions',{increment: 'Increment', decrement: 'Decrement'}),
        // *********************************************************************
       
        ...mapActions('getSumOptions',{incrementOdd:'incrementOdd',incrementWait:'incrementWait'})

        // 记住这个顺序很重要
        // dispatch-->Actions-->commit --->Mutations
    }

}
</script>

<style scoped>

button{
    margin-left: 5px;
}

</style>