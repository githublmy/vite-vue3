<template>
  <div class="main">
    <div class="home" v-for="item in 3">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo a,
      voluptatibus modi magnam fugit illo nemo quas et numquam rem voluptates
      eum dolorum reiciendis, atque dolorem ullam repellendus ducimus inventore?
    </div>
  </div>
</template>

<script setup lang="ts">
// import useStore from "@/store/index.ts";
// const useSidebarStore = useStore().sidebar;
// console.log(useStore().sidebar);
// const { proxy } = getCurrentInstance();
// console.log(proxy); 测试的
</script>

<style lang="scss" scoped>
.main {
  // height: 1000px;
}
.home {
  // height: 3000px;
  width: 200px;
  height: 500px;
}
</style>
