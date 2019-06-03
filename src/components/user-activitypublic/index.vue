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
              <template slot-scope="scope">
                <el-button size="mini" @click="editAc(scope.row.id)" style="margin-right:10px;">编辑</el-button>

                <el-button type="success" plain size="mini" @click="showTable(scope.row.id)">报名审核</el-button>
                <el-button size="mini" type="danger" @click="dialogdelete = true">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog title="我的结伴报名状态" :visible.sync="dialogTableVisible" width="70%">
      <el-table :data="gridData" stripe height="250" highlight-current-row ref="singleTable">
        <!-- <el-table-column type="selection" width="55"></el-table-column> -->
        <el-table-column type="index" :index="index" label="序号" sortable width="50px"></el-table-column>
        <el-table-column prop="username" label="用户名" width="100px;"></el-table-column>
        <el-table-column prop="name" label="真实姓名"></el-table-column>
        <el-table-column prop="idcard" label="身份证" width="160px;"></el-table-column>
        <el-table-column label="性别" width="70px;">
          <template slot-scope="scope">
            <span>{{scope.row.sex|genderFilter}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="number" label="手机号"></el-table-column>
        <el-table-column label="审核状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status == 0" size="mini">待审核</el-tag>
            <el-tag v-if="scope.row.status == 1" type="success" size="mini">已通过</el-tag>
            <el-tag v-if="scope.row.status == 2" type="warning" size="mini">未通过</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px;">
          <template slot-scope="scope">
            <el-popover v-if="scope.row.status == 0" placement="top" trigger="click">
              <el-row>
                <el-button size="mini" type="success" @click="passUser(scope.row.id,1)">通过</el-button>
                <el-button size="mini" type="warning" @click="passUser(scope.row.id,2)">不通过</el-button>
              </el-row>
              <el-button slot="reference" size="mini" style="margin-right:10px;">审核</el-button>
            </el-popover>

            <el-button type="danger" size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import {
  getuserpublicList,
  deleteActivity,
  getJoinList,
  getuserJionList,
  validUser,
  deleteUser
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
    },
    genderFilter: function(value) {
      switch (value) {
        case 0:
          return "女";
        case 1:
          return "男";

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
    editAc(id) {
      this.$router.push("/activity-edit/" + id);
    },
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
      getuserJionList(this.joinquery).then(resp => {
        this.gridData = resp.data;
        this.jointotal = resp.jointotal;
        this.listLoading = false;
      });
    },
    index(val) {
      return (this.joinquery.page - 1) * this.joinquery.pageSize + val + 1;
    },
    showTable(id) {
      this.joinquery.activityId = id;
      this.getjoinList();
      this.dialogTableVisible = true;
    },
    passUser(id, status) {
      this.$confirm(`${status == 1 ? "通过" : "取消通过"}该用户？`)
        .then(_ => {
          validUser(id, status).then(resp => {
            this.$notify({
              title: "成功",
              message: "操作成功",
              type: "success",
              duration: 2000
            });
            this.getList();
          });
        })
        .catch(_ => {});
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除改项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteUser([id]).then(resp => {
            this.$notify({
              title: "成功",
              message: "删除成功",
              type: "success",
              duration: 2000
            });
            this.getAcList();
          });
        })
        .catch(() => {
          this.$notify({
            message: "已取消删除",
            type: "info",
            duration: 2000
          });
        });
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
