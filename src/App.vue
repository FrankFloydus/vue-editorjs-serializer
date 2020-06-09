<template>
  <div id="app">
    <vue-editor-serializer :json="blocks" debugMode />
  </div>
</template>

<script>
import VueEditorSerializer from "./components/VueEditorSerializer.vue";
import data from "./data/data";

export default {
  name: "App",
  data() {
    return {
      blocks: data
    };
  },
  components: {
    VueEditorSerializer
  }
};
</script>
