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
        <transition-group name="breadcrumb">
          <el-breadcrumb-item
            v-for="item in pathList"
            :to="{ path: item.path }"
            :key="item.path"
            >{{ item.meta.title }}</el-breadcrumb-item
          >
        </transition-group>
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
let pathList = router.matched;
if (router.path === "/index") {
  pathList = [
    {
      path: "/",
      meta: {
        title: "首页",
      },
    },
  ];
}
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
