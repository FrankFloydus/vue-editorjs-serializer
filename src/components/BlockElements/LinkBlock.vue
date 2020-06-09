<template>
  <a :href="link" :title="description">{{ title }}</a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>