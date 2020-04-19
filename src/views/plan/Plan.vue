<template>
  <el-card class="plan" shadow="never">
    <el-row>
      <el-col :span="2">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="selectPlan"
        >
          <el-menu-item>
            <el-button slot="title" type="primary" size="small">
              <router-link to="/content/article/create">新增文章</router-link>
            </el-button>
          </el-menu-item>
          <el-menu-item
            v-for="plan in planList"
            :index="plan.id"
            :key="plan.id"
          >
            <span slot="title">{{ plan.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <h2>计划1</h2>
        <el-transfer
          class="transfer"
          v-model="wordListOnPlan"
          :data="wordListOutPlan"
          :titles="['未加入计划', '计划中']"
          target-order="unshift"
          filterable
        ></el-transfer>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      wordListOnPlan: [],
      wordListOutPlan: []
    };
  },
  mounted() {
    this.getPlanList();
    this.getWordList();
  },
  methods: {
    ...mapActions(["getPlanList", "getWordListByPlanId", "getWordList"]),
    selectPlan(index) {
      this.getWordListByPlanId(index);
    }
  },
  computed: {
    ...mapGetters(["planList", "wordOnPlan", "wordList"])
  },
  watch: {
    wordOnPlan(newVal) {
      this.wordListOnPlan = newVal;
    },
    wordList(newVal) {
      console.log(newVal);
      this.wordListOutPlan = newVal;
    }
  }
};
</script>

<style lang="scss" scoped>
.plan {
  .card-header {
    color: #333;
    font-weight: 600;
    font-size: 18px;
  }
  .transfer {
    text-align: left;
    margin-left: 20px;
  }
}
</style>

<style lang="scss">
.plan {
  border: none;
  .el-card__header {
    border-bottom: none;
    text-align: left;
  }
}
</style>
