<template>
  <div class="post-show">
    <div class="post-content">
      <ul class="activity_top">
        <li class="activity">
          <a href="/">首页</a>
        </li>
        <li>></li>
        <li>
          <a href="/">论坛</a>
        </li>
        <li>></li>
        <li>
          <a href="/">.....</a>
        </li>
      </ul>

      <div class="post-content-1">
        <div class="p-c-public">
          <el-row>
            <router-link to="/post-public">
              <el-button type="success" icon="el-icon-edit">发新帖</el-button>
            </router-link>
            <el-button type="success" icon="el-icon-s-order" style="margin-left:10px;">回复</el-button>
          </el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="1"
            layout="prev, pager, next, jumper"
            :total="10"
            class="page"
          ></el-pagination>
        </div>

        <div class="p-c-content">
          <div class="p-c-c-first">
            <div class="p-c-c-f-lf">
              <div class="p-c-c-f-lf-1">
                <div class="p-c-c-lf-title">
                  <span class="xg1">查看:</span>
                  <span class="xi1">11929</span>
                  <span class="pipe">|</span>
                  <span class="xg1">回复:</span>
                  <span class="xi1">17</span>
                </div>
                <div class="p-c-c-lf-img">
                  <img
                    src="http://avatar.8264.com/data/avatar/034/36/27/53_avatar_middle.jpg?KnOKMz?tempid=8411"
                  >
                </div>
                <div class="p-c-c-lf-name">
                  <ul>
                    <li class="li-name">
                      <router-link to="/user-info">
                        <img src="../../assets/个人头像.png">美少女
                      </router-link>
                    </li>

                    <li class="li-other">发帖：120</li>
                    <li class="li-other">来自：桂林</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="p-c-c-f-rf">
              <div class="p-c-c-f-rf-1">
                <div class="p-c-c-rf-title">
                  <h1 class="ts">
                    <span id="thread_subject">回眸这些时日</span>
                  </h1>
                  <span class="xg1">
                    <a
                      href="forum.php?mod=viewthread&amp;tid=980&amp;fromuid=4780"
                      onclick="return copyThreadUrl(this, '徒步网')"
                      title="您的朋友访问此链接后，您将获得相应的积分奖励"
                    >[复制链接]</a>
                  </span>
                  <div class="jump">
                    <span class="zi" style="font-size:13px;">到</span>
                    <span class="zi" style="font-size:13px;">第</span>
                    <el-input
                      v-model="input"
                      s
                      ize="mini"
                      class="jump-input"
                      style="padding:0 5px;"
                    ></el-input>
                    <span class="zi" style="font-size:13px;">楼</span>
                  </div>
                </div>
                <div class="p-c-c-rf-other">
                  <img src="../../assets/楼主.png">
                  <span class="p-r-other-1">发表于 2019-5-2 17:55</span>
                  <a
                    href="http://bbs.8264.com/thread-5542549-1-1.html"
                    class="lc_bs_no"
                    title="复制本帖链接"
                    id="postnum89095341"
                    onclick="setCopy(this.href, '帖子地址已经复制到剪贴板');return false;"
                  >
                    <em>1</em>楼
                  </a>
                  <span class="tzgn">
                    <a
                      href="http://bbs.8264.com/forum-viewthread-tid-5542549-page-1-authorid-40118894.html"
                      rel="nofollow"
                    >只看该作者</a>
                    |
                    <a
                      href="http://bbs.8264.com/forum-viewthread-tid-5542549-extra-page%3D1-ordertype-1.html"
                      rel="nofollow"
                    >倒序浏览</a>
                  </span>
                </div>
                <div class="p-c-c-rf-content"></div>
                <div class="p-c-c-rf-bottom">
                  <img src="../../assets/回复.png">
                  <a
                    class="hficon1"
                    href="forum.php?mod=post&amp;action=reply&amp;fid=12&amp;tid=5542549&amp;repquote=89096069&amp;extra=page%3D1&amp;way=reply&amp;page=1"
                  >回复</a>
                  <a
                    class="hficon2"
                    href="forum.php?mod=post&amp;action=reply&amp;fid=12&amp;tid=5542549&amp;repquote=89096069&amp;extra=page%3D1&amp;way=reply&amp;page=1"
                  >举报</a>
                </div>
              </div>
            </div>
          </div>
          <div style="clear:both"></div>
          <div class="p-c-c-second">
            <div class="p-c-c-f-lf">
              <div class="p-c-c-f-lf-2">
                <div class="p-c-c-lf-img">
                  <img
                    src="http://avatar.8264.com/data/avatar/034/36/27/53_avatar_middle.jpg?KnOKMz?tempid=8411"
                  >
                </div>
                <div class="p-c-c-lf-name">
                  <ul>
                    <li class="li-name">
                      <a href="#" target="_blank" class="xw1">
                        <img src="../../assets/个人头像.png">美少男
                      </a>
                    </li>

                    <li class="li-other">发帖：120</li>
                    <li class="li-other">来自：桂林</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="p-c-c-f-rf">
              <div class="p-c-c-f-rf-2">
                <div class="p-c-c-rf-other">
                  <span class="p-r-other-1">发表于 2019-5-2 17:55</span>
                  <a
                    href="http://bbs.8264.com/thread-5542549-1-1.html"
                    class="lc_bs_no"
                    title="复制本帖链接"
                    id="postnum89095341"
                    onclick="setCopy(this.href, '帖子地址已经复制到剪贴板');return false;"
                  >
                    <em>2</em>楼
                  </a>
                  <span class="tzgn">
                    <a
                      href="http://bbs.8264.com/forum-viewthread-tid-5542549-page-1-authorid-40118894.html"
                      rel="nofollow"
                    >只看该作者</a>
                    |
                    <a
                      href="http://bbs.8264.com/forum-viewthread-tid-5542549-extra-page%3D1-ordertype-1.html"
                      rel="nofollow"
                    >倒序浏览</a>
                  </span>
                </div>
                <div class="p-c-c-rf-content"></div>
                <div class="p-c-c-rf-bottom">
                  <img src="../../assets/回复.png">
                  <a
                    class="hficon1"
                    href="forum.php?mod=post&amp;action=reply&amp;fid=12&amp;tid=5542549&amp;repquote=89096069&amp;extra=page%3D1&amp;way=reply&amp;page=1"
                  >回复</a>
                  <a
                    class="hficon2"
                    href="forum.php?mod=post&amp;action=reply&amp;fid=12&amp;tid=5542549&amp;repquote=89096069&amp;extra=page%3D1&amp;way=reply&amp;page=1"
                  >举报</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-c-public">
          <el-row>
            <el-button type="success" icon="el-icon-edit">发新帖</el-button>
            <el-button type="success" icon="el-icon-s-order">回复</el-button>
          </el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="1"
            layout="prev, pager, next, jumper"
            :total="10"
            class="page"
          ></el-pagination>
        </div>
        <div class="p-c-reply">
          <div class="p-c-c-f-lf">
            <div class="p-c-c-f-lf-2">
              <div class="p-c-c-lf-img">
                <img
                  src="http://avatar.8264.com/data/avatar/034/36/27/53_avatar_middle.jpg?KnOKMz?tempid=8411"
                >
              </div>
            </div>
          </div>
          <div class="p-c-c-f-rf">
            <div class="p-c-c-f-rf-2">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item>
                  <!-- <el-input type="textarea"></el-input> -->
                  <TextEditor :menu="commentMenu"/>
                </el-form-item>
                <el-form-item>
                  <el-button type="success" @click="onSubmit">发表回复</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextEditor from "@/components/TextEditor";
