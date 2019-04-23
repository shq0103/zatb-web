<template>
  <div class="footer">
    <img class="logo" src="../../assets/logo2.png">
    <el-popover class="align1" placement="top-start" width="400" trigger="hover">
      <img class="weixin" src="../../assets/logo4.jpg">

      <img slot="reference" class="weixin" src="../../assets/weixin.png">
    </el-popover>
    <el-popover class="align2" placement="top-start" width="400" trigger="hover">
      <img class="weibo" src="../../assets/logo4.jpg">

      <img slot="reference" class="weibo" src="../../assets/weibo.png">
    </el-popover>
    <el-popover class="align3" placement="top-start" width="400" trigger="hover">
      <img class="yx" src="../../assets/logo4.jpg">

      <img slot="reference" class="yx" src="../../assets/yx.png">
    </el-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footer: "footer"
    };
  }
};
</script>
<style scoped>
.footer {
  background-color: #333333;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo {
  width: 350px;
}
.weixin {
  height: 30px;
}
.weibo {
  height: 30px;
}
.yx {
  height: 30px;
}
.align1 {
  position: absolute;
  right: 250px;
}
.align2 {
  position: absolute;
  right: 200px;
}
.align3 {
  position: absolute;
  right: 150px;
}
.el-breadcrumb {
  font-size: 15px;
  font-style: #fff;
}
</style>
