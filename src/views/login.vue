<template>
  <div class="login-container">
    <div class="login-card">
      <el-row>
        <el-col :span="11" class="left-content">
          <h1 class="title">Ylink</h1>
          <div>
            <span>在线英语学习交流平台</span>
            <el-divider direction="vertical"></el-divider>
            <span>后台管理系统</span>
          </div>
        </el-col>
        <el-col :span="2" class="center-content">
          <el-divider class="divider" direction="vertical"></el-divider>
        </el-col>
        <el-col :span="11" class="right-content">
          <h1 class="title">欢迎登录</h1>
          <el-form label-position="top" :model="loginForm">
            <el-form-item>
              <div slot="label">帐号</div>
              <el-input
                size="smail"
                class="custom-input"
                placeholder="请输入帐号"
                v-model="loginForm.name"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <div slot="label">密码</div>
              <el-input
                size="smail"
                class="custom-input"
                placeholder="请输入密码"
                v-model="loginForm.password"
                show-password
              ></el-input>
              <p class="tip">忘记密码/申请权限，请联系管理员</p>
            </el-form-item>
          </el-form>
          <div>
            <el-button class="login-button" type="primary">登录</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  // background-color: #000;
  background-image: url(https://w.wallhaven.cc/full/ox/wallhaven-oxj7mm.jpg);
  height: 100vh;

  .login-card {
    background: #ffffff;
    width: 60%;
    height: 500px;
    border-radius: $middleRadius;
    .left-content {
      height: 500px;
      padding: 20px;
    }
    .center-content {
      height: 500px;
      padding: 20px;

      .divider {
        height: 100%;
      }
    }
    .right-content {
      padding: 50px;
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .tip {
        font-size: $miniFont;
        text-align: left;
        margin: 0;
        line-height: 2;
        color: #606266;
      }

      .login-button {
        width: 100%;
      }
    }

    .title {
      font-size: $bigFont;
    }
  }
}
</style>
<style lang="scss">
.login-container {
  .el-form-item__content {
    line-height: 1;
  }
  .el-form-item__label {
    float: left;
    font-weight: bold;
    line-height: 1;
  }
  .custom-input {
    .el-input__inner {
      border: none;
      border-bottom: 1px solid #e0e0e0;
    }
  }
}
</style>
