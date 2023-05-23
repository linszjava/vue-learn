// 脚手架已引入
import Vue from 'vue'
// 引入App.vue文件
import App from './App.vue'

import plugins from './plugins'

import store from './store'

import VueRouter from 'vue-router'

import router from './router'

// 使用vue插件
Vue.use(plugins)

Vue.use(VueRouter)

// 关闭生产提示
Vue.config.productionTip = false

// Vue.prototype.mydata = {x:1,y:2}

// 新建一个vue实例
new Vue({
  el: '#app',
  render: h => h(App),  // 该行存在的意义 在第2行引入的vue是不完整的vue.**.esm.js，所以需要render加以渲染模版
                        // 为什么这么做？ 为了轻 ！
  store,
  router: router,
  
  beforeCreate(){
    // 绑定全局事件总线
    Vue.prototype.$bus = this
  }
})

// .$mount('#app') 等同于  el: '#app'
