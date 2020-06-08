<template>
  <div>
    <h1 class="className" v-if="level === 1">{{ content }}</h1>
    <h2 class="className" v-if="level === 2">{{ content }}</h2>
    <h3 class="className" v-if="level === 3">{{ content }}</h3>
    <h4 class="className" v-if="level === 4">{{ content }}</h4>
    <h5 class="className" v-if="level === 5">{{ content }}</h5>
    <h6 class="className" v-if="level === 6">{{ content }}</h6>
  </div>
</template>

<script>
// TODO: Find a way to pass attributes properties (eg. class)
export default {
  props: ["level", "content", "className"]
};
</script>


<style scoped>
h2 {
  font-size: 50px;
}
</style>
