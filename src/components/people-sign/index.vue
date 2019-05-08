<template>
  <div class="people-sign">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #8BC34A;"
          >Ta的参与</h3>
          <el-table :data="tableData" border :style="{width: '100%'}">
            <el-table-column align="center" prop="date" label="活动"></el-table-column>

            <el-table-column align="center" prop="address" label="积分"></el-table-column>
            <el-table-column align="center" prop="address" label="时间"></el-table-column>
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
  background-color: #8bc34a !important;
  border-color: #8bc34a !important;
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
.ac-public-content {
  min-height: 960px;
}
</style>
