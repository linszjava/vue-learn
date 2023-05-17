import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    // 安装全局消息总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
