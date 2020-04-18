<template>
  <el-table :data="list">
    <el-table-column type="index" width="50" />
    <el-table-column prop="title" label="标题" min-width="180" />
    <el-table-column prop="author" label="作者" width="120" />
    <el-table-column align="center" prop="browse" label="浏览量" width="80">
    </el-table-column>
    <el-table-column
      align="center"
      prop="created_at"
      label="发布时间"
      width="120"
    />
  </el-table>
</template>

<script>
export default {
  props: {
    getters: String
  },
  computed: {
    list() {
      return this.$store.getters[this.getters] || [];
    }
  }
};
</script>

<style></style>
