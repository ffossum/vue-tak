<template>
  <div class="moves">
    <full-move :move="move" :number="$key" v-for="move in fullMoves"></full-move>
  </div>
</template>

<script>
import FullMove from './FullMove';
import { groupBy, map, forEach, assign } from 'lodash';

export default {
  components: {
    FullMove,
  },
  props: {
    moves: Object,
    comments: Object,
  },
  computed: {
    fullMoves() {
      const arr = map(this.moves, (move, key) => ({
        key,
        move,
        comment: this.comments[key],
      }));
      forEach(arr, (fullMove, index) => {
        assign(fullMove, { index });
      });

      return groupBy(arr, fullMove => fullMove.key.split(' ')[0]);
    },
  },
};
</script>
