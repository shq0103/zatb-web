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
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #75b628;"
          >你的活动计划</h3>

          <div class="ac-public-form2">
            <el-form ref="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group>
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group>
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #75b628;"
          >你的活动计划</h3>

          <div class="ac-public-form2">
            <el-form ref="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group>
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group>
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea"></el-input>
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