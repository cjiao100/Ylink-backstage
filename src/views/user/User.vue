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
            <div>
              <p>平台现有用户数量</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="11">
          <el-card
            class="statistics"
            shadow="never"
            :body-style="statisticsStyle"
          >
            <div>
              <p>平台现有校园用户</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="7" style="background-color: #fff">321</el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
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
