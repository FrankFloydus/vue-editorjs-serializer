<template>
  <div>
    <figure>
      <img :src="url" :alt="altText" />
      <figcaption>{{ caption }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    }
  }
};
</script>