<template>
  <div class="new-show">
    <div class="index-left">
      <div class="activity">
        <div class="activity-title">
          <div class="activity-content1">
            <h2>第十三届平谷桃花节国际徒步大会即将隆重举行</h2>
            <div class="title-intro">
              <span>来源： 中国徒步网</span>
              <span>作者： Admin</span>
              <span>时间：2019-03-11 12:03:40</span>
              <span>
                <img src="../../assets/咨讯浏览.png" style="height:20px;margin:0 2px -5px 0;">223
              </span>
            </div>
          </div>
        </div>
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
              <el-button class="public-button1" type="success">户外咨讯</el-button>
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
          >热门推荐</div>
        </div>
        <div class="search-content">
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
  margin: 0 40px;
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
  padding: 15px 15px 15px 15px;
  border-bottom: 1px dotted #adadad;
  display: flex;
  margin: 5px 20px 0 20px;
}
.activity-content1 {
  border-bottom: 1px dotted #dedbdb;
  padding-top: 5px;
}
.activity-content1 h2 {
  font-size: 20px;
  color: #454444;
  text-align: center;
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
}
/* .ac-content-right4-1 img {
   height: 40px;
} */
.ac-content-right4-2-1 {
  width: 20%;
  font-size: 13px;
  color: #888;
}
.new-show {
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
.title-intro span {
  font-size: 12px;
  color: #919191;
  margin-left: 15px;
  position: relative;
}
/* .title-intro {
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-top: 10px;
  margin-bottom: 8px;
  text-align: center;
} */
</style>
