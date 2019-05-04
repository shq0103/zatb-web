<template>
  <div class="travels-public">
    <div class="travel_02">
      <div class="edit">
        <div class="edit_01">
          <input class="edit_name" type="text" placeholder="请填写路书标题" maxlength="50">
        </div>
        <div class="edit_02">
          <span class="select_text">选择参与的等级</span>
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
  margin-bottom: 40px;
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