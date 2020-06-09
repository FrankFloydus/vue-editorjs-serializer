<template>
  <div id="app">
    <VSerializer :json="blocks" debugMode />
  </div>
</template>

<script>
import VSerializer from "./components/VSerializer.vue";
import data from "./data/data";

export default {
  name: "App",
  data() {
    return {
      blocks: data
    };
  },
  components: {
    VSerializer
  }
};
</script>
