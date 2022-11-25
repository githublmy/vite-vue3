<!--
 * @Author: 455886774@qq.com lu123456
 * @Date: 2022-11-18 10:18:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-25 10:58:03
 * @Description: 布局页面
-->
<template>
  <el-container style="height: 100vh" class="layout-container-demo">
    <el-aside :style="{ width: !isCollapse ? '200px' : '64px' }">
      <el-scrollbar>
        <SideBar class="sideBar"></SideBar>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header>
        <Breadcrumb></Breadcrumb>
      </el-header>
      <el-main>
        <el-scrollbar>
          <router-view v-slot="{ Component }">
            <transition name="el-fade-in-linear">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import SideBar from "@/components/Sidebar/index.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import useSidebarStore from "@/store/modules/sidebar.ts";

const sidebarStore = useSidebarStore();
const isCollapse = computed(() => sidebarStore.isCollapse);
</script>

<style lang="scss" scoped>
.layout-container-demo .el-header {
  position: relative;
  padding: 0;
}
.layout-container-demo .el-aside {
  background-color: #304156;
  transition: width 0.3s;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
