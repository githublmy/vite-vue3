<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :background="background"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :pager-count="pagerCount"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import useCommonStore from "@/store/modules/common";

const props = defineProps({
  total: {
    required: true,
    type: Number,
  },
  page: {
    type: Number,
    default: 1,
  },
  limit: {
    type: Number,
    default: 20,
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 30, 50];
    },
  },
  // 移动端页码按钮的数量端默认值5
  pagerCount: {
    type: Number,
    default: document.body.clientWidth < 992 ? 5 : 7,
  },
  layout: {
    type: String,
    default: "total, sizes, prev, pager, next, jumper",
  },
  background: {
    type: Boolean,
    default: true,
  },
  autoScroll: {
    type: Boolean,
    default: true,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();
const currentPage = computed({
  get() {
    return props.page;
  },
  set(val) {
    emit("update:page", val);
  },
});
const pageSize = computed({
  get() {
    return props.limit;
  },
  set(val) {
    emit("update:limit", val);
  },
});
// 获取滚动条的高度
const scrollTop = computed(() => commonStore.scrollTop);
const commonStore = useCommonStore();
const timer = ref(null);
// 监听滚动条，回到顶部重置清除定时器
watch(scrollTop, (v) => {
  if (v <= 0) {
    clearInterval(timer.value);
  }
});
// 滚动条的回到顶部
function elScrollTop() {
  nextTick(() => {
    // commonStore.elScrollbar.setScrollTop(-100);
    timer.value = setInterval(() => {
      clearInterval(timer);
      commonStore.setScrollTopReduce();
      commonStore.elScrollbar.setScrollTop(scrollTop.value);
    }, 1);
  });
}

function handleSizeChange(val) {
  if (currentPage.value * val > props.total) {
    currentPage.value = 1;
  }
  emit("pagination", { page: currentPage.value, limit: val });
  // 回到顶部
  elScrollTop();
}
function handleCurrentChange(val) {
  emit("pagination", { page: val, limit: pageSize.value });
  elScrollTop();
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
}
</style>
