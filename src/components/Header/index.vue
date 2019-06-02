<template>
  <div class="header">
    <img :style="{ height: '60px' }" class="logo" src="../../assets/logo4.jpg">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#75b628"
      text-color="#333"
      @select="clickMenuItem"
      :default-active="activeIndex"
    >
      <el-menu-item index="/index" :style="{ fontSize: '16px' }">首页</el-menu-item>
      <el-menu-item index="/activity" :style="{ fontSize: '16px' }">活动</el-menu-item>
      <el-submenu index="/new">
        <template slot="title" :style="{ fontSize: '16px' }">资讯</template>

        <el-menu-item index="/new">徒步新闻</el-menu-item>
        <el-menu-item index="/knowledge">户外知识</el-menu-item>
      </el-submenu>
      <el-menu-item index="/post" :style="{ fontSize: '16px' }">论坛</el-menu-item>
      <el-menu-item index="/travels" :style="{ fontSize: '16px' }">路书</el-menu-item>
      <el-menu-item index="/goods" :style="{ fontSize: '16px' }">闲趣</el-menu-item>
    </el-menu>

    <el-input
      :style="{ width: '250px',marginLeft:'10px'}"
      placeholder="搜索目的地/活动"
      class="input-with-select"
      size="medium"
    >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <router-link v-if="!isLogin" :to="{ path: '/mLogin', query: { isLogin: 1 }}">
      <el-button
        :style="{ margin: '0 0 0 50px', color: '#333' }"
        type="text"
        @click="dialogFormVisible = true"
      >登录</el-button>
    </router-link>
    <div v-if="!isLogin" class="border">|</div>
    <router-link v-if="!isLogin" :to="{ path: '/mLogin', query: { isLogin: 0 }}">
      <el-button :style="{ color: '#333' }" type="text">注册</el-button>
    </router-link>
    <router-link v-if="isLogin" to="/user-center">
      <el-button :style="{ margin: '0 0 0 50px', color: '#333' }" type="text">
        <img
          src="../../assets/usercenter.png"
          style=" height: 16px;margin-right: 5px;margin-bottom: -2px;margin-top: -16px;"
        >个人中心
      </el-button>
    </router-link>
    <div v-if="isLogin" class="border">|</div>

    <el-button v-if="isLogin" @click="logout" :style="{ color: '#333' }" type="text">退出登录</el-button>
  </div>
</template>
<script>
import { Auth } from "@/api/login";
import { Message } from "element-ui";
export default {
  data() {
    return {
      activeIndex: localStorage.getItem("path") || "/index",
      dialogFormVisible: false,
      loginForm: {
        username: "",
        password: ""
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "change" }]
      },
      isLogin: localStorage.getItem("token") ? true : false
    };
  },
  methods: {
    clickMenuItem(key) {
      localStorage.setItem("path", key);
      this.$router.push(key);
    },
    handleLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Auth(this.loginForm).then(res => {
            Message({
              message: "登陆成功！",
              type: "success",
              duration: 5 * 1000
            });
          });
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    logout() {
      localStorage.removeItem("token");
      this.isLogin = false;
    }
  }
};
</script>
<style scoped>
.header {
  background-color: #fff;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #e6e6e6;
  border-top: 3px solid #009a61;

  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}

a {
  text-decoration: none;
}
.border {
  margin-left: 5px;
  margin-right: 5px;
  color: #333;
}
.logo {
  justify-content: flex-start;
  width: 250px;
  /* margin-left: 10px; */
  margin-right: 10px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #75b628 !important;
}
.el-menu-item.is-active {
  color: #fff !important;
  background: #75b628 !important;
}
</style>
<style>
.el-submenu__title {
  font-size: 16px !important;
}
</style>
