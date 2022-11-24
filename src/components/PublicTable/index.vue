<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      align="center"
      v-for="(item, index) in tableTitles"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      :min-width="item.minWidth"
    />
  </el-table>
</template>

<script setup lang="ts">
import { getUserList } from "@/api/user/index";
const props = defineProps({
  tableTitles: Array,
});
const tableData = [];
// 获取歌手
async function getList() {
  // type
  //   -1:全部
  // 1:男歌手
  // 2:女歌手
  // 3:乐队
  const params = {
    limit: 10,
    offset: 1,
    type: -1, //
  };
  let res = await getUserList();
  console.log(res);
  tableData = res.artists;
}
getList();
// 表格数据
</script>

<style lang="scss" scoped></style>
