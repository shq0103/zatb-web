<template>
  <div class="index">
    <div class="index-left">
      <div class="activity">
        <div class="activity-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div class="activity-content1">
            <div class="ac acactive">热门活动</div>
            <div class="ac">最新活动</div>
            <div class="ac">官方活动</div>
            <!-- <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >自游行</div>-->
          </div>
        </div>
      </div>
      <div class="activity-content">
        <div v-for="item in activityList" :key="item.id" class="activity-content2">
          <div class="ac-content-left">
            <img width="100%" height="98%" :src="item.image">
          </div>
          <div class="ac-content-right">
            <router-link to="/activity-show">
              <div class="ac-content-right1">
                <!-- <el-alert
                  :title="item.name"
                  type="success"
                  :closable="false"
                  :description="item.explain"
                ></el-alert>-->
                <div class="adiv">
                  <p class="aname">{{item.name}}</p>
                  <p class="ap">{{item.explain}}</p>
                </div>
              </div>
            </router-link>
            <div class="ac-content-right2">
              <el-progress
                :percentage="Math.round(item.signin/item.quota*100)"
                :stroke-width="9"
                color="#75b628"
              ></el-progress>
            </div>
            <div class="ac-content-right3">
              <div class="ac-content-right3-1">
                <span style="color: #000;font-size: 14px;">{{item.price}}/人</span>
                <br>
                <span style="font-size: 10px;color:#888;">活动费用</span>
              </div>
              <div class="ac-content-right3-1">
                <span style="color: #000;font-size: 14px;">{{item.destination}}</span>
                <br>
                <span style="font-size: 10px;color:#888;">活动地点</span>
              </div>
              <div class="ac-content-right3-2">
                <span style="color: #000;font-size: 14px;">{{item.date}}</span>
                <br>
                <span style="font-size: 10px;color:#888;">活动时间</span>
              </div>
            </div>
            <div class="ac-content-right4">
              <div class="ac-content-right4-1">
                <img class="touxiang" v-for="(img,index) in item.imgList" :key="index" :src="img">
              </div>
              <div class="ac-content-right4-2">
                <span>报名:</span>
                <span>{{item.signin}}</span>
                <br>
                <span>关注:</span>
                <span>{{item.viewCount}}</span>
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
      <div class="search">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >搜索活动</div>
        </div>
        <div class="search-content">
          <el-form ref="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input placeholder="关键字查找"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
              <!-- <el-col :span="11"> -->
              <el-date-picker type="date" placeholder="开始日期" style="width: 100%;padding-right:0px;"></el-date-picker>
              <!-- </el-col> -->
              <!-- <el-col class="line" :span="2">-</el-col> -->
              <!-- <el-col :span="11"> -->
            </el-form-item>
            <el-form-item>
              <el-date-picker type="date" placeholder="截止日期" style="width: 100%;"></el-date-picker>
              <!-- </el-col> -->
            </el-form-item>
            <!-- <el-form-item label="活动区域">
              <el-select placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>-->

            <el-form-item label="活动强度">
              <el-select placeholder="请选择活动强度">
                <el-option label="强度一" value="短线"></el-option>
                <el-option label="强度二" value="中线"></el-option>
                <el-option label="强度三" value="长线"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动领队">
              <el-select placeholder="请选择活动领队">
                <el-option label="强度一" value="短线"></el-option>
                <el-option label="强度二" value="中线"></el-option>
                <el-option label="强度三" value="长线"></el-option>
              </el-select>
            </el-form-item>
            <!-- <el-form-item label="特殊资源">
              <el-radio-group>
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>-->
            <el-form-item>
              <el-button type="success">搜索</el-button>
              <el-button type="success" plain>重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div class="public">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >活动发布</div>
        </div>
        <div class="public-content">
          <el-row>
            <router-link to="/activity-public">
              <el-button class="public-button1" type="success">发布线上活动</el-button>
            </router-link>
            <!-- <el-button class="public-button2" type="success">发布线下活动</el-button> -->
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activityList: [
        {
          id: 0,
          name: "A线： 惠州马鞍山",
          date: "2019-10-10",
          deadline: 0,
          organiger: "string",
          startPlace: "string",
          theme: "string",
          quota: 100,
          signin: 20,
          price: 100,
          destination: "惠州马鞍山",
          viewCount: 100,
          image:
            "http://www.hw917.com/data/attachment/image/000/04/01/97_340_230.jpg",
          explain:
            " 这里是驴友活动，非廉价旅行社，欢迎懂生活品味知浪漫情趣的驴友一起同行，户外活动有风险，报名需谨慎，本次活动不接受孕妇和12岁以下、65岁以上驴友参加。",
          routing: "string",
          costExplain: "string",
          line: "string",
          equip: "string",
          moreInfo: "string",
          imgList: [
            "http://www.hw917.com/uc_server/data/avatar/000/00/54/88_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/78/15_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/17/35_avatar_small.jpg"
          ]
        },
        {
          id: 1,
          name: "走进人间仙境桂林阳朔纯玩约伴，迷失西街游世外桃源",
          date: "2019-5-10",
          deadline: 0,
          organiger: "string",
          startPlace: "string",
          theme: "string",
          quota: 100,
          signin: 30,
          price: 100,
          destination: "桂林",
          viewCount: 100,
          image:
            "http://www.hw917.com/data/attachment/image/000/04/01/53_340_230.jpg",
          explain:
            "本次活动为非营利性AA制自由约伴活动，无保姆式服务。更无空姐式礼仪。本次活动全程无购物点和规定消费店，但途中为节约时间，不统一安排腐败请自备干粮。",
          routing: "string",
          costExplain: "string",
          line: "string",
          equip: "string",
          moreInfo: "string",
          imgList: [
            "http://www.hw917.com/uc_server/data/avatar/000/00/27/47_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/02/00_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/17/35_avatar_small.jpg"
          ]
        },
        {
          id: 2,
          name: " B线：漫步山水间邂逅古堡访古村穿越十里",
          date: "2019-5-15",
          deadline: 0,
          organiger: "string",
          startPlace: "string",
          theme: "string",
          quota: 100,
          signin: 50,
          price: 100,
          destination: "桂林",
          viewCount: 100,
          image:
            "http://www.hw917.com/data/attachment/image/000/04/00/66_340_230.jpg",
          explain:
            "户外活动有风险，本次活动不接受小孩（10岁以下）和老人（65岁以上）报名。本次活动为非营利性AA制自由约伴活动，无保姆式服务。更无空姐式礼仪。",
          routing: "string",
          costExplain: "string",
          line: "string",
          equip: "string",
          moreInfo: "string",
          imgList: [
            "http://www.hw917.com/uc_server/data/avatar/000/00/68/01_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/01/00_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/01/08_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/78/15_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/00/41_avatar_small.jpg"
          ]
        },
        {
          id: 3,
          name: "川西环线约伴",
          date: "2019-6-1",
          deadline: 0,
          organiger: "string",
          startPlace: "string",
          theme: "string",
          quota: 100,
          signin: 80,
          price: 100,
          destination: "桂林",
          viewCount: 100,
          image:
            "http://www.hw917.com/data/attachment/image/000/04/00/61_340_230.jpg",
          explain:
            "户外活动有风险，本次活动不接受小孩（10岁以下）和老人（65岁以上）报名。本次活动为非营利性AA制自由约伴活动，无保姆式服务。更无空姐式礼仪。",
          routing: "string",
          costExplain: "string",
          line: "string",
          equip: "string",
          moreInfo: "string",
          imgList: [
            "http://www.hw917.com/uc_server/data/avatar/000/00/27/47_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/02/00_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/17/35_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/00/16_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/02/62_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/76/84_avatar_small.jpg"
          ]
        },
        {
          id: 4,
          name: "河源金银碗飞行基地玩滑翔伞活动约伴",
          date: "2019-8-1",
          deadline: 0,
          organiger: "string",
          startPlace: "string",
          theme: "string",
          quota: 100,
          signin: 100,
          price: 100,
          destination: "桂林",
          viewCount: 100,
          image:
            "http://www.hw917.com/data/attachment/image/000/03/99/82_340_230.jpg",
          explain:
            "户外活动有风险，本次活动不接受小孩（10岁以下）和老人（65岁以上）报名。本次活动为非营利性AA制自由约伴活动，无保姆式服务。更无空姐式礼仪。",
          routing: "string",
          costExplain: "string",
          line: "string",
          equip: "string",
          moreInfo: "string",
          imgList: [
            "http://www.hw917.com/uc_server/data/avatar/000/00/27/47_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/02/00_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/17/35_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/00/16_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/02/62_avatar_small.jpg",
            "http://www.hw917.com/uc_server/data/avatar/000/00/76/84_avatar_small.jpg"
          ]
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

.search {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.activity {
  border-bottom: 1px solid #dedbdb;
}
.public {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  margin-top: 15px;
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
  padding: 12px;
  border-top: 1px solid #dedbdb;
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
  padding: 15px 0px 10px 0px;
  border-bottom: 1px dotted #adadad;
  display: flex;
  margin: 0px 20px 0 20px;
}
.activity-content1 {
  display: flex;
}
.ac-content-left {
  margin-right: 15px;
  width: 40%;
}
.ac-content-right {
  width: 58%;
  display: flex;
  flex-direction: column;
}
.ac-content-right2 {
  padding-right: 45%;
  padding-top: 10px;
  padding-bottom: 15px;
}
.ac-content-right3 {
  display: flex;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
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
.ac-content-right4 {
  display: flex;
  margin-top: 10px;
}
.ac-content-right4-1 {
  width: 80%;
  text-align: left;
}
.ac-content-right4-1 img {
  height: 40px;
}
.ac-content-right4-2 {
  width: 20%;
  font-size: 13px;
  color: #888;
  text-align: left;
}
.el-pagination {
  margin: 10px 0 !important;
}
.touxiang {
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.aname {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 0px;
  /* color: #67c23a; */
}
.adiv {
  /* background-color: #f0f9eb;
  color: #67c23a; */
  padding: 8px 10px;
  text-align: left;
}
.ap {
  /* color: #888; */
  font-size: 12px;
  margin: 10px 0 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.ac {
  height: 26px;
  font-size: 16px;
  font-weight: bold;
  text-align: -webkit-auto;
  margin-left: 20px;
}
.acactive {
  color: #75b628;
  border-bottom: 1px #75b628 solid;
}
a:hover {
  color: #75b628;
}
a {
  color: #000;
}
</style>
