<template>
    <div>
        <h2>我是一个标题</h2>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
    </div>
</template>

<script>
export default {
    name: 'Header',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        back(){
            this.$router.back();
        },
        forward(){
            this.$router.forward();

        }
    },
};
</script>

<style lang="scss" scoped>

</style>