<template>
  <scroll-bar>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#000000"
      text-color="#fff"
      active-text-color="#fe0000"
      :collapse="isCollapse"
    >
      <sidebar-item></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'

  export default {
    components: {
      SidebarItem,
      ScrollBar
    },
    data() {
      return {
        isCollapse: false,
      };
    },
    computed:{

    }

  }
</script>

<style scoped>
  /*.el-menu-vertical-demo{*/
  /*min-height: 720px;*/
  /*}*/
  /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
  /*min-height: 720px;*/
  /*}*/
</style>
