<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">
      <i class="el-icon-s-home"></i>
    </el-breadcrumb-item>
    <template v-if="matched.length !== 0">
      <el-breadcrumb-item
        v-for="item in matched"
        :key="item.path"
        :to="{ path: item.path }"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      matched: []
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route: "getBreadcrumb"
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.map(item => ({
        path: item.path,
        name: item.name
      }));

      matched.shift();
      this.matched = matched;
    }
  }
};
</script>

<style></style>
