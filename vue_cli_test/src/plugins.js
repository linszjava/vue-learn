// 自定义vue里面的插件
export default {
    install(Vue){
        console.log(Vue);
    
    // 定义混入  全局设置 可以看到在任意一个组件中中都有x,y的值
    Vue.mixin({
        data() {
            return {
                x: 100,
                y: 200
            };
        }
    })
    }
}