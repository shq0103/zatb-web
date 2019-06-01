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
          <a href="/">{{mainpost.title}}</a>
        </li>
      </ul>

      <div class="post-content-1">
        <div class="p-c-public">
          <el-row>
            <router-link to="/post-public">
              <el-button type="success" icon="el-icon-edit">发新帖</el-button>
            </router-link>
            <a href="#position">
              <el-button type="success" icon="el-icon-s-order" style="margin-left:10px;">评论</el-button>
            </a>
          </el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
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
                  <span class="xi1">{{mainpost.viewCount}}</span>
                  <span class="pipe">|</span>
                  <span class="xg1">回复:</span>
                  <span class="xi1">{{mainpost.commentCount}}</span>
                </div>
                <div class="p-c-c-lf-img">
                  <img :src="mainpost.image">
                </div>
                <div class="p-c-c-lf-name">
                  <div class="p-name">
                    <router-link to="/user-info">
                      <img src="../../assets/个人头像.png">
                      {{mainpost.userId}}
                    </router-link>
                  </div>
                  <div class="p-info">
                    <p>发帖：{{mainpost.postCount}}</p>
                    <p>来自：{{mainpost.place}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-c-c-f-rf">
              <div class="p-c-c-f-rf-1">
                <div class="p-c-c-rf-title">
                  <h1 class="ts">{{mainpost.title}}</h1>
                  <span class="xg1">
                    <a
                      href="forum.php?mod=viewthread&amp;tid=980&amp;fromuid=4780"
                      onclick="return copyThreadUrl(this, '徒步网')"
                      title="您的朋友访问此链接后，您将获得相应的积分奖励"
                    >[复制链接]</a>
                  </span>
                  <!-- <div class="jump">
                    <span class="zi" style="font-size:13px;">到</span>
                    <span class="zi" style="font-size:13px;">第</span>
                    <el-input v-model="input" size="mini" class="jump-input" style="padding:0 5px;"></el-input>
                    <span class="zi" style="font-size:13px;">楼</span>
                  </div>-->
                </div>
                <div class="p-c-c-rf-other">
                  <img src="../../assets/楼主.png">
                  <span class="p-r-other-1">发表于 {{mainpost.date}}</span>
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
                <div class="p-c-c-rf-content">{{mainpost.contents}}</div>
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
          <div
            class="p-c-c-second"
            v-for="item in postList"
            :key="item.id"
            :class="{borderNone:index+1===postList.length}"
          >
            <div class="p-c-c-f-lf">
              <div class="p-c-c-f-lf-2">
                <div class="p-c-c-lf-img">
                  <img :src="item.image">
                </div>
                <div class="p-c-c-lf-name">
                  <div class="p-name">
                    <router-link to="/user-info">
                      <img src="../../assets/个人头像.png">
                      {{item.userId}}
                    </router-link>
                  </div>
                  <div class="p-info">
                    <p>发帖：{{item.postCount}}</p>
                    <p>来自：{{item.place}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-c-c-f-rf">
              <div class="p-c-c-f-rf-2">
                <div class="p-c-c-rf-other">
                  <span class="p-r-other-1">发表于 {{item.date}}</span>
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
                <div class="p-c-c-rf-content">{{item.contents}}</div>
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
            <router-link to="/post-public">
              <el-button type="success" icon="el-icon-edit">发新帖</el-button>
            </router-link>
          </el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="1"
            layout="prev, pager, next, jumper"
            :total="10"
            class="page"
          ></el-pagination>
        </div>
        <a name="position">
          <div class="p-c-reply">
            <div class="p-c-c-f-lf">
              <div class="p-c-c-f-lf-2">
                <div class="p-c-c-lf-img">
                  <img :src="replyUser.image">
                </div>
                <div class="p-name">
                  <router-link to="/user-center">
                    <img src="../../assets/个人头像.png">
                    {{replyUser.userId}}
                  </router-link>
                </div>
              </div>
            </div>
            <div class="p-c-c-f-rf">
              <div class="p-c-c-f-rf-3">
                <el-form ref="form" :model="form">
                  <el-form-item>
                    <!-- <el-input type="textarea"></el-input> -->
                    <QuillEditor :menu="commentMenu"/>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="success" @click="onSubmit">发表回复</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import QuillEditor from "@/components/QuillEditor";
import { getPostList } from "@/api/post.js";
export default {
  components: {
    QuillEditor
  },
  data() {
    return {
      query: { page: 1, pageSize: 1, type: "", orderBy: "" },
      commentMenu: [
        "bold",
        "fontSize",
        "fontName",
        "foreColor",
        "emoticon",
        "image"
      ],
      mainpost: {
        id: 0,
        title: "“花田赏景•绿色生态”徒步大会照片征集啦",
        viewCount: 10000,
        commentCount: 20,
        date: "2019-5-2 17:55",
        userId: "徒步用户01",
        postCount: "20",
        place: "桂林",
        image:
          "http://avatar.8264.com/data/avatar/034/36/27/53_avatar_middle.jpg?KnOKMz?tempid=8411",
        contents: "111"
      },
      postList: [
        {
          id: 0,
          userId: "徒步用户02",
          postCount: 10,
          place: "南宁",
          date: "2019-5-3 17:55",
          image: "https://www.tubu123.com/uc_server/images/noavatar_middle.gif",
          contents: "22222"
        },
        {
          id: 1,
          userId: "徒步用户05",
          postCount: 10,
          place: "深圳",
          date: "2019-5-3 17:55",
          image: "https://www.tubu123.com/uc_server/images/noavatar_middle.gif",
          contents: "33333"
        }
      ],
      replyUser: {
        id: 0,
        userId: "徒步用户03",
        image: "https://www.tubu123.com/uc_server/images/noavatar_middle.gif"
      }
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getList();
  },
  methods: {
    getList() {
      getPostList(this.query).then(resp => {
        this.mainpost = resp.data;
        this.total = resp.total;
      });
    }
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
.borderNone {
  border: none !important;
}
.p-c-public {
  display: flex;
  margin: 15px 0;
}
.p-c-content {
  border: solid 1px #f1f1f1;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.p-info p {
  line-height: 10px;
  font-size: 14px;
  text-align: center;
}
.p-name {
  margin: 15px 0;
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

.p-name img {
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
/* .li-name a:link,
a:visited,
a:active {
  color: #7b7b7b;
  text-decoration: none;
} */
.p-name a:link,
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
  text-align: left;
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
.p-c-c-f-rf-3 {
  padding: 25px 10px 0px 10px;
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
  padding: 20px 10px;
  text-align: justify;
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
  height: 30px;
  margin-right: 5px;
}
.p-c-c-f-lf-2 {
  padding: 20px 0 0 0;
}
.p-c-reply {
  display: flex;
  background-color: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
</style>
