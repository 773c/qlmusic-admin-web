<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <div class="menu-wrapper-button" @click="toggleSideBar()">
        <img src="@/assets/img/menu.png" :class="isHideSidebar" width="28" height="28"/>
      </div>
      <breadcrumb class="breadcrumb"></breadcrumb>
    </el-radio-group>


    <!--用户-->
    <el-dropdown class="avatar-container">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar">
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
  import Breadcrumb from '@/components/Breadcrumb'
  import {mapGetters} from 'vuex'

  export default {
    name: "Navbar",
    components: {
      Breadcrumb
    },
    data() {
      return {
        isCollapse: true,
      };
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar'
      ]),
      isHideSidebar() {
        return {
          rotateMenu: !this.sidebar.opened
        }
      }
    },
    methods: {
      toggleSideBar() {
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

  .menu-wrapper-button {
    margin: 11px 15px 11px 10px;
    cursor: pointer;
    float: left;
  }

  .breadcrumb {
    float: left;
    margin-top: 20px;
  }
</style>
