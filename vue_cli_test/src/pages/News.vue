<template>
    <div>
        <h3>我是新闻页面</h3>
        <h4>{{a}} -- {{b}}</h4>
        <h4 :style="{opacity}">我爱学习vue</h4>
        <ul>
            <li>新闻1</li><input type="text"/>
            <li>新闻2</li><input type="text"/>
            <li>新闻3</li><input type="text"/>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'News',

    data() {
        return {
            opacity: 1
            
        };
    },
    props:['a','b'],
    methods:{
        

    },

    mounted() {
        
        
    },
    //新的生命周期钩子
    activated(){
      this.timer =   setInterval(() => {
            this.opacity -= 0.1
            console.log('@');
            if(this.opacity <=0) this.opacity = 1
        }, 200);
    },
    deactivated(){
        clearInterval(this.timer)
    }
};
</script>

<style lang="css" scoped>

</style>