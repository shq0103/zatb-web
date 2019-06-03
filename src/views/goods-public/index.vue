<template>
  <div class="goods-public">
    <div class="goods-public-content">
      <div class="g-p-title">
        <h3
          style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-bottom-right-radius: 20px;background: #8bc34a;"
        >发布闲趣</h3>
      </div>
      <div class="g-p-content">
        <el-form ref="form" label-width="80px" :model="form" :rules="rules">
          <el-form-item label="闲趣类别" prop="type">
            <el-select placeholder="请选择类别" v-model="form.type">
              <el-option label="服饰" value="1"></el-option>
              <el-option label="装备" value="2"></el-option>
              <el-option label="其他" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="新旧程度" prop="extent">
            <el-select placeholder="请选择新旧程度" v-model="form.extent">
              <el-option label="全新" value="100"></el-option>
              <el-option label="95成新" value="95"></el-option>
              <el-option label="9成新" value="90"></el-option>
              <el-option label="8成新" value="80"></el-option>
              <el-option label="7成新及以下" value="70"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="原始价格" prop="price">
            <el-input v-model="form.price">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item label="转卖价格" prop="sPrice">
            <el-input v-model="form.sPrice">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item label="所在地" prop="place">
            <el-input v-model="form.place"></el-input>
          </el-form-item>
          <el-form-item label="标题" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="详细介绍" prop="introduction">
            <quillEditor height="100px" v-model="form.introduction" :options="editorOption"/>
          </el-form-item>
          <el-form-item label="图片上传">
            <el-upload
              action="/api/File/UploadImg"
              list-type="picture-card"
              :headers="{Authorization:`Bearer ${token}`}"
              :on-remove="handleRemove"
              :on-success="handleSuccess"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt>
            </el-dialog>
          </el-form-item>
          <el-form-item label="联系方式" prop="num">
            <el-input v-model="form.num"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm">发布闲趣</el-button>
          </el-form-item>
        </el-form>
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
import { publicGoods } from "@/api/goods.js";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      total: 0,
      form: {
        name: null,
        introduction: null,
        price: null,
        extent: "",
        sPrice: null,
        type: null,
        num: "",
        place: "",
        imgList: [],
        viewCount: 0
      },
      rules: {
        name: [{ required: true, message: "请输入闲趣标题", trigger: "blur" }],
        introduction: [
          { required: true, message: "请输入闲趣介绍", trigger: "blur" }
        ],
        price: [{ required: true, message: "请输入原始价格", trigger: "blur" }],
        extent: [
          { required: true, message: "请输入新旧程度", trigger: "blur" }
        ],
        sPrice: [
          { required: true, message: "请输入转卖价格", trigger: "blur" }
        ],
        type: [{ required: true, message: "请输入闲趣类型", trigger: "blur" }],

        num: [{ message: "请输入联系方式", trigger: "blur" }],
        place: [{ required: true, message: "请输入所在地", trigger: "blur" }]
      },
      token: ""
    };
  },
  created() {
    this.token = localStorage.getItem("token");
  },
  methods: {
    submitForm() {
      // this.postForm.display_time = parseInt(this.display_time / 1000);
      console.log(this.form);

      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          publicGoods(this.form).then(resp => {
            if (resp.code === 0) {
              this.$notify({
                title: "成功",
                message: "发布闲趣成功",
                type: "success",
                duration: 2000
              });
            }
            this.$refs.from.resetFields();
            this.$refs.uploadImg.clearFiles();
          });
          this.loading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      this.form.imgList = this.form.imgList.filter(item => {
        item !== file.response.data;
      });
    },
    handleSuccess(response, file, fileList) {
      this.form.imgList.push(response.data);
    }
  }
};
</script>
<style scoped>
.goods-public-content {
  /* padding: 50px 200px 0 200px; */
  min-height: 500px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.g-p-content {
  padding: 50px 200px 15px 200px;
}
</style>
