<template>
  <div class="index">
    <div class="index-left">
      <div class="activity">
        <div class="activity-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div class="activity-content1">
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >热门活动</div>
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >最新活动</div>
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >官方活动</div>
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >自游行</div>
          </div>
        </div>
      </div>
      <div class="activity-content">
        <div class="activity-content2">
          <div class="ac-content-left">
            <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
          </div>
          <div class="ac-content-right">
            <div class="ac-content-right1">
              <el-alert
                title="带辅助性文字介绍"
                type="success"
                :closable="false"
                description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
              ></el-alert>
            </div>
            <div class="ac-content-right2">
              <el-progress :percentage="80" :stroke-width="9" color="#75b628"></el-progress>
            </div>
            <div class="ac-content-right3">
              <div class="ac-content-right3-1">
                <span style="color: #000;
font-size: 14px;">AA</span>
                <br>
                <span style="font-size: 10px;color:#888;">活动费用</span>
              </div>
              <div class="ac-content-right3-1">
                <span style="color: #000;
font-size: 14px;">桂林市</span>
                <br>
                <span style="font-size: 10px;color:#888;">活动地点</span>
              </div>
              <div class="ac-content-right3-2">
                <span style="color: #000;
font-size: 14px;">2019-4-20</span>
                <br>
                <span style="font-size: 10px;color:#888;">活动时间</span>
              </div>
            </div>
            <div class="ac-content-right4">
              <div class="ac-content-right4-1">
                <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
              </div>
              <div class="ac-content-right4-2">
                <span>报名:</span>
                <span>13</span>
                <br>
                <span style="padding-left: 6px;">关注:</span>
                <span>1300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination class="page-1" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
    <div class="index-right">
      <div class="search">
        <div class="search-title">
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
              <el-button type="success" plain>重置</el-button>
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
            <router-link to="/activity-public">
              <el-button class="public-button1" type="success">发布线上活动</el-button>
            </router-link>
            <!-- <el-button class="public-button2" type="success">发布线下活动</el-button> -->
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
  border-bottom: 1px solid #dedbdb;
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
  margin-top: 15px;
}
.activity-title {
  height: 30px;
  margin-top: 15px;
  padding-bottom: 8px;
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
/* .page-1 {
  padding-left: 10px !important;
} */
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #75b628 !important;
}
.activity-content2 {
  padding: 15px 15px 5px 15px;
  border-bottom: 1px solid #dedbdb;
  display: flex;
}
.activity-content1 {
  display: flex;
}
.ac-content-left {
  width: 30%;
  margin-right: 5px;
}
.ac-content-right {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.ac-content-right2 {
  padding-right: 45%;
  padding-top: 10px;
  padding-bottom: 20px;
}
.ac-content-right3 {
  display: flex;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
}
.ac-content-right3-1 {
  padding-top: 10px;
  line-height: 20px;
  color: #888;
  border-right: 1px solid #ccc;
  margin-right: 20px;
  padding-right: 30px;
}
.ac-content-right3-2 {
  padding-top: 10px;
  line-height: 20px;
  color: #888;
  margin-right: 20px;
  padding-right: 30px;
}
.ac-content-right4 {
  display: flex;
  margin-top: 10px;
}
.ac-content-right4-1 {
  width: 80%;
}
.ac-content-right4-1 img {
  height: 40px;
}
.ac-content-right4-2 {
  width: 20%;
  font-size: 13px;
  color: #888;
}
</style>