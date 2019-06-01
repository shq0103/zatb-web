<template>
  <div class="index">
    <div class="index-left">
      <div class="activity">
        <div class="activity-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div class="activity-content1">
            <div
              @click="changeOrder('viewCount')"
              :class="{acactive:query.orderBy=='viewCount'}"
              class="ac"
            >热门活动</div>
            <div
              @click="changeOrder('publishTime')"
              :class="{acactive:query.orderBy=='publishTime'}"
              class="ac"
            >最新活动</div>
            <div
              @click="changeUser('admin')"
              :class="{acactive:query.user=='admin'}"
              class="ac"
            >官方活动</div>
            <!-- <div
              style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
            >自游行</div>-->
          </div>
        </div>
      </div>
      <div class="activity-content">
        <div v-for="item in activityList" :key="item.id" class="activity-content2">
          <div class="ac-content-left">
            <img width="100%" height="98%" :src="`/image/${item.image}`">
          </div>
          <div class="ac-content-right">
            <router-link :to="`/activity-show/${item.id}`">
              <div class="ac-content-right1">
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
                <span
                  style="color: #000;font-size: 14px;"
                >{{item.startDate|dateFilter}}-{{item.endDate|dateFilter}}</span>
                <br>
                <span style="font-size: 10px;color:#888;">活动时间</span>
              </div>
            </div>
            <div class="ac-content-right4">
              <div class="ac-content-right4-1">
                <img class="touxiang" v-for="(img,index) in item.imgList" :key="index" :src="img">
              </div>
              <div class="ac-content-right4-2">
                <span>报名:{{item.signin}}</span>
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
      <div class="search">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >搜索活动</div>
        </div>
        <div class="search-content">
          <el-form :model="query" ref="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="query.keyword" placeholder="关键字查找"></el-input>
            </el-form-item>
            <el-form-item label="活动领队">
              <el-input v-model="query.user" placeholder="领队名字查找"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
              <!-- <el-col :span="11"> -->
              <el-date-picker
                v-model="query.startDate"
                type="datetime"
                placeholder="开始日期"
                style="width: 100%;padding-right:0px;"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-date-picker
                v-model="query.endDate"
                type="datetime"
                placeholder="截止日期"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>

            <el-form-item label="活动强度">
              <el-select v-model="query.theme" placeholder="请选择活动强度" style="width:100%">
                <el-option label="短线" :value="1"></el-option>
                <el-option label="中线" :value="2"></el-option>
                <el-option label="长线" :value="3"></el-option>
                <el-option label="其他" :value="4"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="success" @click="searchSS">搜索</el-button>
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
import { getAcList } from "@/api/activity.js";
const defQuery = {
  page: 1,
  pageSize: 10,
  status: 1,
  keyword: "",
  user: null,
  theme: null,
  startDate: null,
  endDate: null,
  orderBy: "viewCount"
};
export default {
  data() {
    return {
      query: {
        page: 1,
        pageSize: 5,
        status: null,
        keyword: "",
        user: null,
        theme: null,
        startDate: null,
        endDate: null,
        orderBy: "viewCount"
      },
      total: 0,
      activityList: []
    };
  },
  created() {
    this.getActivityList();
  },
  methods: {
    changeOrder(value) {
      this.query.page = 1;
      this.query.orderBy = value;
      this.query.user = null;
      this.getActivityList();
    },
    changeUser(user) {
      this.query.page = 1;
      this.query.user = user;
      this.query.orderBy = null;
      this.getActivityList();
    },
    getActivityList() {
      getAcList(this.query).then(resp => {
        this.activityList = resp.data;
        this.total = resp.total;
      });
    },
    handleSizeChange(pageSize) {
      this.query.pageSize = pageSize;
      this.getActivityList();
    },
    handleCurrentChange(curPage) {
      this.query.page = curPage;
      this.getActivityList();
    },
    searchSS() {
      this.getActivityList();
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
.ac:hover {
  cursor: pointer;
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
