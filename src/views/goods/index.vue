<template>
  <div class="goods">
    <div class="hot-sell">
      <!-- <div class="h-s-title">热门闲趣</div> -->
      <div class="h-s-bottom">
        <div class="activity">
          <!-- <div id="act">
        <h3>活动</h3>
          </div>-->
          <div>
            <el-tabs value="first">
              <el-tab-pane name="first">
                <span slot="label" :style="{ fontSize: '18px', fontWeight: 'bold' }">
                  <img class="ac1" src="../../assets/activity.png"> 热门闲趣
                </span>

                <el-row :gutter="24" type="flex" justify="center">
                  <el-col :span="5" v-for="item in goodsList" :key="item.id">
                    <router-link to="/activity">
                      <el-card :body-style="{ padding: '0px' }">
                        <img :src="item.image" class="image">
                        <div class="activity-title">
                          <span>{{item.name}}</span>
                          <div class="bottom clearfix">
                            <span class="t1">
                              <img
                                src="../../assets/时间.png"
                                style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                              >
                              {{item.date}}
                            </span>
                            <span class="t2">
                              <img
                                src="../../assets/小人头.png"
                                style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                              >
                              {{item.viewCount}}
                            </span>
                          </div>
                        </div>
                      </el-card>
                    </router-link>
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
          <router-link to="/goods-public">
            <p class="name">发布闲趣</p>
          </router-link>
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
            <el-col :span="6" style="margin-bottom:35px" v-for="item in goodsList1" :key="item.id">
              <div class="g-i-m-1">
                <div class="g-i-m-img">
                  <img :src="item.image" style="width:271px;height:158px;">
                </div>
                <div class="g-i-m-content">
                  <!-- <el-alert
                    :title="item.title"
                    type="success"
                    :description="item.contents"
                    :closable="false"
                  ></el-alert>-->
                  <div class="adiv">
                    <p class="aname">{{item.title}}</p>
                    <p class="ap">{{item.contents}}</p>
                  </div>
                </div>
                <div class="g-i-m-user">
                  <div class="new-right2">
                    <p style="margin:0 0 15px 0;font-size:14px;">
                      <img src="../../assets/用户.png" style="height: 18px; margin-bottom: -3px;">
                      {{item.userId}}
                    </p>
                    <p style="padding-left:20px;margin:0 0 15px 0;font-size:15px;">
                      <img src="../../assets/钱.png" style="height: 18px; margin-bottom: -3px;">
                      {{item.price}}
                    </p>
                  </div>
                </div>
                <div class="show-more">
                  <router-link to="/goods-show">更多>></router-link>
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
<script>
export default {
  data() {
    return {
      goodsList: [
        {
          id: 0,
          name: "A线： 惠州马鞍山",
          date: "2019-10-10至2019-10-15",
          viewCount: 100,
          image:
            "https://img.alicdn.com/bao/uploaded/i2/O1CN01j6Dvhb1x4Czcskbc9_!!0-fleamarket.jpg_728x728.jpg"
        },
        {
          id: 1,
          name: "走进人间仙境桂林阳朔纯玩约伴，迷失西街游世外桃源",
          viewCount: 200,
          date: "2019-10-10至2019-10-15",
          image:
            "http://www.hw917.com/data/attachment/image/000/04/01/53_340_230.jpg"
        },
        {
          id: 2,
          name: " B线：漫步山水间邂逅古堡访古村穿越十里",
          viewCount: 1400,
          date: "2019-10-10至2019-10-15",
          image:
            "http://www.hw917.com/data/attachment/image/000/04/00/66_340_230.jpg"
        },
        {
          id: 3,
          name: "川西环线约伴",
          viewCount: 100,
          date: "2019-10-10至2019-10-15",
          image:
            "http://www.hw917.com/data/attachment/image/000/04/00/61_340_230.jpg"
        }
      ],
      goodsList1: [
        {
          id: 0,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 1,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 2,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 3,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 4,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 5,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 6,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 7,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 8,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 9,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 10,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        },
        {
          id: 11,
          title: "户外冲锋衣",
          contents: "买回来没用过，九成新，有意私聊",
          userId: "徒步用户01",
          price: 100,
          image:
            "http://tubu100.com:8053/Files/SProduct/201807031257122c7f8e.jpg"
        }
      ]
    };
  }
};
</script>
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
.image {
  width: 340px;
  height: 230px;
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
.t1 {
  width: 100%;
  color: #999;
  box-sizing: border-box;
  position: relative;
  float: left;
  font-size: 13px;
  margin: 10px 0;
}
.t2 {
  padding-left: 43px;
  color: #999;
  box-sizing: border-box;
  position: relative;
  float: left;
  font-size: 13px;
  margin: 0 0 10px 0;
}
.activity-title {
  padding: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ac1 {
  height: 20px;
  margin-bottom: -5px;
  margin-left: 5px;
  margin-right: 5px;
  /* margin-left: 10px; */
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
  margin: 0px 0 15px 0;
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
.aname {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 0px;
  color: #75b628;
  text-align: center;
}
.adiv {
  background-color: #f0f9eb;
  color: #75b628;
  padding: 8px 10px;
  text-align: left;
}
.ap {
  color: #888;
  font-size: 13px;
  margin: 10px 0 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: center;
}
</style>
<style>
.el-tabs__active-bar {
  background-color: #75b628;
}
.el-tabs__item.is-active {
  color: #75b628;
}
.el-tabs__item:hover {
  color: #75b628;
}
.el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #ccc;
}
</style>