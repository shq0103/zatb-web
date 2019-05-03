<template>
  <div class="user-secure">
    <div class="public-bottom">
      <el-tabs value="first">
        <el-tab-pane label="更改登录密码" name="first">
          <div class="ac-public-content">
            <div class="ac-public-form1">
              <!-- <h3
                style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #99cccc;"
              >修改密码</h3>-->

              <div class="ac-public-form2-2">
                <el-form
                  label-width="80px"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  class="demo-ruleForm"
                >
                  <el-form-item label="旧密码">
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="新密码" prop="pass">
                    <el-input type="password" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="验证码">
                    <el-row style="padding:0px">
                      <ElCol :span="12">
                        <el-input></el-input>
                      </ElCol>
                      <ElCol :span="12">
                        <div @click="refreshCode">
                          <Identify :identify-code="identifyCode"/>
                        </div>
                      </ElCol>
                    </el-row>
                  </el-form-item>

                  <el-form-item>
                    <el-button class="user-secure-button" type="success">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="更改绑定手机" name="second">
          <div class="ac-public-content">
            <div class="ac-public-form1">
              <div class="ac-public-form2-2">
                <el-form ref="form" label-width="80px">
                  <el-form-item label="旧号码">
                    <el-input></el-input>
                  </el-form-item>
                  <el-form-item label="新号码">
                    <el-input></el-input>
                  </el-form-item>

                  <el-form-item label="验证码">
                    <el-row style="padding:0px">
                      <ElCol :span="12">
                        <el-input></el-input>
                      </ElCol>
                      <ElCol :span="12">
                        <div @click="refreshCode">
                          <Identify :identify-code="identifyCode"/>
                        </div>
                      </ElCol>
                    </el-row>
                  </el-form-item>

                  <el-form-item>
                    <el-button class="user-secure-button" type="success">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Identify from "@/components/Identify";
export default {
  components: {
    Identify
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    }
  }
};
</script>

<style scoped>
.ac-public-form2-2 {
  margin: 30px 100px 0px 100px;
}
.user-secure-button {
  color: #fff;
  background-color: #99cccc !important;
  border-color: #99cccc !important;
}
.el-tabs__item.is-active {
  color: #336699 !important;
}
.el-tabs__active-bar {
  background-color: #336699 !important;
}
.el-tabs__item {
  font-size: 15px !important;
}
.el-tabs__item:hover,
.el-tabs__item.is-active {
  color: #336699 !important;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 10px !important;
}

.el-input-group__append,
.el-input-group__prepend {
  padding: 0 !important;
  border: none !important;
}
</style>
