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
        <transition-group>
          <el-breadcrumb-item
            v-for="item in pathList"
            :to="{ path: item.path }"
            :key="item.path"
            >{{ item.meta.title }}</el-breadcrumb-item
          >
        </transition-group>
      </el-breadcrumb>
    </div>
    <div class="right">
      <span>姓名：张三</span>
      <el-avatar
        class="img"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-dropdown @command="command">
        <span class="el-dropdown-link">
          个人中心
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="changePassword"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled, Lock } from "@element-plus/icons-vue";
import useSidebarStore from "@/store/modules/sidebar.ts";
import { tr } from "element-plus/es/locale";
const sidebarStore = useSidebarStore();
// console.log(sidebarStore);
const route = useRoute();
const router = useRouter();
let pathList = ref([]);
// 菜单折叠状态
const isCollapse = computed(() => sidebarStore.isCollapse);
// 下拉操作
function command(v) {
  if (v === "changePassword") {
    ElMessage({
      message: "修改密码",
      type: "success",
    });
  } else {
    ElMessageBox.confirm("是否退出登录?", "警告", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        ElMessage({
          type: "success",
          message: "退出成功",
        });
        router.push("/login");
      })
      .catch(() => {});
  }
}
// 监听路由
watch(
  () => route,
  (newValue) => {
    // console.log(newValue);
    if (newValue.path === "/index") {
      pathList.value = [
        {
          path: "/",
          meta: {
            title: "首页",
          },
        },
      ];
    } else {
      pathList.value = newValue.matched;
    }
  },
  { immediate: true, deep: true }
);
// 折叠菜单方法
function changeSidebar() {
  sidebarStore.toggleSidebar();
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0 2px 5px rgba($color: #cbcaca, $alpha: 0.5);
  .left {
    display: flex;
  }
  .right {
    display: flex;
    align-items: center;
    .img {
      margin: 0 20px 0 10px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
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
