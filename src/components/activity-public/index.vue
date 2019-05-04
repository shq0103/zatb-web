<template>
  <div class="activity-public">
    <div class="public-top"></div>
    <div class="public-bottom">
      <div class="ac-public-content">
        <!-- <div class="ac-public-tilte">
          <h3 style="font-size:25px;margin:0">活动发布</h3>
          <p style="color: #999;
padding-top: 5px;
font-size: 14px;">实时发布活动项目，简单方便集齐驴友！</p>
        </div>-->
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-bottom-right-radius: 20px;background: #8bc34a;"
          >你的活动计划</h3>

          <div class="ac-public-form2">
            <el-form ref="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="活动地点">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="集合地点">
                <el-input></el-input>
              </el-form-item>
              <!-- <el-form-item label="活动区域">
                <el-select placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>-->

              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="开始日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="结束日期" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="报名截止时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="活动程度">
                <el-select placeholder="请选择活动程度">
                  <el-option label="短线" value="shanghai"></el-option>
                  <el-option label="中线" value="beijing"></el-option>
                  <el-option label="长线" value="beijing"></el-option>
                  <el-option label="其他" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-radio-group size="medium">
                  <el-radio border label="商业：组织者以盈利为目的或组织者不参与AA。"></el-radio>
                  <el-radio border label="AA：表示全体人员包括领队组织者均摊费用，多退少补。"></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="俱乐部简称">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="活动要求">
                <el-input placeholder="费用"></el-input>元/人
                <el-input placeholder="人数上限"></el-input>人
              </el-form-item>
              <el-form-item label="活动封面">
                <el-button type="primary" @click="onSubmit">上传活动照片</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">下一步</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.public-bottom {
  /* padding: 30px; */

  border-top-left-radius: 10px;
  -webkit-border-top-left-radius: 10px;
  -moz-border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-top-right-radius: 10px;
  background: #fff;
}
.activity-public {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  -webkit-border-top-left-radius: 10px;
  -moz-border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-top-right-radius: 10px;
}
.ac-public-form2 {
  padding: 20px 20px;
}
</style>