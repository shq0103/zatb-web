<template>
  <div class="userinfo">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #75b628;"
          >完善资料</h3>

          <div class="ac-public-form2-2">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="修改头像">
                <p class="update-img">
                  <img src="http://tubu100.com:8053/Files/Default/UserHead.png">
                </p>
              </el-form-item>
              <el-form-item label="输入昵称">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="地区">
                <el-select class="userinfo-select" placeholder="请选择所在省">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select class="userinfo-select" placeholder="请选择所在市">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select class="userinfo-select" placeholder="请选择所在县区">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出生日期">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="性别">
                <el-checkbox v-model="checked1" label="男" border></el-checkbox>
                <el-checkbox v-model="checked2" label="女" border></el-checkbox>
              </el-form-item>
              <el-form-item label="详细地址">
                <el-input type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="真实姓名">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="身份证">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="个人简介">
                <el-input type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.el-form-item img {
  height: 100px;
}
.update-img {
  height: 100px;
  margin-top: -10px;
  /* background: #f8f8f8 url(../images/tubu_bg.png) no-repeat -387px -326px; */
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #ccc;
  width: 100px;
  margin-left: 30px;
}
.ac-public-form2-2 {
  margin: 30px 100px 0px 100px;
}
.userinfo-select {
  margin: 0 15px !important;
}
.ac-public-form1 h3 {
  margin: 0;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 20px !important;
  /* background-color: #99cccc !important; */
}
</style>
