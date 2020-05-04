import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

const state = {
  name: "cjj",
}

const store = new Vuex.Store({
  state,
  modules:{
    user,
    permission
  },
  getters
})

export default store
