<template>
  <div class="user-secure">
    <div class="public-bottom">
      <el-tabs @tab-click="refreshCode" v-model="tabName">
        <el-tab-pane label="更改登录密码" name="first">
          <div class="ac-public-content">
            <div class="ac-public-form1">
              <!-- <h3
                style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #8BC34A;"
              >修改密码</h3>-->

              <div class="ac-public-form2-2">
                <el-form
                  label-width="80px"
                  status-icon
                  :model="ruleForm"
                  :rules="rules"
                  ref="ruleForm"
                  class="demo-ruleForm"
                >
                  <el-form-item label="旧密码" prop="oldPass">
                    <el-input type="password" v-model="ruleForm.oldPass" show-password clearable></el-input>
                  </el-form-item>
                  <el-form-item label="新密码" prop="pass">
                    <el-input
                      type="password"
                      v-model="ruleForm.pass"
                      show-password
                      clearable
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" show-password prop="checkPass">
                    <el-input
                      type="password"
                      v-model="ruleForm.checkPass"
                      clearable
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="验证码" prop="identifyCode">
                    <el-row style="padding:0px">
                      <ElCol :span="12">
                        <el-input v-model="ruleForm.identifyCode"></el-input>
                      </ElCol>
                      <ElCol :span="12">
                        <div v-if="tabName=='first'" @click="refreshCode">
                          <Identify :identify-code="identifyCode"/>
                        </div>
                      </ElCol>
                    </el-row>
                  </el-form-item>

                  <el-form-item>
                    <el-button
                      class="user-secure-button"
                      @click="submitForm('ruleForm')"
                      type="success"
                    >提交</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- <el-tab-pane label="更改绑定手机" name="second">
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
                        <div v-if="tabName!=='first'" @click="refreshCode">
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
        </el-tab-pane>-->
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Identify from "@/components/Identify";
import { getUserDetail, updateUser } from "@/api/user.js";
import { eventBus } from "@/utils/eventBus";
var MD5 = require("md5.js");
export default {
  components: {
    Identify
  },
  data() {
    var checkIdentifyCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      }

      if (value !== this.identifyCode) {
        callback(new Error("验证码输入错误"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateOldPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入旧密码"));
      } else {
        var md5stream = new MD5();
        if (
          new MD5().update(this.ruleForm.oldPass).digest("hex") !==
          this.userInfo.password
        ) {
          callback(new Error("旧密码不正确!"));
        }
        callback();
      }
    };
    return {
      ruleForm: {
        oldPass: "",
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        oldPass: [{ validator: validateOldPass, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        identifyCode: [{ validator: checkIdentifyCode, trigger: "blur" }]
      },
      identifyCodes: "1234567890",
      identifyCode: "",
      tabName: "first",
      userInfo: {}
    };
  },
  created() {
    getUserDetail(1111).then(resp => {
      Object.assign(this.userInfo, resp.data);
    });
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
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.userInfo.password = this.ruleForm.pass;
          updateUser(this.userInfo).then(resp => {
            this.$notify({
              title: "成功",
              message: "修改成功，请重新登录！",
              type: "success",
              duration: 2000
            });
            eventBus.$emit("changePass");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
