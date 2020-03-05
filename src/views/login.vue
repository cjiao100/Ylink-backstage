<template>
  <div class="login-container">
    <div class="login-card">
      <el-form></el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #000;
  flex: 1;
  height: 100vh;

  .login-card {
    background: #ffffff;
    justify-content: center;
  }
}
</style>
