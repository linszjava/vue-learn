import VueRouter from "vue-router";



import About from '@/pages/About'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Message from '@/pages/Message'
import Details from '@/pages/Details'

 const router =  new VueRouter({
    mode: "history",
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
                    props: {a:1 ,b:' hello'},
                    meta:{isAuth:true,title:'新闻'},
                    // 独享路由
                    beforeEnter:(to,from,next)=>{
                        console.log('beforeEnter--------');
                        if(to.meta.isAuth){
                            // 表示需要鉴权
                            if(localStorage.getItem('name') === 'linsz'){
                                // 如果用户名是linsz 则放行
                                next()
                            }else{
                                alert('您没有权限，请联系管理员')
                            }
                        }else{
                            // 无需鉴权 直接放行
                            next()
                        }
                    }
                    
                    
                },
                {
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true,title:'消息'},
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

// 全局前置和后置路由守卫
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        // 表示需要鉴权
        if(localStorage.getItem('name') === 'linsz'){
            // 如果用户名是linsz 则放行
            next()
        }else{
            alert('您没有权限，请联系管理员')
        }
    }else{
        // 无需鉴权 直接放行
        next()
    }

})
// 全局后置守卫 初始化和每一次路由切换后会调用
router.afterEach((to,from)=>{
    console.log(to,from);
    document.title = to.meta.title || '测试系统'

})

export default router