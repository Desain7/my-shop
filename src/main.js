import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from './router'
import TypeNav from './pages/Home/TypeNav'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.component(TypeNav.name, TypeNav)
Vue.config.productionTip = false

import '@/mock/mockServe'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
