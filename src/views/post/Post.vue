<template>
  <el-row class="post" type="flex" justify="space-around">
    <el-col :span="15">
      <el-row type="flex" justify="space-between">
        <el-col :span="11">
          <el-card
            class="statistics"
            shadow="never"
            :body-style="statisticsStyle"
          >
            <div class="card-header chart-title">
              <p>今日新增帖子</p>
              <p class="num">10<span class="unit">篇</span></p>
            </div>
            <line-chart lineColor="#388fd6" :rowsData="post" />
          </el-card>
        </el-col>
        <el-col :span="11">
          <el-card
            class="statistics"
            shadow="never"
            :body-style="statisticsStyle"
          >
            <div class="card-header chart-title">
              <p>今日新增话题</p>
              <p class="num">10<span class="unit">个</span></p>
            </div>
            <line-chart lineColor="#eb9d53" :rowsData="topic" />
          </el-card>
        </el-col>
      </el-row>
      <post-table />
    </el-col>
    <el-col :span="7">
      <el-card shadow="nerver">
        <div slot="header" class="card-header">
          <span>今日热门话题</span>
        </div>
        <topic-list />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import LineChart from "./components/LineChart";
import TopicList from "./components/TopicList";
import PostTable from "./components/PostTable";

export default {
  components: {
    LineChart,
    TopicList,
    PostTable
  },
  data() {
    return {
      post: [
        { 日期: "2018-01-01", 新增: 139 },
        { 日期: "2018-01-02", 新增: 353 },
        { 日期: "2018-01-03", 新增: 292 },
        { 日期: "2018-01-05", 新增: 172 },
        { 日期: "2018-01-10", 新增: 379 },
        { 日期: "2018-01-20", 新增: 459 }
      ],
      topic: [
        { 日期: "2018-01-01", 新增: 393 },
        { 日期: "2018-01-02", 新增: 530 },
        { 日期: "2018-01-03", 新增: 923 },
        { 日期: "2018-01-05", 新增: 723 },
        { 日期: "2018-01-10", 新增: 792 },
        { 日期: "2018-01-20", 新增: 593 }
      ],
      statisticsStyle: {
        width: "100%",
        display: "flex",
        "justify-content": "space-around"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.card-header {
  color: #333;
  font-weight: 600;
  font-size: 18px;
}
.chart-title {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    margin: 0;

    &.num {
      font-size: 40px;
      color: #108888;

      .unit {
        color: #333;
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
}
</style>

<style lang="scss">
.post {
  .el-card {
    border: none;
    .el-card__header {
      border-bottom: none;
      text-align: left;
    }
  }
}
</style>
