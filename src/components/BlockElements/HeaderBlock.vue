<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  render: function(createElement) {
    return createElement(
      "h" + this.level, // tag name
      this.content
    );
  }
};
</script>
