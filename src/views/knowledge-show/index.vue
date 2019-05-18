<template>
  <div class="new-show">
    <div class="index-left">
      <div class="public-1">
        <div class="activity">
          <div class="activity-title">
            <!-- <ul class="activity_top">
              <li class="activity">
                <a href="/">首页</a>
              </li>
              <li>></li>
              <li>
                <a href="/">活动</a>
              </li>
              <li>></li>
              <li>
                <a href="/">.....</a>
              </li>
            </ul>-->
            <div class="activity-content1">
              <h2>{{showList.title}}</h2>
              <div class="title-intro">
                <span>来源： {{showList.source}}</span>
                <span>作者： {{showList.author}}</span>
                <span>时间：{{showList.time}}</span>
                <span>
                  <img src="../../assets/咨讯浏览.png" style="height:20px;margin:0 2px -5px 0;">
                  {{showList.viewCount}}
                </span>
              </div>
            </div>
          </div>
          <div class></div>
        </div>
      </div>
      <div class="search-1">
        <div class="search-title">
          <div style="background-color:#009a61; width:2px; float:left; height:26px;"></div>
          <div
            style="height:26px; font-size: 16px;font-weight:bold;text-align: -webkit-auto;padding-left: 20px;"
          >网友评论</div>
        </div>
        <div class="search-content"></div>
        <div class="show-comment">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item style="margin:0px;text-align:left;">发表评论</el-form-item>
            <el-form-item>
              <!-- <el-input type="textarea"></el-input> -->
              <QuillEditor/>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="onSubmit">发表</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div class="index-right">
      <div class="public-2">
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
import QuillEditor from "@/components/QuillEditor";
export default {
  components: {
    QuillEditor
  },
  data() {
    return {
      commentMenu: [
        "bold",
        "fontSize",
        "fontName",
        "foreColor",
        "emoticon",
        "image"
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
      ],
      showList: {
        id: 0,
        title: "第十三届平谷桃花节国际徒步大会即将隆重举行",
        source: "中国徒步网",
        author: "Admin",
        time: "2019-03-11 12:03:40",
        viewCount: "200"
      }
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

  margin-right: 20px;
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
  margin: 0 40px;
}
.public-1 {
  border: 1px solid #dedbdb;
  /* -moz-border-radius: 5px;
-webkit-border-radius: 5px; */
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  min-height: 800px;
}
.public-2 {
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
  padding: 15px 15px 15px 15px;
  border-bottom: 1px dotted #adadad;
  display: flex;
  margin: 5px 20px 0 20px;
}
.activity-content1 {
  border-bottom: 1px dotted #dedbdb;
  padding-top: 5px;
}
.activity-content1 h2 {
  font-size: 20px;
  color: #454444;
  text-align: center;
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
.top1 {
  background-color: #ec5d55;
}
.top2 {
  background-color: #ec8055;
}
.top3 {
  background-color: #eeb954;
}
.ac-content-left {
  margin-right: 10px;
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
.new-right2 {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
/* .ac-content-right4-1 img {
   height: 40px;
} */
.ac-content-right4-2-1 {
  width: 20%;
  font-size: 13px;
  color: #888;
}
.new-show {
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
.title-intro span {
  font-size: 12px;
  color: #919191;
  margin-left: 15px;
  position: relative;
}
/* .title-intro {
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-top: 10px;
  margin-bottom: 8px;
  text-align: center;
} */
.show-comment {
  /* border-top: 1px dotted #ccc; */
  margin: 10px 10px;
  padding-top: 10px;
}
.activity_top {
  display: flex;
  margin: 0px;
  padding: 0px;
}
.activity_top li {
  line-height: 20px;
  font-size: 12px;
}
.activity_top li a {
  color: #999;
}
.activity_top li:nth-child(2n) {
  padding: 0 10px;
}
</style>
