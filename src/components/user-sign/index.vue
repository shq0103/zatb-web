<template>
  <div class="user-sign">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <div class="ac-h3">
            <h3>我的报名</h3>
            <router-link to="/activity-public">
              <span>发布活动</span>
            </router-link>
          </div>
          <el-table :data="tableData" border :style="{ width: '100%' }" fit>
            <el-table-column align="center" prop="activityName" label="活动名称" width="280px">
              <template slot-scope="scope">
                <router-link :to="`/activity-show/${scope.row.activityId}`">
                  <span>{{scope.row.activityName}}</span>
                </router-link>
              </template>
            </el-table-column>
            <!-- <el-table-column align="center" prop="name" label="参加人"></el-table-column> -->
            <el-table-column align="center" prop="status" label="状态">
              <template slot-scope="scope">{{scope.row.status|statusFilter}}</template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="180px">
              <template slot-scope="scope">
                <!-- <router-link to="/activity-join">
                  <el-button size="mini" style="margin-right:10px;">编辑</el-button>
                </router-link>-->
                <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
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
import { getuserJionList, deleteUser } from "@/api/activity.js";
export default {
  filters: {
    statusFilter: function(value) {
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
          type: "审核中",
          name: "美少女"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中",
          name: "美少女"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中",
          name: "美少女"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中",
          name: "美少女"
        }
      ],
      query: { page: 1, pageSize: 10 },
      dialogpass: false,
      dialogdelete: false
    };
  },
  created() {
    this.getuserList();
  },
  methods: {
    getuserList() {
      getuserJionList(this.query).then(resp => {
        this.tableData = resp.data;
        this.total = resp.total;
      });
    },
    handleDelete(id) {
      this.$confirm("此操作将永久删除改项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteUser(id).then(resp => {
            this.$notify({
              title: "成功",
              message: "删除成功",
              type: "success",
              duration: 2000
            });
            this.getuserList();
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
a {
  color: #000;
}
a:hover {
  color: #75b628;
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
