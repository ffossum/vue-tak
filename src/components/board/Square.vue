<template>
  <div v-for="stone in square" track-by="$index">
    <stone :stone="stone"></stone>
  </div>
</template>

<script>
import Stone from './Stone';
export default {
  components: {
    Stone,
  },
  props: {
    square: Array,
  },
};
</script>

<style scoped>
  .stone {
    border: 1px solid black;
    margin-top: -10px;
  }
</style>
