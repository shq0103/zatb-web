<template>
  <div class="activity-public">
    <div class="public-top"></div>
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-h3">
          <h3>标题</h3>
          <router-link to="/activity-public" class="prev-link">
            <img src="../../assets/加载.png" />
            返回上一步
          </router-link>
        </div>
        <div class="ac-content">
          <div class="ac-content1">
            <div class="ac-c-title">
              <h3>
                <a name="position1">
                  <img src="../../assets/行程.png" class="icon-intro" />行程安排
                </a>
              </h3>
            </div>
            <div class="ac-c-wrap">
              <el-input
                type="textarea"
                :rows="15"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
            </div>
          </div>
          <div class="ac-content1">
            <div class="ac-c-title">
              <h3>
                <a name="position1">
                  <img src="../../assets/费用说明.png" class="icon-intro" />费用说明
                </a>
              </h3>
            </div>
            <div class="ac-c-wrap">
              <el-input
                type="textarea"
                :rows="15"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
            </div>
          </div>
          <div class="ac-content1">
            <div class="ac-c-title">
              <h3>
                <a name="position1">
                  <img src="../../assets/线路.png" class="icon-intro" />线路介绍
                </a>
              </h3>
            </div>
            <div class="ac-c-wrap">
              <el-input
                type="textarea"
                :rows="15"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
            </div>
          </div>
          <div class="ac-content1">
            <div class="ac-c-title">
              <h3>
                <a name="position1">
                  <img src="../../assets/装备.png" class="icon-intro" />装备要求
                </a>
              </h3>
            </div>
            <div class="ac-c-wrap">
              <el-input
                type="textarea"
                :rows="15"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
            </div>
          </div>
          <div class="ac-content1">
            <div class="ac-c-title">
              <h3>
                <a name="position1">
                  <img src="../../assets/更多.png" class="icon-intro" />更多介绍
                  <span style="font-size:14px;">非必填</span>
                </a>
              </h3>
            </div>
            <div class="ac-c-wrap">
              <el-input
                type="textarea"
                :rows="15"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
            </div>
          </div>
          <div class="ac-content2">
            <el-button type="primary">发布活动</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.public-bottom {
  /* padding: 30px; */

  border-top-left-radius: 10px;
  -webkit-border-top-left-radius: 10px;
  -moz-border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-top-right-radius: 10px;
  background: #fff;
}
.activity-public {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  -webkit-border-top-left-radius: 10px;
  -moz-border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -moz-border-top-right-radius: 10px;
}
.ac-public-form2 {
  padding: 20px 20px;
}
.ac-h3 {
  color: #fff;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-size: 16px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-bottom-left-radius: 20px;
  -webkit-border-bottom-right-radius: 20px;
  background: #8bc34a;
  display: flex;
}
.ac-h3 h3 {
  margin: auto;
  font-size: 16px;
}

.prev-link {
  /* background: url(../../assets/mXTxKl-26-339.png) -6px -262px no-repeat; */
  padding-left: 18px;
  color: #fff;

  font-size: 14px;
  position: absolute;
  right: 85px;
  font-size: 12px;
}
.prev-link img {
  width: 19px;
  margin-bottom: -5px;
  margin-right: 2px;
}
ac-content1 {
  padding-right: 180px;
  padding-left: 55px;
}
.ac-c-title h3 {
  text-shadow: 0 2px 0 rgba(98, 133, 161, 0.2);
  color: #7594ac;
  font: 400 20px/32px "Microsoft Yahei";
  text-align: left;
}
.ac-c-title {
  padding: 0 20px 0px 20px;
}
.icon-intro {
  height: 25px;
  /* background: url(../../assets/xianlu.png) no-repeat; */
  margin-bottom: -5px;
  margin-right: 5px;
}
.ac-c-wrap {
  /* position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.03) inset;
  padding: 10px 10px 15px;
  margin-bottom: 20px; */
  margin: 0 20px;
}
/* .el-textarea__inner {
  min-height: 200px !important;
} */
.ac-content2 {
  margin: 10px 0;
}
</style>
