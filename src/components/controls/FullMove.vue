<template>
  <div class="full-move">
    <div class="move-number">{{number}}</div>
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
    number: String,
  },
};
</script>

<style scoped>
.full-move {
  display: flex;
}

.move-number {
  width: 4rem;
  font-size: 0.8rem;
  text-align: center;
  vertical-align: middle;
  line-height: 1.25rem;
  color: #aaa;
}
</style>
