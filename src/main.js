import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss'

import '@/icons'
import '@/permission'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI, { locale })

//true会提示此时为开发模式，false则会关闭这个提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
