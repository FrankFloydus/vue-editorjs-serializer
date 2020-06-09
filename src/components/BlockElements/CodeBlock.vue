<template>
  <pre>
        {{ code }}
    </pre>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true
    }
  }
};
</script>