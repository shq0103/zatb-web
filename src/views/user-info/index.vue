<template>
  <div class="user-center">
    <div class="us-center-left">
      <div class="us-center-left-top">
        <div class="us-center-left-top1">
          <img src="http://tubu100.com:8053/Files/Default/UserHead.png">
          <h3 style="font-size: 25px;
color: #FFF;margin:5px 0px;">徒步用户</h3>
          <b style="font-weight: normal;
color: #FFF;">暂无所属俱乐部</b>
          <ul>
            <li>
              <span>0</span>
              <p>路书</p>
            </li>
            <li>
              <span>0</span>
              <p>活动</p>
            </li>
            <li>
              <span>0</span>
              <p>帖子</p>
            </li>
            <li>
              <span>0</span>
              <p>闲趣</p>
            </li>
            <li>
              <span>0</span>
              <p>关注</p>
            </li>
            <li>
              <span>0</span>
              <p>粉丝</p>
            </li>
          </ul>
          <el-row>
            <el-button type="success" plain style="width:80%;">关注</el-button>
          </el-row>
        </div>
      </div>
      <div class="us-center-left-bottom">
        <el-collapse value="1">
          <el-collapse-item name="1">
            <template slot="title">
              <div class="collapse-title">个人中心</div>
            </template>
            <ul @click="clickItem">
              <li id="peoplesign" :class="{ actived: actived == 'peoplesign' }">
                <img src="../../assets/报名.png">
                Ta的活动
              </li>
              <li id="peopletravels" :class="{ actived: actived == 'peopletravels' }">
                <img src="../../assets/笔记本.png">
                Ta的路书
              </li>
              <li id="people-goods" :class="{ actived: actived == 'people-goods' }">
                <img src="../../assets/卖出.png">
                Ta的闲趣
              </li>
              <li id="PeoplePost" :class="{ actived: actived == 'PeoplePost' }">
                <img src="../../assets/收藏.png">
                Ta的帖子
              </li>
              <li id="people-comment" :class="{ actived: actived == 'people-comment' }">
                <img src="../../assets/评论.png">
                Ta的评论
              </li>

              <li id="people-point" :class="{ actived: actived == 'people-point' }">
                <img src="../../assets/关注.png">Ta的关注
              </li>
              <li id="people-fans" :class="{ actived: actived == 'people-fans' }">
                <img src="../../assets/粉丝.png">Ta的粉丝
              </li>
            </ul>
          </el-collapse-item>
          <!-- <el-collapse-item name="2">
            <template slot="title">
              <div class="collapse-title">安全中心</div>
            </template>
            <ul @click="clickItem">
              <li id="setting" :class="{ actived: actived == 'setting' }">
                <img src="../../assets/个人设置.png">
                个人设置
              </li>
              <li id="password" :class="{ actived: actived == 'password' }">
                <img src="../../assets/密码.png">修改密码
              </li>
              <li>
                <img src="../../assets/系统通知.png">系统通知
              </li>
            </ul>
          </el-collapse-item>-->
        </el-collapse>
      </div>
    </div>
    <div class="us-center-right">
      <UserSecure v-if="actived === 'password'"/>
      <UserInfo v-if="actived === 'setting'"/>
      <PeoplePost v-if="actived === 'PeoplePost'"/>
      <Peopletravels v-if="actived === 'peopletravels'"/>
      <PeopleSign v-if="actived === 'peoplesign'"/>
      <Peoplecomment v-if="actived === 'people-comment'"/>
      <PeopleGoods v-if="actived === 'people-goods'"/>
      <Peoplepoint v-if="actived === 'people-point'"/>
      <Peoplefans v-if="actived === 'people-fans'"/>
      <UserFund v-if="actived === 'user-fund'"/>
    </div>
  </div>
</template>
<script>
import UserSecure from "@/components/user-secure";
import UserInfo from "@/components/userinfo";
import PeoplePost from "@/components/PeoplePost";
import Peopletravels from "@/components/people-travels";
import PeopleSign from "@/components/people-sign";
import Peoplecomment from "@/components/people-comment";
import PeopleGoods from "@/components/people-goods";
import Peoplepoint from "@/components/people-point";
import Peoplefans from "@/components/people-fans";
export default {
  components: {
    UserSecure,
    UserInfo,
    PeoplePost,
    Peopletravels,
    PeopleSign,
    Peoplecomment,
    PeopleGoods,
    Peoplepoint,
    Peoplefans
  },
  data() {
    return {
      actived: "peoplesign"
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
  height: 455px;
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
.el-table th,
.el-table tr {
  background-color: #f0f9eb;
}
</style>
