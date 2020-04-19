<template>
  <el-card class="plan" shadow="never">
    <el-row>
      <el-col :span="2">
        <el-menu
          :default-active="currentPlan.id"
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
        <h2>{{ currentPlan.name }}</h2>
        <el-transfer
          class="transfer"
          v-model="wordListOnPlan"
          :data="wordListOutPlan"
          :titles="['未加入计划', '计划中']"
          target-order="unshift"
          @change="wordListChange"
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
      wordListOutPlan: [],
      currentPlan: {}
    };
  },
  mounted() {
    this.getPlanList();
    this.getWordList();
  },
  methods: {
    ...mapActions([
      "getPlanList",
      "getWordListByPlanId",
      "getWordList",
      "addWordOnPlan",
      "deleteWordOnPlan"
    ]),
    selectPlan(index) {
      this.getWordListByPlanId(index);
    },
    wordListChange(value, direction, list) {
      if (direction === "right") {
        // 添加
        this.addWordOnPlan({ list, id: this.currentPlan.id });
      } else {
        // 删除
        this.deleteWordOnPlan({ list, id: this.currentPlan.id });
      }
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
      this.wordListOutPlan = newVal;
    },
    planList(newVal) {
      this.currentPlan = newVal[0];
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
