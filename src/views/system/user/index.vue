<template>
  <div class="baseStyle">
    <!-- 表单查询 -->
    <el-form v-show="showSearch" :model="searchForm" inline label-width="80px">
      <el-form-item label="歌手类型">
        <el-select
          style="width: 240px"
          v-model="searchForm.type"
          placeholder="请选择"
          clearable
          @change="getList"
        >
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="地区">
        <el-select
          clearable
          @change="getList"
          style="width: 240px"
          v-model="searchForm.area"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <!-- 工具栏 -->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="Plus">新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="success" plain icon="Edit">修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="danger" plain icon="Delete">删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="warning" plain icon="Download">导出</el-button>
      </el-col>
      <RightToolbar
        v-model:showSearch="showSearch"
        @queryTable="getList"
      ></RightToolbar>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      v-loading="loading"
      style="width: 100%"
      height="400px"
    >
      <el-table-column align="center" prop="name" label="姓名" />
      <el-table-column align="center" prop="alias" label="别名">
      </el-table-column>
      <el-table-column align="center" prop="picUrl" label="照片">
        <template #default="{ row }">
          <el-image style="width: 100px; height: 100px" :src="row.picUrl" />
        </template>
      </el-table-column>
    </el-table>
    <Pagination
      v-show="total > 0"
      :total="total"
      v-model:page="searchForm.offset"
      v-model:limit="searchForm.limit"
      @pagination="getList"
    />
  </div>
</template>

<script setup lang="ts">
import { getUserList } from "@/api/user/index";

// 搜索的显示隐藏
const showSearch = ref(true);

const searchForm = reactive({
  limit: 10,
  offset: 1,
  type: null,
  area: null,
});
const tableData = ref([]);
const total = ref(1000);
const loading = ref(false);
const options1 = ref([
  {
    label: "男歌手",
    value: 1,
  },
  {
    label: "女歌手",
    value: 2,
  },
  {
    label: "乐队",
    value: 3,
  },
]);
const options2 = ref([
  {
    label: "话语",
    value: 7,
  },
  {
    label: "欧美",
    value: 96,
  },
  {
    label: "日本",
    value: 8,
  },
  {
    label: "韩国",
    value: 16,
  },
  {
    label: "其他",
    value: 0,
  },
]);

/**
 * @description: 
// 获取歌手
// type
// -1:全部
// 1:男歌手
// 2:女歌手
// 3:乐队
// area 取值:
// -1:全部
// 7华语
// 96欧美
// 8:日本
// 16韩国
// 0:其他
 */
async function getList() {
  loading.value = true;
  let res = await getUserList(searchForm);
  console.log(res);
  tableData.value = res.artists;
  loading.value = false;
}
getList();
</script>

<style lang="scss" scoped></style>
