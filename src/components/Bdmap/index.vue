<template>
  <div class="container">
    <el-input class="sinput" v-model="keyword" clearable placeholder="搜索打卡点"></el-input>
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
        v-if="point"
        :position="point"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
        @dragend="dragendDone"
      >
        <bm-label
          content="海琴小仙女真可爱"
          :labelStyle="{color: 'red', fontSize : '18px'}"
          :offset="{width: -50, height: 30}"
        />
      </bm-marker>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_RIGHT"
      ></bm-map-type>
      <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>

      <bm-local-search :panel="false" :keyword="keyword" :auto-viewport="true" :location="'桂林'"></bm-local-search>
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      point: undefined,
      keyword: ""
    };
  },
  methods: {
    dblClickMap: function({ point }) {
      this.point = point;
      console.log(point);
      this.$emit("chosenPoint", point);
    },
    dragendDone: function({ point }) {
      this.point = point;
      console.log(point);
      this.$emit("chosenPoint", point);
    }
  }
};
</script>

<style  scoped>
.map {
  width: 500px;
  height: 500px;
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

