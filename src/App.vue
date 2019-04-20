<template>
  <div id="app">
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
    <back-top>
      <div>
        <img class="return" src="./assets/return.png">
      </div>
    </back-top>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.return {
  height: 50px;
}
body {
  margin: 0;
}
.el-header {
  padding: 0 !important ;
  height: 65px !important ;
}
.el-footer {
  padding: 0 !important ;
}
</style>
