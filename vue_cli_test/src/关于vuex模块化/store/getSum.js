export default  {
    namespaced: true,
    actions:{
        
        incrementOdd(context,value){
            if(context.state.sum % 2){
                context.commit('IncrementOdd',value)
            }
            
        },
        incrementWait(context,value){
           setTimeout(()=>{
            context.commit('IncrementWait',value)
           },400)
        }
    },
    mutations:{
        Increment(state,value){
            // console.log('mutations被调用了',state,value);
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
    },
    state:{
        sum: 0,
        school: '厦门大学',
        studentName: '林谦',
        
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}
