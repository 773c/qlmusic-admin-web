import {login,getInfo,logout,test} from '@/api/login'
import {getToken,setToken,removeToken} from "@/utils/auth";

const user = {
  state:{
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },
  mutations:{
    SET_TOKEN:(state,token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions:{
    Login({commit},userInfo){
      const account = userInfo.account.trim()
      return new Promise((resolve , reject) => {
        login(account,userInfo.password).then(response => {
          console.log(response)
          //获取后台数据
          const data = response.data
          //保存到Cookie中
          setToken(data)
          //提交到mutations
          commit('SET_TOKEN',data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetInfo({commit}){
      return new Promise((resolve , reject) => {
        getInfo().then(response => {
          const data = response.data
          console.log(data);
          commit('SET_AVATAR',data.headIcon)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    Logout({commit}){
      return new Promise((resolve,reject) => {
        logout().then(() => {
          //因为removeToken()不能动态刷新数据，所以得手动清除state中的token
          commit('SET_TOKEN','')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    Test({commit}){
      return new Promise((resolve , reject) => {
        test().then(response =>{
          console.log(response);
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }

  },

}

export default user
