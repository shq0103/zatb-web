<template>
  <div class="people-comment">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #8bc34a;"
          >Ta的评论</h3>
          <el-table :data="tableData" border :style="{ width: '100%' }" fit>
            <el-table-column align="center" prop="title" label="评论内容" width="280px"></el-table-column>
            <el-table-column align="center" prop="type" label="评论类型"></el-table-column>
            <el-table-column align="center" prop="date" label="评论时间"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          date: "2016-05-02",
          type: "路书"
        },
        {
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          date: "2016-05-02",
          type: "路书"
        },
        {
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          date: "2016-05-02",
          type: "路书"
        },
        {
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          date: "2016-05-02",
          type: "路书"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.ac-public-form2-2 {
  margin: 30px 100px 0px 100px;
}
.user-secure-button {
  color: #fff;
  /* background-color: #8bc34a !important;
  border-color: #8bc34a !important; */
}

/* .el-table thead {
background: #f0f9eb !important;
} */
el-table th,
.el-table tr {
  background: #f0f9eb !important;
}
.el-table th,
.el-table tr {
  background: #f0f9eb !important;
}
.ac-public-content {
  min-height: 960px;
}
</style>
