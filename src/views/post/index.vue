<template>
  <div class="post">
    <div class="post-top">
      <el-row :gutter="24">
        <el-col :span="6">
          <el-carousel height="250px">
            <el-carousel-item v-for="item in imageList" :key="item">
              <img class="lunbo" :src="item" style="height:250px;width=289px;">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="6" class="post-top-border0" style="height:250px">
          <h4>最新主题</h4>
          <ul>
            <li v-for="item in newthemeList" :key="item.id">
              <router-link :to="`/post-show/${item.id}`">
                <el-popover placement="top-start" :title="ss" width="200" trigger="hover">
                  <div class="popover">
                    <h5>标题：{{item.title}}</h5>
                    <p>作者：{{item.nickname}}({{item.date|timeWithoutMin}})</p>
                    <p>查看/回复：{{item.viewCount}}/{{item.commentCount}}</p>
                  </div>
                  <span slot="reference">{{item.title}}</span>
                </el-popover>
              </router-link>
            </li>
          </ul>
        </el-col>
        <el-col :span="6" class="post-top-border1" style="height:250px">
          <h4>最新回复</h4>
          <ul>
            <li v-for="item in newreplyList" :key="item.id">
              <router-link :to="`/post-show/${item.id}`">
                <el-popover placement="top-start" :title="ss" width="200" trigger="hover">
                  <div class="popover">
                    <h5>标题：{{item.title}}</h5>
                    <p>作者：{{item.nickname}}({{item.date|timeWithoutMin}})</p>
                    <p>查看/回复：{{item.viewCount}}/{{item.commentCount}}</p>
                  </div>
                  <span slot="reference">{{item.title}}</span>
                </el-popover>
              </router-link>
            </li>
          </ul>
        </el-col>
        <el-col class="post-top-border2" :span="6" style="height:250px">
          <h4>
            <span class="zxzt"></span>热帖
          </h4>
          <ul>
            <li v-for="item in hotList" :key="item.id">
              <router-link :to="`/post-show/${item.id}`">
                <el-popover placement="top-start" :title="ss" width="200" trigger="hover">
                  <div class="popover">
                    <h5>标题：{{item.title}}</h5>
                    <p>作者：{{item.nickname}}({{item.date|timeWithoutMin}})</p>
                    <p>查看/回复：{{item.viewCount}}/{{item.commentCount}}</p>
                  </div>
                  <span slot="reference">{{item.title}}</span>
                </el-popover>
              </router-link>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="post-bottom">
      <div class="post-bottom-title">
        <div class="post-bottom-title-all">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              全部主题
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>户外问答</el-dropdown-item>
              <el-dropdown-item>装备问答</el-dropdown-item>
              <el-dropdown-item>路线问答</el-dropdown-item>
              <el-dropdown-item>旅途风光</el-dropdown-item>
              <el-dropdown-item>其他</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div
          class="post-bottom-title-zxzt"
          @click="changeOrder('date')"
          :class="{phover:query.orderBy=='date'}"
        >最新</div>
        <div
          class="post-bottom-title-rt"
          @click="changeOrder('viewCount')"
          :class="{prthover:query.orderBy=='viewCount'}"
        >热帖</div>
        <div class="post-bottom-button">
          <router-link to="/post-public">
            <el-button type="success" plain size="small">
              <i class="el-icon-edit-outline"></i>发布新帖
            </el-button>
          </router-link>
        </div>
      </div>
      <div class="post-bottom-content">
        <el-row :gutter="40">
          <el-col
            :span="12"
            v-for="(item,index) in postList"
            :key="item.id"
            style="padding: 0px;margin-bottom: 20px;border-bottom:2px dotted #ccc;"
          >
            <el-row
              :gutter="20"
              :class="{borderNone:index%2==1}"
              style="margin-bottom: 20px;border-right:2px dotted #ccc;"
            >
              <el-col :span="4">
                <div class="post-bottom-content-lf">
                  <img :src="`/image${item.avatar}`">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <router-link :to="`/post-show/${item.id}`">
                    <div class="ac-content-right1">
                      <router-link :to="`/post-show/${item.id}`">
                        <p class="aname1">{{item.title}}</p>
                      </router-link>
                    </div>
                  </router-link>
                  <div class="new-right2">
                    <span style="font-size:13px;float: left;">
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">
                      {{item.nickname}}
                    </span>
                    <i class="el-icon-time">{{item.date|timeWithoutMin}}</i>
                    <i class="el-icon-view" style="padding-left:20px">{{item.viewCount}}</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="post-page">
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
  </div>
