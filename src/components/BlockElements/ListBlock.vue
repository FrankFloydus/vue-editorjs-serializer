<template>
  <div>
    <ul v-if="listType === 'unordered'">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <ol v-if="listType === 'ordered'">
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    listType: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
