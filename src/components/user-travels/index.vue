<template>
  <div class="user-travels">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <div class="ac-h3">
            <h3>我的路书</h3>
            <router-link to="/travels-public">
              <span>写路书</span>
            </router-link>
          </div>
          <el-table :data="tableData" border :style="{ width: '100%' }">
            <el-table-column align="center" prop="date" label="路书标题"></el-table-column>
            <el-table-column align="center" prop="address" label="创建时间"></el-table-column>
            <el-table-column align="center" prop="name" label="状态"></el-table-column>

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
  background-color: #8bc34a !important;
  border-color: #8bc34a !important;
}
.ac-h3 {
  color: #fff;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-size: 16px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-bottom-left-radius: 20px;
  -webkit-border-bottom-right-radius: 20px;
  background: #8bc34a;
  display: flex;
}
.ac-h3 h3 {
  margin: auto;
  font-size: 16px;
}
.ac-h3 span {
  position: absolute;
  right: 85px;
  font-size: 13px;
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
  min-height: 1100px;
}
</style>
