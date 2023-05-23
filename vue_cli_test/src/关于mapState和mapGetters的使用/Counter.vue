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
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
  
</template>

<script>

import { mapState, mapGetters} from 'vuex'
export default {
    name: 'Counter',
    data(){
        return{
            n: 1
        }
    },
    computed:{
        ...mapState(['sum','school','studentName']),
        ...mapGetters(['bigSum'])

    },
    methods:{
        increment(){
            // this.$store.dispatch('increment',this.n)
            // 如果actions没有什么操作，那么就直接省略跳过 直接进行mutations
            this.$store.commit('Increment',this.n)
           
        },
        decrement(){
            this.$store.dispatch('decrement',this.n)
            
        },
        incrementOdd(){         
                this.$store.dispatch('incrementOdd',this.n)
           
        },
        incrementWait(){
                this.$store.dispatch('incrementWait',this.n)
  
        }
    }

}
</script>

<style scoped>

button{
    margin-left: 5px;
}

</style>