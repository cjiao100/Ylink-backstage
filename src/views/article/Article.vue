<template>
  <el-card shadow="nerver" class="table">
    <div slot="header" class="card-header">
      <el-button type="primary" size="small">
        <router-link to="/content/article/create">新增文章</router-link>
      </el-button>
      <!-- <filter-component class="filter-content" /> -->
    </div>
    <el-table :data="articleList" style="width: 100%">
      <el-table-column align="center" type="index" width="100" />
      <el-table-column prop="title" min-width="220" label="文章标题" />
      <el-table-column prop="author" width="220" label="发表用户" />
      <el-table-column
        align="center"
        width="150"
        prop="browse"
        label="浏览数"
      />
      <el-table-column
        align="center"
        width="150"
        prop="awesome"
        label="点赞数"
      />
      <el-table-column
        align="center"
        width="150"
        prop="comment"
        label="评论数"
      />
    </el-table>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import FilterComponent from "@/components/Filter.vue";

export default {
  // components: {
  //   FilterComponent
  // },
  computed: {
    ...mapGetters(["articleList"])
  },
  methods: {
    ...mapActions(["getArticleList"])
  },
  mounted() {
    this.getArticleList({ pageNum: 0, pageSize: 5 });
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
