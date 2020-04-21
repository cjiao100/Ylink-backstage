<template>
  <el-card class="plan" shadow="never">
    <el-row type="flex">
      <el-col :span="2" class="menu">
        <el-button type="primary" size="small">
          <router-link to="/content/article/create">新增文章</router-link>
        </el-button>
        <el-menu
          :default-active="defaultPlanId"
          class="menu-vertical"
          @select="selectPlan"
        >
          <el-menu-item
            v-for="plan in planList"
            :index="plan.id"
            :key="plan.id"
          >
            <span slot="title">{{ plan.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="11" class="config">
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
      <el-col :span="11" class="search">
        <div class="input">
          <el-input v-model="query" size="small" placeholder="搜索单词">
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="searchWord"
            ></el-button>
          </el-input>
        </div>
        <div class="result">
          <p v-if="!word">如列表中没有你项添加的单词,请在这里搜索后添加</p>
          <div v-else>
            <h3>{{ word.query }}</h3>
            <div>
              {{ word.basic.explains.toString() }}
            </div>
          </div>
        </div>
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
      currentPlan: {},
      defaultPlanId: "",
      query: ""
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
      "deleteWordOnPlan",
      "translate"
    ]),
    selectPlan(index) {
      this.getWordListByPlanId(index);
      this.currentPlan = {
        name: this.$store.getters.currentPlanName(index),
        id: index
      };
    },
    wordListChange(value, direction, list) {
      if (direction === "right") {
        // 添加
        this.addWordOnPlan({ list, id: this.currentPlan.id });
      } else {
        // 删除
        this.deleteWordOnPlan({ list, id: this.currentPlan.id });
      }
    },
    searchWord() {
      const wrod = {
        query: this.query
      };

      this.translate(wrod);
    }
  },
  computed: {
    ...mapGetters(["planList", "wordOnPlan", "wordList", "word"])
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
      this.defaultPlanId = newVal[0].id;
      this.getWordListByPlanId(this.defaultPlanId);
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
  .menu {
    display: flex;
    flex-direction: column;
    .menu-vertical {
      flex: 1;
    }
  }
  .config {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: solid 1px #e6e6e6;

    .transfer {
      text-align: left;
      margin-left: 20px;
    }
  }

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    .input {
      width: 300px;
      height: 50px;
    }

    .result {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: #737373;
        font-size: 20px;
      }
    }
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
