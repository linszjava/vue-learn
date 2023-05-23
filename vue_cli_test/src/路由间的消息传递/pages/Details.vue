<template>
    <div>
        <!-- 以下是query传参的一种写法 -->
        <!-- <h4>消息id:{{ this.$route.query.id  }}</h4>
        <h4>消息内容： {{  this.$route.query.title}}</h4> -->
        <!-- 以下是params传参的一种写法 -->
        <!-- <h4>消息id:{{ this.$route.params.id  }}</h4>
        <h4>消息内容： {{  this.$route.params.title}}</h4> -->
        <!-- 以下是路由中props传参的一种写法 -->
        <h4>消息id---props:{{ id  }}</h4>
        <h4>消息内容----props: {{  title}}</h4>
        
    </div>
</template>

<script>
export default {
    name: 'Details',

    data() {
        return {
            
        };
    },
    props:['id','title'],

    mounted() {
        // console.log(this.$route.query);
        console.log(this.$route.params);
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>