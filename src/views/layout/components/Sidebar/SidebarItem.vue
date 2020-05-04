<template>
  <div class="menu-wrapper">
    <router-link to="/">
      <el-menu-item index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
    </router-link>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>歌手</span>
      </template>

      <router-link to="/ams/author">
        <el-menu-item index="2-1">歌手列表</el-menu-item>
      </router-link>
      <router-link to="/ams/addAuthor">
        <el-menu-item index="2-2">添加歌手</el-menu-item>
      </router-link>
      <router-link to="/ams/authorCate">
        <el-menu-item index="2-3">歌手分类</el-menu-item>
      </router-link>
      <router-link to="/">
        <el-menu-item index="2-4">选项4</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-service"></i>
        <span>歌曲</span>
      </template>

      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
      <el-menu-item index="3-4">选项4</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-news"></i>
        <span>歌单</span>
      </template>
      <el-menu-item index="4-1">选项1</el-menu-item>
      <el-menu-item index="4-2">选项2</el-menu-item>
      <el-menu-item index="4-3">选项3</el-menu-item>
      <el-menu-item index="4-4">选项4</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
  export default {
    name: "SidebarItem"
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
