<template>
  <div class="travels-public">
    <div class="travel_02">
      <el-form ref="form" label-position="top" :model="form" label-width="80px" :rules="rules">
        <div class="edit">
          <div class="edit_01">
            <el-form-item prop="title">
              <input
                class="edit_name"
                v-model="form.title"
                type="text"
                placeholder="请填写路书标题"
                maxlength="50"
              >
            </el-form-item>
          </div>
          <div class="edit_02">
            <span class="select_text">选择参与的等级</span>
          </div>
          <div class="select">
            <el-form-item prop="length">
              <el-select v-model="form.length" placeholder="请选择" class="select_list">
                <el-option label="短线" :value="1"></el-option>
                <el-option label="中线" :value="2"></el-option>
                <el-option label="长线" :value="3"></el-option>
              </el-select>

              <el-button
                type="success"
                round
                @click="dialogFormVisible = true"
                class="tr-edit-buttom"
                :plain="true"
                icon="el-icon-plus"
              >添加打卡点</el-button>
            </el-form-item>
          </div>
          <el-form-item>
            <el-col :span="11">
              <el-input
                v-model="form.altitude"
                placeholder="请输入平均海拔（单位：米）"
                type="number"
                prefix-icon="el-icon-stopwatch"
              ></el-input>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-input
                v-model="form.speed"
                type="number"
                placeholder="请输入平均配速（单位：公里/小时）"
                prefix-icon="el-icon-timer"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="11">
              <el-input
                v-model="form.distance"
                placeholder="请输入总里程（单位：公里）"
                prefix-icon="el-icon-map-location"
                type="number"
              ></el-input>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-input
                v-model="form.takeTime"
                type="number"
                placeholder="请输入总时间（单位：小时）"
                prefix-icon="el-icon-time"
              ></el-input>
            </el-col>
          </el-form-item>
          <div class="content">
            <el-form-item prop="intro">
              <el-input v-model="form.intro" type="textarea" placeholder="请填写路书概述" rows="10"></el-input>
            </el-form-item>
          </div>
          <div class="edit_02">
            <span class="select_text">打卡点列表</span>
          </div>
          <draggable :set-data="setData" :list="form.travelPlaces" group="article" class="dragArea">
            <div
              v-for="(element,index) in form.travelPlaces"
              :key="index"
              class="list-complete-item"
            >
              <div class="list-complete-item-handle">{{ element.name }}</div>
              <div style="position:absolute;right:0px;">
                <span
                  style="float: right ;margin-top: -20px;margin-right:30px;"
                  @click="editTravelPlace(index)"
                >
                  <i style="color:#67c23a" class="el-icon-edit-outline"/>
                </span>
                <span
                  style="float: right ;margin-top: -20px;margin-right:5px;"
                  @click="deleteTravelPlace(index)"
                >
                  <i style="color:#ff4949" class="el-icon-delete"/>
                </span>
              </div>
            </div>
          </draggable>
          <div v-if="form.travelPlaces.length==0">
            <span class="select_text">暂无数据，请添加打卡点内容。</span>
          </div>
          <el-row style="margin-top:20px">
            <el-col :span="24">
              <!-- <el-button type="success" round style="float: left;">保存草稿</el-button> -->
              <!-- <el-button type="success" round style="float: left;">预览路书</el-button> -->
              <el-button
                type="success"
                v-if="!isEdit"
                round
                style="float: right;"
                @click="submitForm('form')"
              >创建路书</el-button>
              <el-button
                type="success"
                v-if="isEdit"
                round
                style="float: right;"
                @click="submitForm('form')"
              >保存路书</el-button>
            </el-col>
          </el-row>
        </div>
        <el-dialog
          :show-close="false"
          :before-close="()=>false"
          top="50px"
          :visible.sync="dialogFormVisible"
          width="80%"
        >
          <AddAddress
            :is-edit="isEditA"
            :show-dialog="dialogFormVisible"
            :deafult-data="travelPlace"
            @cancel="dialogFormVisible = false"
            @confirm="addTravelPlace"
          />
        </el-dialog>
      </el-form>
    </div>
  </div>
</template>
<script>
import AddAddress from "@/components/AddAddress/index.vue";
import draggable from "vuedraggable";
import {
  postTravelBook,
  getTravelsDetail,
  putTravelBook
} from "@/api/travels.js";

export default {
  components: {
    AddAddress,
    draggable
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        title: "",
        intro: "",
        altitude: "",
        speed: "",
        distance: "",
        takeTime: "",
        length: "",
        travelPlaces: []
      },
      rules: {
        title: [
          { required: true, message: "请输入路书名称", trigger: "blur" },
          { max: 20, message: "不能超过20字符", trigger: "blur" }
        ],
        length: [
          { required: true, message: "请选择参与等级", trigger: "change" }
        ],
        intro: [
          { required: true, message: "请填写路书概述", trigger: "blur" },
          { max: 150, message: "不能超过150字符", trigger: "blur" }
        ]
      },
      travelPlace: null,
      editIndex: -1,
      isEditA: false
    };
  },
  created() {
    if (this.isEdit) {
      this.isEditA = true;
      const id = this.$route.params && this.$route.params.id;
      getTravelsDetail(id).then(resp => {
        Object.assign(this.form, resp.data);
        delete this.form.nickname;
        delete this.form.username;
      });
    }
  },
  methods: {
    addTravelPlace(travelPlace) {
      if (this.isEditA) {
        Object.assign(this.form.travelPlaces[this.editIndex], travelPlace);
        this.dialogFormVisible = false;
        this.$message({
          type: "success",
          message: "修改打卡点成功！"
        });
        this.isEditA = false;
      } else {
        this.form.travelPlaces.push(travelPlace);
        this.dialogFormVisible = false;
        this.$message({
          type: "success",
          message: "添加打卡点成功！"
        });
      }

      console.log(this.form);
    },
    deleteTravelPlace(index) {
      this.form.travelPlaces.splice(index, 1);
    },
    editTravelPlace(index) {
      this.isEditA = true;
      this.editIndex = index;
      this.travelPlace = this.form.travelPlaces[index];
      this.dialogFormVisible = true;
    },
    setData(dataTransfer) {
      // to avoid Firefox bug
      // Detail see : https://github.com/RubaXa/Sortable/issues/1012
      dataTransfer.setData("Text", "");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.isEdit) {
            putTravelBook(this.form).then(resp => {
              this.$message({
                type: "success",
                message: "保存成功！"
              });
            });
          } else {
            postTravelBook(this.form).then(resp => {
              this.$message({
                type: "success",
                message: "新增成功！"
              });
            });
          }
          this.$router.push({
            path: "/user-center",
            query: { tab: "userTravels" }
          });
        } else {
          console.log("发布失败!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.travel_02 {
  padding: 50px 200px 60px 200px;
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

.list-complete-item {
  cursor: pointer;
  position: relative;
  font-size: 14px;
  padding: 5px 12px;
  margin-top: 4px;
  border: 1px solid #bfcbd9;
  transition: all 1s;
}

.list-complete-item-handle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 50px;
}

.list-complete-item.sortable-chosen {
  background: #4ab7bd;
}

.list-complete-item.sortable-ghost {
  background: #75b628;
}
</style>
