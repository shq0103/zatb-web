<template>
  <activity-public :is-edit="true"/>
</template>

<script>
import ActivityPublic from "./index.vue";

export default {
  name: "EditForm",
  components: { ActivityPublic }
};
</script>
