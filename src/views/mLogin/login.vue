<template>
  <el-card class="box-card loginForm">
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user-solid"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          autocomplete="off"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
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
import { eventBus } from "@/utils/eventBus";
export default {
  props: ["username"],
  data() {
    return {
      loginForm: {
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
    userSignin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          Auth(this.loginForm).then(resp => {
            if (resp.code === 0) {
              this.$message({
                message: resp.message,
                type: "success"
              });
              localStorage.setItem("token", resp.data.token);
              this.$router.push("/index");
              eventBus.$emit("loginSuccess");
            } else {
              this.$message({
                message: resp.message,
                type: "error"
              });
            }
          });
        }
      });
    }
  },
  watch: {
    username: {
      handler: function(val, oldval) {
        this.loginForm.username = val;
      }
    }
  }
};
</script>
<style>
/* .loginForm {
  width: 350px;
} */
</style>
