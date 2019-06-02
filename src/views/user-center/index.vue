<template>
  <div class="user-center">
    <div class="us-center-left">
      <div class="us-center-left-top">
        <div class="us-center-left-top1">
          <img src="http://tubu100.com:8053/Files/Default/UserHead.png">
          <h3 style="font-size: 25px;
color: #FFF;margin:5px 0px;">{{centerList.userId}}</h3>
          <b style="font-weight: normal;
color: #FFF;">{{centerList.place}}</b>
          <ul>
            <li>
              <span>{{centerList.trCount}}</span>
              <p>路书</p>
            </li>
            <li>
              <span>{{centerList.acCount}}</span>
              <p>活动</p>
            </li>
            <li>
              <span>{{centerList.postCount}}</span>
              <p>帖子</p>
            </li>
            <li>
              <span>{{centerList.goodsCount}}</span>
              <p>闲趣</p>
            </li>
            <li>
              <span>{{centerList.pointCount}}</span>
              <p>关注</p>
            </li>
            <li>
              <span>{{centerList.fans}}</span>
              <p>粉丝</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="us-center-left-bottom">
        <el-collapse value="1">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="collapse-title">个人中心</div>
            </template>
            <ul @click="clickItem">
              <li id="setting" :class="{ actived: actived == 'setting' }">
                <img src="../../assets/个人设置.png">
                个人设置
              </li>
              <li id="usersign" :class="{ actived: actived == 'usersign' }">
                <img src="../../assets/报名.png">
                我的报名
              </li>
              <li id="activityPublic" :class="{ actived: actived == 'activityPublic' }">
                <img src="../../assets/结伴.png">
                我的结伴
              </li>
              <li id="usertravels" :class="{ actived: actived == 'usertravels' }">
                <img src="../../assets/笔记本.png">
                我的路书
              </li>
              <li id="user-goods" :class="{ actived: actived == 'user-goods' }">
                <img src="../../assets/卖出.png">
                我的闲趣
              </li>
              <!-- <li>
                <img src="../../assets/游记.png">
                发布路书
              </li>-->
              <li id="userpost" :class="{ actived: actived == 'userpost' }">
                <img src="../../assets/收藏.png">
                我的帖子
              </li>
              <li id="user-comment" :class="{ actived: actived == 'user-comment' }">
                <img src="../../assets/评论.png">
                我的评论
              </li>
              <li id="user-point" :class="{ actived: actived == 'user-point' }">
                <img src="../../assets/关注.png">我的关注
              </li>
              <li id="user-fans" :class="{ actived: actived == 'user-fans' }">
                <img src="../../assets/粉丝.png">我的粉丝
              </li>

              <!-- <li id="user-goods" :class="{ actived: actived == 'user-goods' }">
                <img src="../../assets/订单.png">
                我的订单
              </li>-->
            </ul>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              <div class="collapse-title">安全中心</div>
            </template>
            <ul @click="clickItem">
              <li id="password" :class="{ actived: actived == 'password' }">
                <img src="../../assets/密码.png">修改密码
              </li>
              <li id="usernotice" :class="{ actived: actived == 'usernotice' }">
                <img src="../../assets/系统通知.png">系统通知
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="us-center-right">
      <UserSecure v-if="actived === 'password'"/>
      <UserInfo v-if="actived === 'setting'"/>
      <UserPost v-if="actived === 'userpost'"/>
      <UserTravels v-if="actived === 'usertravels'"/>
      <UserSign v-if="actived === 'usersign'"/>
      <UserComment v-if="actived === 'user-comment'"/>
      <UserGoods v-if="actived === 'user-goods'"/>
      <UserPoint v-if="actived === 'user-point'"/>
      <UserFans v-if="actived === 'user-fans'"/>
      <UserNotice v-if="actived === 'usernotice'"/>
      <ActivityPublic v-if="actived === 'activityPublic'"/>
    </div>
  </div>
