<template>
  <div>
    <el-button type="primary" icon="Search">Search</el-button>
    <router-link to="/login">qi </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref([]);
const handleChange = (value) => {
  console.log(value);
};

</script>
