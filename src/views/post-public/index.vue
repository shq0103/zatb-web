<template>
  <div class="post-public">
    <div class="post-public-content">
      <div class="p-p-title">
        <h3
          style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-bottom-right-radius: 20px;background: #99cccc;"
        >发表帖子</h3>
      </div>
      <div class="p-p-content">
        <div class="p-p-form">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-select placeholder="选择分类信息">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入标题" style="width:450px;"></el-input>
            </el-form-item>
            <el-form-item>还可以输入80个字符</el-form-item>
          </el-form>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item style="margin:0px;text-align:left;">发表评论</el-form-item>
            <el-form-item>
              <!-- <el-input type="textarea"></el-input> -->
              <TextEditor :menu="commentMenu"/>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="onSubmit">发布帖子</el-button>
              <el-button type="success" @click="onSubmit" plain>保存草稿</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextEditor from "@/components/TextEditor";
export default {
  components: {
    TextEditor
  },
  data() {
    return {
      commentMenu: [
        "bold",
        "fontSize",
        "fontName",
        "foreColor",
        "emoticon",
        "image"
      ]
    };
  }
};
</script>
<style scoped>
.post-public-content {
  min-height: 500px;
  background: #fff;
  padding: 0 0 10px 0;
}
.p-p-content {
  margin: 20px 60px;
}
.p-p-form {
  text-align: left;
}
</style>