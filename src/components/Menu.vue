<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :router="true"
  >
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">工作台</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <i class="el-icon-user-solid"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <el-submenu index="/content">
      <template slot="title">
        <i class="el-icon-s-order"></i>
        <span>内容管理</span>
      </template>
      <el-menu-item index="/content/article">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>文章管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/content/post">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>帖子管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/content/plan">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span>计划管理</span>
        </template>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="/space">
      <i class="el-icon-s-custom"></i>
      <span slot="title">个人空间</span>
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
