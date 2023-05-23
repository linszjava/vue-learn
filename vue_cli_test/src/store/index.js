// 引入vue核心库
import Vue  from "vue";
// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

import getSum from '@/store/getSum'
import personOptions from '@/store/person'

export default new Vuex.Store({
   modules:{
    getSumOptions: getSum,
    personOptions: personOptions
   }
})