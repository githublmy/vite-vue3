<template>
  <div class="login">
    <div class="login-content">
      <el-form :model="formData" ref="formDataRef" :rules="formDataRules">
        <el-form-item prop="userName">
          <el-input
            :prefix-icon="UserFilled"
            size="large"
            clearable
            style="width: 300px"
            v-model.trim="formData.userName"
            placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item prop="password">
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
        <el-form-item>
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click="submitLogin(formDataRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance, triggerRef } from "vue";
import { useRouter } from "vue-router";
import { UserFilled, Lock } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";
import { useUserStore } from "@/store/modules/user.ts";
// console.log(useUserStore());
const store = useUserStore();
const router = useRouter();
const { proxy } = getCurrentInstance(); //引入页面实例，相当于vue2的this
const formData = reactive({
  userName: "",
  password: "",
});
const formDataRef = ref<FormInstance>();
const formDataRules = reactive<FormRules>({
  userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
let rememberPassword = ref(true);
let loading = ref(false);
const submitLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true;
      store
        .login(formData)
        .then((res) => {
          // console.log(res);
          proxy.$modal.msgSuccess(res.msg);
          setTimeout(() => {
            router.push("/");
            loading.value = false;
          }, 1500);
        })
        .catch((err) => {
          // console.log(err);
          proxy.$modal.msgError(err.msg);
          loading.value = false;
        });
    } else {
      console.log("验证失败");
    }
  });

  // console.log(modal);

  // proxy.$modal.msgError("提交失败",true)
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
  background: url("@/assets/images/loginbg.jpeg");
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-content {
    padding: 20px 24px 0 24px;
    border-radius: 8px;
    // background: linear-gradient(
    //   90deg,
    //   rgb(217 229 221) 50%,
    //   rgb(191 229 203) 100%
    // );
    background-color: #fff;
    box-shadow: 0 0 5px 5px rgba(149, 175, 221, 0.5);
  }
}
</style>
