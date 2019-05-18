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
                  <el-select v-model="postForm.type" placeholder="选择分类信息">
                    <el-option label="户外问答" value="户外问答"></el-option>
                    <el-option label="装备问答" value="装备问答"></el-option>
                    <el-option label="路线问答" value="路线问答"></el-option>
                    <el-option label="旅途风光" value="旅途风光"></el-option>
                    <el-option label="其他" value="其他"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="2" style="height:10px"></el-col>
              <el-col :span="16">
                <el-form-item>
                  <el-input
                    v-model="postForm.title"
                    :contents="postForm.contents"
                    placeholder="请输入标题"
                    style="width:100%;"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="内容">
              <QuillEditor @change="changeContent"/>
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
import QuillEditor from "@/components/QuillEditor";
import { publishPost } from "@/api/login";

export default {
  components: {
    QuillEditor
  },
  data() {
    return {
      postForm: {
        title: "",
        contents: "",
        type: ""
      }
    };
  },
  methods: {
    onSubmit: function() {
      console.log(this.postForm);
      publishPost(this.postForm).then(resp => {
        if (resp.data.code === 0) {
          this.$message({
            message: resp.data.message,
            type: "success"
          });
        } else {
          this.$message({
            message: resp.data.message,
            type: "error"
          });
        }
      });
    },
    changeContent: function(val) {
      this.postForm.contents = val;
    }
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
