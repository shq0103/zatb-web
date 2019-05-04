<template>
  <div class="people-goods">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <div class="ac-h3">
            <h3>他的闲趣</h3>
          </div>
          <div class="tr-b-rf-bottom1">
            <el-row :gutter="24">
              <el-col :span="8">
                <div class="g-i-m-1">
                  <div class="g-i-m-img">
                    <img src="../../assets/3.jpg" style="width:226px;height:158px;">
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
                    <router-link to="/goods-show">更多>></router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="g-i-m-1">
                  <div class="g-i-m-img">
                    <img src="../../assets/3.jpg" style="width:226px;height:158px;">
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
              <el-col :span="8">
                <div class="g-i-m-1">
                  <div class="g-i-m-img">
                    <img src="../../assets/3.jpg" style="width:226px;height:158px;">
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
          <div class="tr-b-rf-page">
            <el-pagination class="page-1" background layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ac-public-form2-2 {
  margin: 30px 100px 0px 100px;
}
.user-secure-button {
  color: #fff;
  background-color: #8bc34a !important;
  border-color: #8bc34a !important;
}
.ac-h3 {
  color: #fff;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-size: 16px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-bottom-left-radius: 20px;
  -webkit-border-bottom-right-radius: 20px;
  background: #8bc34a;
  display: flex;
}
.ac-h3 h3 {
  margin: auto;
  font-size: 16px;
}
.ac-h3 span {
  position: absolute;
  right: 85px;
  font-size: 13px;
}
/* .el-table thead {
background: #f0f9eb !important;
} */
el-table th,
.el-table tr {
  background: #f0f9eb !important;
}
.el-table th,
.el-table tr {
  background: #f0f9eb !important;
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
.tr-b-rf-public {
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: right;
}
.tr-b-rf-bottom1 {
  margin: 20px 25px;
}
.tr-b-rf-page {
  padding: 0px 0 20px 0 !important;
}
.ac-public-content {
  min-height: 960px;
}
.g-i-m-1 {
  padding-right: 0px !important;
}
.new-right2 {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
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
