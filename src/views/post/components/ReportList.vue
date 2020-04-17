<template>
  <div id="report" class="container">
    <ul class="list">
      <li class="item" v-for="(item, index) in topicList" :key="index">
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
          ></el-button>
          <el-button
            class="jump"
            type="primary"
            icon="el-icon-check"
            plain
            circle
          ></el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topicList: [
        {
          title:
            "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
          content:
            "test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容"
        },
        {
          title: "测试测试测试测试粗诶粗诶粗诶是",
          content:
            "test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容"
        },
        {
          title:
            "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
          content:
            "test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容test内容"
        }
      ]
    };
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
