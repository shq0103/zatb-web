<template>
  <div class="new-index">
    <div class="index-left">
      <div class="activity">
        <div class="activity-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div class="activity-content1">
            <div class="ac acactive">全部知识</div>
            <div class="ac">户外技巧</div>
            <div class="ac">户外常识</div>
            <div class="ac">户外装备</div>
          </div>
        </div>
      </div>
      <div class="activity-content">
        <div class="know-content-top-content2" v-for="item in knowledgeList" :key="item.id">
          <div class="know-content-top">
            <div class="know-c-t-lf">
              <h2>{{item.date}}月</h2>
              <p>{{item.time}}</p>
            </div>
            <div class="know-c-t-rf">
              <h2>{{item.title}}</h2>
              <p>作者：{{item.userId}} | 来源于： {{item.source}}</p>
            </div>
          </div>
          <div class="know-content-bottom">
            <div class="know-c-b-lf">
              <img :src="item.image">
            </div>
            <div class="know-c-b-rf">
              <div>
                <p>{{item.contents}}</p>
              </div>
              <div class="more">
                <router-link to="/knowledge-show">
                  <el-button type="text" class="more-link">
                    更多
                    <i class="el-icon-d-arrow-right"></i>
                  </el-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination class="page-1" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
    <div class="index-right">
      <div class="public-1">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >相关推荐</div>
        </div>
        <div class="public-content">
          <el-row>
            <router-link to="/new">
              <el-button class="public-button1" type="success">徒步新闻</el-button>
            </router-link>
            <router-link to="/new">
              <el-button class="public-button2" type="success">户外知识</el-button>
            </router-link>
          </el-row>
        </div>
      </div>
      <div class="search-1">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >点击排行</div>
        </div>
        <div class="search-content">
          <div class="s-c-c">
            <ul>
              <li v-for="(item,index) in clickList" :key="item.id">
                <span
                  class="num"
                  :class="{top1:index===0,top2:index===1,top3:index===2}"
                >{{item.id+1}}</span>
                <router-link to="/knowledge-show">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      knowledgeList: [
        {
          id: 0,
          date: "04",
          time: "10",
          title: "冬季户外徒步穿越的注意事项",
          userId: "Admin",
          source: "互联网",
          contents:
            "徒步登山是锻炼身体、增强体质的的运动之一，但是因为冬季气温极低，且路面状况不及其他季节，所以冬季在户外徒步的时候要更加小心。今天就为大家详细介绍冬季户外运动的15个注意事项和冬季徒步登山的必备装备清单： 一、 冬季户外徒步登山注意事项 二、冬季徒步登山必备装备清单",
          image:
            "http://image1.8264.com/portal/201905/11/083903c5pwumugplwqj5cd.jpg!w227h157"
        },
        {
          id: 1,
          date: "05",
          time: "12",
          title: "登山防冲坠的基本注意事项",
          userId: "Admin",
          source: "互联网",
          contents:
            "冲坠是攀登过程中不可避免的。支点碎裂了，手脚滑脱了，筋疲力尽了，都会导致脱落。我们有必要找到正确的方式来演练脱落，从而学会如何保证冲坠时的安全，这一点很重要。认知并且接受。不管是有意练习或是其它情况 ...",
          image:
            "http://image1.8264.com/portal/201903/29/0530140uz6l32kkhvwh6e1.jpg!w227h157"
        },
        {
          id: 2,
          date: "06",
          time: "10",
          title: "戈壁徒步，掌握这些要领，还怕走不下来？",
          userId: "Admin",
          source: "互联网",
          contents:
            "有人说，其实戈壁徒步，就是一场关乎精神的心路之旅。行走大漠，追寻心路不仅需要一个人坚毅的精神、不弃的信念、过人的耐力，更重要的还有健康的体魄、徒步的技巧、专业安全的保障。但是，还是会有戈友问：百公里戈壁徒步，我真的能走下来吗？有了以上所述的，还有一点也至关重要，那就是徒步之前适当的锻炼。毕竟，不积跬步，无以至千里。",
          image:
            "http://image1.8264.com/portal/201905/10/02190010e16gamhjcm7b91.jpg!w227h157"
        },
        {
          id: 3,
          date: "04",
          time: "10",
          title: "氧气在高海拔攀登中的作用和危险",
          userId: "Admin",
          source: "互联网",
          contents:
            "壹、氧气在高海拔攀登前的作用在高海拔攀登中，由于空气稀薄带来的缺氧，会造成人体各项技能的全面下降，是对攀登者危害最大的因素之一。",
          image:
            "http://image1.8264.com/portal/201905/14/061422gd606ep3p8d0j61t.jpg!w227h157"
        },
        {
          id: 4,
          date: "04",
          time: "10",
          title: "夏日清凉越野跑，可别忽略这六个细节！",
          userId: "Admin",
          source: "互联网",
          contents:
            "天气逐渐变热，在河边进行越野跑既可锻炼身体又可欣赏野外自然风光、躲避高温。相比冬季越野跑，夏季越野跑看起来更为轻松，但也有不少注意事项。下面为你送上夏季清凉越野跑安全指南。一、注意防蛇夏季，是蛇的活跃时节。蛇喜欢出现在水边和能晒到太阳的乱石堆上，因此在河边越野跑时，需要留意乱石堆、草丛，以免被蛇咬伤。如不幸遇到蛇，也不要惊慌，静待其离开。",
          image:
            "http://image1.8264.com/portal/201905/10/0214430ba5r4nu2bl5ex6q.png!w227h157"
        }
      ],
      clickList: [
        {
          id: 0,
          title: "户外运动，如何省钱、有效的入门及进阶？"
        },
        {
          id: 1,
          title: "攀登雪山，就必须了解这些基本知识！否则就是去找死"
        },
        {
          id: 2,
          title: "别再吃红景天了，应对高原反应的攻略在这里！"
        },
        {
          id: 3,
          title: "必看！在户外迷路和中暑怎么办？"
        },
        {
          id: 4,
          title: "野外生存时，学会走路很重要"
        }
      ]
    };
  }
};
</script>
<style scoped>
.index {
  display: flex;
}
.index-left {
  width: 70%;
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  margin-right: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.index-right {
  width: 30%;
}

.search-1 {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  margin-top: 15px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.activity {
  border-bottom: 1px solid #dedbdb;
}
.public-1 {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.search-title {
  height: 30px;
  margin-top: 15px;
}
.activity-title {
  height: 30px;
  margin-top: 15px;
  padding-bottom: 8px;
}

.search-content {
  padding: 5px;
  border-top: 1px solid #dedbdb;
  margin-top: 8px;
}
.more-link:hover {
  color: #75b628;
}
.more-link {
  color: #919191;
}
.public-content {
  padding: 25px 0;
  border-top: 1px solid #dedbdb;
  margin-top: 8px;
}
.public-button1 {
  font-size: 16px !important;
  padding: 12px 30px !important;
  margin-right: 10px !important;
}
.public-button2 {
  font-size: 16px !important;
  padding: 12px 30px !important;
  margin-left: 10px !important;
}
.page-1 {
  padding: 10px 0;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #75b628 !important;
}
.activity-content2 {
  padding: 15px 15px 5px 15px;
  border-bottom: 1px solid #dedbdb;
  display: flex;
}
.activity-content1 {
  display: flex;
}
.ac-content-left {
  width: 30%;
  margin-right: 5px;
}
.ac-content-right {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.ac-content-right2 {
  padding-right: 45%;
  padding-top: 10px;
  padding-bottom: 20px;
}
.ac-content-right3 {
  display: flex;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
}
.ac-content-right3-1 {
  padding-top: 10px;
  line-height: 20px;
  color: #888;
  border-right: 1px solid #ccc;
  margin-right: 20px;
  padding-right: 30px;
}
.ac-content-right3-2 {
  padding-top: 10px;
  line-height: 20px;
  color: #888;
  margin-right: 20px;
  padding-right: 30px;
}
.ac-content-right4-1 {
  display: flex;
  height: 50px;
}
.ac-content-right4-1 {
  width: 80%;
}
/* .ac-content-right4-1 img {
   height: 40px;
} */
.ac-content-right4-2-1 {
  width: 20%;
  font-size: 13px;
  color: #888;
}
.new-index {
  display: flex;
}
.new-alert {
  height: 120px;
}
.search-content-1 {
  height: 100px;
  border-bottom: 1px solid #ccc;
  border-bottom-style: dotted;
  margin-bottom: 10px;
}
.know-c-t-lf {
  border: 1px solid #e1e0e0;
  width: 38px;
}
.know-c-t-lf h2 {
  width: 38px;
  height: 18px;
  font-size: 10px;
  color: #fcfbfb;
  background: #75b628;
  text-align: center;
  line-height: 15px;
  margin: 0px;
  padding-top: 5px;
}
.know-c-t-lf p {
  font-size: 14px;
  color: #75b628;
  text-align: center;
  line-height: 25px;
  margin: 0px;
  margin-top: -2px;
}
.know-c-t-rf p {
  font-size: 14px;
  color: #919191;
  margin-top: 5px;
  margin-bottom: 0px;
  text-align: left;
}
.know-c-t-rf h2 {
  margin: 0px;
  font-size: 20px;
  color: #75b628;
  font-weight: initial;
}
/* .know-c-t-rf h2:hover {
  text-decoration: underline;
} */

.know-c-t-rf {
  margin-left: 30px;
}
.know-content-top {
  display: flex;
}
.know-content-top-content2 {
  border-bottom: 1px dotted #adadad;
  margin: 20px 15px 0px 20px;
}
.know-content-bottom {
  display: flex;
  margin: 20px 0;
}
.know-c-b-lf img {
  transition: all 1s ease;
  width: 227px;
  height: 157px;
}
.know-c-b-lf:hover img {
  transform: scale(1.1);
  cursor: pointer;
}
.know-c-b-lf {
  width: 30%;
  overflow: hidden;
}
.know-c-b-rf {
  width: 70%;
  padding: 0 10px;
}
.know-c-b-rf p {
  /* width: 565px; */
  height: 110px;
  font-size: 13px;
  color: #919191;
  letter-spacing: 1px;
  overflow: hidden;
  line-height: 22px;
  position: relative;
  text-align: left;
  margin: 0px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
}
.more {
  color: #75b628;
  text-align: right;
}
.s-c-c li {
  margin-top: 15px;
  text-align: justify;
  padding: 0 15px;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
}
.s-c-c ul {
  list-style: none;
  padding: 0px;
}
.s-c-c a {
  color: #000;
}
.s-c-c a:hover {
  color: #75b628;
}
.num {
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background: #75b628;
  margin-right: 12px;
}
.acactive {
  color: #75b628;
  border-bottom: 1px #75b628 solid;
}
.ac {
  height: 26px;
  font-size: 16px;
  font-weight: bold;
  text-align: -webkit-auto;
  margin-left: 20px;
}
.top1 {
  background-color: #ec5d55;
}
.top2 {
  background-color: #ec8055;
}
.top3 {
  background-color: #eeb954;
}
</style>
