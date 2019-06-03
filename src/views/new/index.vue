<template>
  <div class="new-index">
    <div class="index-left">
      <div class="activity">
        <div class="activity-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div class="activity-content1">
            <div
              @click="changeOrder('date')"
              :class="{acactive:query.orderBy=='date'}"
              class="ac"
            >最新新闻</div>
            <div
              class="ac"
              @click="changeOrder('viewCount')"
              :class="{acactive:query.orderBy=='viewCount'}"
            >热门新闻</div>
          </div>
        </div>
      </div>
      <div class="activity-content">
        <div class="activity-content2" v-for="item in newsList" :key="item.id">
          <div class="ac-content-left">
            <img width="100%" height="98%" :src="`/image${item.imgList[0]}`">
          </div>
          <div class="ac-content-right">
            <div class="ac-content-right1">
              <div class="adiv">
                <router-link :to="`/new-show/${item.id}`">
                  <p class="aname">{{item.title}}</p>
                </router-link>
                <p class="ap">{{item.contents|htmlToStr}}</p>
              </div>
            </div>
            <div class="new-right2">
              <i class="el-icon-time">{{item.date|timeFilter}}</i>
              <i class="el-icon-view" style="padding-left:20px">{{item.viewCount}}</i>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination
          class="page-1"
          background
          layout="prev, pager, next"
          :total="total"
          :current-page="query.page"
          :page-size="query.pageSize"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
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
            <router-link to="/knowledge">
              <el-button class="public-button2" type="success">户外知识</el-button>
            </router-link>
          </el-row>
        </div>
      </div>
      <div class="search-1">
        <div class="search-title1">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >精彩路线</div>
        </div>
        <div class="search-content" v-for="(item,index) in newList" :key="item.id">
          <div class="tr-b-rf-bottom" :class="{borderNone:index+1===newList.length}">
            <div class="tr-b-rf-img">
              <div class="tr-b-rf-img1">
                <img
                  :src="`/image${item.travelPlaces[0].imgList[0]}`"
                  style="width: 95%;height:100%;"
                >
              </div>
            </div>
            <div class="tr-b-rf-title">
              <router-link :to="`/travels-show/${item.id}`">
                <p class="aname1">{{item.title}}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getList } from "@/api/news.js";
