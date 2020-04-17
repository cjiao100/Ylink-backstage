<template>
  <div class="header-container">
    <div>
      <h1 class="title">Ylink</h1>
    </div>
    <div>
      <el-input
        class="search"
        size="small"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
      />
    </div>
    <div class="user-info">
      <p>程俊伟</p>
      <el-image class="avatar" :src="url"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 0px #ccc;
  width: 100vw;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #ffffff;

  .title {
    margin: 0;
  }

  .user-info {
    display: flex;

    p {
      margin: 0;
    }

    .avatar {
      margin-top: 5px;
      margin-left: 10px;
      width: 50px;
      height: 50px;
      border-radius: $bigRadius;
      line-height: 1;
    }
  }
}
</style>
<style lang="scss">
.header-container {
  .el-input__inner {
    border-radius: $middleRadius;
  }
}
</style>
