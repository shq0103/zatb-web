<template>
  <div class="goods-show">
    <div class="user-info">
      <div class="user-info-1">
        <div class="user-info-img">
          <img
            src="http://avatar.8264.com/data/avatar/034/24/36/11_avatar_middle.jpg?qCB02M?tempid=7787"
            style="height: 50px; "
          >
        </div>
        <div class="user-info-name">
          <a href="#" target="_blank">钢铁侠</a>
        </div>
      </div>
      <div class="user-info-index">
        <h5>宝贝浏览次数</h5>
        <span>50</span>
      </div>
      <div class="user-info-index">
        <h5>用户交易次数</h5>
        <span>转卖5笔</span>
      </div>
      <div class="user-info-index">
        <h5>用户闲趣评价</h5>
        <span>10人评价</span>
      </div>
      <div class="user-info-index">
        <h5>用户闲趣好评率</h5>
        <span>满意</span>
      </div>
      <div class="user-info-more">
        <h5>举报该闲趣</h5>
      </div>
    </div>
    <div class="goods-intro">
      <div class="g-intro-lf">
        <img
          src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3224644570,2193767834&fm=179&app=42&f=JPEG?w=242&h=242"
        >
      </div>
      <div class="g-intro-rf">
        <div class="g-intro-rf-info">
          <h1 class="title">blooming flower登山杖</h1>
          <ul class="price-info">
            <li class="price-block">
              <span class="para">转&nbsp;&nbsp;卖&nbsp;&nbsp;价：</span>
              <span class="price-big">
                <b>¥</b>
                <em>21.00</em>
              </span>
            </li>
            <li class="price-block">
              <span class="para">原 价：</span>
              <b>¥</b>
              <span>98.00</span>
            </li>
          </ul>
          <ul class="idle-info">
            <li>
              <span class="para">成 色：</span>
              <i>八成新</i>
            </li>
            <li>
              <span class="para">所&nbsp;&nbsp;在&nbsp;&nbsp;地：</span>
              <em>广西桂林 七星区</em>
            </li>
            <li class="contact">
              <span class="para">联系方式：</span>
              <em>100&nbsp;1000&nbsp;1000</em>
            </li>
            <li class="contact">
              <span class="para">交易方式：</span>
              <el-tag type="success">线下交易</el-tag>
            </li>
          </ul>
          <!-- <div>
            <el-button type="success">立即联系购买</el-button>
          </div>-->
        </div>
      </div>
    </div>
    <div class="goods-info">
      <el-row :gutter="20">
        <el-col :span="17">
          <div class="a-c-lf">
            <div class="a-c-lf-title">
              <ul class="tabbar">
                <li class="tabbar-1">
                  <a href="#position1;">介绍</a>
                </li>
                <li>
                  <a href="#position2;">评论</a>
                </li>
              </ul>
            </div>
            <div class="a-c-lf-content">
              <div class="a-c-l-c-1">
                <div class="attr-title">
                  <h3>
                    <a name="position1">
                      <img src="../../assets/行程.png" class="icon-intro">闲趣介绍
                    </a>
                  </h3>
                </div>
                <div class="attr-content">22</div>
              </div>
              <div class="a-c-l-c-2">
                <div class="attr-title">
                  <a name="position2">
                    <h3>
                      <img src="../../assets/费用说明.png" class="icon-intro">评论
                    </h3>
                  </a>
                </div>
                <div class="attr-content">
                  <div class="attr-content-info">33</div>
                  <div class="attr-content-commend">
                    <el-form ref="form" label-width="80px">
                      <el-form-item label="进行评论">
                        <el-input type="textarea"></el-input>
                      </el-form-item>
                    </el-form>
                    <div class="block">
                      <span class="demonstration">星级评价</span>
                      <el-rate v-model="value2" :colors="colors" show-text></el-rate>
                    </div>
                    <div class="block1">
                      <el-button type="success">提交评价</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="a-c-rf">
            <div class="a-c-rf-1">
              <div class="a-c-rf-2-title">卖家的其他闲趣</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
.user-info {
  flex-direction: row;
  display: flex;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 15px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  border-top: 2px solid #75b628;
}
.user-info-img {
  margin: 0 10px 0 30px;
}
.user-info-name a {
  font-weight: 700;
  color: #666;
}
.user-info-name {
  margin: 15px 75px 0 5px;
}
.user-info-1 {
  border-right: 1px solid #ccc;
  display: flex;
}
.user-info-index h5 {
  color: #999;
  font-weight: 400;
  line-height: 20px;
  margin: 5px 35px;
}
.user-info-index span {
  font-size: 14px;
}

.user-info-index {
  border-right: 1px dotted #ccc;
  text-align: center;
}
.user-info-more h5 {
  color: #999;
  font-weight: 400;
  line-height: 20px;
  margin: 5px 40px;
  position: absolute;
  right: 60px;
}
.goods-intro {
  background-color: #fff;
  margin-bottom: 15px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 20px 20px;
}

.g-intro-lf img {
  width: 500px;
  height: 300px;
}
.g-intro-lf {
  width: 60%;
  margin: 0 15px 0 0;
}
.g-intro-rf {
  width: 40%;
}
.g-intro-rf-info {
  /* background-color: #eefaec; */
  text-align: left;
  padding: 15px 20px;
}
.g-intro-rf-info h1 {
  margin: 0px;
}
ul {
  list-style: none;
}
.price-block {
  font-size: 14px;
}
.para {
  float: left;
  width: 80px;
  font: 14px/1.5 tahoma, arial, simsun;
  margin: 0 0 0 -35px;
}

