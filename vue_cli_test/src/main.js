// 脚手架已引入
import Vue from 'vue'
// 引入App.vue文件
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// 新建一个vue实例
new Vue({
  render: h => h(App),
}).$mount('#app')

// .$mount('#app') 等同于  el: '#app'
