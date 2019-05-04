<template>
  <div class="index">
    <div class="picture">
      <span class="demonstration"></span>
      <el-carousel height="420px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            class="lunbo"
            src="https://p1-q.mafengwo.net/s13/M00/01/F5/wKgEaVywDQWAC_h4AAUK11aBDu824.jpeg?imageMogr2%2Finterlace%2F1"
          >
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="activity">
      <!-- <div id="act">
        <h3>活动</h3>
      </div>-->
      <div>
        <el-tabs value="first">
          <el-tab-pane name="first">
            <span slot="label" :style="{ fontSize: '18px', fontWeight: 'bold' }">
              <img class="ac1" src="../../assets/activity.png"> 常规活动
            </span>

            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="http://tubu100.com:8053/Files/At/20190129175037c0f3d5.jpg"
                    class="image"
                  >
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">2019-04-29 21:36</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="官方活动" name="second">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="http://tubu100.com:8053/Files/At/20190415164701d73e6d.jpg"
                    class="image"
                  >
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">2019-04-29 21:36</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="最新上线" name="third">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">2019-04-29 21:36</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="自游行" name="fourth">
            <el-row :gutter="24" type="flex" justify="center">
              <el-col :span="5" v-for="(o, index) in 4" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  >
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">2019-04-29 21:36</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="travels">
      <div class="travel">
        <div class="tr-title">
          <div class="tr-title-1">
            <div class="tr1">
              <img class="hot" src="../../assets/hot.png">热门路书
            </div>
            <div class="tr1-right">
              <el-row>
                <router-link to="/travels">
                  <el-button :style="{ marginTop: '15px' }" type="success" size="small" plain>更多</el-button>
                </router-link>
                <!-- <el-button type="text" size="small">更多</el-button> -->
              </el-row>
            </div>
          </div>

          <div class="tr-title-2">
            <div class="tr2">
              <img class="hot" src="../../assets/new.png">最新发表
            </div>
            <div class="tr2-right">
              <el-row>
                <el-button
                  :style="{ marginTop: '15px' }"
                  type="success"
                  size="small"
                  plain
                  icon="el-icon-arrow-up"
                ></el-button>
                <el-button
                  :style="{ marginTop: '15px' }"
                  type="success"
                  size="small"
                  plain
                  icon="el-icon-arrow-down"
                ></el-button>
              </el-row>
            </div>
          </div>
        </div>
        <div class="tr-content">
          <div class="tr-content-left">
            <!-- <div class="tr-content-left-1">
              <div class="tr-content-left-img">
                <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
              </div>
              <div class="tr-content-left-content">
                <div class="tr-content-left-content1">
                  <el-alert
                    class="new-alert"
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>

                <div class="tr-content-left-content2">
                  <i class="el-icon-location">ddd</i>
                  <i class="tr-author">ddd</i>
                  <i class="el-icon-view">ddd</i>
                </div>
              </div>
            </div>-->
            <div class="activity-content2">
              <div class="ac-content-left">
                <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
              </div>
              <div class="ac-content-right">
                <div class="ac-content-right1">
                  <el-alert
                    class="new-alert"
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-public">
                  <i :style="{ float: 'left' }">
                    <img
                      src="../../assets/个人1.png"
                      style="height: 16px; margin-right:3px;margin-bottom: -2px;"
                    >###
                  </i>
                  <img
                    src="../../assets/评论1.png"
                    style="height: 20px; margin-bottom: -3px;margin-right:3px;"
                  >3700
                  <img
                    src="../../assets/浏览.png"
                    style="height: 23px; margin-bottom: -5px;margin-right:3px;margin-left:3px;"
                  >300
                </div>
              </div>
            </div>
            <div class="activity-content2">
              <div class="ac-content-left">
                <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
              </div>
              <div class="ac-content-right">
                <div class="ac-content-right1">
                  <el-alert
                    class="new-alert"
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-public">
                  <i :style="{ float: 'left' }">
                    <img
                      src="../../assets/个人1.png"
                      style="height: 16px; margin-right:3px;margin-bottom: -2px;"
                    >###
                  </i>
                  <img
                    src="../../assets/评论1.png"
                    style="height: 20px; margin-bottom: -3px;margin-right:3px;"
                  >3700
                  <img
                    src="../../assets/浏览.png"
                    style="height: 23px; margin-bottom: -5px;margin-right:3px;margin-left:3px;"
                  >300
                </div>
              </div>
            </div>
            <div class="activity-content3">
              <div class="ac-content-left">
                <img src="http://tubu100.com:8053/Files/Note/201803141241153bd9ce.jpg">
              </div>
              <div class="ac-content-right">
                <div class="ac-content-right1">
                  <el-alert
                    class="new-alert"
                    title="带辅助性文字介绍"
                    type="success"
                    :closable="false"
                    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
                  ></el-alert>
                </div>
                <div class="tr-b-rf-public">
                  <i :style="{ float: 'left' }">
                    <img
                      src="../../assets/个人1.png"
                      style="height: 16px; margin-right:3px;margin-bottom: -2px;"
                    >###
                  </i>
                  <img
                    src="../../assets/评论1.png"
                    style="height: 20px; margin-bottom: -3px;margin-right:3px;"
                  >3700
                  <img
                    src="../../assets/浏览.png"
                    style="height: 23px; margin-bottom: -5px;margin-right:3px;margin-left:3px;"
                  >300
                </div>
              </div>
            </div>
          </div>
          <div class="tr-content-right">
            <ul class="slideshow">
              <li>
                <i></i>
                <div class="tip left">
                  <span class="time">2019-02-17</span>
                  <p class="bt">
                    <router-link to="/foo">标题：（活动取消） B线4/21漫步山水间邂逅古堡访</router-link>
                  </p>
                  <p class="aut">
                    <router-link to="/foo">—作者：kelegai2008</router-link>
                  </p>
                </div>
              </li>
              <li>
                <i></i>
                <div class="tip left">
                  <span class="time">2019-02-17</span>
                  <p class="bt">
                    <router-link to="/foo">标题：（活动取消） B线4/21漫步山水间邂逅古堡访</router-link>
                  </p>
                  <p class="aut">
                    <router-link to="/foo">—作者：kelegai2008</router-link>
                  </p>
                </div>
              </li>
              <li>
                <i></i>
                <div class="tip left">
                  <span class="time">2019-02-17</span>
                  <p class="bt">
                    <router-link to="/foo">标题：（活动取消） B线4/21漫步山水间邂逅古堡访</router-link>
                  </p>
                  <p class="aut">
                    <router-link to="/foo">—作者：kelegai2008</router-link>
                  </p>
                </div>
              </li>
              <li>
                <i></i>
                <div class="tip left">
                  <span class="time">2019-02-17</span>
                  <p class="bt">
                    <router-link to="/foo">标题：（活动取消） B线4/21漫步山水间邂逅古堡访</router-link>
                  </p>
                  <p class="aut">
                    <router-link to="/foo">—作者：kelegai2008</router-link>
                  </p>
                </div>
              </li>
              <li>
                <i></i>
                <div class="tip left">
                  <span class="time">2019-02-17</span>
                  <p class="bt">
                    <router-link to="/foo">标题：（活动取消） B线4/21漫步山水间邂逅古堡访</router-link>
                  </p>
                  <p class="aut">
                    <router-link to="/foo">—作者：kelegai2008</router-link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="new">
      <div class="post">
        <div class="p-title">
          <div class="p1">
            <img class="p-img" src="../../assets/论坛.png">
            论坛
          </div>
          <div class="p-more">
            <router-link to="/travels">
              <el-button type="text" class="more-link">
                更多
                <i class="el-icon-plus el-icon--right"></i>
              </el-button>
            </router-link>
          </div>
        </div>
        <div class="p-content">
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="p-c-1">
                  <div class="p-content-top">
                    <img
                      id="touxiangimg"
                      src="http://avatar.8264.com/data/avatar/000/12/84/45_avatar_middle.jpg?ZB8R69?tempid=527"
                      onerror="this.onerror=null;this.src='http://ucenter.8264.com/images/noavatar_middle.gif'"
                    >
                    <div class="p-content-top-info">
                      <span>发布人：美少女</span>
                      <a
                        href="http://www.8264.com/wenda/35762.html"
                        target="_blank"
                      >新手请教，防潮垫时用传统的还是自充气的？</a>
                    </div>
                  </div>
                  <div class="p-content-bottom">
                    <div
                      class="p-c-b-content"
                    >传统的好处:1,便宜2,轻不足:1,不方便携带,都有点大2,舒适度差点充气的好处:1,小巧,可压小放2,睡觉时舒适不足:1相比传统价高2,比传统重点建议短...</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="p-c-1">
                  <div class="p-content-top">
                    <img
                      id="touxiangimg"
                      src="http://avatar.8264.com/data/avatar/034/36/27/53_avatar_middle.jpg?KnOKMz?tempid=8411"
                      onerror="this.onerror=null;this.src='http://ucenter.8264.com/images/noavatar_middle.gif'"
                    >
                    <div class="p-content-top-info">
                      <span>发布人：美少女</span>
                      <a
                        href="http://www.8264.com/wenda/35762.html"
                        target="_blank"
                      >新手请教，防潮垫时用传统的还是自充气的？</a>
                    </div>
                  </div>
                  <div class="p-content-bottom">
                    <div
                      class="p-c-b-content"
                    >传统的好处:1,便宜2,轻不足:1,不方便携带,都有点大2,舒适度差点充气的好处:1,小巧,可压小放2,睡觉时舒适不足:1相比传统价高2,比传统重点建议短...</div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="p-c-1">
                  <div class="p-content-top">
                    <img
                      id="touxiangimg"
                      src="http://avatar.8264.com/data/avatar/034/24/36/11_avatar_middle.jpg?qCB02M?tempid=7787"
                      onerror="this.onerror=null;this.src='http://ucenter.8264.com/images/noavatar_middle.gif'"
                    >
                    <div class="p-content-top-info">
                      <span>发布人：美少女</span>
                      <a
                        href="http://www.8264.com/wenda/35762.html"
                        target="_blank"
                      >新手请教，防潮垫时用传统的还是自充气的？</a>
                    </div>
                  </div>
                  <div class="p-content-bottom">
                    <div
                      class="p-c-b-content"
                    >传统的好处:1,便宜2,轻不足:1,不方便携带,都有点大2,舒适度差点充气的好处:1,小巧,可压小放2,睡觉时舒适不足:1相比传统价高2,比传统重点建议短...</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class="p-c-1">
                  <div class="p-content-top">
                    <img
                      id="touxiangimg"
                      src="http://avatar.8264.com/data/avatar/034/60/39/98_avatar_middle.jpg?XBP1Pz?tempid=5603"
                      onerror="this.onerror=null;this.src='http://ucenter.8264.com/images/noavatar_middle.gif'"
                    >
                    <div class="p-content-top-info">
                      <span>发布人：美少女</span>
                      <a
                        href="http://www.8264.com/wenda/35762.html"
                        target="_blank"
                      >新手请教，防潮垫时用传统的还是自充气的？</a>
                    </div>
                  </div>
                  <div class="p-content-bottom">
                    <div
                      class="p-c-b-content"
                    >传统的好处:1,便宜2,轻不足:1,不方便携带,都有点大2,舒适度差点充气的好处:1,小巧,可压小放2,睡觉时舒适不足:1相比传统价高2,比传统重点建议短...</div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="post1">
        <div class="p-title">
          <div class="p1">
            <img class="p-img" src="../../assets/知识.png">户外知识
          </div>
          <div class="p-more">
            <router-link to="/knowledge">
              <el-button type="text">
                更多
                <i class="el-icon-plus el-icon--right"></i>
              </el-button>
            </router-link>
          </div>
        </div>
        <div class="s-content">
          <div class="news_box">
            <div class="inner-container">
              <p class="text" v-for="(text, index) in arr" :key="index">{{ text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: ["../../assets/logo.png", "../../assets/logo1.png"],
      arr: [
        "1 不是被郭德纲发现的，也不是一开始就收为徒弟。",
        "2 现在雅阁这个状态像极了新A4L上市那段日子。",
        "3 低配太寒碜，各种需要加装，中配定价过高，又没啥特色",
        "4 然后各种机油门、经销商造反什么的幺蛾子。",
        "5 看五月销量，建议参考A4，打8折吧。",
        "1 不是被郭德纲发现的，也不是一开始就收为徒弟。"
      ]
    };
  }
};
</script>
<style scoped>
.lunbo {
  height: 420px;
}

