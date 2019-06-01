<template>
  <div class="user-travels">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <div class="ac-h3">
            <h3>我的路书</h3>
            <router-link to="/travels-public">
              <span>写路书</span>
            </router-link>
          </div>
          <el-table :data="tableData" border fit>
            <el-table-column align="center" prop="title" label="路书标题" width="300px"></el-table-column>
            <el-table-column align="center" label="创建时间">
              <template slot-scope="scope">
                <span>{{scope.row.publishTime|timeFilter}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="status" label="状态"></el-table-column>
            <el-table-column align="center" label="操作" width="180px">
              <template>
                <router-link to="/travels-public">
                  <el-button size="mini" style="margin-right:10px;">编辑</el-button>
                </router-link>
                <el-button size="mini" type="danger" @click="dialogdelete = true">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="query.page"
            :page-size="query.pageSize"
            layout="total, prev, pager, next"
            :total="total"
            style="background-color:#fff!important;"
          ></el-pagination>
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
import { getTBList } from "@/api/travels.js";
export default {
  data() {
    return {
      total: 0,
      tableData: [
        {
          publishTime: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          type: "审核中",
          name: "美少女"
        }
      ],
      query: {
        page: 1,
        pageSize: 10
      },
      dialogpass: false,
      dialogdelete: false
    };
  },
  created() {
    this.getTravelsBookList();
  },
  methods: {
    getTravelsBookList() {
      getTBList(this.query).then(resp => {
        this.tableData = resp.data;
        this.total = resp.total;
      });
    },
    handleSizeChange(pageSize) {
      this.query.pageSize = pageSize;
      this.getTravelsBookList();
    },
    handleCurrentChange(curPage) {
      this.query.page = curPage;
      this.getTravelsBookList();
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
