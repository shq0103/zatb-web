<template>
  <div class="goods">
    <div class="hot-sell">
      <!-- <div class="h-s-title">热门闲置</div> -->
      <div class="h-s-bottom">
        <div class="activity">
          <!-- <div id="act">
        <h3>活动</h3>
          </div>-->
          <div>
            <el-tabs value="first">
              <el-tab-pane name="first">
                <span slot="label" :style="{ fontSize: '18px', fontWeight: 'bold' }">
                  <img class="ac1" src="../../assets/卖.png"> 热门闲置
                </span>

                <el-row :gutter="24" type="flex" justify="center">
                  <el-col :span="5" v-for="(o, index) in 4" :key="o">
                    <el-card :body-style="{ padding: '0px' }">
                      <img
                        src="http://tubu100.com:8053/Files/At/20190129175037c0f3d5.jpg"
                        class="image"
                      >
                      <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                          <time class="time">2019-04-29 21:36</time>
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
      </div>
    </div>
    <div class="sell-public">
      <div class="s-p-lf">
        <img style="height:56px;" src="../../assets/闲置搜索.png">
        <div class="el-input">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="line"></div>
      <div class="s-p-lf">
        <img class="icon" src="../../assets/发布闲置.png">
        <div class="s-p-lf-1">
          <p class="name">发布闲置</p>
          <!-- <p class="cont">闲置换钱 快速出手</p> -->
        </div>
      </div>
    </div>
    <div class="goods-introduction">
      <div class="post-bottom">
        <div class="post-bottom-title">
          <div class="post-bottom-title-all">服饰</div>
          <div class="post-bottom-title-zxzt">装备</div>
          <div class="post-bottom-title-rt">其他</div>
        </div>
        <div class="g-i-middle">
          <el-row :gutter="24">
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="g-i-middle">
          <el-row :gutter="24">
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="g-i-middle">
          <el-row :gutter="24">
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img src="../../assets/3.jpg" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；"
                    :closable="false"
                  ></el-alert>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/用户.png" style="height: 20px; margin-bottom: -3px;">###
                    </i>
                    <i style="padding-left:20px">
                      <img src="../../assets/钱.png" style="height: 20px; margin-bottom: -3px;">300
                    </i>
                  </div>
                </div>
                <div class="show-more">
                  <a>更多>></a>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="page">
          <el-pagination class="page-1" background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sell-public {
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  flex-direction: row;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 0px;
  height: 70px;

  box-sizing: border-box;
  padding-left: 170px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 15px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.line {
  width: 1px;
  height: 42px;
  background-color: #e6e6e6;
  margin-right: 150px;
  margin-left: 150px;
}
.name {
  font-family: PingFangSC-Semibold;
  font-weight: 700;
  color: #222;
  font-size: 18px;
  height: 25px;
  line-height: 25px;
}
.cont {
  color: #222;
  font-size: 12px;
  margin-top: 2px;
  height: 17px;
  line-height: 17px;
}
.s-p-lf {
  display: flex;
  align-items: center;
}
.icon {
  width: 56px;
  height: 56px;
}
.s-p-lf-1 {
  margin: 0;
  padding: 0 15px;
}
.el-input {
  width: 95% !important;
  margin-left: 10px;
}
.goods-introduction {
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.post-bottom {
  /* display: flex; */
  padding-bottom: 5px;
  margin: 20px 0;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.post-bottom-content-lf img {
  height: 70px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.post-bottom-title {
  display: flex;

  padding: 1.5% 0 1% 1%;
}
.post-bottom-title-zxzt {
  background: url(../../assets/zxhf.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-indent: 2.5em;
  margin: 0 20px 0 20px;
}
.post-bottom-title-zxzt:hover {
  background: url("../../assets/zxhf.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
  color: #75b628;
}
.post-bottom-title-rt {
  background: url(../../assets/rt.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-indent: 2.5em;
}
.post-bottom-title-rt:hover {
  background: url("../../assets/rt.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
  color: #75b628;
}
.post-bottom-title-all {
  background: url(../../assets/zxzt.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-indent: 2.5em;
}
.post-bottom-title-all:hover {
  background: url("../../assets/zxzt.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
  color: #75b628;
}
.el-icon--right {
  margin-left: -15px;
}
.post-bottom-button {
  position: absolute;
  right: 100px;
  margin-top: -5px;
}
.g-i-middle {
  padding: 15px 0;
  /* border-bottom: 1px solid #ccc; */
  margin: 0 20px;
}
.g-i-m-1 {
  padding-right: 0px !important;
}
.new-right2 {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.page {
  margin: 50px 0 15px 0;
}
.activity {
  margin-bottom: 25px;
}
.ac1 {
  height: 20px;
  margin-bottom: -5px;
  margin-left: 5px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.el-col-5 {
  width: 25.5% !important;
}
.el-tabs__item.is-active {
  color: #75b628 !important;
}
.el-tabs__active-bar {
  background-color: #75b628 !important;
}
.show-more {
  width: 100%;
  height: 35px;
  background: url(../../assets/line_2.png) no-repeat center center;
  text-align: center;
  margin-top: 6px;
}
.show-more a {
  height: 35px;
  line-height: 35px;
  border-radius: 4px;
  display: inline-block;
  padding: 0 40px;
  color: #fff;
  font-size: 14px;
  background: #75b628;
}
</style>
