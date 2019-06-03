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
          <el-form label-position="top" ref="form" :model="form" :rules="rules">
            <el-form-item>
              <el-col :span="6">
                <el-form-item prop="type">
                  <el-select v-model="form.type" placeholder="选择分类信息">
                    <el-option label="户外问答" value="1"></el-option>
                    <el-option label="装备问答" value="2"></el-option>
                    <el-option label="路线问答" value="3"></el-option>
                    <el-option label="旅途风光" value="4"></el-option>
                    <el-option label="其他" value="5"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="2" style="height:10px"></el-col>
              <el-col :span="16">
                <el-form-item prop="title">
                  <el-input v-model="form.title" placeholder="请输入标题" style="width:100%;"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="内容">
              <quillEditor height="100px" v-model="form.contents" :options="editorOption"/>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="submitForm">发布帖子</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
import VueQuillEditor, { Quill } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module";
Quill.register("modules/imageDrop", ImageDrop);
import { publishPost } from "@/api/login";
import { publicPost } from "@/api/post.js";

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            [{ size: ["small", false, "large"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [{ header: 1 }, { header: 2 }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"]
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageDrop: true
        }
      },
      postForm: {
        title: "",
        contents: "",
        type: ""
      },
      form: {
        id: 0,
        userId: 0,
        title: "",
        contents: "",
        date: 0,
        type: "",
        viewCount: 0,
        replyDate: 0
      },
      rules: {
        title: [
          { required: true, message: "请输入帖子名称", trigger: "blur" },
          { max: 50, message: "长度不超过50字符", trigger: "blur" }
        ],
        type: [{ required: true, message: "请选择帖子类型", trigger: "blur" }],
        contents: [
          { required: true, message: "请选择帖子内容", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      // this.postForm.display_time = parseInt(this.display_time / 1000);
      console.log(this.form);
      // this.form.startDate = new Date(this.form.startDate).getTime();
      // this.form.endDate = new Date(this.form.endDate).getTime();
      // this.form.deadline = new Date(this.form.deadline).getTime();
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          publicPost(this.form).then(resp => {
            if (resp.code === 0) {
              this.$notify({
                title: "成功",
                message: "发布帖子成功",
                type: "success",
                duration: 2000
              });
            }
            this.$refs.from.resetFields();
            // this.$refs.uploadImg.clearFiles();
            this.$router.push("/post");
          });
          this.loading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
