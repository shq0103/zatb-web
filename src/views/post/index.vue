<template>
  <div class="post">
    <div class="post-top">
      <el-row :gutter="24">
        <el-col :span="6">
          <el-carousel height="250px">
            <el-carousel-item v-for="item in 4" :key="item">
              <img
                class="lunbo"
                src="https://p1-q.mafengwo.net/s13/M00/01/F5/wKgEaVywDQWAC_h4AAUK11aBDu824.jpeg?imageMogr2%2Finterlace%2F1"
              >
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="6" class="post-top-border0" style="height:250px">
          <h4>最新主题</h4>
          <ul>
            <li>1111111111111111111111111111111111111111111111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
            <li>555</li>
            <li>666</li>
            <li>777</li>
          </ul>
        </el-col>
        <el-col :span="6" class="post-top-border1" style="height:250px">
          <h4>最新回复</h4>
          <ul>
            <li>1111111111111111111111111111111111111111111111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
            <li>555</li>
            <li>666</li>
            <li>777</li>
          </ul>
        </el-col>
        <el-col class="post-top-border2" :span="6" style="height:250px">
          <h4>
            <span class="zxzt"></span>热帖
          </h4>
          <ul>
            <li>1111111111111111111111111111111111111111111111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
            <li>555</li>
            <li>666</li>
            <li>777</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="post-bottom">
      <div class="post-bottom-title">
        <div class="post-bottom-title-all">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部主题
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="post-bottom-title-zxzt">最新</div>
        <div class="post-bottom-title-rt">热帖</div>
        <div class="post-bottom-button">
          <el-button type="success" plain size="small">
            <i class="el-icon-edit-outline"></i>发布新帖
          </el-button>
        </div>
      </div>
      <div class="post-bottom-content">
        <el-row :gutter="24">
          <el-col :span="12" style="border-right:2px dotted #ccc;border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12" style="border-right:2px dotted #ccc;border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12" style="border-right:2px dotted #ccc;border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12" style="border-right:2px dotted #ccc;border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12" style="border-right:2px dotted #ccc;border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="border-bottom:2px dotted #ccc">
            <el-row :gutter="24">
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img src="https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                  <div class="new-right2">
                    <i>
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                    </i>
                    <i class="el-icon-time">2019-4-21 18:24</i>
                    <i class="el-icon-view" style="padding-left:20px">300</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="post-page">
        <el-pagination class="page-1" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>
<style scoped>
.post-top {
  /* display: flex; */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.post-top-border0,
.post-top-border1 {
  border-right: 1px solid #e7e7e7;
}
.el-row {
  padding: 20px 20px;
}
.post-top-border0,
.post-top-border1,
.post-top-border2 ul {
  overflow: hidden;
}
.post-top-border0 h4 {
  background: url(../../assets/zxzt.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-align: left;
  text-indent: 2.5em;
  margin-left: 10px;
  margin-top: 0px;
}
.post-top-border0 h4:hover {
  background: url("../../assets/zxzt.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
}
.post-top-border ul li {
  font-size: 13px;

  margin-bottom: 5px;

  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.post-top-border1 ul {
  overflow: hidden;
}
.post-top-border1 h4 {
  background: url(../../assets/zxhf.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-align: left;
  text-indent: 2.5em;
  margin-left: 10px;
  margin-top: 0px;
}
.post-top-border1 h4:hover {
  background: url("../../assets/zxhf.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
}
.post-top-border2 h4 {
  background: url(../../assets/rt.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-align: left;
  text-indent: 2.5em;
  margin-left: 10px;
  margin-top: 0px;
}
.post-top-border2 h4:hover {
  background: url("../../assets/rt.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
}
.post-top-border1 ul li {
  font-size: 13px;

  margin-bottom: 5px;

  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.post-bottom {
  /* display: flex; */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}
.post-bottom-content-lf img {
  height: 70px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.new-alert {
  height: 40px !important;
  margin: 5px 0px !important;
}
.post-page {
  padding-bottom: 20px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #75b628 !important;
}
.new-right2 {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
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
  text-indent: 1.2em;
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
.el-icon-edit-outline {
  padding-right: 5px;
}
</style>
