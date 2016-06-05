<template>
  <div class="box moves">
    <div class="buttons">
      <button class="button is-light" @click="goToBeginning">
        <i class="fa fa-fast-backward" aria-hidden="true"></i>
      </button>
      <button class="button is-light" @click="previousMove">
        <i class="fa fa-step-backward" aria-hidden="true"></i>
      </button>
      <button class="button is-light" @click="nextMove">
        <i class="fa fa-step-forward" aria-hidden="true"></i>
      </button>
      <button class="button is-light" @click="goToEnd">
        <i class="fa fa-fast-forward" aria-hidden="true"></i>
      </button>
    </div>
    <div class="move-list">
      <full-move :move="move" :number="$key" v-for="move in fullMoves"></full-move>
    </div>
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

.move-list {
  width: 100%;
  border: 1px solid #ccc;
  height: 20rem;
  overflow-y: scroll;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.buttons button {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
</style>
