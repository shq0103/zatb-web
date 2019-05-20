<template>
  <div :style="{height:heigth+'px'}">
    <el-tabs type="border-card" class="tabClass" v-model="tabName">
      <el-tab-pane label="登陆" name="first">
        <Login/>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        <Signup/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Login from "./login.vue";
import Signup from "./signup.vue";

export default {
  components: {
    Login,
    Signup
  },
  data() {
    return {
      heigth: 0,
      tabName: "first"
    };
  },
  beforeMount() {
    this.heigth =
      document.documentElement.clientHeight || document.body.clientHeight;
    console.log(this.heigth);
    this.heigth -= 95;
    if (this.$route.query["isLogin"] === "1") {
      this.tabName = "first";
    } else {
      this.tabName = "second";
    }
  }
};
</script>
<style scoped>
.el-main {
  padding: 0 !important;
  background-color: #f2f3f4;
}
.tabClass {
  width: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -220px;
  z-index: 1;
}
</style>
<style>
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #75b628;
}
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #75b628;
}
</style>



