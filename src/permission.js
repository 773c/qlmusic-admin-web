import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import {getToken} from '@/utils/auth'

//进度条样式
NProgress.inc(0.2)
NProgress.configure({easing: 'ease', speed: 300, showSpinner: false})

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.meta.isRequestData) {
      next()
    }else {
      NProgress.start()
      store.dispatch('GetInfo').then(() => {
        next()
      }).catch(error => {
        console.log(error);
      })
    }
  } else {
    console.log("getToken已过期");
    whiteList.indexOf(to.path) !== -1 ? next() : next('/login')
  }
})
router.afterEach(() => {
  NProgress.done()
})
