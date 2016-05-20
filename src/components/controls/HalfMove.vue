<template>
  <div class="half-move">
    {{text}}
  </div>
</template>

<script>
import { isObject } from 'lodash';
export default {
  props: {
    move: [Object, String],
  },
  computed: {
    text() {
      return isObject(this.move) ? this.move.move : this.move;
    },
  },
};
</script>

<style scoped>
.half-move {
  width: 8rem;
  display: flex;
}
</style>
