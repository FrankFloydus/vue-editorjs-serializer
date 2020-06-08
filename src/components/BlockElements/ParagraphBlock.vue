<template>
  <p v-html="content"></p>
</template>

<script>
export default {
  props: ["content"]
};
</script>