</template>
<script>
import UserSecure from "@/components/user-secure";
import UserInfo from "@/components/userinfo";
import UserPost from "@/components/user-collect";
import UserTravels from "@/components/user-travels";
import UserSign from "@/components/user-sign";
import UserComment from "@/components/user-comment";
import UserGoods from "@/components/user-goods";
import UserPoint from "@/components/user-point";
import UserFans from "@/components/user-fans";
import UserNotice from "@/components/user-notice";
import ActivityPublic from "@/components/user-activitypublic";
export default {
  components: {
    UserSecure,
    UserInfo,
    UserPost,
    UserTravels,
    UserSign,
    UserComment,
    UserGoods,
    UserPoint,
    UserFans,
    UserNotice,
    ActivityPublic
  },
  data() {
    return {
      actived: "setting",
      centerList: {
        id: 0,
        userId: "徒步用户01",
        trCount: 10,
        acCount: 30,
        postCount: 10,
        goodsCount: 3,
        pointCount: 4,
        fans: 10,
        place: "桂林"
      }
    };
  },
  methods: {
    clickItem(e) {
      if (e.target.nodeName.toLowerCase() === "li") {
        const id = e.target.id;
        this.actived = id;
      }
    }
  }
};
</script>

<style scoped>
.user-center {
  display: flex;
}
.us-center-left {
  width: 35%;
  /* background: url(../../assets/personal_left.png) no-repeat; */
}
.us-center-right {
  width: 65%;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  height: fit-content;
  background-color: #fff;
}
.us-center-left-top {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  background: linear-gradient(
    to top right,
    #cddc39 0%,
    #74b628 25%,
    #ffeb3b 100%
  );
  height: 400px;
}
.us-center-left-bottom {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  margin-top: 15px;
  /* width: 96%; */
  border-radius: 2px;
  background: #fff;
  float: left;
}
.us-center-left-top img {
  border-radius: 50%;
  margin: 20px 0 10px 0;
}

.us-center-left-top1 ul li {
  width: 33.33%;
  margin: 5px 0 20px 0;
  box-sizing: border-box;
  border-left: 1px dashed #fff;
  line-height: 28px;
  float: left;
}
.us-center-left-top1 ul {
  margin-left: -40px;
}
.us-center-left-top1 h3 {
  font-size: 20px;
}
.us-center-left-top1 b {
  font-size: 15px;
}
.us-center-left-top1 ul::before {
  width: 29%;
  height: 1px;
  top: 385px;
  border-top: 1px dashed #fff;
  content: "";
  position: absolute;
  margin-left: -196px;
}
.us-center-left-top1 ul li:nth-child(1),
.us-center-left-top1 ul li:nth-child(4) {
  border-left: 0;
}
.us-center-left-top1 ul li span {
  font-size: 24px;
  color: #fff;
}
.us-center-left-top1 ul li p {
  color: #fff;
  font-size: 14px;
  margin: 5px 0;
}
.us-center-left-bottom ul {
  width: 100%;
  padding: 0px 20px 20px 20px;
  box-sizing: border-box;
  float: left;
}
.us-center-left-bottom ul li {
  width: 100%;
  padding: 5px 0;
  float: left;
  margin-top: 5px;
  border-radius: 5px;
}
.us-center-left-bottom ul li.actived {
  background: #dcedc8;
}
.us-center-left-bottom ul li:hover,
.us-center-left-bottom ul li .actived {
  cursor: pointer;
  color: #8bc34a;
  font-weight: bold;
}

ul,
ol,
dl {
  list-style-type: none;
}
.us-center-left-bottom ul li {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  position: relative;
  color: #666;
}
.us-center-left-bottom ul li:hover {
  background-color: #dcedc8;
}
.us-center-left-bottom ul li img {
  height: 20px;
  padding-right: 5px;
  margin-bottom: -3px;
}
.el-collapse-item__header {
  font-size: 18px !important;
  margin: 10px 5px 0 10px;
}
.collapse-title {
  font-size: 18px;
  padding-left: 15px;
}
</style>
<style>
.el-table th {
  background-color: #f0f9eb;
}
</style>
