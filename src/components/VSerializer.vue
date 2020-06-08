<template>
  <div>
    <div v-for="(block, index) in json.blocks" :key="index">
      <div v-if="block.type === 'header'">
        <HeaderBlock :level="block.data.level" :content="block.data.text" />
      </div>
      <div v-if="block.type === 'paragraph'">
        <ParagraphBlock :content="block.data.text" />
      </div>
      <div v-if="block.type === 'list'">
        <ul>
          <li v-for="(item, index) in block.data.items" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "./BlockElements/HeaderBlock";
import ParagraphBlock from "./BlockElements/ParagraphBlock";
export default {
  mounted() {
    console.log(this.json);
  },
  props: ["json"],
  components: {
    HeaderBlock,
    ParagraphBlock
  }
};
</script>

