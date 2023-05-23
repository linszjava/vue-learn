// 引入vue核心库
import Vue  from "vue";
// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    // increment(context,value){
    //     console.log('actions被调用了',context,value);
    //     context.commit('Increment',value)
    // },
    decrement(context,value){
        context.commit('Decrement',value)
    },
    incrementOdd(context,value){
        if(state.sum % 2){
            context.commit('IncrementOdd',value)
        }
        
    },
    incrementWait(context,value){
       setTimeout(()=>{
        context.commit('IncrementWait',value)
       },400)
    }
}

const mutations = {
    Increment(state,value){
        console.log('mutations被调用了',state,value);
        state.sum += value 
    },
    Decrement(state,value){
        state.sum -= value
    },
    IncrementOdd(state,value){
        state.sum += value
    },
    IncrementWait(state,value){
        state.sum += value
    }

}
const getters = {
    bigSum(){
        return state.sum * 10
    }
}

const state = {
    sum: 0,
    school: '厦门大学',
    studentName: '林谦'
}


export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})