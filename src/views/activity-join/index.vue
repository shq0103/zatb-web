<template>
  <div class="activity-join">
    <el-row :gutter="24">
      <el-col :span="16">
        <div class="event_01">
          <p>目前该赛程还有 {{acPublic.quota-acPublic.signin}}个名额可报，请尽快完成预定。</p>
          <p>请填写真实有效的信息，请放心，您的个人信息其他参与者无法看到</p>
        </div>
        <div class="a-j-lf-title">
          <h3>报名人</h3>
        </div>
        <div class="a-j-lf-content">
          <el-form :model="form" :rules="rules" ref="form" label-width="80px">
            <div style="padding-bottom: 45px;">
              <!-- <i class="num">1</i> -->
              <el-button type="text" class="empty_icon" @click="resetForm('form')">清空</el-button>
            </div>
            <el-form-item label="真实姓名" prop="name">
              <el-input placeholder="请填写真实姓名" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="证件号" prop="idcard">
              <el-input placeholder="请填写证件号码" v-model="form.idcard"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="number">
              <el-input placeholder="请填写手机号码" v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="紧急联系" prop="urgentNum">
              <el-input placeholder="请填写紧急联系号码" v-model="form.urgentNum"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="form.sex">
                <el-radio :label="1" border>男</el-radio>
                <el-radio :label="0" border>女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生年月" prop="birth">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                style="width: 100%;"
                v-model="form.birth"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
              <el-input placeholder="备注衣服尺码或到站时间（非必填）" v-model="form.remark"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <!-- <div style="margin:10px 0px;display:flex;">
          <el-button type="success" icon="el-icon-zoom-in" plain>添加报名人</el-button>
        </div>-->
        <!-- <div class="event_05">
          <el-checkbox-group>
            <el-checkbox v-model="checked">
              我已阅读并同意相关
            
              <a href="http://www.tubu100.com/mianze.docx" target="_blank">免责声明</a>、
              <a href="http://www.tubu100.com/Home/Read" target="_blank">赛事保险</a>
            </el-checkbox>
          </el-checkbox-group>
        </div>-->

        <el-button type="success" style="width: 95%;margin: 20px 0;" round @click="submitForm">立即报名</el-button>
      </el-col>
      <el-col :span="8">
        <div class="a-j-rf">
          <div class="event_right">
            <p class="p1">{{acPublic.name}}</p>
            <p class="p2">{{acPublic.theme|themeFilter}}</p>
            <p class="p2">已报名{{acPublic.signin}}人</p>
            <p class="p2">出发：{{acPublic.startPlace}}</p>
            <p class="p2">{{acPublic.date}}</p>
            <ul>
              <li class="t1">活动费用</li>
              <li class="t2">￥{{acPublic.price}}</li>
              <li class="t3">
                <span id="order_count">1</span>人
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { joinActivity, getAcDetail } from "@/api/activity.js";
export default {
  filters: {
    themeFilter: function(value) {
      switch (value) {
        case 1:
          return "短线";
        case 2:
          return "中线";
        case 3:
          return "长线";
        default:
          return "";
      }
    }
  },
  data() {
    return {
      checked: "",
      acPublic: {
        id: 0,
        name: "梨花顶山巅极地穿越  ",
        date: "2019年08月01日 ~ 2019年08月05日",
        startPlace: "桂林",
        price: 100,
        theme: "长线",
        quota: 200,
        signin: 150
      },
      form: {
        id: 0,
        activityId: 0,
        userId: 0,
        status: 0,
        name: "",
        idcard: "",
        number: "",
        urgentNum: "",
        sex: null,
        birth: 0,
        remark: ""
      },
      rules: {
        name: [{ required: true, message: "请输入真实姓名", trigger: "blur" }],
        idcard: [{ required: true, message: "请输入证件号", trigger: "blur" }],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        birth: [{ required: true, message: "请输入出生年月", trigger: "blur" }],
        urgentNum: [
          { required: true, message: "请输入紧急联系人手机号", trigger: "blur" }
        ],
        number: [{ required: true, message: "请输入手机号", trigger: "blur" }]
      }
    };
  },
  created() {
    this.form.activityId = this.$route.params.id;
    getAcDetail(parseInt(this.form.activityId)).then(resp => {
      this.acPublic = resp.data;
    });
  },
  methods: {
    submitForm() {
      // this.postForm.display_time = parseInt(this.display_time / 1000);
      this.form.birth = new Date(this.form.birth).getTime();

      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          joinActivity(this.form).then(resp => {
            if (resp.code === 0) {
              this.$notify({
                title: "成功",
                message: "报名活动成功",
                type: "success",
                duration: 2000
              });
            }
            this.$refs.from.resetFields();
          });
          this.loading = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.a-j-lf-content {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  padding: 30px 30px;
}
.a-j-lf-title h3 {
  /* padding-top: 30px; */
  font-size: 20px;
  text-align: left;
}
.a-j-rf {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.event_01 {
  padding: 10px 30px;
  background: #fff9eb;
  box-sizing: border-box;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  text-align: left;
}
.event_01 p {
  margin: 10px 0;
  padding-left: 40px;
  line-height: 20px;
  box-sizing: border-box;
  position: relative;
}
.event_01 p::before {
  width: 20px;
  height: 20px;
  content: "";
  background: url(../../assets/tubu_bg.png) no-repeat -480px -245px;
  left: 0;
  top: 0;
  position: absolute;
}
p {
  font-size: 14px;
}
.a-j-lf-content .num {
  line-height: 20px;
  font-size: 20px;
  color: #ddd;
  float: left;
}
.empty_icon {
  margin-left: 15px;
  line-height: 20px;
  color: #666;
  cursor: pointer;
  float: right;
  font-size: 10px;
}
.event_05 {
  width: 100%;
  margin-top: 50px;
  display: flex;
}
.event_05 a {
  color: #16a2ff;
}
ul {
  list-style-type: none;
}
.event_right {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #c4c6ca;
  border-radius: 2px;
  min-height: 300px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  padding: 10px 0px;
}
.event_right .p1 {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px;
  padding: 20px 25px;
  box-sizing: border-box;
  float: left;
}
.event_right .p2 {
  width: 100%;
  margin: 0px;
  padding: 3px 50px;
  box-sizing: border-box;
  text-align: left;
}
.event_right ul {
  width: 100%;
  padding-top: 20px;
  margin: 0px;
  padding-left: 0;
}
.event_right ul li.t1 {
  width: 40%;
}
.event_right ul li {
  padding: 30px 25px;
  line-height: 20px;
  box-sizing: border-box;
  border-top: 1px dashed #ccc;
  float: left;
  font-size: 12px;
}
.event_right ul li.t2 {
  width: 40%;
  color: #e63837;
}
.event_right ul li.t3 {
  width: 20%;
  padding: 30px 0;
  text-align: center;
}
.event_right ul li.t4 {
  width: 50%;
}
.event_right ul li.t5 {
  width: 50%;
  text-align: right;
  font-size: 24px;
  color: #e63837;
}
</style>
