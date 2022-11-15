<template>
  <div class="login">
    <div class="login-content">
      <el-form :model="formData" label-width="">
        <el-form-item label="账号">
          <el-input
            :prefix-icon="Search"
            size="large"
            style="width: 300px"
            v-model="formData.userName"
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            size="large"
            style="width: 300px"
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item label="">
          <el-checkbox
            style="width: 300px"
            v-model="rememberPassword"
            label="记住密码"
            size="large"
          />
        </el-form-item>
        <el-form-item label="">
          <el-button style="width: 100%" type="primary" :loading="loading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <el-button type="primary" icon="Search">Search</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const formData = reactive({
  userName: "",
  password: "",
});
let rememberPassword = ref(true);
let loading = ref(false);
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: rgb(26, 6, 181);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-content {
    padding: 20px 24px 0 24px;
    border-radius: 8px;
    background: linear-gradient(
      90deg,
      rgb(217 229 221) 50%,
      rgb(191 229 203) 100%
    );
    box-shadow: 0 0 5px 5px rgba(165, 239, 228, 0.5);
  }
}
</style>
