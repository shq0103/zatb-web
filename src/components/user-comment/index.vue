<template>
  <div class="user-comment">
    <div class="public-bottom">
      <div class="ac-public-content">
        <div class="ac-public-form1">
          <h3
            style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #8bc34a;"
          >我的评论</h3>
          <el-table :data="tableData" border fit>
            <!-- <el-table-column align="center" prop="contents" label="评论类型标题" width="280px"></el-table-column> -->
            <el-table-column align="center" prop="type" label="评论类型"></el-table-column>
            <el-table-column align="center" prop="time" label="评论时间"></el-table-column>
            <el-table-column align="center" label="操作" width="180px">
              <template>
                <!-- <router-link to="/goods-public">
                  <el-button size="mini" style="margin-right:10px;">编辑</el-button>
                </router-link>-->
                <el-button size="mini" type="danger" @click="dialogdelete = true">删除</el-button>
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
import { getUserComment, deleteComment } from "@/api/comment.js";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
          name: "美少女",
          type: "路书"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",

          name: "美少女",
          type: "路书"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",

          name: "美少女",
          type: "路书"
        },
        {
          date: "2016-05-02",
          title: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",

          name: "美少女",
          type: "路书"
        }
      ],

      dialogpass: false,
      dialogdelete: false
    };
  },
  methods: {
    created() {
      this.getcommentList();
    },
    methods: {
      getcommentList() {
        getUserComment().then(resp => {
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
            deleteComment(id).then(resp => {
              this.$notify({
                title: "成功",
                message: "删除成功",
                type: "success",
                duration: 2000
              });
              this.getcommentList();
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
  }
};
</script>
<style scoped>
.ac-public-form2-2 {
  margin: 30px 100px 0px 100px;
}
.user-secure-button {
  color: #fff;
  background-color: #99cccc !important;
  border-color: #99cccc !important;
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
