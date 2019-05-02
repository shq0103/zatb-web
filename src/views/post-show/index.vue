<template>
  <div class="post-show">
    <div class="post-content">
      <ul class="activity_top">
        <li class="activity">
          <a href="/">首页</a>
        </li>
        <li>></li>
        <li>
          <a href="/">论坛</a>
        </li>
        <li>></li>
        <li>
          <a href="/">.....</a>
        </li>
      </ul>

      <div class="post-content-1">
        <div class="p-c-public">
          <el-row>
            <el-button type="success" icon="el-icon-edit">发新帖</el-button>
            <el-button type="success" icon="el-icon-s-order">回复</el-button>
          </el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="1"
            layout="prev, pager, next, jumper"
            :total="10"
            class="page"
          ></el-pagination>
        </div>
        <div class="p-c-content"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.activity_top {
  display: flex;
  margin: 0px;
  padding: 0px;
}
.activity_top li {
  line-height: 20px;
  font-size: 13px;
}
.activity_top li a {
  color: #999;
}
.activity_top li:nth-child(2n) {
  padding: 0 10px;
}
ul {
  list-style-type: none;
}
.p-c-public {
  display: flex;
  margin: 15px 0;
}
.p-c-content {
  border: solid 1px #f1f1f1;
  background: #fff;
}
.page {
  position: absolute;
  right: 60px;
}
</style>