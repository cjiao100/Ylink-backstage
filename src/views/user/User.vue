<template>
  <el-row class="user" type="flex" justify="space-around">
    <el-col :span="15">
      <el-row type="flex" justify="space-between">
        <el-col :span="11">
          <el-card
            class="statistics"
            shadow="never"
            :body-style="statisticsStyle"
          >
            <pie-chart
              :chartTitle="this.active.title"
              :label="this.active.label"
              :level="this.active.level"
              :rowsData="this.active.rowsData"
            />
          </el-card>
        </el-col>
        <el-col :span="11">
          <el-card
            class="statistics"
            shadow="never"
            :body-style="statisticsStyle"
          >
            <pie-chart
              :chartTitle="this.school.title"
              :label="this.school.label"
              :level="this.school.level"
              :rowsData="this.school.rowsData"
            />
          </el-card>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="7" style="background-color: #fff">321</el-col>
  </el-row>
</template>

<script>
import PieChart from "./components/PieChart";

export default {
  components: {
    PieChart
  },
  data() {
    return {
      active: {
        title: "平台活跃情况",
        label: { type: "类型", num: "人数" },
        level: [["全部用户"], ["活跃用户", "其他用户"]],
        rowsData: [
          { type: "全部用户", num: 4923 },
          { type: "活跃用户", num: 1393 },
          { type: "其他用户", num: 3530 }
        ]
      },
      school: {
        title: "平台现有校园用户",
        label: { type: "类型", num: "人数" },
        level: [["校园用户"], ["学生", "老师"]],
        rowsData: [
          { type: "校园用户", num: 1393 },
          { type: "老师", num: 69 },
          { type: "学生", num: 1324 }
        ]
      },
      statisticsStyle: {
        width: "100%",
        display: "flex",
        "justify-content": "space-around"
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.user {
  .el-card {
    border: none;
    .el-card__header {
      border-bottom: none;
      text-align: left;
    }
  }
}
</style>
