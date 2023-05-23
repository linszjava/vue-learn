<template>
    <div>
        <h3>我是message页面</h3>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <router-link active-class="active" 
                :to="{
                    // 路由命名的用法
                    // path: '/home/message/details',
                    name: 'xiangqing',  
                    query: {
                        id: m.id,
                        title: m.title
                    }
                    // params: {
                    //     id: m.id,
                    //     title: m.title
                    // }
                }"
                >{{ m.id }} -- {{ m.title }} </router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
                
            </li>
            <router-view></router-view>
        </ul>
        
    </div>
</template>

<script>
export default {
    name: 'Message',

    data() {
        return {
            messageList:[
                {id: 1001, title: '消息001'},
                {id: 1002, title: '消息002'},
                {id: 1003, title: '消息003'}
            ]
            
        };
    },

    mounted() {
        
    },

    methods: {
        pushShow(m){
            this.$router.push({
                name: 'xiangqing',  
                    query: {
                        id: m.id,
                        title: m.title
                    }

            })

        },
        replaceShow(m){
            this.$router.replace({
                name: 'xiangqing',  
                query: {
                    id: m.id,
                    title: m.title
                }

            })

        }
        
    },
};
</script>

<style lang="css" scoped>

button{
    margin-left: 5px;
    margin-bottom: 3px;
}

</style>