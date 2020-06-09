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
        <ListBlock :listType="block.data.style" :items="block.data.items" />
      </div>
      <div v-if="block.type === 'image'">
        <ImageBlock :url="block.data.file.url" altText="my image" :caption="block.data.caption" />
      </div>
      <div v-if="block.type === 'rawTool'">
        <div v-html="block.data.html"></div>
      </div>
      <div v-if="block.type === 'code'">
        <pre>
            {{ block.data.code }}
        </pre>
      </div>
      <div v-if="block.type === 'quote'">
        <blockquote>
          <p>{{ block.data.text }}</p>
          <small>{{ block.data.caption }}</small>
        </blockquote>
      </div>
      <div v-if="block.type === 'table'">
        <table>
          <tr v-for="(row, index) in block.data.content" :key="index">
            <td
              v-for="(row, idx) in block.data.content"
              :key="idx"
            >{{ block.data.content[index][idx] }}</td>
          </tr>
        </table>
      </div>
      <div v-if="block.type === 'linkTool'">
        <a :href="block.data.link" :title="block.data.meta.description">{{ block.data.meta.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "./BlockElements/HeaderBlock";
import ParagraphBlock from "./BlockElements/ParagraphBlock";
import ListBlock from "./BlockElements/ListBlock";
import ImageBlock from "./BlockElements/ImageBlock";

export default {
  mounted() {
    this.debugMode && console.log(this.json);
  },
  props: {
    json: Object,
    debugMode: Boolean
  },
  components: {
    HeaderBlock,
    ParagraphBlock,
    ListBlock,
    ImageBlock
  }
};
</script>

