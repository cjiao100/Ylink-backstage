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
        class="upload"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
      <el-input
        placeholder="请输入标题"
        class="input"
        size="large"
        v-model="title"
      />
      <div ref="menus" class="menus" style="text-align:left"></div>
      <div ref="editor" class="editor" style="text-align:left"></div>
    </el-card>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "create",
  data() {
    return {
      title: "",
      editorContent: ""
    };
  },
  mounted() {
    var editor = new E(this.$refs.menus, this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.customConfig.uploadImgServer = "/upload";
    editor.customConfig.uploadImgMaxLength = 5;
    editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024;
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
  methods: {}
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

    .menus {
      position: -webkit-sticky;
      position: sticky;
      top: 0px;
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
