<template>
  <el-table :data="list">
    <el-table-column type="index" width="50"> </el-table-column>
    <el-table-column prop="title" label="标题" min-width="180">
    </el-table-column>
    <el-table-column prop="author" label="作者" min-width="180">
    </el-table-column>
    <el-table-column align="center" prop="brower" label="浏览量" width="80">
    </el-table-column>
    <el-table-column align="center" prop="awesome" label="点赞量" width="80">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    list: Array
  }
};
</script>

<style></style>
