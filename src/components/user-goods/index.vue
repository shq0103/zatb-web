<template>
  <div class="user-goods">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <div class="ac-h3">
            <h3>我的闲趣</h3>
            <router-link to="/goods-public">
              <span>发布闲趣</span>
            </router-link>
          </div>
          <el-table :data="tableData" border fit>
            <el-table-column align="center" prop="name" label="闲趣标题" width="280px">
              <template slot-scope="scope">
                <router-link :to="`/goods-show/${scope.row.id}`">
                  <span>{{scope.row.name}}</span>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column align="center" label="闲趣类型">
              <template slot-scope="scope">
                <span>{{scope.row.type|typeFilter}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="创建时间">
              <template slot-scope="scope">
                <span>{{scope.row.time|timeFilter}}</span>
              </template>
            </el-table-column>
            <!-- <el-table-column align="center" prop="type" label="状态"></el-table-column> -->
            <el-table-column align="center" label="操作" width="180px">
              <template slot-scope="scope">
                <!-- <router-link to="/goods-public">
                  <el-button size="mini" style="margin-right:10px;">编辑</el-button>
                </router-link>-->
                <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserGoods, deleteGoods } from "@/api/goods.js";
export default {
  filters: {
    typeFilter: function(value) {
      switch (value) {
        case 1:
          return "服装";
        case 2:
          return "装备";
        case 3:
          return "其他";
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
          name: "美少女",
          selltype: "装备"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中",
          name: "美少女",
          selltype: "装备"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中",
          name: "美少女",
          selltype: "装备"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中",
          name: "美少女",
          selltype: "装备"
        }
      ],

      dialogpass: false,
      dialogdelete: false
    };
  },
  created() {
    this.getUgoodsList();
  },
  methods: {
    getUgoodsList() {
      getUserGoods().then(resp => {
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
          deleteGoods(id).then(resp => {
            this.$notify({
              title: "成功",
              message: "删除成功",
              type: "success",
              duration: 2000
            });
            this.getUgoodsList();
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
.ac-h3 a {
  color: #fff;
}
.ac-h3 span {
  position: absolute;
  right: 85px;
  font-size: 13px;
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
</style>
