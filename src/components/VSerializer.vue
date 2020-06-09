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
      <div v-if="block.type === 'image'">
        <figure>
          <img :src="block.data.file.url" :alt="block.data.caption" />
          <figcaption>{{ block.data.caption }}</figcaption>
        </figure>
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

