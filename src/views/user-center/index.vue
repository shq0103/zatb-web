<template>
  <div class="user-center">
    <div class="us-center-left">
      <div class="us-center-left-top">
        <div class="us-center-left-top1">
          <img src="http://tubu100.com:8053/Files/Default/UserHead.png" />
          <h3
            style="font-size: 25px;
color: #FFF;margin:5px 0px;"
          >
            徒步用户
          </h3>
          <b
            style="font-weight: normal;
color: #FFF;"
            >暂无所属俱乐部</b
          >
          <!-- <ul>
            <li>
              <span>0</span>
              <p>积分</p>
            </li>
            <li>
              <span>0</span>
              <p>积分</p>
            </li>
            <li>
              <span>0</span>
              <p>积分</p>
            </li>
            <li>
              <span>0</span>
              <p>积分</p>
            </li>
            <li>
              <span>0</span>
              <p>积分</p>
            </li>
            <li>
              <span>0</span>
              <p>积分</p>
            </li>
          </ul>-->
        </div>
      </div>
      <div class="us-center-left-bottom">
        <el-collapse value="1">
          <el-collapse-item title="个人中心" name="1">
            <ul @click="clickItem">
              <li id="myBaoming" :class="{ actived: actived == 'myBaoming' }">
                <img src="../../assets/报名.png" />
                我的报名
              </li>
              <li id="activityPublic" :class="{ actived: actived == 'activityPublic' }">
                <img src="../../assets/结伴.png" />
                发布活动
              </li>
              <li>
                <img src="../../assets/游记.png" />
                我的游记
              </li>
              <li>
                <img src="../../assets/评论.png" />
                我的评论
              </li>
              <li>
                <a href data-mname="note"> <img src="../../assets/关注.png" />我的关注 </a>
              </li>
              <li id="usercollect" :class="{ actived: actived == 'usercollect' }">
                <img src="../../assets/收藏.png" />
                我的收藏
              </li>
              <li>
                <a href data-mname="comment"> <img src="../../assets/订单.png" />我的订单 </a>
              </li>
              <li>
                <router-link to="/userinfo">
                  <img src="../../assets/余额.png" />我的余额
                </router-link>
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item title="安全中心" name="2">
            <ul @click="clickItem">
              <li id="setting" :class="{ actived: actived == 'setting' }">
                <img src="../../assets/个人设置.png" />
                个人设置
              </li>
              <li id="password" :class="{ actived: actived == 'password' }">
                <img src="../../assets/密码.png" />修改密码
              </li>
              <li><img src="../../assets/系统通知.png" />系统通知</li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="us-center-right">
      <ActivityPublic v-if="actived === 'activityPublic'" />
      <UserSecure v-if="actived === 'password'" />
      <UserInfo v-if="actived === 'setting'" />
      <UserCollect v-if="actived === 'usercollect'" />
    </div>
  </div>
</template>
<script>
import ActivityPublic from "@/components/activity-public";
import UserSecure from "@/components/user-secure";
import UserInfo from "@/components/userinfo";
import UserCollect from "@/components/user-collect";
export default {
  components: {
    ActivityPublic,
    UserSecure,
    UserInfo,
    UserCollect
  },
  data() {
    return {
      actived: "myBaoming"
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

<style>
.user-center {
  display: flex;
}
.us-center-left {
  width: 40%;
  /* background: url(../../assets/personal_left.png) no-repeat; */
}
.us-center-right {
  width: 60%;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  height: fit-content;
}
.us-center-left-top {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  background-color: #99cccc;
}
.us-center-left-bottom {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  margin-top: 30px;
  width: 96%;
  border-radius: 2px;
  background: #fff;
  float: left;
}
.us-center-left-top img {
  border-radius: 50%;
  margin: 20px 0;
}

.us-center-left-top1 ul li {
  width: 33.33%;
  margin: 20px 0;
  box-sizing: border-box;
  border-left: 1px dashed #fff;
  line-height: 28px;
  float: left;
}

.us-center-left-bottom ul {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  float: left;
}
.us-center-left-bottom ul li {
  width: 100%;
  padding: 5px 0;
  float: left;
  margin-top: 10px;
  border-radius: 5px;
}
.us-center-left-bottom ul li.actived {
  background: #99cccc;
}
.us-center-left-bottom ul li:hover,
.us-center-left-bottom ul li .actived {
  cursor: pointer;
  color: #f7fcf7;
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
  background-color: #99cccc;
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
</style>
