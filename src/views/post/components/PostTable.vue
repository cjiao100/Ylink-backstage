<template>
  <el-card shadow="nerver" class="container">
    <div slot="header" class="card-header">
      <span>帖子列表</span>
      <!-- <filter-component class="filter-content" /> -->
    </div>
    <el-table :data="postList" style="width: 100%">
      <el-table-column type="index" width="100" />
      <el-table-column prop="title" min-width="180" label="帖子标题" />
      <el-table-column prop="author" width="120" label="发贴用户" />
      <el-table-column align="center" width="80" prop="browse" label="浏览数" />
      <el-table-column
        align="center"
        width="80"
        prop="awesome"
        label="点赞数"
      />
      <el-table-column
        align="center"
        width="80"
        prop="comment"
        label="评论数"
      />
    </el-table>
  </el-card>
</template>

<script>
// import FilterComponent from "@/components/Filter.vue";

export default {
  // components: {
  //   FilterComponent
  // },
  props: {
    postList: Array
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
