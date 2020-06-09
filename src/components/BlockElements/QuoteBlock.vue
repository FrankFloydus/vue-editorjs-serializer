<template>
  <blockquote>
    <p>{{ text }}</p>
    <small>{{ caption }}</small>
  </blockquote>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    },
    cite: {
      type: String,
      required: false
    }
  }
};
</script>