<template>
  <el-card class="box-card loginForm">
    <el-form :model="signupForm" :rules="rules" ref="signupForm">
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user-solid"
          v-model="signupForm.username"
          placeholder="请输入用户名"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="mail">
        <el-input
          prefix-icon="el-icon-message"
          v-model="signupForm.mail"
          placeholder="请输入邮箱"
          autocomplete="off"
          type="mail"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="signupForm.password"
          prefix-icon="el-icon-lock"
          type="password"
          placeholder="请输入登录密码"
          clearable
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%" :loading="loading" @click="userSigin" type="success">注 册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { Signin } from "@/api/login";
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        GetUserName({ username: value }).then(resp => {
          if (resp.message === null) {
            callback();
          } else {
            callback(new Error(resp.message));
          }
        });
      }
    };
    const validateMail = (rule, value, callback) => {
      let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!pattern.test(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!pattern.test(value)) {
        callback(new Error("至少1个大写字母，1个小写字母和1个数字"));
      } else {
        callback();
      }
    };
    return {
      signupForm: {
        username: "",
        password: "",
        mail: ""
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: ["blur", "change"] }
        ],
        mail: [{ validator: validateMail, trigger: ["blur", "change"] }],
        password: [
          {
            required: true,
            message: "请输入登录密码",
            trigger: ["blur", "change"]
          },
          { min: 8, message: "密码长度6位以上", trigger: ["blur", "change"] },
          { validator: validatePassword, trigger: ["blur", "change"] }
        ]
      },
      loading: false
    };
  },
  methods: {
    userSigin: function() {
      this.$refs.signupForm.validate(valid => {
        if (valid) {
          this.loading = true;
          Signin(this.signinForm).then(resp => {
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
        }
      });
    }
  }
};
</script>
<style scoped>
</style>


