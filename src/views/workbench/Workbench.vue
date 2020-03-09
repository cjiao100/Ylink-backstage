<template>
  <div class="work-content">
    <el-row>
      <el-col :span="6">
        <el-card
          class="card"
          :body-style="{ ...bodyStyle, background: '#fe3f35' }"
        >
          <div class="icon">
            <i class="el-icon-user"></i>
          </div>
          <p class="date">
            <span class="number">100</span> <span class="unit">人</span>
            <br />本周新增用户
          </p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          class="card"
          :body-style="{ ...bodyStyle, background: '#7213df' }"
        >
          <div class="icon">
            <i class="el-icon-user"></i>
          </div>
          <p class="date">
            <span class="number">100</span> <span class="unit">人</span>
            <br />本周活跃帖子
          </p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          class="card"
          :body-style="{ ...bodyStyle, background: '#01a2aa' }"
        >
          <div class="icon">
            <i class="el-icon-user"></i>
          </div>
          <p class="date">
            <span class="number">100</span> <span class="unit">人</span>
            <br />本周优秀文章
          </p>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          class="card"
          :body-style="{ ...bodyStyle, background: '#ff980b' }"
        >
          <div class="icon">
            <i class="el-icon-user"></i>
          </div>
          <p class="date">
            <span class="number">100</span> <span class="unit">人</span>
            <br />本周单词查询量
          </p>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="message-content" type="flex" justify="space-around">
      <el-col :span="7">
        <el-card class="message-card" shadow="nerver">
          <div slot="header" class="card-header">
            <span>代办事项</span>
            <el-button
              class="add-btn"
              icon="el-icon-plus"
              type="primary"
              circle
            >
            </el-button>
          </div>
          <ul>
            <li>
              <p>
                <el-tag effect="dark" type="warning">
                  待审核
                </el-tag>
                <span>XXX</span>
              </p>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="15">
        <el-card class="message-card" shadow="nerver"></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyStyle: {
        display: "flex",
        color: "#fff",
        padding: "25px 40px",
        boxSizing: "content-box"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.work-content {
  .card {
    border-radius: 10px;

    .icon {
      border: 2px solid #fff;
      width: 36px;
      height: 60px;
      font-size: 30px;
      line-height: 60px;
      border-radius: 5px;
    }

    .date {
      margin: 0 0 0 15px;
      font-size: 15px;
      padding: 5px 0;

      .number {
        font-size: $bigFont;
      }

      .unit {
        font-size: $middleFont;
      }
    }
  }

  .message-content {
    margin-top: 35px;

    .message-card {
      border: none;

      .card-header {
        text-align: left;

        .add-btn {
          float: right;
          padding: 5px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.work-content {
  .el-col.el-col-6 {
    padding-left: 50px;
    padding-right: 50px;
  }

  .el-card__header {
    border: none;
  }
}
</style>
