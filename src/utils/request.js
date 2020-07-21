/**
 * 封装网络请求
 */
import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
import {getToken} from './auth'
import NProgress from 'nprogress'

//创建axios实例
const service = axios.create({
  baseURL: 'http://localhost',
  timeout: 15000
})
//开启请求头header的Cookie，能保证session和cookie保持一致（用户开发时期的测试）
// axios.defaults.withCredentials=true

//请求拦截
service.interceptors.request.use(config => {
  //出现进度条
  NProgress.start()
  // console.log("请求拦截store中的token：" + store.getters.token);
  console.log("请求拦截Cookie中的token：" + getToken());
  if (store.getters.token) {
    //在Header设置名为Authorization的token
    config.headers.Authorization = getToken()
  }
  return config;
}, error => {
  console.log(error);
})

//响应拦截
service.interceptors.response.use(response => {
  //隐藏进度条
  NProgress.done()
  const data = response.data
  if (data.statusCode !== 200) {
    Message({
      message: data.message,
      type: 'error',
      center: true,
      offset: 70,
      duration: 2 * 1000
    })
    return Promise.reject('error')
  } else {
    return data;
  }
}, error => {
  console.log(error);
})

export default service
