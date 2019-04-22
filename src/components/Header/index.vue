<template>
  <div class="header">
    <img :style="{ height: '60px' }" class="logo" src="../../assets/logo4.jpg" />
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
        <template slot="title" :style="{ fontSize: '16px' }"
          >咨讯</template
        >

        <el-menu-item index="/new">徒步新闻</el-menu-item>
        <el-menu-item index="/new">户外知识</el-menu-item>
      </el-submenu>
      <el-menu-item index="/post" :style="{ fontSize: '16px' }">论坛</el-menu-item>
      <el-menu-item index="5" :style="{ fontSize: '16px' }">
        <a href="http://www.tubu100.com/Mall" target="_blank">游记</a>
      </el-menu-item>
      <el-menu-item index="6" :style="{ fontSize: '16px' }">
        <a href="http://www.tubu100.com/Mall" target="_blank">商城</a>
      </el-menu-item>
    </el-menu>

    <el-input
      :style="{ width: '250px' }"
      placeholder="搜索目的地/活动"
      class="input-with-select"
      size="medium"
    >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>

    <el-button
      :style="{ margin: '0 0 0 50px', color: '#333' }"
      type="text"
      @click="dialogFormVisible = true"
      >登录</el-button
    >

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="活动名称">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <div class="border">|</div>
    <router-link to="/user-center">
      <el-button :style="{ color: '#333' }" type="text">注册</el-button>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: localStorage.getItem("path") || "/index",
      dialogFormVisible: false
    };
  },
  methods: {
    clickMenuItem(key) {
      localStorage.setItem("path", key);
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
.el-submenu__title {
  font-size: 16px !important;
}
</style>
