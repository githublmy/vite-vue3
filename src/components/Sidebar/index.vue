<!--
 * @Author: lu
 * @LastEditors: Please set LastEditors
 * @Date: 2022-11-18 10:22:15
 * @LastEditTime: 2022-11-25 11:26:26
 * @Description: 侧边导航
-->
<template>
  <div class="sidebar-main">
    <div class="logo">
      <img
        :style="{ marginLeft: !isCollapse ? '20px' : '16px' }"
        :class="!isCollapse ? 'img2' : ''"
        src="/vite.svg"
      />

      <i class="sidebar-title" :style="{ opacity: !isCollapse ? 1 : '0' }"
        >后台管理系统</i
      >
    </div>
    <el-menu
      :default-active="currentPath"
      active-text-color="#37ea96"
      background-color="#304156"
      text-color="#fff"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
    >
      <el-menu-item index="/">
        <el-icon><setting /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-sub-menu index="/user">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统设置</span>
        </template>
        <el-menu-item index="/user">用户管理</el-menu-item>
        <el-menu-item index="/role">角色管理</el-menu-item>
        <el-sub-menu index="/dh">
          <template #title><span>导航1-3</span></template>
          <el-menu-item index="/user/index">导航1-3-1</el-menu-item>
          <el-menu-item index="/user/index2">导航1-3-2</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/dh2">
          <template #title><span>导航1-4</span></template>
          <el-menu-item index="/user/index">导航1-3-1</el-menu-item>
          <el-menu-item index="/user/index2">导航1-3-2</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import logo from "/vite.svg";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import useSidebarStore from "@/store/modules/sidebar.ts";

const route = useRoute();
const sidebarStore = useSidebarStore();
// 当前路由路径
let currentPath = ref("");

const isCollapse = computed(() => sidebarStore.isCollapse);
// 监听路由
watch(
  () => route.path,
  (newValue, oldValue) => {
    // console.log(newValue);
    if (newValue === "/index") {
      currentPath.value = "/";
    } else {
      currentPath.value = newValue;
    }
  },
  { immediate: true }
);
</script>
<style lang="scss">
.el-menu-vertical-demo {
  border: none;
}
// 折叠动画
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
<style lang="scss" scoped>
.sidebar-main {
  height: 100vh;
}
.img2 {
  margin-left: 16px;
}
.logo {
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  position: relative;
  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    transition: margin-left 0.3s;
  }
  & .sidebar-title {
    position: absolute;
    top: 0;
    left: 52px;
    z-index: 1;
    display: inline-block;
    margin: 0;
    padding-left: 12px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 50px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
    transition: all 0.3s;
  }
}
</style>
