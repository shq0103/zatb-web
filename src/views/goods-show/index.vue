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
          <a href="#" target="_blank">{{goods.username}}</a>
        </div>
      </div>
      <div class="user-info-index">
        <h5>宝贝浏览次数</h5>
        <span>{{goods.viewCount}}</span>
      </div>

      <!-- <div class="user-info-index">
        <h5>用户闲趣留言</h5>
        <span>人留言</span>
      </div>-->

      <div class="user-info-more">
        <h5>举报该闲趣</h5>
      </div>
    </div>
    <div class="goods-intro">
      <div class="g-intro-lf">
        <pic-zoom
          :style="{width: '300px',height: '300px',margin:'0 auto' }"
          :url="`/image${picList[liActIndex]}`"
          :scale="3"
        ></pic-zoom>

        <vue-seamless-scroll :class-option="optionSwitch" class="seamless-warp3">
          <span slot="left-switch" class="left-arrow"></span>
          <span slot="right-switch" class="right-arrow"></span>
          <ul class="item" :style="{width:`${8*150}px`}">
            <li
              v-for="(item,index) in picList"
              @click="selectImg(index)"
              :class="{liactivite:liActIndex===index}"
              :key="index"
            >
              <el-image style="width: 70px; height: 70px" :src="`/image${item}`"></el-image>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
      <div class="g-intro-rf">
        <div class="g-intro-rf-info">
          <h1 class="title">{{goods.name}}</h1>
          <ul class="price-info">
            <li class="price-block">
              <span class="para">转&nbsp;&nbsp;卖&nbsp;&nbsp;价：</span>
              <span class="price-big">
                <b>¥</b>
                <em>{{goods.sPrice}}</em>
              </span>
            </li>
            <li class="price-block">
              <span class="para">原 价：</span>
              <b>¥</b>
              <span>{{goods.price}}</span>
            </li>
          </ul>
          <ul class="idle-info">
            <li>
              <span class="para">成 色：</span>
              <i>{{goods.extent|extentFilter}}</i>
            </li>
            <li>
              <span class="para">所&nbsp;&nbsp;在&nbsp;&nbsp;地：</span>
              <em>{{goods.place}}</em>
            </li>
            <li class="contact">
              <span class="para">联系方式：</span>
              <em>{{goods.num}}</em>
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
                  <a href="#position1">介绍</a>
                </li>
                <li class="tabbar-2">
                  <a href="#position2" class="po-active">留言</a>
                </li>
              </ul>
            </div>
            <div class="a-c-lf-content">
              <div class="a-c-l-c-1">
                <div class="attr-title">
                  <h3>
                    <a name="position1">
                      <img src="../../assets/介绍.png" class="icon-intro">闲趣介绍
                    </a>
                  </h3>
                </div>
                <div class="attr-content" v-html="goods.introduction"></div>
              </div>
              <div class="a-c-l-c-2">
                <div class="attr-title">
                  <a name="position2">
                    <h3>
                      <img src="../../assets/评价.png" class="icon-intro">留言及评价
                    </h3>
                  </a>
                </div>
                <div class="attr-content">
                  <div class="attr-content-info">
                    <div
                      class="user-commemt"
                      v-for="(item,index) in comList"
                      :key="item.id"
                      :class="{borderNone:index+1===comList.length}"
                    >
                      <el-row :gutter="20">
                        <el-col :span="4">
                          <div class="grid-content-lf">
                            <img :src="`/image${item.avatar}`">
                            <span>{{item.nickname}}</span>
                          </div>
                        </el-col>
                        <el-col :span="20">
                          <div class="grid-content-rf">
                            <p v-html="item.contents" style="text-align:left;"></p>
                            <span>发表于 {{item.time|timeFilter}}</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="attr-content-commend">
                    <el-form ref="form" label-width="80px">
                      <el-form-item label="进行点评" model="comForm">
                        <el-input type="textarea" v-model="comForm.contents"></el-input>
                      </el-form-item>
                    </el-form>
                    <!-- <div class="block">
                      <span class="demonstration">星级评价</span>
                      <el-rate v-model="value2" :colors="colors" show-text></el-rate>
                    </div>-->
                    <div class="block1">
                      <el-button type="success" @click="onSubmit">提交评价</el-button>
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
              <div class="a-c-rf-2-other" v-for="item in otherList" :key="item.id">
                <div class="a-c-rf-img" style="width:80px;height:80px;">
                  <img :src="item.image" style="width:80px;height:80px;">
                </div>
                <div class="a-c-rf-content">
                  <!-- <el-alert title="不可关闭的 alert" type="success" :closable="false"></el-alert> -->
                  <p>
                    <a
                      href="http://www.8264.com/zhuangbei-2075985-1.html"
                      target="_blank"
                    >{{item.title}}</a>
                  </p>
                  <p class="price-block">
                    <span class="price">
                      <b>¥</b>
                      <em>{{item.price}}</em>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import PicZoom from "vue-piczoom";
import Vue from "vue";
import scroll from "vue-seamless-scroll";
import { getGoodsDetail, goodsComment, getCommentList } from "@/api/goods.js";

