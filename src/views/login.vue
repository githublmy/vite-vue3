<template>
  <div class="login">
    <div class="login-content">
      <el-form :model="formData" label-width="">
        <el-form-item>
          <el-input
            :prefix-icon="UserFilled"
            size="large"
            clearable
            style="width: 300px"
            v-model="formData.userName"
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            size="large"
            :prefix-icon="Lock"
            clearable
            show-password
            style="width: 300px"
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-checkbox
            style="width: 300px"
            v-model="rememberPassword"
            label="记住密码"
            size="large"
          />
        </el-form-item>
        <el-form-item label="">
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click="submitLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";
import { UserFilled, Lock } from "@element-plus/icons-vue";
const { proxy } = getCurrentInstance(); //引入页面实例，相当于vue2的this
const formData = reactive({
  userName: "",
  password: "",
});
let rememberPassword = ref(true);
let loading = ref(false);
const submitLogin = () => {
  console.log("登录");
  // console.log(modal);
  // proxy.$modal.msgSuccess("提交成功",true)
  proxy.$modal.msgError("提交失败",true)

  // proxy.$modal
  //   .confirm("提交成功")
  //   .then((result) => {
  //     console.log("rrrr");
  //   })
  //   .catch((err) => {});
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: rgb(45, 25, 194);
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
