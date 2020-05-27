<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in routeList" :key="item.path">
      <router-link :to="item.path">{{item.meta.title}}</router-link>
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
      $route(){
        this.getRouteList()
      }
    },
    methods:{
      getRouteList(){
        let matched = this.$route.matched.filter(item => item.name)
        let first = matched[0]
        //如果不是首页
        if(first.meta.title!=="首页"){
          console.log(matched[1]);
          first.path = matched[1].path
          matched = [{path:'/home',meta:{title:'首页'}}].concat(matched)
        }
        console.log(matched);
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
