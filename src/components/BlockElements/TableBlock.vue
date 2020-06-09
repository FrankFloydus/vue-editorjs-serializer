<template>
  <table>
    <tr v-for="(row, index) in tableData" :key="index">
      <td v-for="(row, idx) in tableData" :key="idx">{{ tableData[index][idx] }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true
    }
  }
};
</script>