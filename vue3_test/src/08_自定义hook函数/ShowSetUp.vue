<template>
    <div>
        <h4>{{ sum  }}</h4> 
        <button @click="sum++">点我sum++</button>
        <hr/>
        <h4>显示鼠标的坐标 x:{{ point.x }},y: {{ point.y }}</h4>

    </div>
</template>

<script>
import getPoint from '@/hooks/usePoint'
import { ref, reactive} from 'vue';
export default {
    name: 'ShowSetUp',
    setup() {

        // data
        let sum = ref(0)
        let point = getPoint()

        // function
        

        return{
            sum,
            point
        }


        
    }

    
};
</script>

<style lang="css" scoped>

</style>