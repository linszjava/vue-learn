<template>
  <div>
    <input type="text" placeholder="请输入一个名字" v-model="personName"/>
    <button @click="addPerson">添加</button>
    <ul v-for= "p in personList" :key="p.id" >
        <li>{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import {mapState} from 'vuex'
export default {

    data() {
        return {
            personName: ''
            
        };
    },
    computed:{
        ...mapState('personOptions',['personList'])
    },
    methods:{
        addPerson(){
            const personObj = { id: nanoid(), name: this.personName}
            console.log(personObj);
            this.$store.commit('personOptions/ADD_PERSON',personObj)
            this.personName = ''
        }
    }

}
</script>

<style>

</style>