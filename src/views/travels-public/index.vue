<template>
  <div class="travels-public">
    <div class="travel_02">
      <div class="edit">
        <div class="edit_01">
          <input class="edit_name" type="text" placeholder="请填写游记标题" maxlength="50">
        </div>
        <div class="edit_02">
          <span class="select_text">选择参与的活动</span>
        </div>
        <div class="select">
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
        </div>
      </div>
    </div>
  </div>
</template>
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
  margin-bottom: 50px;
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