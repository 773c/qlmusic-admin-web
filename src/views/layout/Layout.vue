<template>
  <div class="app-wrapper" :class="classObj"> <!--:class="classObj"-->
    <sidebar class="sidebar-container" ></sidebar>
    <div class="main-container">
      <navbar class="narbar-container"></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import {AppMain, Navbar, Sidebar} from "./components"
  import ResizeMixin from './mixin/ResizeHandler'

  export default {
    name: "layout",
    components:{
      AppMain,
      Navbar,
      Sidebar
    },
    computed:{
      sidebar() {
        return this.$store.state.app.sidebar
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }

</style>

