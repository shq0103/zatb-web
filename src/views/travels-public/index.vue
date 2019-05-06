<template>
  <div class="travels-public">
    <div class="travel_02">
      <el-form ref="form" label-position="top" :model="form" label-width="80px">
        <div class="edit">
          <div class="edit_01">
            <el-form-item>
              <input class="edit_name" type="text" placeholder="请填写路书标题" maxlength="50">
            </el-form-item>
          </div>
          <div class="edit_02">
            <span class="select_text">选择参与的等级</span>
          </div>
          <div class="select">
            <el-form-item>
              <el-select v-model="value" filterable placeholder="请选择" class="select_list">
                <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
                ></el-option>-->
                <el-option label="全部" value="beijing"></el-option>
                <el-option label="短线" value="beijing"></el-option>
                <el-option label="中线" value="beijing"></el-option>
                <el-option label="长线" value="shanghai"></el-option>
              </el-select>

              <el-button type="success" round class="tr-edit-buttom" :plain="true" @click="open2">创建</el-button>
            </el-form-item>
          </div>
          <el-form-item>
            <el-col :span="11">
              <el-input placeholder="请输入平均海拔" prefix-icon="el-icon-stopwatch"></el-input>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-input placeholder="请输入平均配速" prefix-icon="el-icon-timer"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="11">
              <el-input placeholder="请输入总里程" prefix-icon="el-icon-map-location"></el-input>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-input placeholder="请输入总时间" prefix-icon="el-icon-time"></el-input>
            </el-col>
          </el-form-item>
          <div class="content">
            <el-form-item>
              <el-input type="textarea" placeholder="请填写路书概述" rows="10"></el-input>
            </el-form-item>
          </div>
          <el-button
            @click="dialogFormVisible = true"
            type="success"
            icon="el-icon-plus"
            round
          >添加打卡点</el-button>
        </div>
        <el-dialog top="50px" :visible.sync="dialogFormVisible" width="80%">
          <AddAddress/>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false" type="success" plain>取 消</el-button>
            <el-button type="success" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </el-form>
    </div>
  </div>
</template>
<script>
import AddAddress from "@/components/AddAddress/index.vue";
export default {
  components: {
    AddAddress
  },
  data() {
    return {
      dialogFormVisible: false
    };
  }
};
</script>

<style scoped>
.travel_02 {
  padding: 50px 200px 0 200px;
  min-height: 500px;
  background: #fff;
}
.edit_02 {
  margin: 10px 0px;
  text-align: left;
  font-size: 12px;
}

.edit_name {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 24px;
  color: #75b628;
  border: 0;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-bottom: 1px solid #ccc;
  /* float: left; */
}
.select_text {
  width: 100%;
  margin: 10px 0 5px 0;
  color: #999;
  /* float: left; */
}
.select_list {
  width: 50%;
  height: 36px;
  line-height: 36px;
  margin-bottom: 15px;
  float: left;
}
/* .select {
  display: flex;
} */
.edit_name:hover {
  border: 0;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-bottom: 1px solid #75b628;
}
.tr-edit-buttom {
  float: right;
  /* background-color: #75b628;
  color: #fff; */
}
</style>
