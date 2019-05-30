import Vue from 'vue'
import App from './App.vue'
// 导入组件
import goto from './components/Goto.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
