<!--
 * @Author: 455886774@qq.com lu123456
 * @Date: 2022-11-18 10:18:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-24 17:33:36
 * @Description: 布局页面
-->
<template>
  <div class="layout">
    <SideBar class="sideBar"></SideBar>
    <div class="right">
      <Breadcrumb></Breadcrumb>
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear">
          <component :is="Component" />
        </transition>
      </router-view>
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
    // position: fixed;
    background-color: #304156;
    // height: 100vh;
  }
  .right {
    flex: 1;
    width: 100%;
  }
}
</style>