import { getGoodList } from "@/api/travels.js";
export default {
  data() {
    return {
      total: 0,
      newsList: [
        {
          id: 0,
          image: "http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg",
          date: "2019-4-21 18:24",
          viewCount: 100,
          title: " 报告，我们已找到最佳亚展&嘉年华场地！",
          contents:
            "一年一度的亚洲户外展又要开始了,2019我们又搞了件大事！,展会同期推出“恣然派”户外嘉年华,拼场地、拼策划、拼创意、拼实力,说到底~~一场成功的展会&嘉年华必须要有~~强大的硬实力（场地）"
        },
        {
          id: 1,
          image:
            "http://tubu100.com:8053/Files/Article/20181227150339846a66.jpg",
          date: "2018-12-27  18:24",
          viewCount: 300,
          title:
            "牧高笛与亚洲户外展正式签约，将全面亮相2019第十四届亚洲户外展！",
          contents:
            "12月13日，牧高笛（MobiGarden）正式报名参加2019第十四届亚洲户外用品展览会Asia Outdoor Trade Show（简称亚洲户外展或亚展），并于本月21日正式签约。牧高笛作为与亚洲户外展共同成长和相伴十三年的老朋友，即将于2019年6月27~30日南京国际展览中心（龙蟠路88号）携手迈进第十四个春秋！"
        },
        {
          id: 2,
          image:
            "http://tubu100.com:8053/Files/Article/2018120315430677a3bc.jpeg",
          date: "2019-5-21 18:24",
          viewCount: 100,
          title: "2018全国徒步大会“双11”持杖行走全国联动日活动激情走起",
          contents:
            "2018全国徒步大会“双11”持杖行走全国联动日活动在11日举行，除在威海设置主会场外，分会场长春、张掖、嘉峪关、银川、绵阳、宁波、温州、武汉、海南海口、黔西共11个城市同时展开。作为中国登山协会今年新推出的联动日活动之一，本次活动旨在倡导科学健身理念，推动持杖行走运动。参加此次活动的徒步爱好者有10万余人。"
        },
        {
          id: 3,
          image:
            "http://tubu100.com:8053/Files/Article/20180710173234d4beab.jpg",
          date: "2018-07-10 17:32",
          viewCount: 100,
          title: " 2018全国徒步大会长春站活动盛大启幕",
          contents:
            "7月8日，2018全国徒步大会(长春站)活动在长春市伊通河畔盛大举行。本次活动由中国登山协会、长春市体育局、长春市体育总会、长春市伊通河管委会共同主办，长春市徒步登山运动协会、吉林日报报业集团东西南北杂志社共同承办，吉林省户外产业商会协办。"
        },
        {
          id: 4,
          image:
            "http://tubu100.com:8053/Files/Article/201806300956213c5406.jpg",
          date: "2019-6-21 18:24",
          viewCount: 700,
          title: "2018亚展首日：high翻的展会现场，精彩纷呈！",
          contents:
            "今年的亚洲户外展和亚洲自行车展启用了展馆4、5、6、7四个展厅，一共60000平方米的展览面积，共有来自国内外的587个品牌参展，现场人人人人，持续4天、一年一度的亚洲户外圈“狂欢节”就此嗨起来！ "
        }
      ],
      newList: [
        {
          id: 0,
          image:
            "http://tubu100.com:8053/Files/Article/20180524152006491eff.jpg",
          title: "2018全国徒步大会5•19联动日激情“走起”"
        },
        {
          id: 1,
          image:
            "http://tubu100.com:8053/Files/Article/2018052311445301f787.jpg",
          title: "全国徒步大会定制款保险说明"
        },
        {
          id: 2,
          image:
            "http://tubu100.com:8053/Files/Article/2018050712260650cf42.jpg",
          title: " 2018徒步中国•全国徒步大会百色“地心之旅”（乐业、凌云）站举办"
        }
      ],
      query: {
        page: 1,
        pageSize: 5,
        type: 1,
        orderBy: "date"
      },
      commendQuery: {
        page: 1,
        pageSize: 4,
        orderBy: "star",
        status: 1
      }
    };
  },
  created() {
    this.getNewsList();
    this.getListOrderby();
  },
  methods: {
    changeOrder(value) {
      this.query.page = 1;
      this.query.orderBy = value;
      this.getNewsList();
    },
    getNewsList() {
      getList(this.query).then(resp => {
        this.newsList = resp.data;
        this.total = resp.total;
        console.log(this.newsList);
      });
    },
    getListOrderby() {
      getGoodList(this.commendQuery).then(resp => {
        this.newList = resp.data;
        this.total = resp.total;
      });
    },
    handleSizeChange(pageSize) {
      this.query.pageSize = pageSize;
      this.getNewsList();
    },
    handleCurrentChange(curPage) {
      this.query.page = curPage;
      this.getNewsList();
    }
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
  height: fit-content;
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
.search-title1 {
  height: 30px;
  margin-top: 15px;
  border-bottom: 1px solid #dedbdb;
  padding-bottom: 8px;
}

.activity-title {
  height: 30px;
  margin-top: 15px;
  padding-bottom: 8px;
}

.search-content {
  padding: 0 12px 0px 12px;
  margin-top: 8px;
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
/* .page-1 {
  padding-left: 10px !important;
} */
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #75b628 !important;
}
.activity-content2 {
  padding: 15px 15px 15px 15px;
  border-bottom: 1px dotted #adadad;
  display: flex;
  margin: 5px 20px 0 20px;
}
.activity-content1 {
  display: flex;
}
.ac-content-left {
  margin-right: 15px;
  width: 35%;
}
.ac-content-right {
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 5px 5px 0 5px;
  justify-content: space-between;
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
.new-right2 {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
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
.page {
  margin: 10px 0;
}
.tr-b-rf-bottom {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 0 10px 10px 10px;
}
.borderNone {
  border: none !important;
}
.tr-b-rf-img {
  margin-top: 15px;
  /* padding-right: 5px; */
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
.ac:hover {
  cursor: pointer;
}
.adiv {
  /* background-color: #f0f9eb;
  color: #67c23a; */

  text-align: left;
}
.ap {
  /* color: #888; */
  font-size: 14px;
  margin: 10px 0 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 26px;

  /* text-indent: 1.5em; */
}
.aname {
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  /* color: #67c23a; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px;
}
.aname1 {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0 0 0;
  text-align: center;
}
a:hover {
  color: #75b628;
  text-decoration: underline;
}
a {
  color: #000;
}
.tr-b-rf-img1 {
  height: 180px;
  overflow: hidden;
  position: relative;
}
</style>
