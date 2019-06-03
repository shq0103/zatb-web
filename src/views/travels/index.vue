<template>
  <div class="travels">
    <div class="travels-top">
      <el-row :gutter="24">
        <el-col :span="8">
          <div class="travels-top-lf">
            <ul>
              <li>
                <el-popover ref="popover1" placement="right" width="300" trigger="hover">
                  <div>
                    <ul style="line-height:25px;">
                      <li v-for="item in shortList" :key="item.id">
                        <router-link :to="`/travels-show/${item.id}`">{{item.title}}</router-link>
                      </li>
                    </ul>
                  </div>
                </el-popover>
                <el-button v-popover:popover1 class="tr-t-lf-button">短线精选TOP10</el-button>
              </li>
              <li>
                <el-popover ref="popover2" placement="right" width="300" trigger="hover">
                  <div>
                    <ul style="line-height:25px;">
                      <li v-for="item in middleList" :key="item.id">
                        <router-link :to="`/travels-show/${item.id}`">{{item.title}}</router-link>
                      </li>
                    </ul>
                  </div>
                </el-popover>
                <el-button v-popover:popover2 class="tr-t-lf-button">中线精选TOP10</el-button>
              </li>
              <li>
                <el-popover ref="popover3" placement="right" width="300" trigger="hover">
                  <div>
                    <ul style="line-height:25px;">
                      <li v-for="item in longList" :key="item.id">
                        <router-link :to="`/travels-show/${item.id}`">{{item.title}}</router-link>
                      </li>
                    </ul>
                  </div>
                </el-popover>
                <el-button v-popover:popover3 class="tr-t-lf-button">长线精选TOP10</el-button>
              </li>
              <li>
                <el-popover ref="popover4" placement="right" width="300" trigger="hover">
                  <div>
                    <ul style="line-height:25px;">
                      <li v-for="item in allList" :key="item.id">
                        <router-link :to="`/travels-show/${item.id}`">{{item.title}}</router-link>
                      </li>
                    </ul>
                  </div>
                </el-popover>
                <el-button v-popover:popover4 class="tr-t-lf-button">全部精选TOP10</el-button>
              </li>
              <li style="margin-top: 10px;">
                <el-input
                  class="tr-t-lf-input"
                  size="medium"
                  v-model="query.keyword"
                  placeholder="输入想查询的信息"
                  prefix-icon="el-icon-search"
                  @change="handleFilter"
                ></el-input>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="travels-top-rf">
            <el-carousel height="320px">
              <el-carousel-item
                v-for="item in imageList"
                :key="item"
                style="width:790px!important;height:320px;"
              >
                <img :src="item" style="width:100%;height:100%;">
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="travels-bottom">
      <el-row :gutter="24">
        <el-col :span="7">
          <div class="tr-b-lf">
            <div class="tr-b-rf-top">
              <div style="font-size:18px;font-weight:bold;padding:0 0px;">
                <img class="hot" src="../../assets/我的点赞.png">推荐路书
              </div>
            </div>
            <div class="tr-b-lf-bottom">
              <div class="tr-b-rf-bottom" v-for="item in newtravelsList" :key="item.id">
                <div class="tr-b-rf-img">
                  <div class="tr-b-rf-img1">
                    <img :src="`/image${item.travelPlaces[0].imgList[0]}`" style="width:265px;">
                  </div>
                </div>
                <div class="tr-b-rf-title">
                  <router-link :to="`/travels-show/${item.id}`">
                    <p class="aname1">{{item.title}}</p>
                  </router-link>
                </div>

                <div class="tr-b-rf-public">
                  <span :style="{ float: 'left' }">
                    <img
                      src="../../assets/个人1.png"
                      style="height: 15px; margin-right:3px;margin-bottom: -2px;"
                    >
                    {{item.userId}}
                  </span>
                  <img src="../../assets/点赞-1.png" style="height: 19px; margin-bottom: -3px;">
                  {{item.star}}
                  <img
                    src="../../assets/浏览.png"
                    style="height: 22px; margin-bottom: -6px;margin-left:3px;"
                  >
                  {{item.viewCount}}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="tr-b-rf" style="margin:0 15px;">
            <div class="tr-b-rf-top">
              <div
                @click="changeOrder('viewCount')"
                :class="{acactive:query.orderBy=='viewCount'}"
                style="font-size:18px;font-weight:bold;padding:0 5px;cursor: pointer;"
              >
                <img class="hot" src="../../assets/hot.png">最热路书
              </div>
              <div
                @click="changeOrder('publishTime')"
                :class="{acactive:query.orderBy=='publishTime'}"
                style="font-size:18px;font-weight:bold;padding:0 30px;cursor: pointer;"
              >
                <img class="hot" src="../../assets/new4.png">最新路书
              </div>
              <div class="post-bottom-button">
                <router-link to="/travels-public">
                  <el-button type="success" plain size="small">
                    <i class="el-icon-edit-outline"></i>发布路书
                  </el-button>
                </router-link>
              </div>
            </div>
            <div class="tr-b-rf-bottom1">
              <div class="tr-b-rf-bottom" v-for="item in travelsList" :key="item.id">
                <div class="tr-b-rf-title">
                  <div class="adiv">
                    <router-link :to="`/travels-show/${item.id}`">
                      <span class="aname">{{item.title}}</span>
                    </router-link>
                    <p class="ap">{{item.intro}}</p>
                  </div>
                </div>
                <div class="tr-b-rf-img">
                  <el-row :gutter="24">
                    <el-col :span="8" v-for="(travelPlace,index) in item.travelPlaces" :key="index">
                      <div class="tr-b-rf-img1" v-if="index<3">
                        <img
                          :src="`/image${travelPlace.imgList[0]}`"
                          style="width: 240px;height: 135px;"
                        >
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="tr-b-rf-public">
                  <span :style="{ float: 'left' }">
                    <img
                      src="../../assets/个人1.png"
                      style="height: 15px; margin-right:3px;margin-bottom: -2px;"
                    >
                    {{item.userId}}
                  </span>
                  <img
                    src="../../assets/评论1.png"
                    style="height: 19px; margin-bottom: -3px;margin-right:3px;"
                  >
                  {{item.commentCount}}
                  <img
                    src="../../assets/浏览.png"
                    style="height: 22px; margin-bottom: -6px;margin-left:5px;"
                  >
                  {{item.viewCount}}
                </div>
              </div>
            </div>
            <div class="tr-b-rf-page">
              <el-pagination
                class="page-1"
                background
                layout="prev, pager, next"
                :total="total"
                :page-size="query.pageSize"
                :current-page="query.page"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getList } from "@/api/travels.js";
