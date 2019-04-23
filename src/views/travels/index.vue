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
                <el-input size="medium" placeholder="输入想去的地方，如：尧山" prefix-icon="el-icon-search"></el-input>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="travels-top-rf">
            <el-carousel indicator-position="outside">
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
          <div class="tr-b-lf">11</div>
        </el-col>
        <el-col :span="16">
          <div class="tr-b-rf">
            <div class="tr-b-rf-top">
              <div style="font-size:18px;font-weight:bold;padding:0 15px;">
                <img class="hot" src="../../assets/hot.png">最热游记
              </div>
              <div style="font-size:18px;font-weight:bold;padding:0 15px;">
                <img class="hot" src="../../assets/new4.png">最新游记
              </div>
              <div class="post-bottom-button">
                <el-button type="success" plain size="small">
                  <i class="el-icon-edit-outline"></i>发布新帖
                </el-button>
              </div>
            </div>
            <div class="tr-b-rf-bottom">
              <div class="tr-b-rf-public">
                <i :style="{float:'left'}">
                  <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                </i>
                <i class="el-icon-message">3700</i>
                <i class="el-icon-view" style="padding-left:20px">300</i>
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
                      <img
                        src="https://n1-q.mafengwo.net/s13/M00/94/94/wKgEaVyy27mAL_9EAAVovA7qV6c30.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                      >
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="tr-b-rf-img2">
                      <img
                        src="https://p2-q.mafengwo.net/s13/M00/77/D0/wKgEaVyy1u2ATTiLAAJOujDDQxE66.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                      >
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="tr-b-rf-img3">
                      <img
                        src="https://n2-q.mafengwo.net/s13/M00/79/3E/wKgEaVyy1yuACQreAAZrlHtl_QA95.jpeg?imageMogr2%2Fthumbnail%2F%21220x130r%2Fgravity%2FCenter%2Fcrop%2F%21220x130%2Fquality%2F100"
                      >
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
.travels-top-lf {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.travels {
  padding: 0px 60px;
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
  margin-top: 40px;
}
.tr-b-rf-public {
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: right;
}
.tr-b-rf-bottom {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.tr-b-rf-img {
  margin-top: 20px;
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
</style>
