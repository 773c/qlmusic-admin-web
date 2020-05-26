<template>
  <div class="menu-wrapper">
    <router-link to="/">
      <el-menu-item index="/home">
        <div class="el-div">
          <svg-icon icon-class="home"></svg-icon>
          <span>首页</span>
        </div>
      </el-menu-item>
    </router-link>

    <el-submenu index="/ams">
      <template slot="title">
        <svg-icon icon-class="author"></svg-icon>
        <span>歌手</span>
      </template>
      <router-link to="/ams/author">
        <el-menu-item index="/ams/author">
          <svg-icon icon-class="authorlist"></svg-icon>
          <span>歌手列表</span>
        </el-menu-item>
      </router-link>
      <router-link to="/ams/addAuthor">
        <el-menu-item index="/ams/addAuthor">
          <svg-icon icon-class="add"></svg-icon>
          <span>添加歌手</span>
        </el-menu-item>
      </router-link>
      <router-link to="/ams/authorCate">
        <el-menu-item index="/ams/authorCate">
          <svg-icon icon-class="category"></svg-icon>
          <span>歌手分类</span>
        </el-menu-item>
      </router-link>
      <router-link to="/">
        <el-menu-item index="2-4">选项4</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <svg-icon icon-class="music"></svg-icon>
        <span>歌曲</span>
      </template>

      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
      <el-menu-item index="3-4">选项4</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <svg-icon icon-class="songlist"></svg-icon>
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
    name: "SidebarItem",
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
