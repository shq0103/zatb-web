<template>
  <div class="userinfo">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #8bc34a;"
          >完善资料</h3>

          <div class="ac-public-form2-2">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
              <el-form-item label="修改头像" prop="avatar">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="输入昵称" prop="nickname">
                <el-input v-model="form.nickname"></el-input>
              </el-form-item>
              <el-form-item label="地区" prop="place">
                <el-input v-model="form.place"></el-input>
              </el-form-item>
              <el-form-item label="出生日期" prop="birthday">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    style="width: 218%;"
                    v-model="form.birthday"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="性别" prop="gender">
                <el-radio v-model="form.gender" :label="1" border>男</el-radio>
                <el-radio v-model="form.gender" :label="0" border>女</el-radio>
              </el-form-item>
              <el-form-item label="真实姓名" prop="trueName">
                <el-input v-model="form.trueName"></el-input>
              </el-form-item>
              <el-form-item label="身份证" prop="idCard">
                <el-input v-model="form.idCard"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="mail">
                <el-input v-model="form.mail"></el-input>
              </el-form-item>
              <el-form-item label="个人简介" prop="intro">
                <el-input type="textarea" v-model="form.intro"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="submitForm('form')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserDetail, updateUser } from "@/api/user.js";
export default {
  data() {
    return {
      form: {
        id: 0,
        username: "string",
        password: "string",
        nickname: "string",
        role: "string",
        avatar: "string",
        birthday: 0,
        gender: 0,
        trueName: "string",
        idCard: "string",
        phone: "string",
        mail: "string",
        intro: "string",
        place: "string",
        lastTime: 0,
        status: 0
      },
      rules: {
        idCard: [
          { required: true, message: "请填写身份证", trigger: "blur,change" },
          {
            min: 18,
            max: 18,
            message: "请输入正确的身份证号",
            trigger: "blur,change"
          }
        ],
        place: [
          { required: true, message: "请填写活动区域", trigger: "blur,change" }
        ],
        gender: [
          { required: true, message: "请选择性别", trigger: "blur,change" }
        ],
        trueName: [
          { required: true, message: "请填写真实姓名", trigger: "blur,change" }
        ],
        phone: [
          { required: true, message: "请填写手机号", trigger: "blur,change" }
        ]
      }
    };
  },
  created() {
    getUserDetail(1111).then(resp => {
      Object.assign(this.form, resp.data);
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.form.birthday = Date.parse(new Date(this.form.birthday));
          updateUser(this.form).then(resp => {
            this.$notify({
              title: "成功",
              message: "提交成功",
              type: "success",
              duration: 2000
            });
          });
        } else {
          this.$notify({
            title: "失败",
            message: "提交失败",
            type: "warning",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.el-form-item img {
  height: 100px;
}
.update-img {
  height: 100px;
  margin-top: -10px;
  /* background: #f8f8f8 url(../images/tubu_bg.png) no-repeat -387px -326px; */
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #ccc;
  width: 100px;
  margin-left: 30px;
}
.ac-public-form2-2 {
  margin: 30px 100px 0px 100px;
}
.userinfo-select {
  margin: 0 15px !important;
}
.ac-public-form1 h3 {
  margin: 0;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 20px !important;
  /* background-color: #99cccc !important; */
}
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 120px;
  margin: auto;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>