Vue.use(scroll);
export default {
  components: {
    PicZoom
  },
  filters: {
    extentFilter: function(value) {
      switch (value) {
        case 100:
          return "全新";
        case 95:
          return "九五成新";
        case 90:
          return "九成新";
        case 80:
          return "八成新";
        case 70:
          return "七成新及以下";
        default:
          return "";
      }
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    },
    timeFormatter(cellValue) {
      return moment(cellValue - 8 * 3600 * 1000).format("YYYY/MM/DD");
    },
    ActivityTypeFilter: function(value) {
      switch (value) {
        case 0:
          return "未审核";
        case 1:
          return "已通过";
        case 2:
          return "未通过";
        default:
          return "";
      }
    }
  },
  data() {
    return {
      picList: [],
      comList: [],
      total: 0,
      comForm: {
        id: 0,
        userId: 0,
        toId: 0,
        replyTo: 0,
        contents: "",
        type: 4,
        time: 0
      },
      goodsList: {
        id: 0,
        userId: "徒步用户01",
        viewCount: 100,
        commentCount: 20,
        title: "blooming flower登山杖",
        price: 21.0,
        sPrice: 98.0,
        excent: "八成新",
        place: "广西桂林 七星区",
        num: "13838383388",
        intro: "11",
        comment: "22"
      },
      query: {
        page: 1,
        pageSize: 10,
        toId: 0,
        type: 4
      },
      otherList: [
        {
          id: 0,
          image:
            "//img.alicdn.com/bao/uploaded/i2/3248366378/TB2sRo_m4uTBuNkHFNRXXc9qpXa_!!3248366378.jpg_80x80.jpg",
          price: 35.0,
          title: "新生儿童摄影道具宝宝满月百天写真拍照影楼创意服装… 9成新以上"
        },
        {
          id: 1,
          image:
            "http://image1.8264.com/plugin/201905/29/1741084unl3nqpu9hsw93z.jpg!t3w322h0",
          price: 90.0,
          title:
            "超轻铝合金避震四节T型弯柄登山杖手杖户外徒步旅游用品滑雪杖… 9成新以上"
        },
        {
          id: 2,
          image:
            "http://image1.8264.com/plugin/201905/06/141942lryam2e5t5vmmmk3.jpg!t3w322h0",
          price: 120.0,
          title: "电小二户外电源500 "
        },
        {
          id: 3,
          image:
            "http://image1.8264.com/plugin/201408/25/1517426d66lkizmqeredj6.png!t3w322h0",
          price: 300.0,
          title: "shehe极星户外新款男士运动皮肤风衣 "
        }
      ],
      liActIndex: 0,

      goods: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    getGoodsDetail(this.id).then(resp => {
      this.goods = resp.data;
      this.picList = this.goods.imgList;
    });
    this.comForm.toId = this.id;
    this.query.toId = this.id;

    this.getComList();
  },
  computed: {
    optionSwitch() {
      return {
        autoPlay: false,
        switchSingleStep: 150
      };
    }
  },
  methods: {
    selectImg: function(index) {
      this.liActIndex = index;
    },
    getComList() {
      getCommentList(this.query).then(resp => {
        this.comList = resp.data;
        this.total = resp.total;
      });
    },
    onSubmit() {
      if (!localStorage.getItem("token")) {
        this.$message({
          type: "warning",
          message: "请先登录!"
        });
        return;
      } else {
        goodsComment(this.comForm).then(resp => {
          this.$message({
            type: "success",
            message: "评论成功！"
          });
          this.getComList();
          this.comForm.contents = "";
        });
      }
    }
  }
};
</script>

<style scoped>
.liactivite {
  border: #75b628 solid 2px;
  height: 70px !important;
  width: 70px !important;
}
.left-arrow,
.right-arrow {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #75b628;
  cursor: pointer;
}
.user-commemt {
  border-bottom: #99a9bf 1px dotted;
  padding-bottom: 15px;
  margin: 10px 0;
}
.left-arrow::before,
.right-arrow::before {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  top: 12px;
  left: 15px;
  border: 2px solid #fff;
}
.left-arrow::before {
  border-right: 0;
  border-bottom: 0;
  transform: rotate(-45deg);
}
.right-arrow::before {
  border-left: 0;
  border-top: 0;
  left: 9px;
  transform: rotate(-45deg);
}
.item {
  padding: 0;
  margin: 0;
}
.item li {
  float: left;
  width: 120px;
  height: 120px;
  margin: 10px;
  line-height: 120px;
  text-align: center;
  font-size: 30px;
  padding: 3px;
}
.seamless-warp3 {
  overflow: hidden;
  height: 146px;
  width: 588px;
  margin: 0 auto;
}
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
  padding: 0 20px;
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
  margin: 10px 0px;
  padding: 0 0 10px 0;
  border-bottom: #ccc dotted 2px;
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
.grid-content-lf {
  display: flex;
  flex-direction: column;
}
.grid-content-lf img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 0 0 5px 20px;
}
.grid-content-rf span {
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size: 13px;
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

.po-active:hover {
  background-color: #fff;
  border-top: 2px solid #75b628;
  margin-left: 5px;
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

  border-bottom: #99a9bf 1px solid;
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
  margin: 25px 0 15px 0;
}
.borderNone {
  border: none !important;
}
.a-c-rf-2-other {
  display: flex;
  margin-bottom: 15px;
}
.a-c-rf-2-other p {
  margin: 0px;
  overflow: hidden;
}
.a-c-rf-2-other a {
  color: #333;
}
.price-block {
  font-family: Verdana;
  font-size: 12px;
}
.price-block b {
  font-weight: 400;
  font-family: Arial, Verdana;
  padding-right: 2px;
  color: #999;
}
.price-block .price em {
  font-weight: 700;
  font-size: 14px;
  color: #f40;
}
.a-c-rf-content {
  padding: 0 10px;
  text-align: left;
}
.a-c-rf-content p {
  font: 13px/1.5 tahoma, arial, 宋体;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

