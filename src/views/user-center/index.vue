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
        <el-collapse @change="handleChange">
          <el-collapse-item title="个人中心" name="1">
            <ul>
              <li class="actived">
                <a href data-mname="join">
                  <img src="../../assets/报名.png">我的报名
                </a>
              </li>
              <li>
                <a href data-mname="favorite">
                  <img src="../../assets/结伴.png">我的结伴
                </a>
              </li>
              <li>
                <a href data-mname="order">
                  <img src="../../assets/游记.png">我的游记
                </a>
              </li>
              <li>
                <a href data-mname="balance">
                  <img src="../../assets/评论.png">我的评论
                </a>
              </li>
              <li>
                <a href data-mname="note">
                  <img src="../../assets/关注.png">我的关注
                </a>
              </li>
              <li>
                <a href data-mname="note">
                  <img src="../../assets/收藏.png">我的收藏
                </a>
              </li>
              <li>
                <a href data-mname="comment">
                  <img src="../../assets/订单.png">我的订单
                </a>
              </li>
              <li>
                <router-link to="/userinfo">
                  <img src="../../assets/余额.png">我的余额
                </router-link>
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item title="安全中心" name="2">
            <ul>
              <li class="actived">
                <router-link to="/userinfo">
                  <img src="../../assets/个人设置.png">个人设置
                </router-link>
              </li>
              <li>
                <a href data-mname="setting">
                  <img src="../../assets/系统通知.png">系统通知
                </a>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="us-center-right"></div>
  </div>
</template>
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
.us-center-left-bottom ul li a:hover,
.us-center-left-bottom ul li a.actived {
  color: #f7fcf7;
  font-weight: bold;
}
ul,
ol,
dl {
  list-style-type: none;
}
.us-center-left-bottom ul li a {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-indent: 9em;
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