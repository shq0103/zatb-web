<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      <Footer/>
    </el-footer>
  </el-container>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
