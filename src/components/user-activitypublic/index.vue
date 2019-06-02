<template>
  <div class="user-sign">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <div class="ac-h3">
            <h3>我的结伴</h3>
            <router-link to="/activity-public">
              <span>发布活动</span>
            </router-link>
          </div>
          <el-table :data="tableData" border fit stripe>
            <el-table-column align="center" prop="name" label="活动名称" width="260px"></el-table-column>
            <el-table-column align="center" label="发布时间">
              <template slot-scope="scope">
                <span>{{scope.row.publishTime|timeFilter}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="状态">
              <template slot-scope="scope">
                <span>{{scope.row.status|typeFilter}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="240px">
              <template>
                <router-link to="/activity-public">
                  <el-button size="mini" style="margin-right:10px;">编辑</el-button>
                </router-link>
                <el-button type="success" plain size="mini" @click="dialogTableVisible = true">报名审核</el-button>
                <el-button size="mini" type="danger" @click="dialogdelete = true">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog title="我的结伴报名状态" :visible.sync="dialogTableVisible" width="70%">
      <el-table
        :data="gridData"
        stripe
        height="250"
        highlight-current-row
        @current-change="handleCurrentChange"
        ref="singleTable"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" :index="index" label="序号" sortable width="50px"></el-table-column>
        <el-table-column prop="name" label="用户名" :formatter="formatter"></el-table-column>
        <el-table-column prop="truename" label="真实姓名" :formatter="formatter"></el-table-column>
        <el-table-column prop="sex" label="性别" :formatter="formatter"></el-table-column>
        <el-table-column prop="number" label="手机号" :formatter="formatter"></el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button size="mini" style="margin-right:10px;" @click="dialogpass  = true">通过</el-button>
            <el-button size="mini" type="danger" @click="dialogdelete = true">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog :visible.sync="dialogpass" width="30%" :before-close="handleClose">
      <span>是否通过</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogpass = false">取 消</el-button>
        <el-button type="primary" @click="dialogpass = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialogdelete" width="30%" :before-close="handleClose">
      <span>是否删除</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogdelete = false">取 消</el-button>
        <el-button type="primary" @click="dialogdelete = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  getuserpublicList,
  deleteActivity,
  getJoinList
} from "@/api/activity.js";
export default {
  filters: {
    typeFilter: function(value) {
      switch (value) {
        case 0:
          return "待审核";
        case 1:
          return "已通过";
        case 2:
          return "未通过";
        default:
          return "";
      }
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中"
        }
      ],
      total: 0,
      jointotal: 0,
      query: { page: 1, pageSize: 10 },
      currentRow: null,
      dialogTableVisible: false,
      dialogpass: false,
      dialogdelete: false,
      gridData: [
        {
          id: "1",
          time: "2016-05-02",
          name: "王小虎",
          truename: "啦啦啦",
          sex: "女",
          number: "13338383388",
          password: "admin"
        },
        {
          id: "1",
          time: "2016-05-02",
          name: "王小虎",
          truename: "啦啦啦",
          sex: "女",
          number: "13338383388",
          password: "admin"
        },
        {
          id: "1",
          time: "2016-05-02",
          name: "王小虎",
          truename: "啦啦啦",
          sex: "女",
          number: "13338383388",
          password: "admin"
        }
      ],
      joinquery: { page: 1, pageSize: 10, activityId: 0 }
    };
  },
  created() {
    this.getpublicList();
    this.query.activityId = this.$route.params && this.$route.params.id;
    this.getjoinList();
  },

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    getpublicList() {
      getuserpublicList(this.query).then(resp => {
        this.tableData = resp.data;
        this.total = resp.total;
      });
    },
    getjoinList() {
      this.listLoading = true;
      getJoinList(this.joinquery).then(resp => {
        this.gridData = resp.data;
        this.jointotal = resp.jointotal;
        this.listLoading = false;
      });
    },
    index(val) {
      return (this.joinquery.page - 1) * this.joinquery.pageSize + val + 1;
    }
  }
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
/* el-table th,
.el-table tr {
  background: #f0f9eb !important;
}
.el-table th,
.el-table tr {
  background: #f0f9eb !important;
} */
.ac-public-content {
  min-height: 1100px;
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
.ac-h3 span {
  position: absolute;
  right: 85px;
  font-size: 13px;
}
</style>
