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
            @current-change="handleCurrentChange"
            :page-size="query.pageSize"
            layout="prev, pager, next, jumper"
            :total="total"
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
                  <span class="xi1">{{total}}</span>
                </div>
                <div class="p-c-c-lf-img">
                  <img :src="`/image/${mainpost.avatar}`">
                </div>
                <div class="p-c-c-lf-name">
                  <div class="p-name">
                    <router-link to="/user-info">
                      <img src="../../assets/个人头像.png">
                      {{mainpost.nickname}}
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
                      href="#"
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
                  <span class="p-r-other-1">发表于 {{mainpost.date|timeFilter}}</span>
                  <a
                    href="http://bbs.8264.com/thread-5542549-1-1.html"
                    class="lc_bs_no"
                    title="复制本帖链接"
                    id="postnum89095341"
                    onclick="setCopy(this.href, '帖子地址已经复制到剪贴板');return false;"
                  ></a>
                  <!-- <span class="tzgn">
                    <a
                      href="http://bbs.8264.com/forum-viewthread-tid-5542549-page-1-authorid-40118894.html"
                      rel="nofollow"
                    >只看该作者</a>
                    |
                    <a
                      href="http://bbs.8264.com/forum-viewthread-tid-5542549-extra-page%3D1-ordertype-1.html"
                      rel="nofollow"
                    >倒序浏览</a>
                  </span>-->
                </div>
                <div class="p-c-c-rf-content" v-html="mainpost.contents"></div>
                <div class="p-c-c-rf-bottom">
                  <img src="../../assets/回复.png">
                  <a class="hficon1" href="#">回复</a>
                  <a class="hficon2" href="#">举报</a>
                </div>
              </div>
            </div>
          </div>
          <div style="clear:both"></div>
          <div
            class="p-c-c-second"
            v-for="(item,index) in comList"
            :key="item.id"
            :class="{borderNone:index+1===comList.length}"
          >
            <div class="p-c-c-f-lf">
              <div class="p-c-c-f-lf-2">
                <div class="p-c-c-lf-img">
                  <img :src="`/image${item.avatar}`">
                </div>
                <div class="p-c-c-lf-name">
                  <div class="p-name">
                    <router-link to="/user-info">
                      <img src="../../assets/个人头像.png">
                      {{item.nickname}}
                    </router-link>
                  </div>
                  <div class="p-info">
                    <p>来自：{{item.place}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-c-c-f-rf">
              <div class="p-c-c-f-rf-2">
                <div class="p-c-c-rf-other">
                  <span class="p-r-other-1">发表于 {{item.time|timeFilter}}</span>
                  <a
                    href="http://bbs.8264.com/thread-5542549-1-1.html"
                    class="lc_bs_no"
                    title="复制本帖链接"
                    id="postnum89095341"
                    onclick="setCopy(this.href, '帖子地址已经复制到剪贴板');return false;"
                  >
                    <em>{{getIndex(index)}}</em>楼
                  </a>
                  <!-- <span class="tzgn">
                    <a
                      href="http://bbs.8264.com/forum-viewthread-tid-5542549-page-1-authorid-40118894.html"
                      rel="nofollow"
                    >只看该作者</a>
                    |
                    <a
                      href="http://bbs.8264.com/forum-viewthread-tid-5542549-extra-page%3D1-ordertype-1.html"
                      rel="nofollow"
                    >倒序浏览</a>
                  </span>-->
                </div>
                <div class="p-c-c-rf-content" v-html="item.contents"></div>
                <div class="p-c-c-rf-bottom">
                  <img src="../../assets/回复.png">
                  <a class="hficon1" href="#">回复</a>
                  <a class="hficon2" href="#">举报</a>
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
            @current-change="handleCurrentChange"
            background
            :page-size="query.pageSize"
            layout="prev, pager, next, jumper"
            :total="total"
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
                    Test1234
                  </router-link>
                </div>
              </div>
            </div>
            <div class="p-c-c-f-rf">
              <div class="p-c-c-f-rf-3">
                <el-form ref="form" :model="comForm">
                  <el-form-item>
                    <!-- <el-input type="textarea"></el-input> -->
                    <quillEditor height="100px" v-model="comForm.contents" :options="editorOption"/>
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
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
import VueQuillEditor, { Quill } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module";
Quill.register("modules/imageDrop", ImageDrop);
import { getPostDetail, postComment, getCommentList } from "@/api/post.js";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      query: { page: 1, pageSize: 1, type: "", orderBy: "" },
      editorOption: {
        modules: {
          toolbar: [
            [{ size: ["small", false, "large"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [{ header: 1 }, { header: 2 }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"]
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageDrop: true
        }
      },
      mainpost: {},
      replyUser: {
        id: 0,
        userId: "徒步用户03",
        image: "https://www.tubu123.com/uc_server/images/noavatar_middle.gif"
      },
      id: 0,
      query: {
        page: 1,
        pageSize: 10,
        toId: 0,
        type: 2
      },
      comList: [],
      total: 0,
      comForm: {
        id: 0,
        userId: 0,
        toId: 0,
        replyTo: 0,
        contents: "",
        type: 2,
        time: 0
      }
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.comForm.toId = this.id;
    this.query.toId = this.id;
    getPostDetail(this.id).then(resp => {
      this.mainpost = resp.data;
    });
    this.getComList();
  },
  methods: {
    getComList() {
      getCommentList(this.query).then(resp => {
        this.comList = resp.data;
        this.total = resp.total;
      });
    },
    handleCurrentChange(cP) {
      this.query.page = cP;
      this.getPostDetail;
    },
    onSubmit() {
      if (!localStorage.getItem("token")) {
        this.$message({
          type: "warning",
          message: "请先登录!"
        });
        return;
      } else {
        postComment(this.comForm).then(resp => {
          this.$message({
            type: "success",
            message: "评论成功！"
          });
          this.getComList();
          this.comForm.contents = "";
        });
      }
    },
    getIndex(index) {
      return (this.query.page - 1) * this.query.pageSize + index + 1;
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
<style>
.quill-editor:not(.bubble) .ql-container,
.quill-editor:not(.bubble) .ql-container .ql-editor {
  height: 15rem;
  padding-bottom: 1rem;
}
</style>
