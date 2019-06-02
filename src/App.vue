<template>
  <div id="app">
    <router-view/>

    <back-top>
      <div>
        <img class="return" src="./assets/return.png">
      </div>
    </back-top>
  </div>
</template>

<script>
export default {
  name: "App"
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
.ac-public-form1 h3 {
  margin: 0;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 20px !important;
  /* background-color: #99cccc !important; */
}
.el-pagination li.active {
  background: #75b628 !important;
}
.el-pager li.active {
  color: #75b628;
}
.el-pager li:hover {
  color: #75b628 !important;
}
.el-main {
  padding: 20px 70px 10px 80px !important;
  background-color: #f2f3f4;
}
a {
  text-decoration: none;
}
a:visited {
  color: #000000;
}
</style>

<style>
.quill-editor:not(.bubble) .ql-container,
.quill-editor:not(.bubble) .ql-container .ql-editor {
  height: 15rem;
  padding-bottom: 1rem;
}
</style>
