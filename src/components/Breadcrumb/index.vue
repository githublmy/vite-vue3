<template>
  <div class="breadcrumb">
    <div class="left">
      <div @click="changeSidebar">
        <el-icon v-if="isCollapse" size="26" class="iconElIcon"
          ><Fold
        /></el-icon>
        <el-icon v-else size="26" class="iconElIcon"><Expand /></el-icon>
      </div>
      <el-breadcrumb class="app-breadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>导航二</el-breadcrumb-item>
        <el-breadcrumb-item>导航三</el-breadcrumb-item>
        <el-breadcrumb-item>导航四</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>个人中心</div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled, Lock } from "@element-plus/icons-vue";
import useSidebarStore from "@/store/modules/sidebar.ts";
const sidebarStore = useSidebarStore();
// console.log(sidebarStore);

const isCollapse = computed(() => sidebarStore.isCollapse);
const router = useRoute();
console.log(router);
const changeSidebar = () => {
  sidebarStore.toggleSidebar();
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0 4px 10px rgba($color: #8b8a8a, $alpha: 0.5);
  .left {
    display: flex;
  }
}
.iconElIcon {
  height: 50px;
}
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  line-height: 50px;
  margin-left: 8px;
}
</style>
