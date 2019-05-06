<template>
  <div class="addaddress">
    <div class="add">
      <el-form ref="form" label-position="top" label-width="80px">
        <div class="edit_01">
          <el-form-item>
            <input class="edit_name" type="text" placeholder="请填写打卡点标题" maxlength="50" />
          </el-form-item>
        </div>
        <div class="edit_02">
          <span class="select_text">选择打卡的地点</span>
          <Bdmap />
        </div>
        <div class="map"></div>
        <div class="edit_02">
          <span class="select_text">选择打卡点美图</span>
        </div>
        <div class="img">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div class="edit_02">
          <span class="select_text">请输入打卡点概述</span>
        </div>
        <el-form-item>
          <TextEditor :menu="commentMenu" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import TextEditor from "@/components/TextEditor";
import Bdmap from "@/components/Bdmap";
export default {
  components: {
    TextEditor,
    Bdmap
  },
  data() {
    return {
      commentMenu: ["bold", "fontSize", "fontName", "foreColor", "emoticon"]
    };
  }
};
</script>
<style scoped>
.edit_name {
  width: 100%;
  height: 50px;
  line-height: 60px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 20px;
  color: #75b628;
  border: 0;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-bottom: 1px solid #ccc;
  /* float: left; */
}
.add {
  padding: 10px 60px;
}
.edit_02 {
  margin: 10px 0px;
  text-align: left;
  font-size: 13px;
}
.img {
  border: 1px solid #ccc;
  padding: 20px 0;
}
</style>
<style>
.el-dialog__body {
  padding: 0px 20px !important;
}
</style>
