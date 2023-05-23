<template>
    <div>
       <router-link active-class="active" to="/home/news">新闻</router-link>  |
       <router-link active-class="active" to="/home/message">消息</router-link>
       <!-- 测试缓存路由 -->
       <keep-alive include="News">
        <router-view></router-view>
       </keep-alive>
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