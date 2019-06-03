<template>
  <div class="index">
    <div class="picture">
      <el-carousel height="420px">
        <el-carousel-item v-for="item in imageList" :key="item" style="width:1199px;">
          <div class="ih-item">
            <a href="http://www.tubu100.com/Activity/Detail/1070">
              <div class="img">
                <img :src="item" alt="img">
              </div>
              <div class="info">
                <h3>华夏行•慕士塔格登山徒步大会</h3>
              </div>
            </a>
          </div>
          <!-- <img class="lunbo" src="../../assets/首页1.jpg"> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="activity">
      <div>
        <el-tabs value="first" :tab-click="changeTab">
          <el-tab-pane name="first">
            <span slot="label" :style="{ fontSize: '18px', fontWeight: 'bold' }">
              <img class="ac1" src="../../assets/activity.png"> 常规活动
            </span>

            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="item in activityList" :key="item.id">
                <router-link to="/activity">
                  <el-card :body-style="{ padding: '0px' }">
                    <img
                      :src="`/image${item.image}`"
                      class="image"
                      style="width:310px;height:230px;"
                    >
                    <div class="activity-title">
                      <span>{{item.name}}</span>
                      <div class="bottom clearfix">
                        <span class="t1">
                          <img
                            src="../../assets/时间.png"
                            style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                          >
                          {{item.publishTime|timeFilter}}
                        </span>
                        <span class="t2">
                          <img
                            src="../../assets/小人头.png"
                            style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                          >
                          {{item.username}}
                        </span>
                      </div>
                    </div>
                  </el-card>
                </router-link>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="官方活动" name="second">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="item in activityList" :key="item.id">
                <router-link to="/activity">
                  <el-card :body-style="{ padding: '0px' }">
                    <img
                      :src="`/image${item.image}`"
                      class="image"
                      style="width:310px;height:230px;"
                    >
                    <div class="activity-title">
                      <span>{{item.name}}</span>
                      <div class="bottom clearfix">
                        <span class="t1">
                          <img
                            src="../../assets/时间.png"
                            style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                          >
                          {{item.publishTime|timeFilter}}
                        </span>
                        <span class="t2">
                          <img
                            src="../../assets/小人头.png"
                            style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                          >
                          {{item.username}}
                        </span>
                      </div>
                    </div>
                  </el-card>
                </router-link>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="最新上线" name="third">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="item in activityList" :key="item.id">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="`/image${item.image}`" class="image" style="width:310px;height:230px;">
                  <div class="activity-title">
                    <span>{{item.name}}</span>
                    <div class="bottom clearfix">
                      <span class="t1">
                        <img
                          src="../../assets/时间.png"
                          style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                        >
                        {{item.publishTime|timeFilter}}
                      </span>
                      <span class="t2">
                        <img
                          src="../../assets/小人头.png"
                          style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                        >
                        {{item.username}}
                      </span>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="热门推荐" name="fourth">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="item in activityList" :key="item.id">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="`/image${item.image}`" class="image" style="width:310px;height:230px;">
                  <div class="activity-title">
                    <span>{{item.name}}</span>
                    <div class="bottom clearfix">
                      <span class="t1">
                        <img
                          src="../../assets/时间.png"
                          style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                        >
                        {{item.publishTime|timeFilter}}
                      </span>
                      <span class="t2">
                        <img
                          src="../../assets/小人头.png"
                          style="height: 15px; margin-right: 5px;margin-bottom: -2px;"
                        >
                        {{item.username}}
                      </span>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="travels">
      <div class="travel">
        <div class="tr-title">
          <div class="tr-title-1">
            <div class="tr1">
              <img class="hot" src="../../assets/hot.png">热门路书
            </div>
            <div class="tr1-right">
              <el-row>
                <router-link to="/travels">
                  <el-button :style="{ marginTop: '15px' }" type="success" size="small" plain>更多</el-button>
                </router-link>
                <!-- <el-button type="text" size="small">更多</el-button> -->
              </el-row>
            </div>
          </div>

          <div class="tr-title-2">
            <div class="tr2">
              <img class="hot" src="../../assets/new.png">最新发表
            </div>
            <div class="tr2-right">
              <el-row>
                <el-button
                  :style="{ marginTop: '15px' }"
                  type="success"
                  size="small"
                  plain
                  icon="el-icon-arrow-up"
                  @click="changePage(-1)"
                ></el-button>
                <el-button
                  :style="{ marginTop: '15px' }"
                  type="success"
                  size="small"
                  plain
                  icon="el-icon-arrow-down"
                  @click="changePage(1)"
                ></el-button>
              </el-row>
            </div>
          </div>
        </div>
        <div class="tr-content">
          <div class="tr-content-left">
            <div
              class="activity-content2"
              v-for="(item,index) in hottravelsList"
              :class="{'borderNone':index+1===hottravelsList.length}"
              :key="item.id"
            >
              <div class="ac-content-left">
                <img :src="`/image${item.travelPlaces[0].imgList[0]}`">
              </div>
              <div class="ac-content-right">
                <div class="ac-content-right1">
                  <div class="adiv">
                    <router-link :to="`/travels-show/${item.id}`">
                      <span class="aname">{{item.title}}</span>
                    </router-link>
                    <p class="ap">{{item.intro}}</p>
                  </div>
                </div>
                <div class="tr-b-rf-public">
                  <span :style="{ float: 'left' }">
                    <img
                      src="../../assets/作者头像.png"
                      style="height: 16px; margin-right:3px;margin-bottom: -2px;"
                    >
                    {{item.username}}
                  </span>
                  <img
                    src="../../assets/comment.png"
                    style="height: 14px; margin-bottom: -2px;margin-right:3px;"
                  >
                  {{item.commentCount}}
                  <img
                    src="../../assets/咨讯浏览.png"
                    style="height: 22px; margin-bottom: -6px;margin-right:3px;margin-left:3px;"
                  >
                  {{item.viewCount}}
                </div>
              </div>
            </div>
          </div>
          <div class="tr-content-right">
            <ul class="slideshow">
              <li v-for="item in newtravelsList" :key="item.id">
                <i></i>
                <div class="tip left">
                  <span class="time">{{item.publishTime|timeFilter}}</span>
                  <p class="bt">
                    <router-link :to="`/travels-show/${item.id}`">{{item.title}}</router-link>
                  </p>
                  <p class="aut">
                    <router-link :to="`/travels-show/${item.id}`">—作者：{{item.username}}</router-link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="new">
      <div class="post">
        <div class="p-title">
          <div class="p1">
            <img class="p-img" src="../../assets/论坛.png">
            论坛
          </div>
          <div class="p-more">
            <router-link to="/post">
              <el-button type="text" class="more-link">
                更多
                <i class="el-icon-d-arrow-right"></i>
              </el-button>
            </router-link>
          </div>
        </div>
        <div class="p-content">
          <el-row :gutter="24">
            <el-col :span="12" v-for="item in postList" :key="item.id">
              <div class="grid-content bg-purple">
                <div class="p-c-1">
                  <div class="p-content-top">
                    <img
                      id="touxiangimg"
                      :src="`/image${item.avatar}`"
                      onerror="this.onerror=null;this.src='http://ucenter.8264.com/images/noavatar_middle.gif'"
                    >
                    <div class="p-content-top-info">
                      <span>发布人：{{item.username}}</span>
                      <router-link to="/post-show">{{item.title}}</router-link>
                    </div>
                  </div>
                  <div class="p-content-bottom">
                    <div class="p-c-b-content">{{item.contents|htmlToStr}}</div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="post1">
        <div class="p-title">
          <div class="p1">
            <img class="p-img" src="../../assets/知识.png">户外知识
          </div>
          <div class="p-more">
            <router-link to="/knowledge">
              <el-button type="text" class="more-link">
                更多
                <i class="el-icon-d-arrow-right"></i>
              </el-button>
            </router-link>
          </div>
        </div>
        <div class="s-content">
          <vue-seamless-scroll :data="listData" :class-option="{step:0.5}" class="seamless-warp">
            <ul class="item">
              <li v-for="(item,index) in listData" :key="index">
                <router-link :to="`/knowledge-show/${item.id}`">
                  <el-tooltip
                    class="item"
                    effect="light"
                    :content="item.title"
                    placement="bottom-start"
                  >
                    <span class="title">
                      <img
                        src="../../assets/mknow.png"
                        style="height:20px;margin-bottom:-4px;margin-right:2px;"
                      >
                      {{item.title}}
                    </span>
                  </el-tooltip>
                  <span class="date">[{{item.date|timeWithoutMin}}]</span>
                </router-link>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import scroll from "vue-seamless-scroll";
