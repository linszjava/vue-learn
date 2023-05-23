export default {
    namespaced: true,
    actions:{
       
    },
    mutations:{

        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },
    state:{
       
        personList: [{id: 1001, name: '林谦'}]
    },
    getters:{
        
    }
}
