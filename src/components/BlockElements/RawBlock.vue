<template>
  <div v-html="html"></div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      required: true
    }
  }
};
</script>