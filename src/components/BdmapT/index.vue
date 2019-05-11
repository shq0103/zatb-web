<template>
  <baidu-map
    class="map"
    :scroll-wheel-zoom="true"
    :double-click-zoom="false"
    :center="center"
    :zoom="14"
    :map-click="false"
  >
    <bm-geolocation
      anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
      :show-address-bar="true"
      :auto-location="true"
    ></bm-geolocation>
    <bm-polyline
      :path="polylinePath"
      stroke-color="blue"
      :stroke-opacity="0.5"
      :stroke-weight="2"
      :editing="true"
      @lineupdate="updatePolylinePath"
    ></bm-polyline>
    <bm-map-type
      :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
      anchor="BMAP_ANCHOR_TOP_RIGHT"
    ></bm-map-type>
    <bm-overview-map anchor="BMAP_ANCHOR_TOP_LEFT" :is-open="true"></bm-overview-map>
  </baidu-map>
</template>
<script>
export default {
  data() {
    return {
      polylinePath: [
        { lng: 116.404, lat: 39.915 },
        { lng: 116.405, lat: 39.92 },
        { lng: 116.423493, lat: 39.907445 }
      ]
    };
  },
  methods: {
    updatePolylinePath(e) {
      this.polylinePath = e.target.getPath();
    },
    addPolylinePoint() {
      this.polylinePath.push({ lng: 116.404, lat: 39.915 });
    }
  },
  computed: {
    center() {
      const index =
        this.polylinePath.length % 2 === 1
          ? Math.floor(this.polylinePath.length / 2) + 1
          : this.polylinePath.length / 2;
      return this.polylinePath[index];
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
