<template>
  <div class="user-comment">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #99cccc;"
          >我的评论</h3>
          <el-table :data="tableData" border :style="{width: '100%'}">
            <el-table-column align="center" prop="date" label="评论内容"></el-table-column>
            <el-table-column align="center" prop="name" label="评论游记"></el-table-column>
            <el-table-column align="center" prop="address" label="评论时间"></el-table-column>
            <el-table-column align="center" prop="address" label="状态"></el-table-column>
            <el-table-column align="center" prop="address" label="操作"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ac-public-form2-2 {
  margin: 30px 100px 0px 100px;
}
.user-secure-button {
  color: #fff;
  background-color: #99cccc !important;
  border-color: #99cccc !important;
}

/* .el-table thead {
background: #f0f9eb !important;
} */
el-table th,
.el-table tr {
  background: #f0f9eb !important;
}
.el-table th,
.el-table tr {
  background: #f0f9eb !important;
}
</style>
