<template>
  <el-menu
    default-active="/workbench"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :router="true"
  >
    <el-menu-item index="/workbench">
      <i class="el-icon-menu"></i>
      <span slot="title">工作台</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <i class="el-icon-menu"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <el-menu-item index="/authority">
      <i class="el-icon-document"></i>
      <span slot="title">权限管理</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="el-icon-settng"></i>
      <span slot="title">文章管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>

<style></style>
