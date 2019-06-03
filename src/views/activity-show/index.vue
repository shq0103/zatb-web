<template>
  <div class="activity-show">
    <ul class="activity_top">
      <li class="activity">
        <a href="/">首页</a>
      </li>
      <li>></li>
      <li>
        <a href="/">活动</a>
      </li>
      <li>></li>
      <li>
        <a href="/">{{acPublic.name}}</a>
      </li>
    </ul>
    <div class="activity_info">
      <div class="a-i-title">
        <h3 class="activity_title">{{acPublic.name}}</h3>
        <!-- <b class="activity_distance">{{acPublic.theme}}</b> -->
      </div>
      <p class="activity_text">
        <img src="../../assets/咨讯浏览.png" style="height:20px;margin:-3px 2px -5px 0;">
        {{acPublic.viewCount}}人浏览
      </p>
      <div class="a-i-content">
        <div class="a-i-c-lf">
          <img :src="`/image${acPublic.image}`">
          <label>{{acPublic.theme|lineFilter}}系列</label>
          <b class="stat_01">报名中</b>
        </div>
        <div class="a-i-c-rf">
          <div class="a-i-c-rf-text">
            <p>
              <img src="../../assets/时间.png" style="height:20px;margin:-3px 15px -5px 0;">
              活动时间：{{acPublic.startDate|dateFilter}} ~ {{acPublic.endDate|dateFilter}}
            </p>
            <p>
              <img src="../../assets/感叹号.png" style="height:20px;margin:-3px 15px -5px 0;">
              报名截止日期：{{acPublic.deadline|dateFilter}}
            </p>
            <p>
              <img src="../../assets/出发地.png" style="height:20px;margin:-3px 15px -2px 0;">
              出发地：{{acPublic.startPlace}}
            </p>
            <p>
              <img src="../../assets/目的地.png" style="height:20px;margin:-3px 15px -2px 0;">
              目的地：{{acPublic.destination}}
            </p>

            <p>
              <img src="../../assets/小人头.png" style="height:20px;margin:-3px 15px -2px 0;">
              发起人：{{acPublic.username}}
            </p>
            <p>
              <img src="../../assets/限制.png" style="height:20px;margin:-3px 15px -2px 0;">
              限额{{acPublic.quota}}人
            </p>
            <p>
              <img src="../../assets/费用.png" style="height:20px;margin:-3px 15px -2px 0;">
              费用：{{acPublic.price}}
            </p>
          </div>
          <router-link :to="'/activity-join/'+id">
            <el-button type="success" round>我要报名</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="activity_content">
      <el-row :gutter="20">
        <el-col :span="17">
          <div class="a-c-lf">
            <div class="a-c-lf-title">
              <ul class="tabbar">
                <li class="tabbar-1">
                  <a @click="selectItem('#position1')">行程安排</a>
                </li>
                <li>
                  <a @click="selectItem('#position2')" class="po-active">费用说明</a>
                </li>
                <li>
                  <a @click="selectItem('#position3')" class="po-active">线路描述</a>
                </li>
                <!-- <li>
                  <a href="javascript:void(0);">目的地地图</a>
                </li>-->
                <li>
                  <a @click="selectItem('#position4')" class="po-active">装备要求</a>
                </li>
                <li>
                  <a @click="selectItem('#position5')" class="po-active">更多介绍</a>
                </li>
              </ul>
            </div>
            <div class="a-c-lf-content">
              <div class="a-c-l-c-1">
                <div class="attr-title">
                  <h3>
                    <a name="position1">
                      <img src="../../assets/行程.png" class="icon-intro">行程安排
                    </a>
                  </h3>
                </div>
                <div class="attr-content" v-html="acPublic.routing"></div>
              </div>
              <div class="a-c-l-c-1">
                <div id="position2" class="attr-title">
                  <a name="position2">
                    <h3>
                      <img src="../../assets/费用说明.png" class="icon-intro">费用说明
                    </h3>
                  </a>
                </div>
                <div class="attr-content" v-html="acPublic.costExplain"></div>
              </div>
              <div id="position3" class="a-c-l-c-1">
                <div class="attr-title">
                  <a name="position3">
                    <h3>
                      <img src="../../assets/线路.png" class="icon-intro">线路介绍
                    </h3>
                  </a>
                </div>
                <div class="attr-content" v-html="acPublic.line"></div>
              </div>

              <div class="a-c-l-c-1">
                <div id="position4" class="attr-title">
                  <a name="position4">
                    <h3>
                      <img src="../../assets/装备.png" class="icon-intro">装备要求
                    </h3>
                  </a>
                </div>
                <div class="attr-content" v-html="acPublic.equip"></div>
              </div>
              <div class="a-c-l-c-2">
                <div id="position5" class="attr-title">
                  <a name="position5">
                    <h3>
                      <img src="../../assets/更多.png" class="icon-intro">更多介绍
                    </h3>
                  </a>
                </div>
                <div class="attr-content" v-html="acPublic.moreInfo"></div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="a-c-rf">
            <div class="a-c-rf-1">
              <div class="a-c-rf-2-title">报名列表</div>
              <div class="a-c-rf-2-title1">已参加：{{acPublic.signin}}人</div>
              <div class="a-c-rf-2-content">
                <el-row :gutter="24">
                  <el-col :span="12" v-for="item in acPublic.joinList" :key="item.id">
                    <div class="a-c-rf-2-people">
                      <div class="post-bottom-content-lf">
                        <img :src="`/image${item.avatar}`">
                      </div>

                      <div class="post-bottom-content-rf">
                        <ul>
                          <li>{{item.nickname}}</li>
                        </ul>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="a-c-rf-2">
              <div class="a-c-rf-2-title">天气查询</div>
              <div class="a-c-rf-2-cloud">
                <a href="http://www.weather.com.cn/" target="_blank">点击查询</a>
              </div>
            </div>
            <div class="a-c-rf-3">
              <div class="a-c-rf-2-title">相关游记</div>
              <div class="retravels" v-for="item in recommendList" :key="item.id">
                <a href="/Activity/Detail/1101">
                  <img :src="item.image">
                  <p>{{item.title}}</p>
                  <p id="p2">{{item.date}}</p>
                </a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { getAcDetail, getAcJionList } from "@/api/activity.js";
