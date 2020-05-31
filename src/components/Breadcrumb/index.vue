<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in routeList" :key="item.name">
      <router-link v-show="index!==routeList.length-1" :to="item.path">{{item.meta.title}}</router-link>
      <span v-show="index===routeList.length-1">{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        routeList:[]
      }
    },
    watch:{
      $route(to,from,next){
        this.getRouteList()
      }
    },
    methods:{
      getRouteList(){
        let matched = this.$route.matched.filter(item => item.name)
        let first = matched[0]
        //如果不是首页
        if(first.meta.title!=="首页"){
          first.path = matched[1].path
          matched = [{path:'/home',meta:{title:'首页'}}].concat(matched)
        }
        this.routeList = matched
      }
    },
    created(){
      this.getRouteList()
    }
  }
</script>

<style scoped>

</style>