</template>
<script>
import { getPostList } from "@/api/post.js";
export default {
  data() {
    return {
      query: { page: 1, pageSize: 6, type: null, orderBy: "" },
      newtheme: { page: 1, pageSize: 9, type: "", orderBy: "date" },
      newreply: { page: 1, pageSize: 9, type: "", orderBy: "replyDate" },
      hottheme: { page: 1, pageSize: 9, type: "", orderBy: "viewCount" },
      imageList: [
        "https://www.tubu123.com/data/attachment/forum/201803/07/132550kjje3b4heoz1919b.jpg",
        "http://tubu100.com:8053/Files/At/20190507162755a93b39.jpg",
        "https://www.tubu123.com/data/attachment/forum/201805/28/172511xz3h3sfhr343zz2x.jpg"
      ],
      postList: [
        {
          id: 0,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        }
      ],
      newthemeList: [
        {
          id: 0,
          title: "户外徒步女神苏莹：走的越远，离自己就越近",
          userId: "徒步用户01",
          date: "2019-5-18",
          viewCount: "200",
          commentCount: "10"
        }
      ],
      newreplyList: [
        {
          id: 0,
          title: "去张家界住哪好",
          userId: "徒步用户01",
          date: "2019-5-18",
          viewCount: "200",
          commentCount: "10"
        }
      ],
      hotList: [
        {
          id: 0,
          title: "户外徒步女神苏莹：走的越远，离自己就越近",
          userId: "徒步用户01",
          date: "2019-5-18",
          viewCount: "200",
          commentCount: "10"
        }
      ]
    };
  },
  created() {
    this.getList();
    this.getNewthemeList();
    this.getReplyList();
    this.getHotList();
  },
  methods: {
    getList() {
      getPostList(this.query).then(resp => {
        this.postList = resp.data;
        this.total = resp.total;
      });
    },
    getNewthemeList() {
      getPostList(this.newreply).then(resp => {
        this.newthemeList = resp.data;
      });
    },
    getReplyList() {
      getPostList(this.newtheme).then(resp => {
        this.newreplyList = resp.data;
      });
    },
    handleSizeChange(pageSize) {
      this.query.pageSize = pageSize;
      this.getList();
    },
    handleCurrentChange(curPage) {
      this.query.page = curPage;
      this.getList();
    },
    getHotList() {
      getPostList(this.hottheme).then(resp => {
        this.hotList = resp.data;
      });
    },
    changeOrder(value) {
      this.query.page = 1;
      this.query.orderBy = value;
      this.getList();
    }
  }
};
</script>
<style scoped>
.post-top {
  /* display: flex; */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 0 15px;
}
.post-top-border0,
.post-top-border1 {
  border-right: 1px solid #e7e7e7;
}
.el-row {
  padding: 15px 20px 20px 20px;
}
.post-top-border0 ul {
  padding: 0px 12px;
  line-height: 20px;
}
.post-top-border0 li {
  font-size: 13px;
  margin-bottom: 5px;
  text-align: left;
  list-style-position: inside;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post-top-border1 ul {
  padding: 0px 12px;
  line-height: 20px;
}
.post-top-border2 ul {
  padding: 0px 15px;
  line-height: 20px;
}
.post-top-border0 h4 {
  background: url(../../assets/zxzt.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-align: left;
  text-indent: 2.5em;
  margin-bottom: 15px;
  margin-top: 0px;
}
.post-top-border0 h4:hover {
  background: url("../../assets/zxzt.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
}
.post-top-border2 li {
  font-size: 13px;
  margin-bottom: 5px;
  text-align: left;
  list-style-position: inside;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-top-border1 h4 {
  background: url(../../assets/zxhf.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-align: left;
  text-indent: 2.5em;
  margin-top: 0px;
  margin-bottom: 15px;
}
.post-top-border1 h4:hover {
  background: url("../../assets/zxhf.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
}
.post-top-border2 h4 {
  background: url(../../assets/rt.png) 10px 0 no-repeat;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  transition: 400ms;
  -webkit-transition: 400ms;
  -moz-transition: 400ms;
  text-align: left;
  text-indent: 2.5em;
  margin-bottom: 15px;
  margin-top: 0px;
}
.post-top-border2 h4:hover {
  background: url("../../assets/rt.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
}
.post-top-border1 li {
  font-size: 13px;
  margin-bottom: 5px;
  text-align: left;
  list-style-position: inside;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post-bottom {
  /* display: flex; */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  background-color: #fff;
}
.post-bottom-content-lf img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.new-alert {
  height: 40px !important;
  margin: 5px 0px !important;
}
.post-page {
  padding: 10px 0;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #75b628 !important;
}
.new-right2 {
  margin-top: 10px;
  text-align: right;
  font-size: 15px;
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
.post-bottom-content {
  margin: 0 15px;
}
a {
  color: #000;
}
.phover {
  background: url("../../assets/zxhf.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
  color: #75b628;
}
.popover p {
  font-size: 10px;
  margin: 5px 0 !important;
}
.popover h5 {
  margin: 5px 0 !important;
}
.aname1 {
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 10px 0 0 0;
  text-align: left;
  background-color: #eefaec;
  padding: 15px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 5px;
  color: #75b628;
}
.aname1:hover {
  cursor: pointer;
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
.prthover {
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
  text-indent: 1.2em;
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
a:hover {
  cursor: pointer;
}
.el-icon-edit-outline {
  padding-right: 5px;
}
/* .el-row {
  margin: 0 !important;
} */
.el-col-6 {
  padding: 0 5px !important;
}
.borderNone {
  border-right: none !important;
  margin-left: 20px !important;
}
</style>
