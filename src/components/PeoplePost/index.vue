<template>
  <div class="peoplepost">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <div class="ac-h3">
            <h3>Ta的帖子</h3>
          </div>
          <div class="tr-b-rf-bottom1">
            <div class="tr-b-rf-bottom">
              <div class="post-bottom-content-rf">
                <router-link to="/post-show">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                </router-link>
                <div class="new-right2">
                  <i>
                    <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                  </i>
                  <i class="el-icon-time">2019-4-21 18:24</i>
                  <i class="el-icon-view" style="padding-left:20px">300</i>
                </div>
              </div>
            </div>
            <div class="tr-b-rf-bottom">
              <div class="post-bottom-content-rf">
                <router-link to="/post-show">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                </router-link>
                <div class="new-right2">
                  <i>
                    <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                  </i>
                  <i class="el-icon-time">2019-4-21 18:24</i>
                  <i class="el-icon-view" style="padding-left:20px">300</i>
                </div>
              </div>
            </div>
            <div class="tr-b-rf-bottom">
              <div class="post-bottom-content-rf">
                <router-link to="/post-show">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                </router-link>
                <div class="new-right2">
                  <i>
                    <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                  </i>
                  <i class="el-icon-time">2019-4-21 18:24</i>
                  <i class="el-icon-view" style="padding-left:20px">300</i>
                </div>
              </div>
            </div>
            <div class="tr-b-rf-bottom">
              <div class="post-bottom-content-rf">
                <router-link to="/post-show">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                </router-link>
                <div class="new-right2">
                  <i>
                    <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                  </i>
                  <i class="el-icon-time">2019-4-21 18:24</i>
                  <i class="el-icon-view" style="padding-left:20px">300</i>
                </div>
              </div>
            </div>
            <div class="tr-b-rf-bottom">
              <div class="post-bottom-content-rf">
                <router-link to="/post-show">
                  <div class="ac-content-right1">
                    <el-alert class="new-alert" title="带辅助性文字介绍" type="success" :closable="false"></el-alert>
                  </div>
                </router-link>
                <div class="new-right2">
                  <i>
                    <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">###
                  </i>
                  <i class="el-icon-time">2019-4-21 18:24</i>
                  <i class="el-icon-view" style="padding-left:20px">300</i>
                </div>
              </div>
            </div>
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
.new-right2 {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
</style>

