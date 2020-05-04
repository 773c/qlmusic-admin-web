<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <div class="menu-wrapper-button" @click="toggleSideBar()">
        <img src="@/assets/img/menu.png" width="24" height="24">
      </div>
    </el-radio-group>
    <el-dropdown class="avatar-container" >
      <div class="avatar-wrapper">
        <img class="user-avatar" >
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            首页
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="" style="display:block;">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        isCollapse: true
      };
    },
    methods:{
      toggleSideBar(){
        this.$store.dispatch("ToggleSideBar")
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 6px;
      position: relative;
      .user-avatar {
        width: 36px;
        height: 36px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
.menu-wrapper-button{
  margin: 14px;
}
</style>