export default {
  components: {
    TextEditor
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
      ]
    };
  }
};
</script>
<style scoped>
.activity_top {
  display: flex;
  margin: 0px;
  padding: 0px;
}
.activity_top li {
  line-height: 20px;
  font-size: 13px;
}
.activity_top li a {
  color: #999;
}
.activity_top li:nth-child(2n) {
  padding: 0 10px;
}
ul {
  list-style-type: none;
  padding-left: 80px;
}
.p-c-public {
  display: flex;
  margin: 15px 0;
}
.p-c-content {
  border: solid 1px #f1f1f1;
  background: #fff;
}
.page {
  position: absolute;
  right: 60px;
}
/* .p-c-c-lf-img {
  padding: 0 0 0 40px;
} */
.p-c-c-lf-img img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}
.p-c-c-first {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.p-c-c-second {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.xg1 {
  color: #ccc !important;
  padding: 10px 0 0 5px;
}
.xg1 a {
  color: #ccc !important;
  font-size: 14px;
}
.xi1 {
  color: #f26c4f;
}
.pipe {
  margin: 0 5px;
  color: #ccc;
}
.p-c-c-lf-title {
  font-size: 13px;
  margin: 25px 0 20px 0;
}
.li-name {
  padding: 0 0 10px 0;
  text-align: left;
}
.li-name img {
  height: 25px;
  margin-bottom: -6px;
  margin-right: 2px;
}
.li-other {
  text-align: left;
  font-size: 14px;
  padding: 0 0 5px 0;
  color: #7b7b7b;
}
.li-name a:link,
a:visited,
a:active {
  color: #7b7b7b;
  text-decoration: none;
}
.p-c-c-f-lf {
  border-right: 1px solid #ccc;
  width: 20%;
}
.ts {
  color: #333;
  display: inline;
  font: 700 24px "Microsoft Yahei", "Hei", Tahoma, "SimHei", sans-serif;
  line-height: normal;
  margin: 0px;
}
.jump {
  display: flex;
  position: absolute;
  right: 90px;
}
.p-c-c-rf-title {
  display: flex;
}
.zi {
  line-height: 30px;
}
.p-c-c-f-rf {
  width: 80%;
}
.p-c-c-f-lf-1 {
  margin: 20px 0;
}
.p-c-c-f-rf-1 {
  margin: 20px 20px;
}
.p-c-c-f-rf-2 {
  margin: 10px 20px;
}
.p-r-other-1 {
  font-size: 12px;
  color: #949494;
}
.jump-input {
  width: 45px !important;
}
.p-c-c-rf-other {
  margin: 10px 0 0 0;
  border-bottom: #e2e2e2 solid 1px;
  line-height: 34px;
  display: flex;
}
.tzgn {
  position: absolute;
  right: 160px;
}
.lc_bs_no {
  font-size: 12px;

  position: absolute;
  right: 110px;
}
.lc_bs_no a {
  font-size: 12px;
  color: #1a2b38;
  position: absolute;
  right: 110px;
}
.tzgn a {
  color: #1a2b38;
  font-size: 12px;
}
.tzgn a:hover {
  color: #75b628;
  font-size: 12px;
}
em {
  font-style: normal;
}
.p-c-c-rf-bottom {
  /* background: #f7f7f7; */
  margin-top: 10px;
  display: flex;
}
.p-c-c-rf-content {
  min-height: 300px;
}
.p-c-c-rf-bottom img {
  height: 25px;
  padding: 0 3px 0 0;
}
.p-c-c-rf-bottom a {
  color: #1a2b38;
}
.p-c-c-rf-bottom a:hover {
  color: #75b628;
}
.hficon2 {
  position: absolute;
  right: 110px;
  font-size: 14px;
}
.hficon1 {
  font-size: 14px;
}
.p-c-c-rf-other img {
  height: 22px;
  margin-right: 5px;
}
.p-c-c-f-lf-2 {
  padding: 20px 0 0 0;
}
.p-c-reply {
  display: flex;
  background-color: #fff;
}
</style>