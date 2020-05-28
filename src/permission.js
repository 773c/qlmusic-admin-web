import router from "./router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import {getToken} from '@/utils/auth'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 300, showSpinner: false })

const whiteList = ['/login']
router.beforeEach((to,from,next) => {
  NProgress.start()
  if(getToken()){
    store.dispatch('GetInfo').then(() => {
      next()
    }).catch(error => {
      console.log(error);
    })
  }else {
    console.log("getToken已过期");
    whiteList.indexOf(to.path)!==-1?next():next('/login')
  }
})
router.afterEach(() => {
  NProgress.done()
})
