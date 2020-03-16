<template>
  <div class="container">
    <div class="item" v-for="apply in applyList" :key="apply.id">
      <div class="item-header">
        <el-avatar
          shape="circle"
          :size="60"
          fit="fill"
          :src="apply.user.header_url"
          class="item-avatar"
          style=""
        >
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
        <div class="item-msg">
          <p class="item-name">{{ apply.user.name }}</p>
          <p class="item-school">{{ apply.user.school }}</p>
        </div>
        <div class="item-data">
          <p>{{ apply.createData.split(" ")[0] }}</p>
          <p>{{ apply.createData.split(" ")[1] }}</p>
        </div>
      </div>
      <div class="item-content">{{ apply.message }}</div>
      <div class="item-footer">
        <el-button size="small" type="danger" plain>驳回申请</el-button>
        <el-button size="small" type="primary" plain>通过申请</el-button>
        <el-button size="small" type="primary">查看详细</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applyList: [
        {
          id: 1,
          user: {
            name: "程俊伟",
            school: "山西农业大学信息学院",
            header_url:
              "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          },
          message: "认证校园帐号",
          createData: "2020/03/03 23:56"
        },
        {
          id: 2,
          user: {
            name: "程俊伟",
            school: "山西农业大学信息学院",
            header_url:
              "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          },
          message: "认证校园帐号",
          createData: "2020/03/03 23:56"
        }
      ],
      fit: "fill",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: #c2c2c2;
  border-radius: 20px;
}

.container {
  text-align: left;
  height: calc(100vh - 240px);
  overflow: auto;

  .item {
    margin-bottom: 40px;
    .item-header {
      display: flex;
      .item-avatar {
        border: 5px solid #f8f9fe;
      }

      .item-msg {
        flex: 1;
        margin-left: 15px;
        line-height: 1.9;

        .item-name {
          margin: 0;
          font-weight: bold;
          font-size: 18px;
          color: #333;
        }
        .item-school {
          margin: 0;
          font-size: 14px;
          color: #999;
        }
      }

      .item-data {
        width: 100px;
        font-size: 14px;
        color: #999;
        text-align: right;
        margin-top: 10px;
        p {
          margin: 0 0 10px 0;
        }
      }
    }

    .item-content {
      margin: 15px 10px;
      padding: 10px;
      background-color: #f4f6ff;
      color: #999;
      font-size: 14px;
    }

    .item-footer {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
