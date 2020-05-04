<template>
  <el-card class="message-card" shadow="nerver">
    <div slot="header" class="card-header">
      <span>代办事项</span>
      <el-button
        class="add-btn"
        icon="el-icon-plus"
        type="primary"
        @click="openCreateTodoDialog"
        circle
      >
      </el-button>
    </div>
    <div>
      <ul class="todo-list">
        <li v-for="todo in todoList" :key="todo._id">
          <div>
            <el-tag effect="dark" type="warning" size="mini">
              {{ todo.post ? "待审核" : "代办" }}
            </el-tag>
            <span class="message">
              {{ todo.title }}
            </span>
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-check"
              circle
              plain
              @click="completeTodo(todo._id)"
            ></el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-close"
              circle
              plain
              @click="deleteTodo(todo._id)"
            ></el-button>
          </div>
        </li>
      </ul>
      <div class="btn-group">
        <el-button
          class="next-btn"
          icon="el-icon-arrow-left"
          size="mini"
        ></el-button>
        <el-button
          class="next-btn"
          icon="el-icon-arrow-right"
          size="mini"
        ></el-button>
      </div>
    </div>
    <el-dialog :visible.sync="createTodoDialogVisble">
      <create-todo ref="create" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeCreateTodoDialog">取 消</el-button>
        <el-button type="primary" @click="createTodo">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { DeleteTodo, CompleteTodo } from "@/api/workbench";
import CreateTodo from "./CreateTodo";
export default {
  components: {
    CreateTodo
  },
  data() {
    return {
      createTodoDialogVisble: false
    };
  },
  mounted() {
    this.getTodoList();
  },
  computed: {
    ...mapGetters(["todoList"])
  },
  methods: {
    ...mapActions(["getTodoList", "addTodo"]),
    async completeTodo(todoId) {
      try {
        await CompleteTodo(todoId);
        this.getTodoList();
        this.$message("完成");
      } catch (error) {
        this.$message.error("失败");
      }
    },
    async deleteTodo(todoId) {
      try {
        await DeleteTodo(todoId);
        this.getTodoList();
        this.$message("完成");
      } catch (error) {
        this.$message.error("失败");
      }
    },
    async createTodo() {
      let error = this.$refs.create.validate();
      if (error) {
        return this.$message.error(error.data);
      }

      error = await this.addTodo();
      if (error) {
        return this.$message.error(error.data);
      }

      this.$message("新建成功");
      this.closeCreateTodoDialog();
      this.getTodoList();
    },
    closeCreateTodoDialog() {
      this.createTodoDialogVisble = false;
    },
    openCreateTodoDialog() {
      this.createTodoDialogVisble = true;
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
