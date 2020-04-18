<template>
  <div class="container">
    <ul class="list">
      <li class="item" v-for="(item, index) in topicList" :key="index">
        <span class="serial">{{ index + 1 }}</span>
        <div class="item-info">
          <span class="name">{{ item.name }}</span>
          <p class="item-num">
            <span>浏览 {{ item.info.browse }}</span>
            <span>帖子 {{ item.info.post }}</span>
          </p>
        </div>
        <div class="item-left">
          <el-button class="jump" icon="el-icon-right" circle></el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    topicList: Array
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: auto;
  height: calc(calc(100vh / 2) - 200px);
}
.list {
  padding-left: 20px;
  list-style: none;
  margin: 0;

  .item {
    text-align: left;
    display: flex;
    margin: 0 0 25px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #fff;

    &:hover {
      background-color: #f8f9fe;
      border: 1px solid #eee;
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
    }

    .item-info {
      margin-left: 10px;
      .name {
        margin: 0;
        line-height: 25px;
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
      flex: 1;
      text-align: right;
      line-height: 40px;
      .jump {
        width: 30px;
        height: 30px;
        padding: 0;
      }
    }
  }
}
</style>
