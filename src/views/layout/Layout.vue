<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main :class="{loginbg:!show}">
      <router-view/>
    </el-main>
    <el-footer v-if="show">
      <Footer/>
    </el-footer>
  </el-container>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      show: true
    };
  },
  beforeMount() {
    if (this.$route.path === "/mLogin") {
      this.show = false;
    }
  },
  watch: {
    $route: function(newVal) {
      console.log(newVal);
      if (newVal.path === "/mLogin") {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>
<style scoped>
.loginbg {
  background: url(../../assets/login_bg.jpg) no-repeat center top;
  background-size: cover;
}
</style>

