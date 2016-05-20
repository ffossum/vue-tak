<template>
  <div class="moves">
    <full-move :move="move" v-for="move in moves"></full-move>
  </div>
</template>

<script>
import FullMove from './FullMove';
export default {
  components: {
    FullMove,
  },
  props: {
    moves: Object,
  },
};
</script>
