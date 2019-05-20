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
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558333922306&di=e9d4d7945daeb3082e061cf9e162bee3&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180903%2Fa4b762483e8e4a4cbe335c8f8cad270b.jpeg)
    no-repeat center left;
  background-size: cover;
}
</style>

