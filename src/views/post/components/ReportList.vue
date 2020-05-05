<template>
  <div id="report" class="container">
    <ul class="list">
      <template v-if="reportList.length !== 0">
        <li class="item" v-for="(item, index) in reportList" :key="index">
          <div class="item-info">
            <p class="name">
              <span class="serial">{{ index + 1 }}</span>
              <span class="text">{{ item.title }}</span>
            </p>
            <p class="content">{{ item.content }}</p>
          </div>
          <div class="item-left">
            <el-button
              class="jump"
              type="danger"
              icon="el-icon-close"
              plain
              circle
              @click="nopass(item.todo)"
            ></el-button>
            <el-button
              class="jump"
              type="primary"
              icon="el-icon-check"
              plain
              circle
              @click="pass(item.todo)"
            ></el-button>
          </div>
        </li>
      </template>
      <empty v-else />
    </ul>
  </div>
</template>

<script>
import { DeleteTodo, PassReport } from "@/api/workbench";
import Empty from "@/components/Empty";

export default {
  props: {
    reportList: Array
  },
  components: {
    Empty
  },
  methods: {
    async pass(todoId) {
      try {
        await PassReport(todoId);
        this.$message("完成");
        this.$emit("refresh");
      } catch (error) {
        this.$message.error("失败");
      }
    },
    async nopass(todoId) {
      try {
        await DeleteTodo(todoId);
        this.$message("完成");
        this.$emit("refresh");
      } catch (error) {
        this.$message.error("失败");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: auto;
  height: calc(calc(100vh / 2) - 200px);

  .list {
    padding-left: 0;
    list-style: none;
    margin: 0;

    .item {
      text-align: left;
      display: flex;
      margin: 0 0 25px;
      // padding: 5px;
      border-radius: 5px;
      border: 1px solid #fff;

      .item-info {
        flex: 1;
        padding: 0 10px;
        overflow: hidden;

        .name {
          margin: 0;
          font-weight: bold;
          font-size: 16px;

          .text {
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 90%;
            line-height: 35px;
            margin-left: 10px;
          }

          .serial {
            display: inline-block;
            text-align: center;
            background: #108888;
            border-radius: 50%;
            width: 26px;
            height: 26px;
            line-height: 25px;
            color: #fff;
            font-weight: bold;
            vertical-align: super;
            overflow: hidden;
          }
        }

        .content {
          color: #999;
          font-size: 14px;
          margin: 0;
          background: #f8f9fe;
          padding: 10px;
          border-radius: 5px;
          line-height: 1.5;
        }

        .item-num {
          margin: 0;
          font-size: 12px;
          color: #999;
          text-align: left;

          span {
            margin-right: 10px;
          }
        }
      }

      .item-left {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
        line-height: 40px;

        .jump {
          width: 30px;
          height: 30px;
          padding: 0;
        }
      }
    }
  }
}
</style>
<style lang="scss">
#report {
  .el-button + .el-button {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
