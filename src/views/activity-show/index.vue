<template>
  <div class="activity-show">
    <ul class="activity_top">
      <li class="activity">
        <a href="/">首页</a>
      </li>
      <li>></li>
      <li>
        <a href="/">活动</a>
      </li>
      <li>></li>
      <li>
        <a href="/">.....</a>
      </li>
    </ul>
    <div class="activity_info">
      <div class="a-i-title">
        <h3 class="activity_title">2019徒步中国•环青海湖全国徒步大会</h3>
        <b class="activity_distance">长线</b>
      </div>
      <p class="activity_text">
        <img src="../../assets/咨讯浏览.png" style="height:20px;margin:-3px 2px -5px 0;">223人浏览
      </p>
      <div class="a-i-content">
        <div class="a-i-c-lf">
          <img src="http://tubu100.com:8053/Files/At/20190410141532d19b24.jpg">
          <label>长线系列</label>
          <b class="stat_01">报名中</b>
        </div>
        <div class="a-i-c-rf">
          <div class="a-i-c-rf-text">
            <p>
              <img src="../../assets/时间.png" style="height:20px;margin:-3px 15px -5px 0;">2019年08月01日 ~ 2019年08月05日
            </p>
            <p>
              <img src="../../assets/感叹号.png" style="height:20px;margin:-3px 15px -5px 0;">报名截止日期：2019年06月30日
            </p>
            <p>
              <img src="../../assets/出发地.png" style="height:20px;margin:-3px 15px -2px 0;">出发地：桂林
            </p>
            <p>
              <img src="../../assets/目的地.png" style="height:20px;margin:-3px 15px -2px 0;">目的地：桂林
            </p>

            <p>
              <img src="../../assets/小人头.png" style="height:20px;margin:-3px 15px -2px 0;">发起人：全国徒步大会
            </p>
            <p>
              <img src="../../assets/限制.png" style="height:20px;margin:-3px 15px -2px 0;">限额600人
            </p>
            <p>
              <img src="../../assets/费用.png" style="height:20px;margin:-3px 15px -2px 0;">费用：AA
            </p>
          </div>
          <el-button type="success" round>我要报名</el-button>
        </div>
      </div>
    </div>
    <div class="activity_content">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="a-c-lf">qq</div>
        </el-col>
        <el-col :span="8">
          <div class="a-c-rf">
            <div class="a-c-rf-1">
              <div class="a-c-rf-2-title">报名列表</div>
              <div class="a-c-rf-2-title1">已参加：9人</div>
              <div>
                <el-row :gutter="24">
                  <el-col :span="12">
                    <div class="grid-content bg-purple">11</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content bg-purple">22</div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="a-c-rf-2">
              <div class="a-c-rf-2-title">天气查询</div>
              <div class="a-c-rf-2-cloud">
                <a href="http://www.weather.com.cn/" target="_blank">点击查询</a>
              </div>
            </div>
            <div class="a-c-rf-3">
              <div class="a-c-rf-2-title">相关游记</div>
              <div>111</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style-type: none;
}
.activity_top {
  display: flex;
  margin: 0px;
  padding: 0px;
}
.activity_top li {
  line-height: 20px;
  font-size: 12px;
}
.activity_top li a {
  color: #999;
}
.activity_top li:nth-child(2n) {
  padding: 0 10px;
}
.a-i-title {
  display: flex;
  margin: 20px 0;
}
.activity_title {
  line-height: 24px;
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
}
.activity_distance {
  margin-top: 1px;
  padding: 0 10px;
  line-height: 22px;
  background: #ffa500;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  margin-left: 10px;
  font-size: 12px;
}
.activity_text {
  width: 100%;
  box-sizing: border-box;
  line-height: 14px;
  font-size: 14px;
  margin: 20px 0;
  color: #999;
  display: flex;
}
.a-i-content {
  display: flex;
}
.a-i-c-lf label {
  font-weight: bold;
  background: #ffd400;
  padding: 0 15px;
  height: 34px;
  line-height: 34px;
  left: 80px;
  position: absolute;
  font-size: 13px;
  margin: 30px 0px;
}
.a-i-c-lf b.stat_01 {
  color: #fff;
  background: #75b628;
}
.a-i-c-lf b {
  padding: 0 15px;
  height: 34px;
  line-height: 34px;
  left: 80px;
  position: absolute;
  font-size: 13px;
  margin: 64px 0px;
}
.a-i-c-rf {
  margin-left: 20px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.a-i-c-rf p {
  font-size: 13px;
  padding: 3px 0px;
}
.el-button.is-round {
  width: 80%;
}
.a-i-c-rf-text {
  text-align: left;
  padding: 10px 20px;
}
.a-c-lf {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.a-c-rf {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.activity_content {
  margin: 30px 0px;
}
.a-c-rf-2-title {
  height: 28px;
  line-height: 28px;
  font-size: 18px;
  color: #75b628;
  text-align: left;
  margin: 10px 40px;
}
.a-c-rf-2-title1 {
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  color: #75b628;
  text-align: left;
  margin: -10px 40px 10px 40px;
}
.a-c-rf-2-cloud {
  width: 80%;
  height: 85px;
  background: #4b8ee7 url(../../assets/cloud.png) no-repeat 20px center;
  position: relative;
  margin: auto;
}
.a-c-rf-2-cloud a {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  color: #fff;
  border: 1px solid #fff;
  position: absolute;
  right: 20px;
  bottom: 25px;
  padding: 0 20px;
  border-radius: 4px;
  font-size: 16px;
}
.a-c-rf-1 {
  border-bottom: #ccc dotted 2px;
  margin: 0px 10px;
  padding: 10px 0px;
}
.a-c-rf-2 {
  border-bottom: #ccc dotted 2px;
  margin: 0px 10px;
  padding: 10px 0px;
}
.a-c-rf-2 {
  margin: 0px 10px;
  padding: 10px 0px;
}
</style>