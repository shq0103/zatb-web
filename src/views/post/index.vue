<template>
  <div class="post">
    <div class="post-top">
      <el-row :gutter="24">
        <el-col :span="6">
          <el-carousel height="250px">
            <el-carousel-item v-for="item in 3" :key="item">
              <img class="lunbo" src="../../assets/timg.jpg" style="height:250px;width=289px;">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="6" class="post-top-border0" style="height:250px">
          <h4>最新主题</h4>
          <ul>
            <li>1111111111111111111111111111111111111111111111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
            <li>555</li>
            <li>666</li>
            <li>777</li>
          </ul>
        </el-col>
        <el-col :span="6" class="post-top-border1" style="height:250px">
          <h4>最新回复</h4>
          <ul>
            <li>1111111111111111111111111111111111111111111111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
            <li>555</li>
            <li>666</li>
            <li>777</li>
          </ul>
        </el-col>
        <el-col class="post-top-border2" :span="6" style="height:250px">
          <h4>
            <span class="zxzt"></span>热帖
          </h4>
          <ul>
            <li>1111111111111111111111111111111111111111111111</li>
            <li>222</li>
            <li>333</li>
            <li>444</li>
            <li>555</li>
            <li>666</li>
            <li>777</li>
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
        <div class="post-bottom-title-zxzt">最新</div>
        <div class="post-bottom-title-rt">热帖</div>
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
                  <img :src="item.image">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="post-bottom-content-rf">
                  <router-link to="/post-show">
                    <div class="ac-content-right1">
                      <el-alert
                        class="new-alert"
                        :title="item.title"
                        type="success"
                        :closable="false"
                      ></el-alert>
                    </div>
                  </router-link>
                  <div class="new-right2">
                    <span style="font-size:13px;float: left;">
                      <img src="../../assets/个人.png" style="height: 14px; margin-bottom: -1px;">
                      {{item.userId}}
                    </span>
                    <i class="el-icon-time">{{item.date}}</i>
                    <i class="el-icon-view" style="padding-left:20px">{{item.viewCount}}</i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="post-page">
        <el-pagination class="page-1" background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      postList: [
        {
          id: 0,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        },
        {
          id: 1,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        },
        {
          id: 2,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        },
        {
          id: 3,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        },
        {
          id: 4,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        },
        {
          id: 5,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        },
        {
          id: 6,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        },
        {
          id: 7,
          image:
            "https://www.tubu123.com/uc_server/avatar.php?uid=1&size=small",
          title: "“花田赏景•绿色生态”徒步大会照片征集啦",
          date: "2019-4-21 18:24",
          viewCount: 100,
          userId: "徒步用户01"
        }
      ]
    };
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
  padding: 20px 20px;
}
.post-top-border0 ul {
  padding: 0px 15px;
}
.post-top-border0 li {
  font-size: 15px;
  margin-bottom: 5px;
  text-align: left;
  list-style-position: inside;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post-top-border1 ul {
  padding: 0px 15px;
}
.post-top-border2 ul {
  padding: 0px 15px;
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

  margin-top: 0px;
}
.post-top-border0 h4:hover {
  background: url("../../assets/zxzt.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
}
.post-top-border2 li {
  font-size: 15px;
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

  margin-top: 0px;
}
.post-top-border2 h4:hover {
  background: url("../../assets/rt.png") no-repeat scroll 10px -22px transparent;
  cursor: pointer;
}
.post-top-border1 li {
  font-size: 15px;
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
  height: 70px;
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
}
</style>
