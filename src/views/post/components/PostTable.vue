<template>
  <el-card shadow="nerver" class="container">
    <div slot="header" class="card-header">
      <span>帖子列表</span>
      <filter-component class="filter-content" />
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="100"> </el-table-column>
      <el-table-column prop="date" label="帖子标题"> </el-table-column>
      <el-table-column prop="name" label="发贴用户"> </el-table-column>
      <el-table-column prop="address" label="浏览数"> </el-table-column>
      <el-table-column prop="address" label="点赞数"> </el-table-column>
      <el-table-column prop="address" label="评论数"> </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import FilterComponent from "@/components/Filter.vue";

export default {
  components: {
    FilterComponent
  },
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;

  .card-header {
    color: #333;
    font-weight: 600;
    font-size: 18px;

    .filter-content {
      float: right;
    }
  }
}
</style>