export default {
  data() {
    return {
      total: 0,
      imageList: [
        "http://tubu100.com:8053/Files/Note/20180314115557280ef4.jpg",
        "http://tubu100.com:8053/Files/Note/20180314144547ce0870.jpg",
        "http://tubu100.com:8053/Files/Note/201901031127223216ec.jpg",
        "http://tubu100.com:8053/Files/Note/20180507112403a1bf06.jpg"
      ],
      travelsList: [
        {
          id: 0,
          userId: "徒步用户01",
          commentCount: 100,
          viewCount: 300,
          imgList: [
            "http://tubu100.com:8053/Files/Note/20180314123503670d40.jpg",
            "http://tubu100.com:8053/Files/Note/201803141235032226ce.jpg",
            "http://tubu100.com:8053/Files/Note/2018031412350396a0cf.jpg"
          ],
          title: "不忘初心，砥砺前行--2017五大连池徒步大会",
          intro:
            " 下午1点10分从齐云山庄出发，一路拔高，走走拍拍，于5点30左右到达山顶，用时4小时20分，到了山顶，落日中的云海翻腾，陶醉在美景中，竞忘关记录了，以至于记录了用时11个多小时。图表"
        },
        {
          id: 1,
          userId: "徒步用户02",
          commentCount: 200,
          viewCount: 500,
          imgList: [
            "http://tubu100.com:8053/Files/Note/20180314151651e53998.jpg",
            "http://tubu100.com:8053/Files/Note/201803141516513b114c.jpg",
            "http://tubu100.com:8053/Files/Note/20180314151652b46635.jpg"
          ],
          title: "徒步中国·全国徒步大会张掖山丹站",
          intro:
            " 下午1点10分从齐云山庄出发，一路拔高，走走拍拍，于5点30左右到达山顶，用时4小时20分，到了山顶，落日中的云海翻腾，陶醉在美景中，竞忘关记录了，以至于记录了用时11个多小时。图表"
        },
        {
          id: 2,
          userId: "徒步用户03",
          commentCount: 100,
          viewCount: 300,
          imgList: [
            "http://tubu100.com:8053/Files/Note/201803141504499820e0.jpg",
            "http://tubu100.com:8053/Files/Note/201803141504482d559f.jpg",
            "http://tubu100.com:8053/Files/Note/20180314150448dae742.jpg"
          ],
          title: "贡嘎雪山徒步大会",
          intro:
            " 下午1点10分从齐云山庄出发，一路拔高，走走拍拍，于5点30左右到达山顶，用时4小时20分，到了山顶，落日中的云海翻腾，陶醉在美景中，竞忘关记录了，以至于记录了用时11个多小时。图表"
        },
        {
          id: 3,
          userId: "徒步用户04",
          commentCount: 600,
          viewCount: 700,
          imgList: [
            "http://tubu100.com:8053/Files/Note/20180822120951c03c14.jpg",
            "http://tubu100.com:8053/Files/Note/2018082212095298c73e.jpg",
            "http://tubu100.com:8053/Files/Note/201808221209524c75cd.jpg"
          ],
          title: "华夏行· 探秘天堂秘境 九色甘南之旅第二期",
          intro:
            " 下午1点10分从齐云山庄出发，一路拔高，走走拍拍，于5点30左右到达山顶，用时4小时20分，到了山顶，落日中的云海翻腾，陶醉在美景中，竞忘关记录了，以至于记录了用时11个多小时。图表"
        },
        {
          id: 4,
          userId: "徒步用户05",
          commentCount: 100,
          viewCount: 300,
          imgList: [
            "http://tubu100.com:8053/Files/Note/201806061629142089ee.jpg",
            "http://tubu100.com:8053/Files/Note/20180606163011ffebc1.jpg",
            "http://tubu100.com:8053/Files/Note/201806061630114a737e.jpg"
          ],
          title: "华夏行·探秘神农架徒步之旅",
          intro:
            " 下午1点10分从齐云山庄出发，一路拔高，走走拍拍，于5点30左右到达山顶，用时4小时20分，到了山顶，落日中的云海翻腾，陶醉在美景中，竞忘关记录了，以至于记录了用时11个多小时。图表"
        }
      ],
      newtravelsList: [
        {
          id: 0,
          userId: "徒步用户01",
          commentCount: 100,
          viewCount: 200,
          image: "http://tubu100.com:8053/Files/Note/20180507112403a15164.jpg",
          title: "徒步中国·全国徒步大会宝泉崖上太行站"
        },
        {
          id: 1,
          userId: "徒步用户02",
          commentCount: 200,
          viewCount: 300,
          image: "http://tubu100.com:8053/Files/Note/2018052415540863f4fe.png",
          title: "华夏行·呼伦贝尔全国徒步大会"
        },
        {
          id: 2,
          userId: "徒步用户03",
          commentCount: 100,
          viewCount: 300,
          image: "http://tubu100.com:8053/Files/Note/2018050712020638f437.jpg",
          title: "徒步中国·全国徒步大会百色（乐业、凌云）站"
        },
        {
          id: 3,
          userId: "徒步用户04",
          commentCount: 100,
          viewCount: 300,
          image: "http://tubu100.com:8053/Files/Note/20180314124115eb5987.jpg",
          title: "徒步中国-全国徒步大会贵州兴义站活动图片集"
        },
        {
          id: 4,
          userId: "徒步用户05",
          commentCount: 100,
          viewCount: 300,
          image: "http://tubu100.com:8053/Files/Note/20180314123503670d40.jpg",
          title: "全国徒步大会百色德保、靖西站活动"
        }
      ],
      shortList: [
        {
          id: 0,
          title: "全国徒步大会百色德保、靖西站活动"
        },
        {
          id: 0,
          title: "全国徒步大会百色德保、靖西站活动"
        }
      ],
      middleList: [
        {
          id: 0,
          title: "全国徒步大会百色德保、靖西站活动"
        },
        {
          id: 0,
          title: "全国徒步大会百色德保、靖西站活动"
        }
      ],
      longList: [
        {
          id: 0,
          title: "全国徒步大会百色德保、靖西站活动"
        },
        {
          id: 0,
          title: "全国徒步大会百色德保、靖西站活动"
        }
      ],
      allList: [
        {
          id: 0,
          title: "全国徒步大会百色德保、靖西站活动"
        },
        {
          id: 0,
          title: "全国徒步大会百色德保、靖西站活动"
        }
      ],
      query: {
        page: 1,
        pageSize: 5,
        orderBy: "viewCount",
        status: 1
      },
      commendQuery: {
        page: 1,
        pageSize: 5,
        orderBy: "star",
        status: 1
      },
      TopshortQuery: {
        page: 1,
        pageSize: 10,
        orderBy: "viewCount",
        status: 1,
        length: 1
      },
      TopmiddleQuery: {
        page: 1,
        pageSize: 10,
        orderBy: "viewCount",
        status: 1,
        length: 2
      },
      ToplongQuery: {
        page: 1,
        pageSize: 10,
        orderBy: "viewCount",
        status: 1,
        length: 3
      },
      TopallQuery: {
        page: 1,
        pageSize: 10,
        orderBy: "viewCount",
        status: 1
      }
    };
  },
  created() {
    this.getTravelsList();
    this.getListOrderby();
    this.getTopshortList();
    this.getTopmiddleList();
    this.getToplongList();
    this.getTopallList();
  },
  methods: {
    changeOrder(value) {
      this.query.page = 1;
      this.query.orderBy = value;
      this.getTravelsList();
    },
    getTravelsList() {
      getList(this.query).then(resp => {
        this.travelsList = resp.data;
        this.total = resp.total;
      });
    },
    getListOrderby() {
      getList(this.commendQuery).then(resp => {
        this.newtravelsList = resp.data;
        this.total = resp.total;
      });
    },
    getTopshortList() {
      getList(this.TopshortQuery).then(resp => {
        this.shortList = resp.data;
        this.total = resp.total;
      });
    },
    getTopmiddleList() {
      getList(this.TopmiddleQuery).then(resp => {
        this.middleList = resp.data;
        this.total = resp.total;
      });
    },
    getToplongList() {
      getList(this.ToplongQuery).then(resp => {
        this.longList = resp.data;
        this.total = resp.total;
      });
    },
    getTopallList() {
      getList(this.TopallQuery).then(resp => {
        this.allList = resp.data;
        this.total = resp.total;
      });
    },
    handleFilter() {
      this.query.page = 1;
      this.getTravelsList();
    },
    handleSizeChange(pageSize) {
      this.query.pageSize = pageSize;
      this.getTravelsList();
    },
    handleCurrentChange(curPage) {
      this.query.page = curPage;
      this.getTravelsList();
    }
  }
};
</script>
<style scoped>
.travels-top-lf,
travels-top-rf {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
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
  margin-top: 20px;
  background-color: #fff;
  padding: 15px 15px 0 15px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
a {
  color: #000;
}
.tr-b-rf-public {
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: right;
  font-size: 15px;
}
.tr-b-rf-public a {
  color: #000;
}
.tr-b-rf-bottom {
  border-bottom: 1px dotted #ccc;
  margin-bottom: 10px;

  padding: 0 5px 10px 5px;
}
.tr-b-rf-img {
  margin-top: 15px;
  padding-right: 5px;
}
.tr-b-rf-title {
  margin-top: 10px;
}
.tr-b-rf-top {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.acactive {
  color: #a64834;
  cursor: pointer;
}
.hot {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.aname:hover {
  text-decoration: underline;
  color: #75b628;
}
.post-bottom-button {
  position: absolute;
  right: 45px;
  margin-top: -5px;
}
.tr-t-lf-input {
  border: 1px solid #75b628 !important;
}

.el-input__inner {
  border: 1px solid #75b628 !important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #75b628 !important;
}
.tr-b-lf-bottom {
  padding: 0 5px;
}
.tr-b-rf-page {
  padding: 10px 0 20px 0 !important;
}
.tr-b-lf {
  padding: 0 20px;
}
tr-b-rf {
  padding: 0 10px;
  margin-right: 15px !important;
}
.tr-b-rf-bottom1 {
  margin: 0 15px;
}
.tr-b-rf-bottom:hover {
  background-color: #f8f8f8;
  padding: 10px;
  margin: 0 -10px;
  border-radius: 5px;
}
.adiv {
  text-align: left;
}
.ap {
  font-size: 14px;
  color: #666;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 21px;
}
.ac {
  height: 26px;
  font-size: 16px;
  font-weight: bold;
  text-align: -webkit-auto;
  margin-left: 20px;
}
.aname1 {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0 0 0;
  text-align: left;
}
.aname1 a {
  color: #31424e;
}
.adiv a {
  font-size: 19px;
  color: #31424e;

  font-weight: bold;
}
</style>
