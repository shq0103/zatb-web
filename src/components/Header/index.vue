<template>
  <div class="header">
    <img :style="{height:'60px'}" class="logo" src="../../assets/logo4.jpg">
    <el-menu
      :style="{margin: '0 150px 0 0'}"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#75b628"
      text-color="#333"
      @select="clickMenuItem"
      :default-active="activeIndex"
    >
      <el-menu-item index="/index" :style="{ fontSize: '16px'}">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title" :style="{ fontSize: '16px'}">活动</template>
        <el-menu-item index="2-1">最新活动</el-menu-item>
        <el-menu-item index="2-2">官方活动</el-menu-item>
        <el-menu-item index="2-3">往期活动</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">最新活动</template>
          <el-menu-item index="2-4-1">活动发布</el-menu-item>
          <el-menu-item index="2-4-2">活动报名</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title" :style="{ fontSize: '16px'}">咨讯</template>
        <el-menu-item index="3-1">徒步新闻</el-menu-item>
        <el-menu-item index="3-2">户外知识</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" :style="{ fontSize: '16px'}">
        <a href="http://www.tubu100.com/Mall" target="_blank">论坛</a>
      </el-menu-item>
      <el-menu-item index="5" :style="{ fontSize: '16px'}">
        <a href="http://www.tubu100.com/Mall" target="_blank">游记</a>
      </el-menu-item>
      <el-menu-item index="6" :style="{ fontSize: '16px'}">
        <a href="http://www.tubu100.com/Mall" target="_blank">商城</a>
      </el-menu-item>
    </el-menu>

    <el-input
      :style="{ width: '250px'}"
      placeholder="搜索目的地/活动"
      v-model="input1"
      class="input-with-select"
      size="medium"
    >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-button :style="{margin: '0 0 0 50px',color:'#333' }" type="text">登录</el-button>
    <div class="border">|</div>
    <el-button :style="{color:'#333'}" type="text">注册</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/index"
    };
  },
  methods: {
    clickMenuItem(key, keyPath) {
      this.$router.push(key);
    }
  }
};
</script>
<style>
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
  border-bottom: solid 1px #fff;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #75b628 !important;
}
.el-menu-item.is-active {
  color: #fff !important;
  background: #75b628 !important;
}
.el-submenu__title {
  font-size: 16px !important;
}
</style>
