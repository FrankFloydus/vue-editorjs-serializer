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
        <ImageBlock
          :url="block.data.file.url"
          :altText="block.data.caption"
          :caption="block.data.caption"
        />
      </div>
      <div v-if="block.type === 'rawTool'">
        <RawBlock :html="block.data.html" />
      </div>
      <div v-if="block.type === 'code'">
        <CodeBlock :code="block.data.code" />
      </div>
      <div v-if="block.type === 'quote'">
        <QuoteBlock :text="block.data.text" :caption="block.data.caption" />
      </div>
      <div v-if="block.type === 'table'">
        <TableBlock :tableData="block.data.content" />
      </div>
      <div v-if="block.type === 'linkTool'">
        <LinkBlock
          :link="block.data.link"
          :title="block.data.meta.title"
          :description="block.data.meta.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "./BlockElements/HeaderBlock";
import ParagraphBlock from "./BlockElements/ParagraphBlock";
import ListBlock from "./BlockElements/ListBlock";
import ImageBlock from "./BlockElements/ImageBlock";
import RawBlock from "./BlockElements/RawBlock";
import CodeBlock from "./BlockElements/CodeBlock";
import QuoteBlock from "./BlockElements/QuoteBlock";
import TableBlock from "./BlockElements/TableBlock";
import LinkBlock from "./BlockElements/LinkBlock";

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
    ImageBlock,
    RawBlock,
    CodeBlock,
    QuoteBlock,
    TableBlock,
    LinkBlock
  }
};
</script>