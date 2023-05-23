<template>
    <div>
       <router-link active-class="active" to="/home/news">新闻</router-link>  |
       <router-link active-class="active" to="/home/message">消息</router-link>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'SecondPagesForHome',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>