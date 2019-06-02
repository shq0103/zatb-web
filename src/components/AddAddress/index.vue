<template>
  <div class="addaddress">
    <div class="add">
      <el-form
        ref=" travelPlace"
        label-position="top"
        label-width="80px"
        :rules="rules"
        :model=" travelPlace"
      >
        <div class="edit_01">
          <el-form-item prop="name">
            <input
              class="edit_name"
              v-model="travelPlace.name"
              type="text"
              placeholder="请填写打卡点标题"
              maxlength="50"
            >
          </el-form-item>
        </div>
        <div class="edit_02">
          <span class="select_text">选择打卡的地点</span>
          <!-- <el-form-item style="margin:10px 0px;">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
          </el-form-item>-->
          <Bdmap :point="deafultPoint" style="margin:10px 0px;" @chosenPoint="chosenPoint"/>
        </div>
        <div class="map"></div>
        <div class="edit_02">
          <span class="select_text">选择打卡点美图</span>
        </div>
        <div class="img">
          <!-- <el-upload
            class="upload-demo"
            action="/api/File/UploadImg"
            :on-success="uploadSuccess"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>-->
          <!-- :on-preview="handlePictureCardPreview" -->
          <el-upload
            ref="uploadImg"
            action="/api/File/UploadImg"
            :headers="{Authorization:`Bearer ${token}`}"
            :on-remove="handleRemove"
            :on-success="uploadSuccess"
            list-type="picture-card"
            :file-list="tempList"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
        <div class="edit_02">
          <span class="select_text">请输入打卡点概述</span>
        </div>
        <el-form-item prop="contents">
          <quill-editor v-model="travelPlace.contents" :options="editorOption"></quill-editor>
        </el-form-item>
        <el-form-item>
          <el-button @click="cancel" type="success" plain>取 消</el-button>
          <el-button type="success" @click="submitForm(' travelPlace')">确 定</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
  </div>
</template>
<script>
import Bdmap from "@/components/Bdmap";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
import VueQuillEditor, { Quill } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module";
Quill.register("modules/imageDrop", ImageDrop);
export default {
  components: {
    quillEditor,
    Bdmap
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    deafultData: {}
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
      commentMenu: [
        "bold",
        "fontSize",
        "fontName",
        "foreColor",
        "emoticon",
        "image"
      ],
      travelPlace: {
        name: "",
        lat: null,
        lng: null,
        contents: "",
        imgList: []
      },
      rules: {
        name: [
          { required: true, message: "请输入打卡点名称", trigger: "blur" },
          { max: 50, message: "长度不超过50字符", trigger: "blur" }
        ],
        contents: [
          { required: true, message: "请填写打卡点内容", trigger: "blur" }
        ]
      },
      token: "asdsad",
      dialogVisible: false,
      dialogImageUrl: "",
      tempList: [],
      deafultPoint: {}
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    this.prepareEdit();
  },
  methods: {
    cancel: function() {
      this.$emit("cancel");
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    changeContents(contents) {
      this.travelPlace.contents = contents;
    },
    handleRemove(file, fileList) {
      this.travelPlace.imgList = this.travelPlace.imgList.filter(item => {
        item !== file.response.data;
      });
    },
    uploadSuccess: function(response, file, fileList) {
      this.travelPlace.imgList.push(response.data);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let copyTravelPlace = Object.assign({}, this.travelPlace);
          this.$emit("confirm", copyTravelPlace);
        } else {
          console.log("添加失败!");
          return false;
        }
      });
    },
    chosenPoint(point) {
      this.travelPlace.lat = point.lat;
      this.travelPlace.lng = point.lng;
    },
    prepareEdit() {
      if (this.isEdit) {
        Object.assign(this.travelPlace, this.deafultData);
        this.tempList = [];
        this.travelPlace.imgList.forEach(item => {
          this.tempList.push({ name: item, url: `/image${item}` });
        });
        this.deafultPoint = {
          lat: this.travelPlace.lat,
          lng: this.travelPlace.lng
        };
      }
    }
  },
  watch: {
    deafultData() {
      this.prepareEdit();
    }
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
