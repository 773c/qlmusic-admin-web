import {login,test} from '@/api/login'
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
    Login(context,userInfo){
      const account = userInfo.account.trim()
      return new Promise((resolve , reject) => {
        login(account,userInfo.password).then(response => {
          console.log(response);
          //获取后台数据
          const data = response.data;
          console.log("保存token到Cookie中。。。"+data);
          //保存到Cookie中
          setToken(data)
          //提交到mutations
          context.commit('SET_TOKEN',data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    Test(context){
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