.travels {
  margin-top: 30px;

  /* background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1); */
  /* height: 350px; */
}
.hot {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.p-img {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
}
.p-img {
  height: 20px;
  margin-bottom: -3px;
  margin-right: 5px;
}
.ac1 {
  height: 20px;
  margin-bottom: -5px;
  margin-left: 5px;
  margin-right: 5px;
  /* margin-left: 10px; */
}
.activity {
  margin-top: 15px;
  margin-bottom: 40px;
}
.new {
  margin-top: 35px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.travel {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
}
.tr-title {
  line-height: 40px;
  border-bottom: 2px solid #e1e1e0;
  border-bottom-style: dotted;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  /* background-color: #c2e7b0; */
}
.p-title {
  padding: 0;
  line-height: 40px;
  border-bottom: 2px solid #689f38;
  overflow: visible;
  height: 50px;
  display: flex;
  align-items: center;
}
.notice {
  position: absolute;
  right: 30px;
  background-color: #75b628;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.tr1 {
  /* border-bottom: 2px solid #689F38; */
  /* border-bottom-style: dotted; */

  margin-top: 10px;
  margin-left: 5px;
  margin-right: 500px;
  font-size: 18px;
  font-weight: bold;
}
.tr2 {
  margin-top: 10px;
}
.tr1-right {
  margin-left: auto;
  padding-right: 35px;
}
.tr2-right {
  margin-left: auto;
  padding-right: 10px;
}
.p1 {
  left: 20px;
  width: 30%;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.s1 {
  left: 20px;
  width: 20%;
  margin-top: 10px;
  font-size: 15px;
}
.travel-img {
  float: left;
  width: 220px;
  height: 150px;
  position: relative;
}

.el-icon-location {
  margin-right: 10px;
}
.tr-author {
  margin-right: 10px;
}
.el-icon-view {
  margin-right: 10px;
}
.travel-info {
  display: flex;
  flex-direction: column;
}
.el-tabs__item.is-active {
  color: #75b628;
}
.el-tabs__item:hover {
  outline: 0 !important;
  color: #75b628 !important;
}
.el-tabs__item {
  font-size: 16px;
  font-weight: 500;
}
.el-tabs__active-bar {
  background-color: #689f38;
}
.tr-content {
  display: flex;

  padding-top: 15px;
  padding-bottom: 15px;
  /* background-color: #f0f9eb; */
}
.tr-content-left {
  width: 70%;

  /* display: flex; */
}
.tr-content-right {
  width: 35%;
  border-left: 2px solid #e1e1e0;
  border-left-style: dotted;
}
.tr-title-1 {
  display: flex;
  width: 70%;
}
.tr-title-2 {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 33%;
}
.post {
  width: 66.5%;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.post1 {
  width: 32%;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.tr-content-left-content {
  width: 70%;
  display: flex;
  flex-direction: column;
}
.tr-content-left-img {
  width: 40%;
}

.el-button + .el-button {
  margin-left: 4px !important;
}
.p-more {
  margin-left: auto;
  padding-right: 10px;
}
.router-link-active .more-link {
  color: #fff;
}
.el-button--text {
  color: #689f38;
}

.inner-container {
  animation: myMove 5s linear infinite;
  animation-fill-mode: forwards;
}
/*文字停顿滚动*/
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  10% {
    /*transform: translateY(-30px);*/
  }
  20% {
    transform: translateY(-30px);
  }
  30% {
    /*transform: translateY(-60px);*/
  }
  40% {
    transform: translateY(-60px);
  }
  50% {
    /*transform: translateY(-90px);*/
  }
  60% {
    transform: translateY(-90px);
  }
  70% {
    /*transform: translateY(-120px);*/
  }
  80% {
    transform: translateY(-120px);
  }
  90% {
    /*transform: translateY(-150px);*/
  }
  100% {
    transform: translateY(-150px);
  }
}

.text {
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
}

.news_box {
  white-space: nowrap;
  overflow: hidden;
  margin: 0 20px;
}
.el-col-5 {
  width: 24.5% !important;
}
.tip {
  position: relative;
  background-color: #f0f9eb;
  height: 60px;
  color: white;
  text-align: left;
  font-family: sans-serif;
  padding: 5px 10px;
}
.tip:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid;
}
.left:after {
  border-right-color: #f0f9eb;
  top: 50%;
  right: 100%;
  margin-top: -9px;
}
.slideshow {
  border-left: 2px #75b628 solid;
  margin: 0px 15px 10px 20px;
  padding-left: 30px;
}
.slideshow li {
  height: 70px;
  padding-top: 15px;
  list-style: none;
  position: relative;
}
.slideshow li i {
  position: absolute;
  left: -40px;
  top: 40px;
  display: inline-block;
  height: 18px;
  width: 18px;
  background: url(../../assets/yuangfang.png) 0px -270px no-repeat;
}
.time {
  font-size: 12px;
  color: #757575;
}
.bt {
  margin: 0px;
  height: 20px;
  overflow: hidden;
}
.bt a {
  font-size: 14px;
  color: #4c4b4b;
  font-weight: 500;
}
.aut {
  margin: 0px;
  text-align: right;
}
.aut a {
  font-size: 12px;
  color: #757575;
}
.tr-content-left-1 {
  display: flex;
  padding: 0 10px;
}
.tr-content-left-content1 {
  padding: 0 5px;
}
.activity-content2 {
  padding: 10px 15px 15px 15px;
  border-bottom: 1px dotted #adadad;
  display: flex;
  margin: 5px 20px 0 5px;
}
.activity-content3 {
  padding: 15px 15px 15px 15px;

  display: flex;
  margin: 5px 20px 0 5px;
}
.ac-content-left {
  margin-right: 10px;
}
.ac-content-left img {
  height: 110px;
}
.tr-b-rf-public {
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: right;
}
.p-c-1 {
  margin: 20px 25px;
}
.p-content-top {
  display: flex;
  text-align: left;
}
.p-content-top img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0px 10px 0px 0px;
}
.p-content-top-info {
  overflow: hidden;
}
.p-content-top-info span {
  color: #000;
  font-size: 12px;
  margin: 0px 10px 0px 0px;
}
.p-content-top-info a {
  font-size: 16px;
  color: #457598;
  display: block;
  font-weight: bold;
  padding: 5px 0px 0px 0px;
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.p-content-bottom {
  line-height: 22px;
  font-size: 14px;
  color: #666;
  border: #e0e7eb solid 1px;
  border-radius: 3px;
  padding: 10px 5px;
  margin: 15px 0px 0px 0px;
  height: 60px;
  position: relative;
  background-color: #eefaec;
  /* overflow: hidden; */
}
.p-content-bottom ::before {
  border-color: transparent transparent #e0e7eb transparent;
  border-style: solid solid dashed solid;
  border-width: 8px;
  top: -17px;
  content: "";
  left: 17px;
  position: absolute;
}
.p-c-b-content {
  /* height: 66px; */
  overflow: hidden;
  text-overflow: ellipsis;
}
.p-content-bottom::after {
  border-color: transparent transparent #eefaec transparent;
  border-style: solid solid dashed solid;
  border-width: 8px;
  top: -16px;
  content: "";
  left: 17px;
  position: absolute;
}
</style>
