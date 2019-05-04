<template>
  <div class="goods-public">
    <div class="goods-public-content">
      <div class="g-p-title">
        <h3
          style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-bottom-right-radius: 20px;background: #99cccc;"
        >发布闲趣</h3>
      </div>
      <div class="g-p-content">
        <el-form ref="form" label-width="80px">
          <el-form-item label="闲趣类别">
            <el-select placeholder="请选择类别">
              <el-option label="服饰" value="shanghai"></el-option>
              <el-option label="装备" value="beijing"></el-option>
              <el-option label="其他" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="新旧程度">
            <el-select placeholder="请选择新旧程度">
              <el-option label="全新" value="shanghai"></el-option>
              <el-option label="95成新" value="beijing"></el-option>
              <el-option label="9成新" value="beijing"></el-option>
              <el-option label="8成新" value="beijing"></el-option>
              <el-option label="7成新及以下" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="价格">
            <el-input></el-input>元
          </el-form-item>
          <el-form-item label="标题">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="详细介绍">
            <el-input type="textarea" rows="10"></el-input>
          </el-form-item>
          <el-form-item label="图片上传">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt>
            </el-dialog>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="onSubmit">发布闲趣</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.goods-public-content {
  /* padding: 50px 200px 0 200px; */
  min-height: 500px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
}
.g-p-content {
  padding: 50px 200px 15px 200px;
}
</style>