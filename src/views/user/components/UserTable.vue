<template>
  <el-card shadow="nerver" class="container">
    <div slot="header" class="card-header">
      <span>用户列表</span>
      <filter-component class="filter-content" />
    </div>
    <el-table :data="userList" style="width: 100%">
      <el-table-column type="index" width="100" />
      <el-table-column width="180" prop="name" label="用户昵称" />
      <el-table-column width="180" prop="email" label="用户邮箱" />
      <el-table-column align="center" prop="identity" label="用户身份" />
      <el-table-column align="center" prop="created_at" label="注册时间" />
      <el-table-column align="center" prop="lastDate" label="上次登录" />
    </el-table>
  </el-card>
</template>

<script>
import FilterComponent from "@/components/Filter.vue";

export default {
  components: {
    FilterComponent
  },
  props: {
    userList: Array
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
