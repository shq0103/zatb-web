<template>
  <el-card class="box-card loginForm">
    <el-form :model="signinForm" :rules="rules" ref="signinForm">
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user-solid"
          v-model="signinForm.username"
          placeholder="请输入用户名"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="signinForm.password"
          prefix-icon="el-icon-lock"
          type="password"
          placeholder="请输入密码"
          clearable
          autocomplete="off"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%" type="success" :loading="loading" @click="userSignin">登 录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { Signin, Auth } from "@/api/login";
export default {
  data() {
    return {
      signinForm: {
        password: "",
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          { min: 6, message: "密码长度6位以上", trigger: "change" }
        ]
      },
      loading: false
    };
  },

  methods: {
    userSign: function() {
      if (this.signinForm.username === "") {
        this.$message({
          message: "用户名不能为空",
          type: "error"
        });
        return;
      }
      if (this.signinForm.password === "") {
        this.$message({
          message: "密码不能为空",
          type: "error"
        });
        return;
      }
      if (this.signinForm.mail === "") {
        this.$message({
          message: "邮箱不能为空",
          type: "error"
        });
        return;
      }
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
    },
    userLogin: function() {
      if (this.loginForm.username === "") {
        this.$message({
          message: "用户名不能为空",
          type: "error"
        });
        return;
      }
      if (this.loginForm.password === "") {
        this.$message({
          message: "密码不能为空",
          type: "error"
        });
        return;
      }
      Auth(this.loginForm).then(resp => {
        if (resp.data.code === 0) {
          this.$message({
            message: resp.data.message,
            type: "success"
          });
          localStorage.setItem("token", resp.data.data.token);
          this.$router.push("/index");
        } else {
          this.$message({
            message: resp.data.message,
            type: "error"
          });
        }
      });
    },
    userSignin() {
      this.$refs.signinForm.validate(valid => {
        if (valid) {
          Auth(this.loginForm).then(resp => {
            if (resp.data.code === 0) {
              this.$message({
                message: resp.data.message,
                type: "success"
              });
              localStorage.setItem("token", resp.data.data.token);
              this.$router.push("/index");
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
<style>
/* .loginForm {
  width: 350px;
} */
</style>
