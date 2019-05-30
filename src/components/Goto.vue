<template>
  <div>
    <button @click="select">传值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // abc: 123
    };
  },
  methods: {
    select: function() {
      // this.$emit("change",this.abc)
    }
  }
};
</script>

<style>
</style>
