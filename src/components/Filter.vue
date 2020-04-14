<template>
  <div class="filter">
    <el-select
      v-model="value"
      size="small"
      clearable
      placeholder="请选择用户身份"
    >
      <el-option
        v-for="item in identities"
        :key="item.key"
        :label="item.value"
        :value="item.key"
      >
      </el-option>
    </el-select>
    <el-input
      class="input"
      size="small"
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="search"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      identities: [
        { value: "超级用户", key: 0 },
        { value: "普通用户", key: 1 },
        { value: "校园用户-学生", key: 2 },
        { value: "校园用户-老师", key: 3 }
      ],
      value: "",
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  justify-content: space-between;
  width: 480px;
}
.input {
  width: 223px;
}
</style>
