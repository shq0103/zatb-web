<template>
  <div class="user-point">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #99cccc;"
          >我的关注</h3>
        </div>
        <div>
          <ul class="follow_users">
            <li>
              <a>
                <img src="http://tubu100.com:8053/Files/UserHead/201803201009380990a8.jpg">
                <label style="font-size:16px">徒步小能手</label>
              </a>
              <a class="btn_cf">取消关注</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
.follow_users {
  display: block;
  width: 100%;
  padding-top: 20px;
  float: left;
}
.follow_users li {
  width: 25%;
  padding: 15px 0 15px 0;
  text-align: center;
  font-size: 18px;
  position: relative;
  float: left;
}
.follow_users li a {
  text-decoration: none;
  cursor: pointer;
}
.follow_users li label {
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  display: block;
  color: #666;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.follow_users li img {
  width: 68%;
  border: 1px solid #eee;
}
.follow_users .btn_cf {
  width: 100px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  color: #16a2ff;
  font-size: 14px;
  margin-top: 20px;
}
</style>
