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
            <span class="number">{{ week.user }}</span>
            <span class="unit">人</span> <br />本周新增用户
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
            <span class="number">{{ week.post }}</span>
            <span class="unit">篇</span> <br />本周新增帖子
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
            <span class="number">{{ week.article }}</span>
            <span class="unit">篇</span> <br />本周新增文章
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
            <span class="number">{{ week.word }}</span>
            <span class="unit">个</span> <br />本周单词查询量
          </p>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="message-content" type="flex" justify="space-around">
      <el-col :span="7">
        <todo />
      </el-col>
      <el-col :span="15">
        <el-card class="message-card" shadow="nerver">
          <div slot="header" class="card-header">
            <span>实时在线人数</span>
          </div>
          <line-chart />
        </el-card>
      </el-col>
    </el-row>

    <el-row class="message-content" type="flex" justify="space-around">
      <el-col :span="11">
        <el-card class="message-card" shadow="nerver">
          <div slot="header" class="card-header">
            <span>今日热门文章</span>
          </div>
          <list getters="articleHotList" />
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card class="message-card" shadow="nerver">
          <div slot="header" class="card-header">
            <span>今日热门帖子</span>
          </div>
          <list getters="postHotList" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LineChart from "./components/LineChart";
import List from "./components/List";
import Todo from "./components/Todo";

export default {
  components: {
    LineChart,
    List,
    Todo
  },
  data() {
    return {
      bodyStyle: {
        display: "flex",
        color: "#fff",
        padding: "25px 40px",
        boxSizing: "content-box"
      }
    };
  },
  mounted() {
    this.loadWeekData();
    this.getHotPostList();
    this.getHotArticleList();
    this.loadOnlineUser();
  },
  methods: {
    ...mapActions([
      "loadWeekData",
      "getHotPostList",
      "getHotArticleList",
      "loadOnlineUser"
    ])
  },
  computed: {
    ...mapGetters(["week"])
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
        color: #333;
        font-weight: 600;
        font-size: 18px;
        text-align: left;

        .add-btn {
          float: right;
          padding: 5px;
          font-size: 14px;
        }
      }

      .todo-list {
        height: 330px;
        list-style: none;
        text-align: left;
        padding: 0;
        margin: 0;

        div {
          margin: 0;
          margin-bottom: 30px;
          display: flex;

          .message {
            margin-left: 10px;
            font-size: $smallFont;
            line-height: 20px;
            width: 75%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: inline-block;
            word-break: keep-all;
          }
        }
      }

      .btn-group {
        text-align: right;
        // margin-top: 10px;
        // margin-bottom: -10px;

        .next-btn {
          padding: 3px 7px;
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
  .el-card__body {
    padding-top: 0;
  }
}
</style>
