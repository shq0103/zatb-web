<template>
  <div class="people-sign">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #8BC34A;"
          >Ta的参与</h3>
          <el-table :data="tableData" border fit>
            <el-table-column align="center" prop="title" label="活动名称" width="280px"></el-table-column>
            <el-table-column align="center" prop="address" label="活动里程"></el-table-column>
            <el-table-column align="center" prop="type" label="活动类型"></el-table-column>
            <el-table-column align="center" prop="date" label="参与时间"></el-table-column>
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
          address: "30KM",
          title: "飞檐走壁玩心跳--清远飞拉达",
          date: "2016-05-02",
          type: "长线"
        },
        {
          address: "25KM",
          title: "A线/大美龙脊梯田梳秧节，一个让你终身难忘的节日",
          date: "2016-06-02",
          type: "中线"
        },
        {
          address: "10KM",
          title: " 莲峰古道飞庵行 AA活动",
          date: "2017-07-15",
          type: "短线"
        },
        {
          address: "26KM",
          title: "走进人间仙境桂林阳朔纯玩约伴，迷失西街游世外桃源",
          date: "2018-05-02",
          type: "中线"
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
  background-color: #8bc34a !important;
  border-color: #8bc34a !important;
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
