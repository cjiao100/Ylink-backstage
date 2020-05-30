<template>
  <!-- <el-row></el-row> -->
  <div id="create">
    <el-card
      class="card"
      shadow="never"
      :body-style="{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 140px)'
      }"
    >
      <el-upload
        v-if="!showCoverImg"
        class="upload"
        drag
        action="/ylink/upload/article"
        name="photos"
        :show-file-list="false"
        :headers="{
          Authorization: token
        }"
        :on-success="uploadSuccess"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">添加封面</div>
      </el-upload>
      <div v-else class="cover">
        <img class="cover_img" :src="coverImg" />
        <span class="cover_img-actions">
          <span class="cover_icon" @click="handlePictureCardPreview()">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span class="cover_icon" @click="handleRemove()">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
      <el-input
        placeholder="请输入标题"
        class="input"
        size="large"
        v-model="title"
      />
      <div ref="menus" style="text-align:left"></div>
      <div ref="editor" class="editor" style="text-align:left"></div>
      <div style="text-align: right">
        <el-button type="primary" size="small" @click="release">发布</el-button>
      </div>
    </el-card>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="coverImg" />
    </el-dialog>
  </div>
</template>

<script>
import E from "wangeditor";
import { PostArticle } from "@/api/article";

export default {
  name: "create",
  data() {
    return {
      title: "",
      editorContent: "",
      dialogVisible: false,
      showCoverImg: false,
      token: localStorage.getItem("token"),
      coverImg: ""
    };
  },
  mounted() {
    var editor = new E(this.$refs.menus, this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.customConfig.uploadImgServer = "/ylink/upload/article";
    editor.customConfig.uploadImgMaxLength = 5;
    editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024;
    editor.customConfig.uploadImgHeaders = { Authorization: this.token };
    editor.customConfig.uploadFileName = "photos";
    editor.customConfig.zIndex = 1;
    editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      // "table", // 表格
      // "video", // 插入视频
      "code" // 插入代码
      // "undo", // 撤销
      // "redo" // 重做
    ];
    editor.create();
  },
  methods: {
    handleRemove() {
      this.showCoverImg = false;
      this.coverImg = "";
    },
    handlePictureCardPreview() {
      this.dialogVisible = true;
    },
    uploadSuccess(response, file) {
      if (file.status === "success") {
        this.showCoverImg = true;
        this.coverImg = response.data[0];
      }
    },
    validate(data) {
      if (!data.title) {
        return "标题不能为空";
      }
      if (!data.content) {
        return "内容不能为空";
      }
      if (!data.coverImage) {
        return "封面不能为空";
      }

      return false;
    },
    async release() {
      const params = {
        title: this.title,
        content: this.editorContent,
        coverImage: this.coverImg
      };
      const error = this.validate(params);
      if (error) {
        this.$message.error(error);
      } else {
        const article = await PostArticle(params);
        console.log(article);
        this.$router.push("./content/article");
        this.$message({
          message: "发表成功",
          type: "success"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#create {
  flex: 1;
  display: flex;
  justify-content: center;

  .card {
    border: none;
    width: 660px;

    .cover {
      position: relative;

      .cover_img {
        width: 100%;
        border-radius: 6px;
      }

      .cover_img-actions {
        position: absolute;
        width: 100%;
        height: calc(100% - 4px);
        left: 0;
        top: 0;
        cursor: default;
        text-align: center;
        color: #fff;
        opacity: 0;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 0.3s;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .cover_icon {
          font-size: 30px;
        }

        &:hover {
          opacity: 1;
        }
      }
    }

    .editor {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
<style lang="scss">
#create {
  .input {
    .el-input__inner {
      border: none;
      font-size: 32px;
      font-weight: bold;
      line-height: 1.4;
      height: 70px;

      // ::placeholder,
      // ::-moz-placeholder,
      // ::-webkit-input-placeholder {
      //   font-size: 26px;
      //   font-weight: bold;
      // }
    }
  }

  .upload {
    .el-upload {
      width: 100%;
      .el-upload-dragger {
        width: 100%;
        background-color: #f8f9fe;
      }
    }
  }

  .w-e-text {
    flex: 1;
  }
}
</style>
