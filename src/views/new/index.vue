<template>
  <div class="new-index">
    <div class="index-left">
      <div class="activity">
        <div class="activity-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div class="activity-content1">
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >最新资讯</div>
            <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >热门资讯</div>
          </div>
        </div>
      </div>
      <div class="activity-content">
        <router-link to="/new-show">
          <div class="activity-content2">
            <div class="ac-content-left">
              <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
            </div>
            <div class="ac-content-right">
              <div class="ac-content-right1">
                <el-alert
                  class="new-alert"
                  title="带辅助性文字介绍"
                  type="success"
                  :closable="false"
                  description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                ></el-alert>
              </div>
              <div class="new-right2">
                <i class="el-icon-time">2019-4-21 18:24</i>
                <i class="el-icon-view" style="padding-left:20px">300</i>
              </div>
            </div>
          </div>
        </router-link>
        <div class="activity-content2">
          <div class="ac-content-left">
            <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
          </div>
          <div class="ac-content-right">
            <div class="ac-content-right1">
              <el-alert
                class="new-alert"
                title="带辅助性文字介绍"
                type="success"
                :closable="false"
                description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
              ></el-alert>
            </div>
            <div class="new-right2">
              <i class="el-icon-time">2019-4-21 18:24</i>
              <i class="el-icon-view" style="padding-left:20px">300</i>
            </div>
          </div>
        </div>
        <div class="activity-content2">
          <div class="ac-content-left">
            <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
          </div>
          <div class="ac-content-right">
            <div class="ac-content-right1">
              <el-alert
                class="new-alert"
                title="带辅助性文字介绍"
                type="success"
                :closable="false"
                description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
              ></el-alert>
            </div>
            <div class="new-right2">
              <i class="el-icon-time">2019-4-21 18:24</i>
              <i class="el-icon-view" style="padding-left:20px">300</i>
            </div>
          </div>
        </div>
        <div class="activity-content2">
          <div class="ac-content-left">
            <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
          </div>
          <div class="ac-content-right">
            <div class="ac-content-right1">
              <el-alert
                class="new-alert"
                title="带辅助性文字介绍"
                type="success"
                :closable="false"
                description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
              ></el-alert>
            </div>
            <div class="new-right2">
              <i>2019-4-21 18:24</i>
              <i class="el-icon-view" style="padding-left:20px">300</i>
            </div>
          </div>
        </div>
        <div class="activity-content2">
          <div class="ac-content-left">
            <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
          </div>
          <div class="ac-content-right">
            <div class="ac-content-right1">
              <el-alert
                class="new-alert"
                title="带辅助性文字介绍"
                type="success"
                :closable="false"
                description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
              ></el-alert>
            </div>
            <div class="new-right2">
              <i class="el-icon-time">2019-4-21 18:24</i>
              <i class="el-icon-view" style="padding-left:20px">300</i>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination class="page-1" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
    <div class="index-right">
      <div class="public-1">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >相关推荐</div>
        </div>
        <div class="public-content">
          <el-row>
            <router-link to="/new">
              <el-button class="public-button1" type="success">户外资讯</el-button>
            </router-link>
            <router-link to="/knowledge">
              <el-button class="public-button2" type="success">户外知识</el-button>
            </router-link>
          </el-row>
        </div>
      </div>
      <div class="search-1">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >精彩路线</div>
        </div>
        <div class="search-content">
          <div class="tr-b-rf-bottom">
            <div class="tr-b-rf-img">
              <div class="tr-b-rf-img1">
                <img src="../../assets/timg.jpg" style="heigh:120px;width:300px;">
              </div>
            </div>
            <div class="tr-b-rf-title">
              <el-alert title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
            </div>

            <!-- <div class="tr-b-rf-public">
              <i :style="{float:'left'}">
                <img
                  src="../../assets/个人1.png"
                  style="height: 16px; margin-right:3px;margin-bottom: -2px;"
                >###
              </i>
              <img
                src="../../assets/评论1.png"
                style="height: 20px; margin-bottom: -3px;margin-right:3px;"
              >3700
              <img
                src="../../assets/浏览.png"
                style="height: 23px; margin-bottom: -5px;margin-right:3px;margin-left:3px;"
              >300
            </div>-->
          </div>
          <div class="search-content-1">
            <div class="ac-content-right4-1">
              <img src="http://tubu100.com:8053/Files/Article/20180508155847035c4a.jpg">
            </div>
            <div class="ac-content-right4-2-1">
              <div>ddddddddd</div>
            </div>
          </div>
          <div class="search-content-1">
            <div class="ac-content-right4-1">
              <img src="http://tubu100.com:8053/Files/Article/20180508155847035c4a.jpg">
            </div>
            <div class="ac-content-right4-2-1">
              <div>ddddddddd</div>
            </div>
          </div>
          <div class="search-content-1">
            <div class="ac-content-right4-1">
              <img src="http://tubu100.com:8053/Files/Article/20180508155847035c4a.jpg">
            </div>
            <div class="ac-content-right4-2-1">
              <div>ddddddddd</div>
            </div>
          </div>
          <div>
            <div class="ac-content-right4-1">
              <img src="http://tubu100.com:8053/Files/Article/20180508155847035c4a.jpg">
            </div>
            <div class="ac-content-right4-2-1">
              <div>ddddddddd</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.index-right {
  width: 30%;
}

.search-1 {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  margin-top: 15px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.activity {
  border-bottom: 1px solid #dedbdb;
}
.public-1 {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
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
  padding: 0 12px 12px 12px;
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
  padding: 15px 15px 15px 15px;
  border-bottom: 1px dotted #adadad;
  display: flex;
  margin: 5px 20px 0 20px;
}
.activity-content1 {
  display: flex;
}
.ac-content-left {
  margin-right: 10px;
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
.ac-content-right4-1 {
  display: flex;
  height: 50px;
}
.ac-content-right4-1 {
  width: 80%;
}
.new-right2 {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
/* .ac-content-right4-1 img {
   height: 40px;
} */
.ac-content-right4-2-1 {
  width: 20%;
  font-size: 13px;
  color: #888;
}
.new-index {
  display: flex;
}
.new-alert {
  height: 120px;
}
.search-content-1 {
  height: 100px;
  border-bottom: 1px solid #ccc;
  border-bottom-style: dotted;
  margin-bottom: 10px;
}
.page {
  margin: 10px 0;
}
.tr-b-rf-bottom {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;

  padding: 0 10px 10px 10px;
}
.tr-b-rf-img {
  margin-top: 15px;
  padding-right: 5px;
}
</style>
