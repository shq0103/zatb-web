<template>
  <div class="user-goods">
    <div class="public-bottom">
      <el-tabs value="first">
        <el-tab-pane label="所有订单" name="first">
          <div class="public-bottom">
            <div class="ac-public-content">
              <div class="ac-public-form1">
                <h3
                  style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #99cccc;"
                >我的订单</h3>
                <el-table :data="tableData" border :style="{width: '100%'}">
                  <el-table-column align="center" prop="date" label="订单信息"></el-table-column>
                  <el-table-column align="center" prop="name" label="姓名"></el-table-column>
                  <el-table-column align="center" prop="address" label="实际付款"></el-table-column>
                  <el-table-column align="center" prop="address" label="订单状态"></el-table-column>
                  <el-table-column align="center" prop="address" label="操作"></el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已支付" name="second">
          <div class="public-bottom">
            <div class="ac-public-content">
              <div class="ac-public-form1">
                <h3
                  style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #99cccc;"
                >已支付订单</h3>
                <el-table :data="tableData" border :style="{width: '100%'}">
                  <el-table-column align="center" prop="date" label="订单信息"></el-table-column>
                  <el-table-column align="center" prop="name" label="姓名"></el-table-column>
                  <el-table-column align="center" prop="address" label="实际付款"></el-table-column>
                  <el-table-column align="center" prop="address" label="订单状态"></el-table-column>
                  <el-table-column align="center" prop="address" label="操作"></el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="退款中" name="third">
          <div class="public-bottom">
            <div class="ac-public-content">
              <div class="ac-public-form1">
                <h3
                  style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #99cccc;"
                >退款订单</h3>
                <el-table :data="tableData" border :style="{width: '100%'}">
                  <el-table-column align="center" prop="date" label="订单信息"></el-table-column>
                  <el-table-column align="center" prop="name" label="姓名"></el-table-column>
                  <el-table-column align="center" prop="address" label="实际付款"></el-table-column>
                  <el-table-column align="center" prop="address" label="订单状态"></el-table-column>
                  <el-table-column align="center" prop="address" label="操作"></el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已退款" name="four">
          <div class="public-bottom">
            <div class="ac-public-content">
              <div class="ac-public-form1">
                <h3
                  style="color: #fff;height: 42px;line-height: 42px;text-align: center;font-size: 16px;
-webkit-border-bottom-left-radius: 20px;-moz-border-bottom-left-radius: 20px;-webkit-border-top-right-radius: 20px;background: #99cccc;"
                >已退款订单</h3>
                <el-table :data="tableData" border :style="{width: '100%'}">
                  <el-table-column align="center" prop="date" label="订单信息"></el-table-column>
                  <el-table-column align="center" prop="name" label="姓名"></el-table-column>
                  <el-table-column align="center" prop="address" label="实际付款"></el-table-column>
                  <el-table-column align="center" prop="address" label="订单状态"></el-table-column>
                  <el-table-column align="center" prop="address" label="操作"></el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Identify from "@/components/Identify";
export default {
  components: {
    Identify
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
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
.el-tabs__item.is-active {
  color: #336699 !important;
}
.el-tabs__active-bar {
  background-color: #336699 !important;
}
.el-tabs__item {
  font-size: 15px !important;
}
.el-tabs__item:hover,
.el-tabs__item.is-active {
  color: #336699 !important;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 10px !important;
}

.el-input-group__append,
.el-input-group__prepend {
  padding: 0 !important;
  border: none !important;
}
</style>
