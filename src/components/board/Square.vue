<template>
  <div class="square">
    <stone :stone="stone" v-for="stone in square" track-by="$index"></stone>
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
.square {
  height: 100px;
  width: 100px;

  display: flex;
  flex-direction: column-reverse;
  padding: 0 1rem 0.5rem 1rem;
}
</style>
