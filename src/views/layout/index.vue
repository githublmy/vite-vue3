<!--
 * @Author: 455886774@qq.com lu123456
 * @Date: 2022-11-18 10:18:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-18 14:22:30
 * @Description: 布局页面
-->
<template>
  <div>
    <SideBar class="sideBar"></SideBar>
    <div class="right">
      <Breadcrumb></Breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "@/components/Sidebar/index.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.sideBar {
  height: 100%;
  // width: 200px;
  position: fixed; //根据视口来设置高度100%
  background-color: #304156;
}
.right {
  width: calc(100% - $base-sidebar-width); //减去侧边栏宽度
  height: 100%;
  margin-left: 200px;
}
</style>
