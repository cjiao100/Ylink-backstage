<template>
  <div class="empty">
    <span>
      <img src="../assets/empty.png" alt="" />
    </span>
    <span class="empty-text">暂无数据</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-direction: column;

  .empty-text {
    color: rgba(0, 0, 0, 0.25);
    font-size: 14px;
  }
}
</style>
