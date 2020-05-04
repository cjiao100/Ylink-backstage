<template>
  <el-form ref="form" :rules="rules" :model="form" label-width="80px">
    <el-form-item label="代办" prop="title">
      <el-input v-model="form.title" placeholder="请输入代办内容" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入代办内容", trigger: "blur" },
          { min: 0, max: 20, message: "长度在 0 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    validate() {
      let flag = null;
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store.dispatch("setNewTodo", this.form);
        } else {
          flag = { data: "代办内容不能为空" };
        }
      });

      return flag;
    }
  }
};
</script>

<style></style>
