<template>
  <div class="index">
    <div class="index-left">
      <div class="activity">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div activity-content1>
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >搜索活动</div>
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >搜索活动</div>
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >搜索活动</div>
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >搜索活动</div>
          </div>
        </div>
      </div>
      <div calss="activity-content"></div>
      <div class="page"></div>
    </div>
    <div class="index-right">
      <div class="search">
        <div class="activity-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >搜索活动</div>
        </div>
        <div class="search-content">
          <el-form ref="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input placeholder="关键字查找"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="开始日期" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="截止日期" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="活动强度">
              <el-select placeholder="请选择活动强度">
                <el-option label="强度一" value="短线"></el-option>
                <el-option label="强度二" value="中线"></el-option>
                <el-option label="强度三" value="长线"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动领队">
              <el-select placeholder="请选择活动领队">
                <el-option label="强度一" value="短线"></el-option>
                <el-option label="强度二" value="中线"></el-option>
                <el-option label="强度三" value="长线"></el-option>
              </el-select>
            </el-form-item>
            <!-- <el-form-item label="特殊资源">
              <el-radio-group>
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>-->
            <el-form-item>
              <el-button type="success">搜索</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div class="public">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >活动发布</div>
        </div>
        <div class="public-content">
          <el-row>
            <el-button class="public-button1" type="success">发布线上活动</el-button>
            <el-button class="public-button2" type="success">发布线下活动</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.index {
  display: flex;
}
.index-left {
  width: 70%;
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  margin-right: 20px;
}
.index-right {
  width: 30%;
}

.search {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
}
.activity {
  border: 1px solid #dedbdb;
  border-radius: 5px;
}
.public {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  margin-top: 15px;
}
.search-title {
  height: 30px;
  margin-top: 10px;
}
.activity-title {
  height: 30px;
  margin-top: 10px;
}

.search-content {
  padding: 12px;
  border-top: 1px solid #dedbdb;
  margin-top: 8px;
}
.public-content {
  padding: 25px 0;
  border-top: 1px solid #dedbdb;
  margin-top: 8px;
}
.public-button1 {
  font-size: 16px !important;
  padding: 12px 30px !important;
  margin-right: 10px !important;
}
.public-button2 {
  font-size: 16px !important;
  padding: 12px 30px !important;
  margin-left: 10px !important;
}
</style>