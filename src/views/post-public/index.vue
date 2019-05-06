<template>
  <div class="post-public">
    <div class="post-public-content">
      <div class="p-p-title">
        <h3
          style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-bottom-right-radius: 20px;background: #8bc34a;"
        >发表帖子</h3>
      </div>
      <div class="p-p-content">
        <div class="p-p-form">
          <el-form label-position="top">
            <el-form-item>
              <el-col :span="6">
                <el-form-item>
                  <el-select placeholder="选择分类信息">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="2" style="height:10px"></el-col>
              <el-col :span="16">
                <el-form-item>
                  <el-input placeholder="请输入标题" style="width:100%;"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="内容">
              <!-- <el-input type="textarea"></el-input> -->
              <TextEditor :menu="commentMenu"/>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="onSubmit">发布帖子</el-button>
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
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.p-p-content {
  padding: 30px 150px 5px 150px;
}
.p-p-form {
  text-align: left;
}
</style>
