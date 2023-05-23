import VueRouter from "vue-router";



import About from '@/pages/About'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Message from '@/pages/Message'
import Details from '@/pages/Details'

export default new VueRouter({
    routes:[
        {
            name: 'guanyu', // 路由命名，使用见home
            path:'/about',
            component: About
        },
        {
            name: 'shouye',
            path: '/home',
            component: Home,
            children:[
                {
                    path: 'news',
                    component: News,
                    // 写法一 对象 见News页面
                    props: {a:1 ,b:' hello'}
                    
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name: 'xiangqing',
                            path: 'details',
                            component: Details,
                            // 写法二 布尔值 只适配params
                            // props: true
                            // 写法三 函数写法
                            props(route){
                                return {
                                    id: route.query.id,
                                    title: route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})