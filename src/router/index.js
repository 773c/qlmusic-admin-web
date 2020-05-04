import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Layout = () => import('@/views/layout/Layout')
const Login = () => import('@/views/login/index')
const Home = () => import('@/views/home/index')
const Author = () => import('@/views/ams/author/index')
const AuthorCate = () => import('@/views/ams/authorCate/index')

const constantRouterMap = [
  {
    path:'/login',
    component: Login
  },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: Home,
      meta: {title: '首页', icon: 'home'}
    }]
  },
  {
    path:'/ams',
    component:Layout,
    meta:{title:"歌手",icon:'gs'},
    children:[
      {
        path:'author',
        component:Author,
        meta:{title:"歌手列表",icon:'gslb'}
      },
      {
        path:'addAuthor',
        component:AuthorCate,
        meta:{title:"添加歌手",icon:'tjgs'}
      },
      {
        path:'authorCate',
        component:AuthorCate,
        meta:{title:"歌手分类",icon:'gsfl'}
      }
    ]
  }
]

// export const asyncRouterMap = [
//   {
//     path:'/ams',
//     component:Layout,
//     redirect:'/ams/admin',
//     meta:{title:"测试",icon:'cs'},
//     children:[
//       {
//         path:'test',
//         component:Author,
//         meta:{title:"测试",icon:'cs'}
//       }
//     ]
//   }
// ]

const router = new VueRouter({
  routes:constantRouterMap,
  scrollBehavior:() => ({ y:0 })    //路由跳转后回到顶部
  // mode: 'history',   //后端支持可开
})

export default router
