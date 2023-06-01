<template>
    <div>
        <h4>{{ sum  }}</h4> 
        <button @click="sum++">点我sum++</button>
    </div>
</template>

<script>
import { ref, onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onMounted,onBeforeMount} from 'vue';
export default {
    name: 'ShowSetUp',
    setup() {

        // data
        let sum = ref(0)
        
        // 代替 beforeCreate Created
        console.log('-----setup'),

        onBeforeUpdate(() => {
            console.log('----------onBeforeUpdate');
        }),
        onUpdated(() => {
            console.log('-----------onUpdated');
        }),

        onBeforeMount(() => {
            console.log('----------onBeforeMount');
        }),
        onMounted(() => {
            console.log('----------onMounted');
        }),
        onBeforeUnmount(() => {
            console.log('----------onBeforeUnmount');
        }),

        onUnmounted(() => {
            console.log('----------onUnmounted');
        })




    



        // function
        

        return{
            sum
        }


        
    }

    
};
</script>

<style lang="css" scoped>

</style>