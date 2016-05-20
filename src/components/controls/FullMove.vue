<template>
  <div class="full-move">
    <half-move :move="half" v-for="half in move"></half-move>
  </div>
</template>

<script>
import HalfMove from './HalfMove';
export default {
  components: {
    HalfMove,
  },
  props: {
    move: Array,
  },
};
</script>
