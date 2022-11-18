<!--
 * @Author: lu
 * @LastEditors: Please set LastEditors
 * @Date: 2022-11-18 10:22:15
 * @LastEditTime: 2022-11-18 17:51:44
 * @Description: 侧边导航
-->
<template>
  <div>
    <!-- <div class="logo">
      <img src="/public/vite.svg" />
      <h1 class="sidebar-title">后台管理系统</h1>
    </div> -->
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
    <el-scrollbar>
      <el-menu
        default-active="5"
        active-text-color="#37ea96"
        background-color="#304156"
        text-color="#fff"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <template #title>首页</template>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">导航1-1</el-menu-item>
          <el-menu-item index="1-2">导航1-2</el-menu-item>
          <el-menu-item index="1-3">导航1-3</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title><span>导航1-4</span></template>
            <el-menu-item index="1-4-1">导航1-4-1</el-menu-item>
            <el-menu-item index="1-4-2">导航1-4-2</el-menu-item>
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
    </el-scrollbar>

    <!-- <el-menu
      active-text-color="#37ea96"
      background-color="#304156"
      default-active="2-1"
      text-color="#fff"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>首页</span>
        </template>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-menu-item index="1-1">首页-1</el-menu-item>
        <el-menu-item index="1-2">首页-2</el-menu-item>
        <el-sub-menu index="1-3">
          <template #title>首页-3</template>
          <el-menu-item index="1-4-1">首页3-3</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">2-1</el-menu-item>
        <el-menu-item index="2-2">2-2</el-menu-item>
        <el-sub-menu index="2-3">
          <template #title>2-3</template>
          <el-menu-item index="2-3-1">2-3-1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>导航四</span>
      </el-menu-item>
    </el-menu> -->
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import useSidebarStore from "@/store/modules/sidebar.ts";

const sidebarStore = useSidebarStore();

const isCollapse = computed(() => sidebarStore.isCollapse);
</script>
<style lang="scss">
// 折叠动画
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;
  img {
    width: 26px;
    height: 26px;
    vertical-align: middle;
  }
  & .sidebar-title {
    display: inline-block;
    margin: 0;
    margin-left: 12px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 14px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
  }
}
.elMenu {
  width: 200px;
  border: none; //去掉el-menu默认的右边框
  // transition: all 0.3s;
}
</style>