.price-big b {
  font-size: 24px;
}
.price-big em {
  font-weight: 700;
  font-size: 24px;
  color: #f40;
}

.price-block b {
  font-weight: 400;
  font-family: Arial, Verdana;
  padding-right: 2px;
  color: #999;
}
.price-block {
  font-family: Verdana;
}

.price-info li {
  line-height: 24px;
  padding: 0 0 8px 0px;
  position: relative;
  white-space: nowrap;
}
.price-info {
  border-bottom: 1px solid #eee;
}
.idle-info {
  overflow: hidden;
}
.idle-info li {
  padding: 5px 0 5px 5px;
  white-space: nowrap;
  position: relative;
  line-height: 23px;
}
ul {
  list-style-type: none;
}
.activity_top {
  display: flex;
  margin: 0px;
  padding: 0px;
}
.activity_top li {
  line-height: 20px;
  font-size: 13px;
}
.activity_top li a {
  color: #999;
}
.activity_top li:nth-child(2n) {
  padding: 0 10px;
}
.a-i-title {
  display: flex;
  margin: 15px 0;
}
.activity_title {
  line-height: 24px;
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
}
.activity_distance {
  margin-top: 1px;
  padding: 0 10px;
  line-height: 22px;
  background: #ffa500;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  margin-left: 10px;
  font-size: 12px;
}
.activity_text {
  width: 100%;
  box-sizing: border-box;
  line-height: 14px;
  font-size: 14px;
  margin: 15px 0;
  color: #999;
  display: flex;
}
.a-i-content {
  display: flex;
}
.a-i-c-lf label {
  font-weight: bold;
  background: #ffd400;
  padding: 0 15px;
  height: 34px;
  line-height: 34px;
  left: 80px;
  position: absolute;
  font-size: 13px;
  margin: 30px 0px;
}
.a-i-c-lf b.stat_01 {
  color: #fff;
  background: #7594ac;
}
.a-i-c-lf b {
  padding: 0 15px;
  height: 34px;
  line-height: 34px;
  left: 80px;
  position: absolute;
  font-size: 13px;
  margin: 64px 0px;
}
.a-i-c-rf {
  margin-left: 20px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.a-i-c-rf p {
  font-size: 13px;
  padding: 3px 0px;
}
.el-button.is-round {
  width: 80%;
}
.a-i-c-rf-text {
  text-align: left;
  padding: 10px 20px;
}
.a-c-lf {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.a-c-lf-title {
  background-color: #f6f8fa;
  box-shadow: 0 -1px 3px rgba(4, 0, 0, 0.06);
}
.a-c-rf {
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
}
.activity_content {
  margin: 30px 0px;
}
.a-c-rf-2-title {
  height: 28px;
  line-height: 28px;
  font-size: 18px;
  color: #7594ac;
  text-align: left;
  margin: 10px 10px;
}
.a-c-rf-2-title1 {
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  color: #7594ac;
  text-align: left;
  margin: -10px 40px 10px 10px;
}
.a-c-rf-2-cloud {
  width: 90%;
  height: 85px;
  background: #4b8ee7 url(../../assets/cloud.png) no-repeat 20px center;
  position: relative;
  margin: auto;
}
.a-c-rf-2-cloud a {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  color: #fff;
  border: 1px solid #fff;
  position: absolute;
  right: 20px;
  bottom: 25px;
  padding: 0 20px;
  border-radius: 4px;
  font-size: 16px;
}
.a-c-rf-1 {
  border-bottom: #ccc dotted 2px;

  padding: 10px 0px;
}
.a-c-rf-2 {
  border-bottom: #ccc dotted 2px;

  padding: 20px 0px;
}
.a-c-rf-3 {
  padding: 10px 0px;
  min-height: 100px;
}
.post-bottom-content-lf img {
  height: 70px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 0 10px;
}
.post-bottom-content-rf ul {
  padding: 0;
  text-align: left;
  font-size: 15px;
  color: #999;
}
/* .a-c-rf-2-people-1 {
  padding-left: 0px !important;
} */
.a-c-rf-2-content {
  margin: 20px 0px;
}
.tabbar {
  position: relative;
  height: 56px;
  padding-left: 10px;
  margin: 0px;
}
.tabbar-1 {
  background-color: #fff;
  border-top: 2px solid #75b628;
  height: 54px;
  line-height: 52px;
}
.tabbar li {
  position: relative;
  float: left;
  height: 56px;
  line-height: 56px;
}
.tabbar a {
  padding: 0 20px;
  font-size: 16px;
  color: #585858;
  display: block;
  text-align: center;
}
.attr-title {
  padding: 0 20px 10px 20px;
}
.attr-title i {
  display: inline-block;
  vertical-align: middle;
  margin: -3px 10px 0 0;
}
.icon-intro {
  height: 25px;
  /* background: url(../../assets/xianlu.png) no-repeat; */
  margin-bottom: -5px;
  margin-right: 5px;
}
.attr-title h3 {
  text-shadow: 0 2px 0 rgba(98, 133, 161, 0.2);
  color: #7594ac;
  font: 400 20px/32px "Microsoft Yahei";
  text-align: left;
}
.a-c-l-c-1 {
  border-bottom: 1px dotted #ccc;
  margin: 5px 20px;
}
.a-c-l-c-2 {
  margin: 0px 20px;
  padding-bottom: 20px;
}
.attr-content {
  min-height: 300px;
}
.attr-content-info {
  min-height: 300px;
}
.block {
  display: flex;
  margin-left: 10px;
}
.demonstration {
  margin-right: 10px;
  font-size: 14px;
}
.attr-content-commend {
  margin: 15px 0;
}
</style>
