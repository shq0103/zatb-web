<template>
  <div class="index">
    <div class="picture">
      <span class="demonstration"></span>
      <el-carousel height="420px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            class="lunbo"
            src="https://p1-q.mafengwo.net/s13/M00/01/F5/wKgEaVywDQWAC_h4AAUK11aBDu824.jpeg?imageMogr2%2Finterlace%2F1"
          >
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="activity">
      <div id="act">
        <h3>活动</h3>
      </div>
      <div>
        <el-tabs value="first">
          <el-tab-pane name="first">
            <span slot="label" :style="{ fontSize: '18px',fontWeight:'bold'}">
              <img class="ac1" src="../../assets/activity.png"> 常规活动
            </span>

            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px'}">
                  <img
                    src="http://tubu100.com:8053/Files/At/20190129175037c0f3d5.jpg"
                    class="image"
                  >
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="官方活动" name="second">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px'}">
                  <img
                    src="http://tubu100.com:8053/Files/At/20190415164701d73e6d.jpg"
                    class="image"
                  >
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="最新上线" name="third">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px'}">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="自游行" name="fourth">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px'}">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="travels">
      <div class="travel">
        <div class="tr-title">
          <div class="tr-title-1">
            <div class="tr1">
              <img class="hot" src="../../assets/hot.png">热门游记
            </div>
            <div class="tr1-right">
              <el-row>
                <el-button :style="{marginTop:'15px'}" type="success" size="small" plain>更多</el-button>
                <!-- <el-button type="text" size="small">更多</el-button> -->
              </el-row>
            </div>
          </div>

          <div class="tr-title-2">
            <div class="tr2">
              <img class="hot" src="../../assets/new.png">最新发表
            </div>
            <div class="tr2-right">
              <el-row>
                <el-button
                  :style="{marginTop:'15px'}"
                  type="success"
                  size="small"
                  plain
                  icon="el-icon-arrow-up"
                ></el-button>
                <el-button
                  :style="{marginTop:'15px'}"
                  type="success"
                  size="small"
                  plain
                  icon="el-icon-arrow-down"
                ></el-button>
              </el-row>
            </div>
          </div>
        </div>
        <div class="tr-content">
          <div class="tr-content-left">
            <div class="tr-content-left-img">
              <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
            </div>
            <div class="tr-content-left-content">
              <div class="tr-content-left-content1">dddd</div>
              <div class="tr-content-left-content2">ddddd</div>
              <div class="tr-content-left-content3">
                <i class="el-icon-location">ddd</i>
                <i class="tr-author">ddd</i>
                <i class="el-icon-view">ddd</i>
              </div>
            </div>
          </div>
          <div class="tr-content-right"></div>
        </div>
      </div>
    </div>

    <div class="new">
      <div class="post">
        <div class="p-title">
          <div class="p1">
            <img class="p-img" src="../../assets/论坛.png">
            论坛
          </div>
          <div class="p-more">
            <el-button type="text">
              更多
              <i class="el-icon-plus el-icon--right"></i>
            </el-button>
          </div>
        </div>
        <div class="p-content"></div>
      </div>
      <div class="post">
        <div class="p-title">
          <div class="p1">
            <img class="p-img" src="../../assets/知识.png">户外知识
          </div>
          <div class="p-more">
            <el-button type="text">
              更多
              <i class="el-icon-plus el-icon--right"></i>
            </el-button>
          </div>
        </div>
        <div class="s-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: ["../../assets/logo.png", "../../assets/logo1.png"]
    };
  }
};
</script>
<style>
.lunbo {
  height: 420px;
}

.travels {
  margin-top: 30px;

  /* background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1); */
  /* height: 350px; */
}
.hot {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.p-img {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
}
.p-img {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
}
.ac1 {
  height: 20px;
  margin-bottom: -5px;
  margin-left: 5px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.activity {
  margin-top: 15px;
  margin-bottom: 40px;
}
.new {
  margin-top: 35px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.travel {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.tr-title {
  line-height: 40px;
  border-bottom: 2px solid #e1e1e0;
  border-bottom-style: dotted;
  height: 50px;
  display: flex;
  justify-content: space-between;
  /* background-color: #c2e7b0; */
}
.p-title {
  padding: 0;
  line-height: 40px;
  border-bottom: 2px solid #009a61;
  overflow: visible;
  height: 50px;
  display: flex;
  align-items: center;
}
.notice {
  position: absolute;
  right: 30px;
  background-color: #75b628;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.tr1 {
  /* border-bottom: 2px solid #009a61; */
  /* border-bottom-style: dotted; */

  margin-top: 10px;
  margin-left: 5px;
  margin-right: 500px;
  font-size: 18px;
  font-weight: bold;
}
.tr2 {
  margin-top: 10px;
}
.tr1-right {
  margin-left: auto;
  padding-right: 20px;
}
.tr2-right {
  margin-left: auto;
  padding-right: 10px;
}
.p1 {
  left: 20px;
  width: 20%;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.s1 {
  left: 20px;
  width: 20%;
  margin-top: 10px;
  font-size: 15px;
}
.travel-img {
  float: left;
  width: 220px;
  height: 150px;
  position: relative;
}

.el-icon-location {
  margin-right: 10px;
}
.tr-author {
  margin-right: 10px;
}
.el-icon-view {
  margin-right: 10px;
}
.travel-info {
  display: flex;
  flex-direction: column;
}
.el-tabs__item.is-active {
  color: #75b628;
}
.el-tabs__item:hover {
  outline: 0 !important;
  color: #75b628 !important;
}
.el-tabs__item {
  font-size: 16px;
  font-weight: 500;
}
.el-tabs__active-bar {
  background-color: #009a61;
}
.tr-content {
  display: flex;
  height: 300px;
  padding-top: 15px;
  padding-bottom: 15px;
  /* background-color: #f0f9eb; */
}
.tr-content-left {
  width: 70%;
  height: 300px;
  display: flex;
}
.tr-content-right {
  width: 30%;
  border-left: 2px solid #e1e1e0;
  border-left-style: dotted;
  height: 300px;
}
.tr-title-1 {
  display: flex;
  width: 70%;
}
.tr-title-2 {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 30%;
}
.post {
  width: 49%;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.tr-content-left-content {
  display: flex;
  flex-direction: column;
}
.tr-content-left-img {
  width: 40%;
}
.tr-content-left-content {
  width: 70%;
}
.el-button + .el-button {
  margin-left: 4px !important;
}
.p-more {
  margin-left: auto;
  padding-right: 10px;
}
.el-button--text {
  color: #009a61;
}
</style>

