<!--
 * @Author: 455886774@qq.com lu123456
 * @Date: 2022-11-18 10:18:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-18 17:18:29
 * @Description: 布局页面
-->
<template>
  <div class="layout">
    <SideBar
      class="sideBar"
    ></SideBar>
    <div :class="isCollapse ? 'right2' : 'right1'">
      <Breadcrumb></Breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "@/components/Sidebar/index.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import useSidebarStore from "@/store/modules/sidebar.ts";

const sidebarStore = useSidebarStore();
const isCollapse = computed(() => sidebarStore.isCollapse);
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  .sideBar {
    // position: fixed; //根据视口来设置高度100%
    // top: 0;
    // left: 0;
    background-color: #304156;
    height: 100vh;
    // overflow: hidden;
    // transition: width 0.05s;
  }
}

.right1 {
  // width: calc(100% - 200px); //减去侧边栏宽度
  // height: 100%;
  // margin-left: 200px;
  // transition: all 0.05s;
}
.right2 {
  // width: calc(100% - 64px); //减去侧边栏宽度
  // height: 100%;
  // margin-left: 64px;
  // transition: all 0.05s;
}
</style>
