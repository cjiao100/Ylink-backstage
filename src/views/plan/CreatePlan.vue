<template>
  <el-form ref="form" :rules="rules" :model="form" label-width="80px">
    <el-form-item label="计划名称" prop="name">
      <el-input v-model="form.name" placeholder="请输入计划名称" />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入计划名称", trigger: "blur" },
          { min: 0, max: 10, message: "长度在 0 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    validate() {
      let flag = null;
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store.dispatch("setNewPlan", this.form);
        } else {
          flag = { data: "计划名称不能为空" };
        }
      });

      return flag;
    }
  }
};
</script>

<style></style>
