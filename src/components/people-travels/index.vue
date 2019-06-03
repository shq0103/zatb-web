<template>
  <div class="user-travels">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <div class="ac-h3">
            <h3>Ta的路书</h3>
          </div>
          <div class="tr-b-rf-bottom1">
            <div class="tr-b-rf-bottom">
              <div class="tr-b-rf-public">
                <!-- <i :style="{float:'left'}">
                  <img
                    src="../../assets/个人1.png"
                    style="height: 16px; margin-right:3px;margin-bottom: -2px;"
                  >###
                </i>-->
                <img
                  src="../../assets/评论1.png"
                  style="height: 20px; margin-bottom: -3px;margin-right:3px;"
                >10
                <img
                  src="../../assets/浏览.png"
                  style="height: 23px; margin-bottom: -5px;margin-right:3px;margin-left:3px;"
                >30
              </div>
              <div class="tr-b-rf-title">
                <el-alert
                  title="漫步山水间邂逅古堡访古村穿越十里"
                  type="success"
                  :closable="false"
                  description="个人装备：速干衣裤，登山杖，登山鞋，背包，头灯或手电筒必带，防晒防雨用品，备多一件厚衣服。"
                ></el-alert>
              </div>
              <div class="tr-b-rf-img">
                <el-row :gutter="24">
                  <el-col :span="8">
                    <div class="tr-b-rf-img1">
                      <img
                        src="http://www.hw917.com/data/attachment/image/000/03/99/87_340_230.jpg"
                        style="heigh:134px;width:220px;"
                      >
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="tr-b-rf-img2">
                      <img
                        src="http://www.hw917.com/data/attachment/image/000/04/00/66_340_230.jpg"
                        style="heigh:134px;width:220px;"
                      >
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="tr-b-rf-img3">
                      <img
                        src="http://www.hw917.com/data/attachment/image/000/04/01/53_340_230.jpg"
                        style="heigh:134px;width:220px;"
                      >
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
          <div class="tr-b-rf-page">
            <el-pagination class="page-1" background layout="prev, pager, next" :total="1"></el-pagination>
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
</style>
