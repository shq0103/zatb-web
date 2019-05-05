<template>
  <div class="activity-show">
    <ul class="activity_top">
      <li class="activity">
        <a href="/">首页</a>
      </li>
      <li>></li>
      <li>
        <a href="/">路书</a>
      </li>
      <li>></li>
      <li>
        <a href="/">.....</a>
      </li>
    </ul>
    <div class="activity_info">
      <div class="a-i-title">
        <h3 class="activity_title">穿越林海雪原秘境 体验最地道的东北</h3>
        <b class="activity_distance">长线</b>
      </div>
      <ul class="activity_text" style="display:flex;padding:0px;">
        <li>
          <img
            src="../../assets/写作者.png"
            style="height:15px;margin:-3px 2px -2px 0;"
          />美少女战士
        </li>
        <li>
          <img
            src="../../assets/路书时间.png"
            style="height:16px;margin:-3px 3px -2px 0;"
          />2019/5/5
        </li>
        <li>
          <img
            src="../../assets/咨讯浏览.png"
            style="height:21px;margin:-3px 2px -5px 0;"
          />223人浏览
        </li>
        <li>
          <img
            src="../../assets/路书评论.png"
            style="height:15px;margin:-3px 2px -3px 0;"
          />223人评论
        </li>
      </ul>
      <div class="a-i-content">
        <el-row :gutter="24">
          <el-col :span="13">
            <div class="a-c-lf">111</div>
          </el-col>
          <el-col :span="11">
            <div class="a-c-rf-1">
              <div class="a-c-rf-top">
                <el-row :gutter="20" style="margin-bottom:10px;">
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <img
                        src="../../assets/长度.png"
                        style="height:20px;margin:-3px 5px -5px 0;"
                      />总里程 <span>/</span>100公里
                    </div>
                  </el-col>
                  <el-col :span="12" style="padding-left:0px;">
                    <div class="grid-content bg-purple">
                      <img
                        src="../../assets/耗时.png"
                        style="height:19px;margin:-3px 5px -5px -50px;"
                      />总耗时 <span>/</span>7小时
                    </div>
                  </el-col>
                </el-row>

                <el-row :gutter="20">
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <img
                        src="../../assets/海拔高度.png"
                        style="height:18px;margin:-3px 4px -5px 8px;"
                      />平均海拔 <span>/</span>2000米
                    </div>
                  </el-col>
                  <el-col :span="12" style="padding-left:0px;">
                    <div class="grid-content bg-purple">
                      <img
                        src="../../assets/配速.png"
                        style="height:21px;margin:-3px 3px -5px -2px;"
                      />平均配速 <span>/</span>2公里/小时
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="a-c-rf-bottom">
                <el-divider>摘要</el-divider>
                <div class="a-c-rf-b-content">
                  <p>
                    上一次爬大西山已经是一个月之前的事了，听说大西山的玫瑰花在5月底-6月初开放，于是再次回到了阔别一段时间的大西山。这次是抱着看玫瑰花的念头来的，因此走的比较慢，不过这次行程玫瑰花反倒不是重点了，因为其他野花开的比玫瑰花多得多。整条路线较晒，强度一般。个人认为，玫瑰花的最佳观赏区在阳台山主峰周边，不在本次所走区域。这次看到玫瑰花还未完全开放，估计要再等一星期。线路轨迹见http://www.foooooot.com/trip/915493/，涧沟村-妙儿洼段走错路勿参考，但是走这段路有一个小收获（稍后介绍）。下面先上轨迹截图，然后介绍详细行程。
                  </p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="activity_content">
      <el-row :gutter="20">
        <el-col :span="17">
          <div class="a-c-lf">
            <div class="a-c-lf-content">111</div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="a-c-rf">
            <div class="a-c-rf-3">
              <div class="a-c-rf-2-title">相关路书推荐</div>
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
  font-size: 13px;
}
.activity_top li a {
  color: #999;
}
.activity_top li:nth-child(2n) {
  padding: 0 10px;
}
.a-i-title {
  display: flex;
  margin: 15px 0;
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
  margin: 15px 0;
  color: #999;
  display: flex;
}
.activity_text li {
  padding-right: 25px;
}
/* .a-i-content {
  display: flex;
} */
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
.a-c-lf-title {
  background-color: #f6f8fa;
  box-shadow: 0 -1px 3px rgba(4, 0, 0, 0.06);
}
.a-c-rf {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
}
.a-c-rf-1 {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  padding: 20px 25px;
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
  margin: 10px 10px;
  border-bottom: 1px dotted #ccc;
  padding-bottom: 10px;
}
.a-c-rf-2-title1 {
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  color: #7594ac;
  text-align: left;
  margin: -10px 40px 10px 10px;
}
.a-c-rf-2-cloud {
  width: 90%;
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

.a-c-rf-2 {
  border-bottom: #ccc dotted 2px;

  padding: 20px 0px;
}
.a-c-rf-3 {
  padding: 10px 0px;
  min-height: 100px;
}
.post-bottom-content-lf img {
  height: 70px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 0 10px;
}
.post-bottom-content-rf ul {
  padding: 0;
  text-align: left;
  font-size: 15px;
  color: #999;
}
/* .a-c-rf-2-people-1 {
  padding-left: 0px !important;
} */
.a-c-rf-2-content {
  margin: 20px 0px;
}
.tabbar {
  position: relative;
  height: 56px;
  padding-left: 10px;
  margin: 0px;
}
.tabbar-1 {
  background-color: #fff;
  border-top: 2px solid #75b628;
  height: 54px;
  line-height: 52px;
}
.tabbar li {
  position: relative;
  float: left;
  height: 56px;
  line-height: 56px;
}
.tabbar a {
  padding: 0 20px;
  font-size: 16px;
  color: #585858;
  display: block;
  text-align: center;
}
.attr-title {
  padding: 0 20px 10px 20px;
}
.attr-title i {
  display: inline-block;
  vertical-align: middle;
  margin: -3px 10px 0 0;
}
.icon-intro {
  height: 25px;
  /* background: url(../../assets/xianlu.png) no-repeat; */
  margin-bottom: -5px;
  margin-right: 5px;
}
.attr-title h3 {
  text-shadow: 0 2px 0 rgba(98, 133, 161, 0.2);
  color: #7594ac;
  font: 400 20px/32px "Microsoft Yahei";
  text-align: left;
}
.a-c-l-c-1 {
  border-bottom: 1px dotted #ccc;
  margin: 5px 20px;
}
.a-c-l-c-2 {
  margin: 5px 20px;
  padding-bottom: 20px;
}
.attr-content {
  min-height: 300px;
}
.a-c-rf-top {
  padding: 10px 0px;
  border-radius: 5px;
  border: 1px dotted #ccc;
  font-size: 15px;
  color: #515151;
}
.a-c-rf-top span {
  color: #75b628;
  margin: 0 5px;
}
.a-c-rf-bottom {
  margin: 10px 0;
}
.a-c-rf-b-content {
  padding: 0 18px;
  font-size: 15px;
}
.a-c-rf-b-content p {
  text-indent: 2em;
  text-align: justify;
}
</style>
