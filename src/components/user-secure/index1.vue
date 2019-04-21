<template>
  <div class="user-secure">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #99cccc;"
          >修改密码</h3>

          <div class="ac-public-form2-2">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="旧密码">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="新密码">
                <el-input></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="user-secure-button" type="success" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
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
</style>
