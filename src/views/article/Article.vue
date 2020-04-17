<template>
  <el-card shadow="nerver" class="table">
    <div slot="header" class="card-header">
      <el-button type="primary" size="small">
        <router-link to="/content/article/create">新增文章</router-link>
      </el-button>
      <filter-component class="filter-content" />
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="100"> </el-table-column>
      <el-table-column prop="date" label="文章标题"> </el-table-column>
      <el-table-column prop="name" label="发表用户"> </el-table-column>
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
.table {
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

<style lang="scss">
.table {
  border: none;
  .el-card__header {
    border-bottom: none;
    text-align: left;
  }
}
</style>
