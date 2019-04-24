<template>
  <div class="travels">
    <div class="travels-top">
      <el-row :gutter="24">
        <el-col :span="8">
          <div class="travels-top-lf">
            <ul>
              <li>
                <el-popover ref="popover1" placement="right" width="200" trigger="hover">
                  <div>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </el-popover>
                <el-button v-popover:popover1 class="tr-t-lf-button">短线精选TOP10</el-button>
              </li>
              <li>
                <el-popover ref="popover2" placement="right" width="200" trigger="hover">
                  <div>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </el-popover>
                <el-button v-popover:popover2 class="tr-t-lf-button">中线精选TOP10</el-button>
              </li>
              <li>
                <el-popover ref="popover3" placement="right" width="200" trigger="hover">
                  <div>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </el-popover>
                <el-button v-popover:popover3 class="tr-t-lf-button">长线精选TOP10</el-button>
              </li>
              <li>
                <el-popover ref="popover4" placement="right" width="200" trigger="hover">
                  <div>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </el-popover>
                <el-button v-popover:popover4 class="tr-t-lf-button">全部精选TOP10</el-button>
              </li>
              <li style="margin-top: 10px;">
                <el-input
                  class="tr-t-lf-input"
                  size="medium"
                  placeholder="输入想去的地方，如：尧山"
                  prefix-icon="el-icon-search"
                ></el-input>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="travels-top-rf">
            <el-carousel>
              <el-carousel-item v-for="item in 4" :key="item">
                <img src="../../assets/1.jpg">
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="travels-bottom">
      <el-row :gutter="24">
        <el-col :span="8">
          <div class="tr-b-lf">
            <div class="tr-b-rf-top">
              <div style="font-size:18px;font-weight:bold;padding:0 15px;">
                <img class="hot" src="../../assets/我的点赞.png">推荐路书
              </div>
            </div>
            <div class="tr-b-lf-bottom">
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-img">
                  <div class="tr-b-rf-img1">
                    <img src="../../assets/timg.jpg" style="heigh:138px;width:340px;">
                  </div>
                </div>
                <div class="tr-b-rf-title">
                  <el-alert title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                </div>

                <div class="tr-b-rf-public">
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
                </div>
              </div>
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-img">
                  <div class="tr-b-rf-img1">
                    <img src="../../assets/timg.jpg" style="heigh:138px;width:340px;">
                  </div>
                </div>
                <div class="tr-b-rf-title">
                  <el-alert title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                </div>

                <div class="tr-b-rf-public">
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
                </div>
              </div>
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-img">
                  <div class="tr-b-rf-img1">
                    <img src="../../assets/timg.jpg" style="heigh:138px;width:340px;">
                  </div>
                </div>
                <div class="tr-b-rf-title">
                  <el-alert title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                </div>

                <div class="tr-b-rf-public">
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
                </div>
              </div>
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-img">
                  <div class="tr-b-rf-img1">
                    <img src="../../assets/timg.jpg" style="heigh:138px;width:340px;">
                  </div>
                </div>
                <div class="tr-b-rf-title">
                  <el-alert title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                </div>

                <div class="tr-b-rf-public">
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
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="tr-b-rf">
            <div class="tr-b-rf-top">
              <div style="font-size:18px;font-weight:bold;padding:0 5px;">
                <img class="hot" src="../../assets/hot.png">最热路书
              </div>
              <div style="font-size:18px;font-weight:bold;padding:0 15px;">
                <img class="hot" src="../../assets/new4.png">最新路书
              </div>
              <div class="post-bottom-button">
                <el-button type="success" plain size="small">
                  <i class="el-icon-edit-outline"></i>发布路书
                </el-button>
              </div>
            </div>
            <div class="tr-b-rf-bottom1">
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-public">
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
                </div>
                <div class="tr-b-rf-title">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-img">
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <div class="tr-b-rf-img1">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img2">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img3">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-public">
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
                </div>
                <div class="tr-b-rf-title">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-img">
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <div class="tr-b-rf-img1">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img2">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img3">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-public">
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
                </div>
                <div class="tr-b-rf-title">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-img">
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <div class="tr-b-rf-img1">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img2">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img3">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-public">
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
                </div>
                <div class="tr-b-rf-title">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-img">
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <div class="tr-b-rf-img1">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img2">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img3">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-public">
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
                </div>
                <div class="tr-b-rf-title">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-img">
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <div class="tr-b-rf-img1">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img2">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img3">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <div class="tr-b-rf-bottom">
                <div class="tr-b-rf-public">
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
                </div>
                <div class="tr-b-rf-title">
                  <el-alert
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-img">
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <div class="tr-b-rf-img1">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img2">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="tr-b-rf-img3">
                        <img src="../../assets/youji.jpg" style="heigh:134px;width:245px;">
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
            <div class="tr-b-rf-page">
              <el-pagination class="page-1" background layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
.travels-top-lf,
travels-top-rf {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}

.travels-top-lf ul li,
.travels-top-lf ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.tr-t-lf-button {
  width: 100%;
  border-radius: 0px !important;
}
.travels-bottom {
  margin-top: 20px;
  background-color: #fff;
  padding: 15px 15px 0 15px;
}
.tr-b-rf-public {
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: right;
}
.tr-b-rf-bottom {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;

  padding: 0 5px 10px 5px;
}
.tr-b-rf-img {
  margin-top: 15px;
  padding-right: 5px;
}
.tr-b-rf-top {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.hot {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.post-bottom-button {
  position: absolute;
  right: 20px;
  margin-top: -5px;
}
.tr-t-lf-input {
  border: 1px solid #75b628 !important;
}

.el-input__inner {
  border: 1px solid #75b628 !important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #75b628 !important;
}
.tr-b-lf-bottom {
  padding: 0 5px;
}
.tr-b-rf-page {
  padding: 0 0 10px 0 !important;
}
.tr-b-lf {
  padding: 0 10px;
}
tr-b-rf {
  padding: 0 10px;
}
</style>
