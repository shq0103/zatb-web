<template>
  <div>
    <el-input placeholder="输入地名进行搜索" clearable v-model="keyword" prefix-icon="el-icon-search"></el-input>
    <baidu-map
      class="map"
      @dblclick="dblClickMap"
      :scroll-wheel-zoom="true"
      :double-click-zoom="false"
      :center="'桂林'"
      :zoom="15"
      :map-click="false"
    >
      <bm-marker
        v-if="myPoint"
        :position="myPoint"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        @dragend="dragendDone"
      >
        <!-- <bm-label
        content="海琴小仙女真可爱"
        :label-style="{ color: 'red', fontSize: '18px' }"
        :offset="{ width: -50, height: 30 }"
        />-->
      </bm-marker>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>

      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_RIGHT"
      ></bm-map-type>
      <bm-overview-map anchor="BMAP_ANCHOR_TOP_LEFT" :is-open="true"></bm-overview-map>

      <bm-local-search :panel="false" :keyword="keyword" :auto-viewport="true" :location="'桂林'"></bm-local-search>
    </baidu-map>
  </div>
</template>
<script>
export default {
  props: {
    point: {
      default: null
    }
  },
  data() {
    return {
      keyword: "",
      myPoint: this.point
    };
  },
  methods: {
    dblClickMap: function({ point }) {
      this.myPoint = point;
      this.keyword = "";
      this.$emit("chosenPoint", point);
    },
    dragendDone: function({ point }) {
      this.myPoint = point;
      this.keyword = "";
      this.$emit("chosenPoint", point);
    }
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 350px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sinput {
  width: 300px;
}
</style>
