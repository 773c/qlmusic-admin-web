<template>
  <scroll-bar>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#555555"
      text-color="#fff"
      active-text-color="#fe0000"
      :collapse="isCollapse"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'

  export default {
    components: {
      SidebarItem,
      ScrollBar
    },
    data() {
      return {

      };
    },
    computed:{
      ...mapGetters([
        'sidebar',
      ]),
      routes() {
        return this.$router.options.routes
      },
      isCollapse(){
        return !this.sidebar.opened
      }
    }

  }
</script>

<style scoped>

</style>