import { getList } from "@/api/travels.js";
import { getKnowledgeList } from "@/api/knows.js";
import { getPostList } from "@/api/post.js";
import { getAcList } from "@/api/activity.js";
Vue.use(scroll);
export default {
  data() {
    return {
      imageList: [
        "http://tubu100.com:8053/Files/At/20190531173549516403.jpg",
        "http://tubu100.com:8053/Files/At/20190507162755a93b39.jpg",
        "http://tubu100.com:8053/Files/At/201811061033529830be.jpg"
      ],
      total: 0,
      total1: 0,
      posttotal: 0,
      actotal: 0,
      imgList: ["../../assets/logo.png", "../../assets/logo1.png"],
      query: {
        page: 1,
        pageSize: 3,
        orderBy: "viewCount"
      },
      commendQuery: {
        page: 1,
        pageSize: 5,
        orderBy: "publishTime"
      },
      Knowledgequery: { page: 1, pageSize: 10, type: 5, orderBy: null },
      postquery: { page: 1, pageSize: 4, type: null, orderBy: "date" },
      Activityquery: {
        page: 1,
        pageSize: 4,
        status: 1,
        orderBy: ""
      },
      listData: [
        {
          title: "2019曼谷新玩法打卡：湄南河上看落日，享受香槟和泰国料理",
          date: "2019-05-19"
        },
        {
          title: "每5分钟售出1000支的草本牙膏，安雅（Anya）进军中国市场",
          date: "2019-05-17"
        },
        {
          title: "5·19中国旅游日 | “1+15+81+N”文旅惠民系列活动成就美好生活",
          date: "2019-05-17"
        },
        {
          title: "惠州乡村振兴崭露头角，秋长谷里成5月热门",
          date: "2019-05-16"
        },
        {
          title:
            "万豪酒店携手西班牙轻奢珠宝品牌TOUS桃丝熊，为宾客打造美味趣致体验",
          date: "2019-04-16"
        },
        {
          title: "秀水扬帆 碧波争流 首届“可人酒店杯”Zest 帆船赛启航千岛湖",
          date: "2019-04-15"
        },
        {
          title: "维珍航空首批A350-1000客机树立行业新标杆",
          date: "2019-04-16"
        },
        {
          title: "世茂Hello Kitty主题馆春季限定商品来袭，手快有，手慢无！",
          date: "2019-04-10"
        },
        {
          title: "“畅游宁波，遇见海丝”名校采风活动启幕",
          date: "2019-03-20"
        },
        {
          title: "沙8鸣鼓点将，汉能汉包赋能沙友踏征程",
          date: "2019-02-22"
        },
        {
          title: "博华太平洋抢占美国塞班岛先机，创造“远洋奇迹”",
          date: "2019-02-02"
        }
      ],
      activityList: [
        {
          id: 0,
          name: "A线： 惠州马鞍山",
          date: "2019-10-10至2019-10-15",
          viewCount: 100,
          image:
            "http://www.hw917.com/data/attachment/image/000/04/01/97_340_230.jpg"
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
      hottravelsList: [
        {
          id: 0,
          userId: "徒步用户01",
          commentCount: 300,
          viewCount: 2000,
          image: "http://tubu100.com:8053/Files/Note/20180314115557280ef4.jpg",
          title: "不忘初心，砥砺前行--2017五大连池徒步大会",
          intro:
            " 下午1点10分从齐云山庄出发，一路拔高，走走拍拍，于5点30左右到达山顶，用时4小时20分，到了山顶，落日中的云海翻腾，陶醉在美景中，竞忘关记录了，以至于记录了用时11个多小时。图表"
        },
        {
          id: 1,
          userId: "徒步用户02",
          commentCount: 500,
          viewCount: 1030,
          image: "http://tubu100.com:8053/Files/Note/2018031415165195f847.jpg",
          title: "2017徒步中国·全国徒步大会张掖山丹站",
          intro:
            " 下午1点10分从齐云山庄出发，一路拔高，走走拍拍，于5点30左右到达山顶，用时4小时20分，到了山顶，落日中的云海翻腾，陶醉在美景中，竞忘关记录了，以至于记录了用时11个多小时。图表"
        },
        {
          id: 2,
          userId: "徒步用户03",
          commentCount: 300,
          viewCount: 100,
          image: "http://tubu100.com:8053/Files/Note/20180822120952a89a92.jpg",
          title: " 2018华夏行· 探秘天堂秘境 九色甘南之旅第二期",
          intro:
            " 明月山，国家级风景名胜区、国家AAAA级旅游景区、国家森林公园、国家地质公园、国家自然遗产、中国温泉之乡，江西省新赣鄱十景之一-----明月山,位于中国优秀旅游城市宜春市城西南15公里处，规划面积104平方公里，属武功山东北端的山麓部分，是以奇峰险壑、温泉飞瀑、珍稀动植物和禅宗文化为主要特色，集生态游览、休闲度假、科普教育和宗教旅游为一体的山岳型风景名胜区 。"
        }
      ],
      newtravelsList: [
        {
          id: 0,
          userId: "徒步用户00",
          title: "标题：（活动取消） B线4/21漫步山水间邂逅古堡访",
          publishTime: "2019-10-10"
        },
        {
          id: 1,
          userId: "徒步用户01",
          title: "不忘初心，砥砺前行--2017五大连池徒步大会",
          publishTime: "2019-11-10"
        },
        {
          id: 2,
          userId: "徒步用户02",
          title: " 2018徒步中国·全国徒步大会宝泉崖上太行站",
          publishTime: "2019-12-10"
        },
        {
          id: 3,
          userId: "徒步用户03",
          title: "徒步中国·全国徒步大会百色（乐业、凌云）站",
          publishTime: "2019-12-12"
        },
        {
          id: 4,
          userId: "徒步用户04",
          title: "华夏行·呼伦贝尔全国徒步大会",
          publishTime: "2019-12-14"
        }
      ],
      postList: [
        {
          id: 0,
          image:
            "http://avatar.8264.com/data/avatar/000/12/84/45_avatar_middle.jpg?ZB8R69?tempid=527",
          userId: "徒步用户haha",
          contents:
            "传统的好处:1,便宜2,轻不足:1,不方便携带,都有点大2,舒适度差点充气的好处:1,小巧,可压小放2,睡觉时舒适不足:1相比传统价高2,比传统重点建议短...",
          title: "新手请教，防潮垫时用传统的还是自充气的？"
        },
        {
          id: 1,
          image:
            "http://avatar.8264.com/data/avatar/034/36/27/53_avatar_middle.jpg?KnOKMz?tempid=8411",
          userId: "徒步用户xixi",
          contents:
            "央视网消息：如今的服装不仅款式多，功能性服装也火了起来，所谓功能性，就比如、吸湿、防水、速干、防细菌等等，听起来服装有了这些功能真是不错，但不久前上海市市场",
          title: "这样的内衣、冲锋衣你敢穿？央视曝光那些可致癌功能性服装"
        },
        {
          id: 2,
          image:
            "http://avatar.8264.com/data/avatar/034/24/36/11_avatar_middle.jpg?qCB02M?tempid=7787",
          userId: "徒步用户hehe",
          contents:
            "可以先试干嘛不买？冷门也有好货，试穿试测是第一重要，其他都是狗屁!牌子再大有鸟用，照样不合脚的海了去我发现装备版对于东西合不合脚合不合...",
          title: "问个常见的问题，鞋子臭了怎么办？"
        },
        {
          id: 3,
          image:
            "http://avatar.8264.com/data/avatar/034/60/39/98_avatar_middle.jpg?XBP1Pz?tempid=5603",
          userId: "徒步用户hoho",
          contents:
            "Wind2收到手才知道是Sample，——空间很大，高山帐，和我的SDTiros重复了Twinpeak也是收到后才知道是SalemanSampleMissingLink本来就是错买的...",
          title: "大家都有几个帐篷？"
        }
      ]
    };
  },
  created() {
    this.getTravelsList();
    this.getListOrderby();
    this.getNewsList();
    this.getpostList();
    this.getActivityList();
  },
  methods: {
    getTravelsList() {
      getList(this.query).then(resp => {
        this.hottravelsList = resp.data;
      });
    },
    getListOrderby() {
      getList(this.commendQuery).then(resp => {
        this.newtravelsList = resp.data;
        this.total = resp.total;
      });
    },
    getActivityList() {
      getAcList(this.Activityquery).then(resp => {
        this.activityList = resp.data;
        this.actotal = resp.actotal;
      });
    },
    getNewsList() {
      getKnowledgeList(this.Knowledgequery).then(resp => {
        this.listData = resp.data;
        this.total1 = resp.total;
      });
    },
    getpostList() {
      getPostList(this.postquery).then(resp => {
        this.postList = resp.data;
        this.posttotal = resp.total;
      });
    },
    changePage(change) {
      this.commendQuery.page += change;
      if (this.commendQuery.page == 0) {
        this.commendQuery.page = 1;
      }
      if (
        this.commendQuery.page >
        Math.ceil(this.total / this.commendQuery.pageSize)
      ) {
        this.commendQuery.page = Math.ceil(
          this.total / this.commendQuery.pageSize
        );
      }
      this.getListOrderby();
    },
    changeTab() {}
  }
};
</script>
<style scoped>
.title:hover {
  cursor: pointer;
  color: #75b628;
  text-decoration: underline;
}

.title {
  width: 240px;
  font-size: 15px;
  /* height: 25px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
.date {
  float: right;
  margin-right: 5px;
  color: #bbb;
  font-size: 13px;
  padding-top: 2px;
}
ul {
  margin: 0px;
  text-align: left;
  padding: 0;
  padding-left: 5px;
}
li {
  padding: 5px 0;
}
.seamless-warp {
  height: 371px;
  overflow: hidden;
}
.seamless-warp li {
  /* background: url(../images/li.png) left center no-repeat; */
  border-bottom: 1px dotted #ccc;
  padding: 10px 0 8px 0;
  list-style: none;
}
.seamless-warp a {
  width: 100%;
}
.item {
  padding: 0 15px !important;
}
.lunbo {
  height: 100%;
  width: 100%;
}

.travels {
  margin-top: 30px;

  /* background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1); */
  /* height: 350px; */
}
.hot {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.p-img {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
}
.p-img {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
}
.ac1 {
  height: 20px;
  margin-bottom: -5px;
  margin-left: 5px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.activity {
  margin-top: 15px;
  margin-bottom: 40px;
}
.new {
  margin-top: 35px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.travel {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
}
.tr-title {
  line-height: 40px;
  border-bottom: 2px solid #e1e1e0;
  border-bottom-style: dotted;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  /* background-color: #c2e7b0; */
}
.p-title {
  padding: 0;
  line-height: 40px;
  border-bottom: 2px solid #689f38;
  overflow: visible;
  height: 50px;
  display: flex;
  align-items: center;
}
.notice {
  position: absolute;
  right: 30px;
  background-color: #75b628;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.tr1 {
  /* border-bottom: 2px solid #689F38; */
  /* border-bottom-style: dotted; */

  margin-top: 10px;
  margin-left: 5px;
  margin-right: 500px;
  font-size: 18px;
  font-weight: bold;
}
.tr2 {
  margin-top: 10px;
}
.tr1-right {
  margin-left: auto;
  padding-right: 35px;
}
.tr2-right {
  margin-left: auto;
  padding-right: 10px;
}
.p1 {
  left: 20px;
  width: 30%;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.s1 {
  left: 20px;
  width: 20%;
  margin-top: 10px;
  font-size: 15px;
}
.travel-img {
  float: left;
  width: 220px;
  height: 150px;
  position: relative;
}

.el-icon-location {
  margin-right: 10px;
}
.tr-author {
  margin-right: 10px;
}
.el-icon-view {
  margin-right: 10px;
}
.travel-info {
  display: flex;
  flex-direction: column;
}
.el-tabs__item.is-active {
  color: #75b628;
}
.el-tabs__item:hover {
  outline: 0 !important;
  color: #75b628 !important;
}
.el-tabs__item {
  font-size: 16px;
  font-weight: 500;
}
.el-tabs__active-bar {
  background-color: #689f38;
}
.tr-content {
  display: flex;

  padding-top: 10px;
  padding-bottom: 15px;
  /* background-color: #f0f9eb; */
}
.tr-content-left {
  width: 70%;

  /* display: flex; */
}
.tr-content-right {
  width: 35%;
  border-left: 2px solid #e1e1e0;
  border-left-style: dotted;
}
.tr-title-1 {
  display: flex;
  width: 70%;
}
.tr-title-2 {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 33%;
}
.post {
  width: 66.5%;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.post1 {
  width: 32%;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.tr-content-left-content {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.tr-content-left-img {
  width: 40%;
}

.el-button + .el-button {
  margin-left: 4px !important;
}
.p-more {
  margin-left: auto;
  padding-right: 10px;
}
.more-link:hover {
  color: #b2c42b;
}
.router-link-active .more-link {
  color: #fff;
}
.el-button--text {
  color: #689f38;
}

.inner-container {
  animation: myMove 5s linear infinite;
  animation-fill-mode: forwards;
}
/*文字停顿滚动*/
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  10% {
    /*transform: translateY(-30px);*/
  }
  20% {
    transform: translateY(-30px);
  }
  30% {
    /*transform: translateY(-60px);*/
  }
  40% {
    transform: translateY(-60px);
  }
  50% {
    /*transform: translateY(-90px);*/
  }
  60% {
    transform: translateY(-90px);
  }
  70% {
    /*transform: translateY(-120px);*/
  }
  80% {
    transform: translateY(-120px);
  }
  90% {
    /*transform: translateY(-150px);*/
  }
  100% {
    transform: translateY(-150px);
  }
}

.text {
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
}

.news_box {
  white-space: nowrap;
  overflow: hidden;
  margin: 0 20px;
}
.el-col-5 {
  width: 24.5% !important;
}
.tip {
  position: relative;
  background-color: #f0f9eb;
  height: 60px;
  color: white;
  text-align: left;
  font-family: sans-serif;
  padding: 5px 10px;
}
/* .slideshow li:hover {
  color: #75b628;
} */
.tip:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid;
}
.left:after {
  border-right-color: #f0f9eb;
  top: 50%;
  right: 100%;
  margin-top: -9px;
}
.slideshow {
  border-left: 2px #75b628 solid;
  margin: 0px 15px 10px 20px;
  padding-left: 30px;
}
.slideshow li {
  height: 70px;
  padding-top: 15px;
  list-style: none;
  position: relative;
}
.slideshow li i {
  position: absolute;
  left: -40px;
  top: 40px;
  display: inline-block;
  height: 18px;
  width: 18px;
  background: url(../../assets/yuangfang.png) 0px -270px no-repeat;
}
.time {
  font-size: 12px;
  color: #757575;
}
.bt {
  margin: 0px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bt a {
  font-size: 14px;
  color: #4c4b4b;
  font-weight: 500;
}
.bt a:hover {
  font-weight: bold;
  color: #75b628;
}
.aut {
  margin: 0px;
  text-align: right;
}
.aut a {
  font-size: 12px;
  color: #757575;
}
.tr-content-left-1 {
  display: flex;
  padding: 0 10px;
}
.tr-content-left-content1 {
  padding: 0 5px;
}
.activity-content2 {
  padding: 10px 15px 15px 15px;
  border-bottom: 1px dotted #adadad;
  display: flex;
  margin: 5px 20px 0 5px;
}
.activity-content3 {
  padding: 15px 15px 15px 15px;

  display: flex;
  margin: 5px 20px 0 5px;
}
.s-content a {
  color: #000;
}
.ac-content-left {
  margin-right: 10px;
}
.ac-content-left img {
  height: 110px;
  width: 170px;
}
.tr-b-rf-public {
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: right;
  font-size: 14px;
  color: #919191;
}
.p-c-1 {
  margin: 20px 25px;
}
.p-content-top {
  display: flex;
  text-align: left;
}
.p-content-top img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0px 10px 0px 0px;
}
.p-content-top-info {
  overflow: hidden;
}
.p-content-top-info span {
  color: #000;
  font-size: 12px;
  margin: 0px 10px 0px 0px;
}
.p-content-top-info a {
  font-size: 16px;
  color: #457598;
  display: block;
  font-weight: bold;
  padding: 5px 0px 0px 0px;
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* .p-content-top-info a:hover {
  box-shadow: 5px 5px 10px rgba(74, 174, 164, 0.6);
} */
.p-content-bottom {
  line-height: 22px;
  font-size: 14px;
  color: #666;
  border: #e0e7eb solid 1px;
  border-radius: 3px;
  padding: 10px 5px;
  margin: 15px 0px 0px 0px;
  height: 60px;
  position: relative;
  background-color: #eefaec;
  /* overflow: hidden; */
}
.p-content-bottom ::before {
  border-color: transparent transparent #e0e7eb transparent;
  border-style: solid solid dashed solid;
  border-width: 8px;
  top: -17px;
  content: "";
  left: 17px;
  position: absolute;
}
.p-c-b-content {
  /* height: 66px; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.p-content-bottom::after {
  border-color: transparent transparent #eefaec transparent;
  border-style: solid solid dashed solid;
  border-width: 8px;
  top: -16px;
  content: "";
  left: 17px;
  position: absolute;
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
  padding-left: 59px;
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
.adiv {
  /* background-color: #f0f9eb;
  color: #67c23a; */

  text-align: left;
}
.ap {
  font-size: 14px;
  color: #666;
  margin: 15px 0 0;
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
.adiv a {
  font-size: 19px;
  color: #31424e;
  font-weight: bold;
}
.adiv a:hover {
  text-decoration: underline;
}
.ac-content-right {
  padding: 0 5px;
}
.image:hover {
  background: #fff;
  opacity: 0.5;
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
.borderNone {
  border: none !important;
}
/*鼠标触发标题*/
.ih-item {
  position: relative;
  width: 100%;
  height: 100%;
  /* width: 120px;
  height: 120px; */
}

.ih-item .img img {
  position: relative;
  /* width: 220px;
  height: 220px; */
  max-width: 100%;
}

.ih-item .info {
  width: 100%;
  position: absolute;
  bottom: 0px;
  text-align: center;
  -webkit-backface-visibility: hidden; /* 隐藏旋转元素的背面*/
  backface-visibility: hidden;
  background: rgba(0, 0, 0, 0.6); /*后面这个0.6是指的背景的透明度*/
  opacity: 0;
  -webkit-transition: all 0.35s ease-in-out; /*规定提示信息怎样出现ease-in-out以慢速度开始和结束*/
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.ih-item .info h3 {
  color: #fff;
}

.ih-item a:hover .info {
  opacity: 1; /*有opacity有0变成1*/
}
</style>

