import {constantRouterMap,asyncRouterMap} from "../../router";

const permission = {
  state: {
    routers: asyncRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  // actions: {
  //       const accessedRouters = asyncRouterMap.filter(v => {
  //         //admin帐号直接返回所有菜单
  //         // if(username==='admin') return true;
  //         if (hasPermission(menus, v)) {
  //           if (v.children && v.children.length > 0) {
  //             v.children = v.children.filter(child => {
  //               if (hasPermission(menus, child)) {
  //                 return child
  //               }
  //               return false;
  //             });
  //             return v
  //           } else {
  //             return v
  //           }
  //         }
  //         return false;
  //       }
  //       //对菜单进行排序
  //       // sortRouters(accessedRouters);
  //       commit('SET_ROUTERS', accessedRouters);
  //   }
};

export default permission;
