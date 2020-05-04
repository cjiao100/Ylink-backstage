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
              <p class="num">
                {{ postToday }}
                <span class="unit">篇</span>
              </p>
            </div>
            <line-chart
              v-if="showPostChart"
              lineColor="#388fd6"
              :rowsData="post"
            />
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
              <p class="num">
                {{ topicToday }}
                <span class="unit">个</span>
              </p>
            </div>
            <line-chart
              v-if="showTopicChart"
              lineColor="#eb9d53"
              :rowsData="topic"
            />
          </el-card>
        </el-col>
      </el-row>
      <post-table :postList="postList" />
    </el-col>
    <el-col :span="7" class="list">
      <el-card shadow="nerver" class="card-list">
        <div slot="header" class="card-header ">
          <span>举报列表</span>
        </div>
        <report-list />
      </el-card>

      <el-card shadow="nerver" class="card-list" style="margin-top: 20px;">
        <div slot="header" class="card-header ">
          <span>热门话题</span>
        </div>
        <topic-list :topicList="topicHotList" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LineChart from "./components/LineChart";
import TopicList from "./components/TopicList";
import ReportList from "./components/ReportList";
import PostTable from "./components/PostTable";

export default {
  components: {
    LineChart,
    TopicList,
    PostTable,
    ReportList
  },
  data() {
    return {
      showPostChart: false,
      showTopicChart: false,
      postToday: 0,
      topicToday: 0,
      statisticsStyle: {
        width: "100%",
        display: "flex",
        "justify-content": "space-around"
      }
    };
  },
  mounted() {
    this.getPostList({ pageNum: 0, pageSize: 5 });
    this.getHotTopicList();
    this.getNewPostDateInSevenDay();
    this.getNewTopicDateInSevenDay();
  },
  computed: {
    ...mapGetters(["postList", "topicHotList", "post", "topic"])
  },
  methods: {
    ...mapActions([
      "getPostList",
      "getHotTopicList",
      "getNewPostDateInSevenDay",
      "getNewTopicDateInSevenDay"
    ])
  },
  watch: {
    post(newVal) {
      this.showPostChart = true;
      this.postToday = newVal[6].count || 0;
    },
    topic(newVal) {
      this.showTopicChart = true;
      this.topicToday = newVal[6].count || 0;
    }
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

.list {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 140px);
  .card-list {
    flex: 1;
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