export default {
  data() {
    return {
      acPublic: {
        id: 0,
        name: "梨花顶山巅极地穿越  ",
        date: "2019年08月01日 ~ 2019年08月05日",
        deadline: "2019年06月30日",
        startPlace: "桂林",
        destination: "桂林",
        userId: "全国徒步大会",
        quota: 200,
        price: 100,
        routing:
          "环北京1500公里户外山地徒步线路，是根椐我们多年来在户外活动实际行走中记录下的大量主干线路为基本线路基础，同时，参考了众多的驴友上传的活动轨迹所构成。其主要特点就是沿逆时针方向把北京近、远郊的山区通串成一条大约有1500公里的山地行走线路，起点为顺义的唐子山水库地区，终点为小西山的八大处。整条线路分为102个分段，其本含括了北京地区的名山名胜名水，比如，大的节点有：梨花顶，古北口，云蒙山，后河，海坨、燕羽山，蟒山，八达岭，清水尖，灵山，十渡，小西山等。线路上，百分之九十五的路段为初级驴友可以顺利通行的区域。根椐线路的理论设计，整条线路可以拆分出最多为102个户外山地徒步行走分段，这样既可以形成一条完整的北京地区超长距离的户外大环线，又可以为驴友提供更丰富的短距离户外线路。根据超级穿越线路的设计和活动的基本规划，这条超级穿越线路应该是以接续的方式进行，但是，由于北京地区近年来山地防火措施很严格，如果接续方式进行活动，很难正常完成每一分段的徒步行程。经过对线路的优化和调整，筛选出一部分近期可能顺利实施的分段进行”跳越式“的环北京1500公里超级穿越。最终将每一分段接续在一起，形成一个闭合的环北京1500公里的超级穿越大线路。",
        costExplain:
          "费用包含 1、全程正规有运营资格的旅游包车费（含油费、过路费、停车费、司机餐费）；2、专业户外保险费；  3、领队费组织策划；  费用不含  1、餐费：农家院聚餐，费用AA；2、其 他：以上所列服务外的其它任何费用；退款说明1、活动开始前一天中午12点之前退出活动，报名费用将全额退还；2、活动开始前一天中午12点之后退出活动，报名费用退50%；3、因个人原因在活动当天临时退出的，报名费用无法退还；",
        line:
          "活动地点：平谷—密云。线路强度：全程12公里，爬升800米，下降700米。出发地点：见活动集合地点。活动线路：平谷关上—梨花顶山脊—密云程各庄线路形态：乡级公路，山间土路，山脊小道。适合人员：身体健康，无突发疾病隐患的户外爱好者。食宿安排：路线上没有商业补给条件，需自带饮水和简单午餐",
        equip:
          "第一、本活动线路为户外驴友徒步线路，适合有户外经历的人员参加。第二、本活动线路的难度和强度虽然都不大，但是纯游玩和纯旅行者请自行评估自身能力后谨慎报名。第三、正常户外装备。（手套、雨衣、手电或头灯必备）",
        moreInfo:
          "  登山、徒步、旅行活动是一项带有危险性的探险活动，任何不可预测的情况均可能发  生，报名参加活动的人员视为认同这一点且完全自愿参加。 ",
        theme: "长线",
        viewCount: 100,
        image:
          "http://www.hw917.com/data/attachment/image/000/04/01/97_340_230.jpg",
        signin: 9
      },
      acSigninList: [
        {
          id: 0,
          image:
            "http://www.globalwalk.cn/_uploads/_user/portrait/20190416/994cfc71f5f42a0b60ccecba769e71d9.jpg",
          userId: "徒步用户01",
          sex: "女"
        },
        {
          id: 1,
          image: "http://www.globalwalk.cn/_content/images/headwoman.png",
          userId: "徒步用户02",
          sex: "女"
        },
        {
          id: 2,
          image:
            "http://www.globalwalk.cn/_uploads/_user/portrait/20190416/994cfc71f5f42a0b60ccecba769e71d9.jpg",
          userId: "徒步用户03",
          sex: "女"
        },
        {
          id: 3,
          image:
            "http://www.globalwalk.cn/_uploads/_user/portrait/20190416/994cfc71f5f42a0b60ccecba769e71d9.jpg",
          userId: "徒步用户04",
          sex: "女"
        },
        {
          id: 4,
          image: "http://www.globalwalk.cn/static/images/headman.png",
          userId: "徒步用户05",
          sex: "女"
        },
        {
          id: 5,
          image:
            "http://www.globalwalk.cn/_uploads/_user/portrait/20190416/994cfc71f5f42a0b60ccecba769e71d9.jpg",
          userId: "徒步用户06",
          sex: "女"
        }
      ],
      recommendList: [
        {
          id: 0,
          title: "2019徒步中国•全国徒步大会天峻站",
          image: "http://tubu100.com:8053/Files/At/20190420195609f3fd8f.jpg",
          date: "2019年04月20日"
        },
        {
          id: 1,
          title: "2019徒步中国•威海千里海岸线全国徒步大会",
          image: "http://tubu100.com:8053/Files/At/20190507162755a93b39.jpg",
          date: "2019年04月15日"
        },
        {
          id: 2,
          title: "2019徒步中国•威海千里海岸线全国徒步大会",
          image: "http://tubu100.com:8053/Files/At/20190507162755a93b39.jpg",
          date: "2019年04月15日"
        }
      ],
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    getAcDetail(this.id).then(resp => {
      this.acPublic = resp.data;
    });
  },
  methods: {
    selectItem: function(index) {
      document.querySelector(index).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>
<style scoped>
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
.a-i-c-lf img {
  width: 600px;
  height: 340px;
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
.po-active:hover {
  background-color: #fff;
  border-top: 2px solid #75b628;
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
  width: 70px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 0 10px;
}
.post-bottom-content-rf ul {
  padding: 0;
  text-align: center;
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
.retravels {
  margin: 20px 0;
}
.retravels img {
  width: 90px;
  height: 60px;
  margin-right: 10px;
  float: left;
}
.retravels p {
  height: 40px;
  line-height: 20px;
  font-size: 14px;
  text-align: left;
  margin: 0px;
}
.retravels a {
  color: #000;
}
.retravels a:hover {
  color: #75b628;
}
#p2 {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #999;
  text-align: left;
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
  margin: 5px 20px;
  padding-bottom: 20px;
}
.attr-content {
  min-height: 100px;
  text-align: justify;
  text-indent: 2em;
  line-height: 30px;
  margin-bottom: 10px;
}
</style>
