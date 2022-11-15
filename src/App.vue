<template>
  <!-- <div>
    {{ store.count }}
    <button @click="add">点击</button>
    <button @click="reset">重置</button>
    <router-link to="/home2">跳转</router-link>
    <button @click="goTo">跳转</button>
    <router-view></router-view>
  </div> -->
  <router-view></router-view>
</template>

// <script setup lang="ts">
// import { useCounterStore } from "@/store/index.ts";
// import {useRouter} from "vue-router"
// const store = useCounterStore();
// // console.log(store);
// const router = useRouter()
// const add = () => {
//   // 修改state
//   // store.$patch((state) => {
//   //   store.count = "wangba";
//   //   console.log(state.count);
//   // });
//   // 调用方法
//   store.addCount();
//   // 获取返回值
//   let res = store.returnData();
//   console.log(res);
// };
// const goTo=()=>{
// router.push("/home")
// }
// // 重置state
// const reset = () => {
//   store.$reset();
// };

// // console.log(store.count);
// </script>
