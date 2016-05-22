<template>
  <div class="moves">
    <div class="buttons">
      <button @click="goToBeginning"> |< </button>
      <button @click="previousMove"> < </button>
      <button @click="nextMove"> > </button>
      <button @click="goToEnd"> >| </button>
    </div>
    <full-move :move="move" :number="$key" v-for="move in fullMoves"></full-move>
  </div>
</template>

<script>
import FullMove from './FullMove';
import * as actions from '../../actions';
import { groupBy, map, forEach, assign } from 'lodash';

export default {
  components: {
    FullMove,
  },
  vuex: {
    actions,
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
        assign(fullMove, { moveNumber: index + 1 });
      });

      return groupBy(arr, fullMove => fullMove.key.split(' ')[0]);
    },
  },
};
</script>

<style scoped>
.moves {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.buttons button {
  width: 25%;
}
</style>
